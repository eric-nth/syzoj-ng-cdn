(self["webpackJsonpsyzoj-ng-app"]=self["webpackJsonpsyzoj-ng-app"]||[]).push([[124],{1565:function(e,o,r){"use strict";r.r(o);var n=r(29),t=r(1),f=r(0),d=r(55),a=r(1694),u=r(901),g=r(1075),c=r(213),i=r.n(c),k=r(990),s=r.n(k),l=r(9),m=r(112),p=r(74);u.languages.register({id:"haskell"}),Object(g.registerRulesForLanguage)("haskell",new(r(1643).default)),u.editor.defineTheme("tomorrow",r(1644)),u.editor.defineTheme("tomorrow-night",r(1645));var h=function(e){var o=Object(f.useRef)();var r=Object(f.useRef)(),d=Object(f.useRef)();return Object(t.jsx)("div",{ref:function(e){r.current!==e&&(d.current&&d.current.detach(),d.current=e?new i.a(e,(function(){o.current&&o.current.layout()})):null,r.current=e)},className:e.className?"".concat(s.a.editorContainer," ").concat(e.className):s.a.editorContainer,children:Object(t.jsx)(a.a,{theme:p.d[l.a.theme].editor,language:e.language,value:e.value,options:Object(n.a)(Object(n.a)({lineNumbersMinChars:4},Object(m.c)(l.a.locale)),e.options),editorDidMount:function(r){r.getModel().setEOL(u.editor.EndOfLineSequence.LF),o.current=r,console.log("Monaco Editor:",r),e.editorDidMount&&e.editorDidMount(r)},onChange:e.onChange})})};h=Object(d.a)(h),o.default=h},1644:function(e){e.exports=JSON.parse('{"base":"vs","inherit":true,"rules":[{"background":"FFFFFF","foreground":"4d4d4c","token":""},{"foreground":"4d4d4c","token":"delimiter"},{"foreground":"8e908c","token":"comment"},{"foreground":"666969","token":"keyword.operator.class"},{"foreground":"666969","token":"constant.other"},{"foreground":"666969","token":"source.php.embedded.line"},{"foreground":"c82829","token":"variable"},{"foreground":"c82829","token":"support.other.variable"},{"foreground":"c82829","token":"string.other.link"},{"foreground":"c82829","token":"string.regexp"},{"foreground":"c82829","token":"entity.name.tag"},{"foreground":"c82829","token":"entity.other.attribute-name"},{"foreground":"c82829","token":"meta.tag"},{"foreground":"c82829","token":"declaration.tag"},{"foreground":"c82829","token":"markup.deleted.git_gutter"},{"foreground":"f5871f","token":"constant.numeric"},{"foreground":"f5871f","token":"constant.language"},{"foreground":"f5871f","token":"support.constant"},{"foreground":"f5871f","token":"constant.character"},{"foreground":"f5871f","token":"variable.parameter"},{"foreground":"f5871f","token":"punctuation.section.embedded"},{"foreground":"f5871f","token":"keyword.other.unit"},{"foreground":"c99e00","token":"entity.name.class"},{"foreground":"c99e00","token":"entity.name.type.class"},{"foreground":"c99e00","token":"support.type"},{"foreground":"c99e00","token":"support.class"},{"foreground":"f5871f","token":"number"},{"foreground":"f5871f","token":"type"},{"foreground":"718c00","token":"string"},{"foreground":"718c00","token":"constant.other.symbol"},{"foreground":"718c00","token":"entity.other.inherited-class"},{"foreground":"718c00","token":"markup.heading"},{"foreground":"718c00","token":"markup.inserted.git_gutter"},{"foreground":"3e999f","token":"keyword.operator"},{"foreground":"3e999f","token":"constant.other.color"},{"foreground":"4271ae","token":"entity.name.function"},{"foreground":"4271ae","token":"meta.function-call"},{"foreground":"4271ae","token":"support.function"},{"foreground":"4271ae","token":"keyword.other.special-method"},{"foreground":"4271ae","token":"meta.block-level"},{"foreground":"4271ae","token":"markup.changed.git_gutter"},{"foreground":"8959a8","token":"keyword"},{"foreground":"8959a8","token":"storage"},{"foreground":"8959a8","token":"storage.type"},{"foreground":"ffffff","background":"c82829","token":"invalid"},{"foreground":"ffffff","background":"4271ae","token":"meta.separator"},{"foreground":"ffffff","background":"8959a8","token":"invalid.deprecated"},{"foreground":"ffffff","token":"markup.inserted.diff"},{"foreground":"ffffff","token":"markup.deleted.diff"},{"foreground":"ffffff","token":"meta.diff.header.to-file"},{"foreground":"ffffff","token":"meta.diff.header.from-file"},{"background":"718c00","token":"markup.inserted.diff"},{"background":"718c00","token":"meta.diff.header.to-file"},{"background":"c82829","token":"markup.deleted.diff"},{"background":"c82829","token":"meta.diff.header.from-file"},{"foreground":"ffffff","background":"4271ae","token":"meta.diff.header.from-file"},{"foreground":"ffffff","background":"4271ae","token":"meta.diff.header.to-file"},{"foreground":"3e999f","fontStyle":"italic","token":"meta.diff.range"}],"colors":{"editorLineNumber.foreground":"#3e999f","editor.foreground":"#4D4D4C","editor.background":"#FFFFFF","editor.selectionBackground":"#D6D6D6","editor.lineHighlightBackground":"#EFEFEF","editorCursor.foreground":"#AEAFAD","editorWhitespace.foreground":"#D1D1D1"}}')},1645:function(e){e.exports=JSON.parse('{"base":"vs-dark","inherit":true,"rules":[{"background":"222222","foreground":"DEDEDE","token":""},{"foreground":"DEDEDE","token":"delimiter"},{"foreground":"969896","token":"comment"},{"foreground":"eeeeee","token":"keyword.operator.class"},{"foreground":"eeeeee","token":"constant.other"},{"foreground":"eeeeee","token":"source.php.embedded.line"},{"foreground":"d54e53","token":"variable"},{"foreground":"d54e53","token":"support.other.variable"},{"foreground":"d54e53","token":"string.other.link"},{"foreground":"d54e53","token":"string.regexp"},{"foreground":"d54e53","token":"entity.name.tag"},{"foreground":"d54e53","token":"entity.other.attribute-name"},{"foreground":"d54e53","token":"meta.tag"},{"foreground":"d54e53","token":"declaration.tag"},{"foreground":"d54e53","token":"markup.deleted.git_gutter"},{"foreground":"e78c45","token":"constant.numeric"},{"foreground":"e78c45","token":"constant.language"},{"foreground":"e78c45","token":"support.constant"},{"foreground":"e78c45","token":"constant.character"},{"foreground":"e78c45","token":"variable.parameter"},{"foreground":"e78c45","token":"punctuation.section.embedded"},{"foreground":"e78c45","token":"keyword.other.unit"},{"foreground":"e7c547","token":"entity.name.class"},{"foreground":"e7c547","token":"entity.name.type.class"},{"foreground":"e7c547","token":"support.type"},{"foreground":"e7c547","token":"support.class"},{"foreground":"f08d49","token":"number"},{"foreground":"f8c555","token":"type"},{"foreground":"7ec699","token":"string"},{"foreground":"7ec699","token":"constant.other.symbol"},{"foreground":"7ec699","token":"entity.other.inherited-class"},{"foreground":"7ec699","token":"markup.heading"},{"foreground":"7ec699","token":"markup.inserted.git_gutter"},{"foreground":"70c0b1","token":"keyword.operator"},{"foreground":"70c0b1","token":"constant.other.color"},{"foreground":"7aa6da","token":"entity.name.function"},{"foreground":"7aa6da","token":"meta.function-call"},{"foreground":"7aa6da","token":"support.function"},{"foreground":"7aa6da","token":"keyword.other.special-method"},{"foreground":"7aa6da","token":"meta.block-level"},{"foreground":"7aa6da","token":"markup.changed.git_gutter"},{"foreground":"cc99cd","token":"keyword"},{"foreground":"cc99cd","token":"storage"},{"foreground":"cc99cd","token":"storage.type"},{"foreground":"cc99cd","token":"entity.name.tag.css"},{"foreground":"ced2cf","background":"df5f5f","token":"invalid"},{"foreground":"ced2cf","background":"82a3bf","token":"meta.separator"},{"foreground":"ced2cf","background":"b798bf","token":"invalid.deprecated"},{"foreground":"ffffff","token":"markup.inserted.diff"},{"foreground":"ffffff","token":"markup.deleted.diff"},{"foreground":"ffffff","token":"meta.diff.header.to-file"},{"foreground":"ffffff","token":"meta.diff.header.from-file"},{"foreground":"718c00","token":"markup.inserted.diff"},{"foreground":"718c00","token":"meta.diff.header.to-file"},{"foreground":"c82829","token":"markup.deleted.diff"},{"foreground":"c82829","token":"meta.diff.header.from-file"},{"foreground":"ffffff","background":"4271ae","token":"meta.diff.header.from-file"},{"foreground":"ffffff","background":"4271ae","token":"meta.diff.header.to-file"},{"foreground":"3e999f","fontStyle":"italic","token":"meta.diff.range"}],"colors":{"editorLineNumber.foreground":"#67cdcc","editor.foreground":"#DEDEDE","editor.background":"#222222","editor.selectionBackground":"#424242","editor.lineHighlightBackground":"#2A2A2A","editorCursor.foreground":"#9F9F9F","editorWhitespace.foreground":"#343434"}}')}}]);
//# sourceMappingURL=124.6cfcb18f.chunk.js.map