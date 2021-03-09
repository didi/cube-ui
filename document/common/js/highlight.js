import hljs from 'highlight.js/lib/highlight'

import shell from 'highlight.js/lib/languages/shell'
import css from 'highlight.js/lib/languages/css'
import markdown from 'highlight.js/lib/languages/markdown'
import js from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import stylus from 'highlight.js/lib/languages/stylus'
import xml from 'highlight.js/lib/languages/xml'

hljs.registerLanguage('css', css)
hljs.registerLanguage('markdown', markdown)
hljs.registerLanguage('javascript', js)
hljs.registerLanguage('json', json)
hljs.registerLanguage('shell', shell)
hljs.registerLanguage('stylus', stylus)
hljs.registerLanguage('xml', xml)

export default hljs
