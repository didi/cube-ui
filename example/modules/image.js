// clone https://github.com/Tencent/weui.js/blob/master/src/uploader/image.js
// updated by cube-ui

/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * 检查图片是否有被压扁，如果有，返回比率
 * ref to http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
 */
function detectVerticalSquash(img) {
    // 拍照在IOS7或以下的机型会出现照片被压扁的bug
    var data;
    var ih = img.naturalHeight;
    var canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = ih;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    try {
        data = ctx.getImageData(0, 0, 1, ih).data;
    } catch (err) {
        console.log('Cannot check verticalSquash: CORS?');
        return 1;
    }
    var sy = 0;
    var ey = ih;
    var py = ih;
    while (py > sy) {
        var alpha = data[(py - 1) * 4 + 3];
        if (alpha === 0) {
            ey = py;
        } else {
            sy = py;
        }
        py = (ey + sy) >> 1; // py = parseInt((ey + sy) / 2)
    }
    var ratio = (py / ih);
    return (ratio === 0) ? 1 : ratio;
}

/**
 * dataURI to blob, ref to https://gist.github.com/fupslot/5015897
 * @param dataURI
 */
function dataURItoBuffer(dataURI){
    var byteString = atob(dataURI.split(',')[1]);
    var buffer = new ArrayBuffer(byteString.length);
    var view = new Uint8Array(buffer);
    for (var i = 0; i < byteString.length; i++) {
        view[i] = byteString.charCodeAt(i);
    }
    return buffer;
}
function dataURItoBlob(dataURI) {
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var buffer = dataURItoBuffer(dataURI);
    return new Blob([buffer], {type: mimeString});
}

/**
 * 获取图片的orientation
 * ref to http://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
 */
function getOrientation(buffer){
    var view = new DataView(buffer);
    if (view.getUint16(0, false) != 0xFFD8) return -2;
    var length = view.byteLength, offset = 2;
    while (offset < length) {
        var marker = view.getUint16(offset, false);
        offset += 2;
        if (marker == 0xFFE1) {
            if (view.getUint32(offset += 2, false) != 0x45786966) return -1;
            var little = view.getUint16(offset += 6, false) == 0x4949;
            offset += view.getUint32(offset + 4, little);
            var tags = view.getUint16(offset, little);
            offset += 2;
            for (var i = 0; i < tags; i++)
                if (view.getUint16(offset + (i * 12), little) == 0x0112)
                    return view.getUint16(offset + (i * 12) + 8, little);
        }
        else if ((marker & 0xFF00) != 0xFF00) break;
        else offset += view.getUint16(offset, false);
    }
    return -1;
}

/**
 * 修正拍照时图片的方向
 * ref to http://stackoverflow.com/questions/19463126/how-to-draw-photo-with-correct-orientation-in-canvas-after-capture-photo-by-usin
 */
function orientationHelper(canvas, ctx, orientation) {
    const w = canvas.width, h = canvas.height;
    if(orientation > 4){
        canvas.width = h;
        canvas.height = w;
    }
    switch (orientation) {
        case 2:
            ctx.translate(w, 0);
            ctx.scale(-1, 1);
            break;
        case 3:
            ctx.translate(w, h);
            ctx.rotate(Math.PI);
            break;
        case 4:
            ctx.translate(0, h);
            ctx.scale(1, -1);
            break;
        case 5:
            ctx.rotate(0.5 * Math.PI);
            ctx.scale(1, -1);
            break;
        case 6:
            ctx.rotate(0.5 * Math.PI);
            ctx.translate(0, -h);
            break;
        case 7:
            ctx.rotate(0.5 * Math.PI);
            ctx.translate(w, -h);
            ctx.scale(-1, 1);
            break;
        case 8:
            ctx.rotate(-0.5 * Math.PI);
            ctx.translate(-w, 0);
            break;
    }
}

/**
 * 压缩图片
 */
function compress(file, options, callback) {
    const reader = new FileReader();
    reader.onload = function (evt) {
        if(options.compress === false){
            // 不启用压缩 & base64上传 的分支，不做任何处理，直接返回文件的base64编码
            file.base64 = evt.target.result;
            callback(file);
            return;
        }

        // 启用压缩的分支
        const img = new Image();
        img.onload = function () {
            const ratio = detectVerticalSquash(img);
            const orientation = getOrientation(dataURItoBuffer(img.src));
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            const maxW = options.compress.width;
            const maxH = options.compress.height;
            let w = img.width;
            let h = img.height;
            let dataURL;

            if(w < h && h > maxH){
                w = parseInt(maxH * img.width / img.height);
                h = maxH;
            }else if(w >= h && w > maxW){
                h = parseInt(maxW * img.height / img.width);
                w = maxW;
            }

            canvas.width = w;
            canvas.height = h;

            if(orientation > 0){
                orientationHelper(canvas, ctx, orientation);
            }
            ctx.drawImage(img, 0, 0, w, h / ratio);

            if(/image\/jpeg/.test(file.type) || /image\/jpg/.test(file.type)){
                dataURL = canvas.toDataURL('image/jpeg', options.compress.quality);
            }else{
                dataURL =  canvas.toDataURL(file.type);
            }

            if(options.type == 'file'){
                if(/;base64,null/.test(dataURL) || /;base64,$/.test(dataURL)){
                    // 压缩出错，以文件方式上传的，采用原文件上传
                    console.warn('Compress fail, dataURL is ' + dataURL + '. Next will use origin file to upload.');
                    callback(file);
                }else{
                    let blob = dataURItoBlob(dataURL);
                    blob.id = file.id;
                    blob.name = file.name;
                    blob.lastModified = file.lastModified;
                    blob.lastModifiedDate = file.lastModifiedDate;
                    callback(blob);
                }
            }else{
                if(/;base64,null/.test(dataURL) || /;base64,$/.test(dataURL)){
                    // 压缩失败，以base64上传的，直接报错不上传
                    options.onError(file, new Error('Compress fail, dataURL is ' + dataURL + '.'));
                    callback();
                }else{
                    file.base64 = dataURL;
                    callback(file);
                }
            }
        };
        img.src = evt.target.result;
    };
    reader.readAsDataURL(file);
}

export default compress;
