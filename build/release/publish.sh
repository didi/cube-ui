#!/bin/bash

# git pull
git pull origin master
# npm install
npm install --registry=https://registry.npmjs.org
git checkout package-lock.json
# build
npm run build
# ADD commit
git add -A
git commit -m 'publish build'
git push origin master
# replace src/ __VERSION__
node ./build/release/replace-version.js
# publish
npm publish --registry=https://registry.npmjs.org
# checkout src/index.js
git checkout src/index.js
git checkout dev
git rebase master
git push origin dev
git checkout master
