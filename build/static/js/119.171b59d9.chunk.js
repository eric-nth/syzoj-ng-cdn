(self["webpackJsonpsyzoj-ng-app"]=self["webpackJsonpsyzoj-ng-app"]||[]).push([[119],{1075:function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Tokenizer",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"TextHighlightRules",{enumerable:!0,get:function(){return a.TextHighlightRules}}),Object.defineProperty(t,"DocCommentHighlightRules",{enumerable:!0,get:function(){return s.DocCommentHighlightRules}}),Object.defineProperty(t,"AVAILABLE_LANGUAGES",{enumerable:!0,get:function(){return l.AVAILABLE_LANGUAGES}}),Object.defineProperty(t,"registerRulesForLanguage",{enumerable:!0,get:function(){return l.registerRulesForLanguage}}),t.oop=void 0;var r,i=(r=n(1076))&&r.__esModule?r:{default:r},a=n(1077),s=n(1641),l=n(1642),u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=r?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(1078));function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}t.oop=u},1076:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=2e3,r=function(e){for(var t in this.states=e,this.regExps={},this.matchMappings={},this.states){for(var n=this.states[t],o=[],r=0,i=this.matchMappings[t]={defaultToken:"text"},a="g",s=[],l=0;l<n.length;l++){var u=n[l];if(u.defaultToken&&(i.defaultToken=u.defaultToken),u.caseInsensitive&&(a="gi"),null!=u.regex){u.regex instanceof RegExp&&(u.regex=u.regex.toString().slice(1,-1));var p=u.regex,c=new RegExp("(?:("+p+")|(.))").exec("a").length-2;Array.isArray(u.token)?1==u.token.length||1==c?u.token=u.token[0]:c-1!=u.token.length?(this.reportError("number of classes and regexp groups doesn't match",{rule:u,groupCount:c-1}),u.token=u.token[0]):(u.tokenArray=u.token,u.token=null,u.onMatch=this.$arrayTokens):"function"!=typeof u.token||u.onMatch||(u.onMatch=c>1?this.$applyToken:u.token),c>1&&(/\\\d/.test(u.regex)?p=u.regex.replace(/\\([0-9]+)/g,(function(e,t){return"\\"+(parseInt(t,10)+r+1)})):(c=1,p=this.removeCapturingGroups(u.regex)),u.splitRegex||"string"==typeof u.token||s.push(u)),i[r]=l,r+=c,o.push(p),u.onMatch||(u.onMatch=null)}}o.length||(i[0]=0,o.push("$")),s.forEach((function(e){e.splitRegex=this.createSplitterRegexp(e.regex,a)}),this),this.regExps[t]=new RegExp("("+o.join(")|(")+")|($)",a)}};(function(){this.$setMaxTokenCount=function(e){o=0|e},this.$applyToken=function(e){var t=this.splitRegex.exec(e).slice(1),n=this.token.apply(this,t);if("string"===typeof n)return[{type:n,value:e}];for(var o=[],r=0,i=n.length;r<i;r++)t[r]&&(o[o.length]={type:n[r],value:t[r]});return o},this.$arrayTokens=function(e){if(!e)return[];var t=this.splitRegex.exec(e);if(!t)return"text";for(var n=[],o=this.tokenArray,r=0,i=o.length;r<i;r++)t[r+1]&&(n[n.length]={type:o[r],value:t[r+1]});return n},this.removeCapturingGroups=function(e){return e.replace(/\\.|\[(?:\\.|[^\\\]])*|\(\?[:=!]|(\()/g,(function(e,t){return t?"(?:":e}))},this.createSplitterRegexp=function(e,t){if(-1!=e.indexOf("(?=")){var n=0,o=!1,r={};e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g,(function(e,t,i,a,s,l){return o?o="]"!=s:s?o=!0:a?(n==r.stack&&(r.end=l+1,r.stack=-1),n--):i&&(n++,1!=i.length&&(r.stack=n,r.start=l)),e})),null!=r.end&&/^\)*$/.test(e.substr(r.end))&&(e=e.substring(0,r.start)+e.substr(r.end))}return"^"!=e.charAt(0)&&(e="^"+e),"$"!=e.charAt(e.length-1)&&(e+="$"),new RegExp(e,(t||"").replace("g",""))},this.getLineTokens=function(e,t){if(t&&"string"!=typeof t){var n=t.slice(0);"#tmp"===(t=n[0])&&(n.shift(),t=n.shift())}else n=[];var r=t||"start",i=this.states[r];i||(r="start",i=this.states[r]);var a=this.matchMappings[r],s=this.regExps[r];s.lastIndex=0;for(var l,u=[],p=0,c=0,h={type:null,value:""};l=s.exec(e);){var d=a.defaultToken,f=null,g=l[0],k=s.lastIndex;if(k-g.length>p){var m=e.substring(p,k-g.length);h.type==d?h.value+=m:(h.type&&u.push(h),h={type:d,value:m})}for(var y=0;y<l.length-2;y++)if(void 0!==l[y+1]){d=(f=i[a[y]]).onMatch?f.onMatch(g,r,n,e):f.token,f.next&&(r="string"==typeof f.next?f.next:f.next(r,n),(i=this.states[r])||(this.reportError("state doesn't exist",r),r="start",i=this.states[r]),a=this.matchMappings[r],p=k,(s=this.regExps[r]).lastIndex=k),f.consumeLineEnd&&(p=k);break}if(g)if("string"===typeof d)f&&!1===f.merge||h.type!==d?(h.type&&u.push(h),h={type:d,value:g}):h.value+=g;else if(d){h.type&&u.push(h),h={type:null,value:""};for(y=0;y<d.length;y++)u.push(d[y])}if(p==e.length)break;if(p=k,c++>o){for(c>2*e.length&&this.reportError("infinite loop with in ace tokenizer",{startState:t,line:e});p<e.length;)h.type&&u.push(h),h={value:e.substring(p,p+=2e3),type:"overflow"};r="start",n=[];break}}return h.type&&u.push(h),n.length>1&&n[0]!==r&&n.unshift("#tmp",r),{tokens:u,state:n.length?n:r}},this.reportError=function(){console.log(arguments)}}).call(r.prototype);var i=r;t.default=i},1077:function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){if("object"!==o(e)||!e)return e;var t;if(Array.isArray(e)){t=[];for(var n=0;n<e.length;n++)t[n]=r(e[n]);return t}if("[object Object]"!==Object.prototype.toString.call(e))return e;for(var n in t={},e)t[n]=r(e[n]);return t}Object.defineProperty(t,"__esModule",{value:!0}),t.TextHighlightRules=void 0;var i=function(){this.$rules={start:[{token:"empty_line",regex:"^$"},{defaultToken:"text"}]}};t.TextHighlightRules=i,function(){this.addRules=function(e,t){if(t)for(var n in e){for(var o=e[n],r=0;r<o.length;r++){var i=o[r];(i.next||i.onMatch)&&("string"==typeof i.next&&0!==i.next.indexOf(t)&&(i.next=t+i.next),i.nextState&&0!==i.nextState.indexOf(t)&&(i.nextState=t+i.nextState))}this.$rules[t+n]=o}else for(var n in e)this.$rules[n]=e[n]},this.getRules=function(){return this.$rules},this.embedRules=function(e,t,n,o,i){var a="function"==typeof e?(new e).getRules():e;if(o)for(var s=0;s<o.length;s++)o[s]=t+o[s];else for(var l in o=[],a)o.push(t+l);if(this.addRules(a,t),n){var u=Array.prototype[i?"push":"unshift"];for(s=0;s<o.length;s++)u.apply(this.$rules[o[s]],r(n))}this.$embeds||(this.$embeds=[]),this.$embeds.push(t)},this.getEmbeds=function(){return this.$embeds};var e=function(e,t){return("start"!=e||t.length)&&t.unshift(this.nextState,e),this.nextState},t=function(e,t){return t.shift(),t.shift()||"start"};this.normalizeRules=function(){var n=0,o=this.$rules;Object.keys(o).forEach((function r(i){var a=o[i];a.processed=!0;for(var s=0;s<a.length;s++){var l=a[s],u=null;Array.isArray(l)&&(u=l,l={}),!l.regex&&l.start&&(l.regex=l.start,l.next||(l.next=[]),l.next.push({defaultToken:l.token},{token:l.token+".end",regex:l.end||l.start,next:"pop"}),l.token=l.token+".start",l.push=!0);var p=l.next||l.push;if(p&&Array.isArray(p)){var c=l.stateName;c||("string"!=typeof(c=l.token)&&(c=c[0]||""),o[c]&&(c+=n++)),o[c]=p,l.next=c,r(c)}else"pop"==p&&(l.next=t);if(l.push&&(l.nextState=l.next||l.push,l.next=e,delete l.push),l.rules)for(var h in l.rules)o[h]?o[h].push&&o[h].push.apply(o[h],l.rules[h]):o[h]=l.rules[h];var d="string"==typeof l?l:l.include;if(d&&(u=Array.isArray(d)?d.map((function(e){return o[e]})):o[d]),u){var f=[s,1].concat(u);l.noEscape&&(f=f.filter((function(e){return!e.next}))),a.splice.apply(a,f),s--}l.keywordMap&&(l.token=this.createKeywordMapper(l.keywordMap,l.defaultToken||"text",l.caseInsensitive),delete l.defaultToken)}}),this)},this.createKeywordMapper=function(e,t,n,o){var r=Object.create(null);return Object.keys(e).forEach((function(t){var i=e[t];n&&(i=i.toLowerCase());for(var a=i.split(o||"|"),s=a.length;s--;)r[a[s]]=t})),Object.getPrototypeOf(r)&&(r.__proto__=null),this.$keywordList=Object.keys(r),e=null,n?function(e){return r[e.toLowerCase()]||t}:function(e){return r[e]||t}},this.getKeywords=function(){return this.$keywords}}.call(i.prototype)},1078:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.inherits=void 0;t.inherits=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}},1641:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DocCommentHighlightRules=void 0;var o=n(1078),r=n(1077).TextHighlightRules,i=function e(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},e.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};t.DocCommentHighlightRules=i,o.inherits(i,r),i.getTagRule=function(e){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},i.getStartRule=function(e){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:e}},i.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}}},1642:function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.registerRulesForLanguage=function(e,t){var n=new a.default(t.getRules());return i.languages.setTokensProvider(e,{getInitialState:function(){return new u("")},tokenize:function(e,t){var o=n.getLineTokens(e,t.state),r=o.tokens,i=o.state,a=0,s=r.map((function(e){var t={startIndex:a,scopes:e.type};return a+=e.value.length,t}));return{endState:new u(i),tokens:s}}})},t.AVAILABLE_LANGUAGES=t.State=void 0;var r,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=r?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(901)),a=(r=n(1076))&&r.__esModule?r:{default:r};function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.state=t}var t,n,o;return t=e,(n=[{key:"equals",value:function(e){return e===this||e.state===this.state}},{key:"clone",value:function(){return new e(this.state)}}])&&l(t.prototype,n),o&&l(t,o),e}();t.State=u;t.AVAILABLE_LANGUAGES=["ada","cobol","d","dart","elixir","erlang","fortran","groovy","haskell","julia","ocaml","racket","sbcl","scala"]},1643:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(1075),r=o.oop,i=o.TextHighlightRules,a=function(){this.$rules={start:[{token:["punctuation.definition.entity.haskell","keyword.operator.function.infix.haskell","punctuation.definition.entity.haskell"],regex:/(`)([a-zA-Z_']*?)(`)/,comment:"In case this regex seems unusual for an infix operator, note that Haskell allows any ordinary function application (elem 4 [1..10]) to be rewritten as an infix expression (4 `elem` [1..10])."},{token:"constant.language.unit.haskell",regex:/\(\)/},{token:"constant.language.empty-list.haskell",regex:/\[\]/},{token:"keyword.other.haskell",regex:/module/,push:[{token:"keyword.other.haskell",regex:/where/,next:"pop"},{include:"#module_name"},{include:"#module_exports"},{token:"invalid",regex:/[a-z]+/},{defaultToken:"meta.declaration.module.haskell"}]},{token:"keyword.other.haskell",regex:/\bclass\b/,push:[{token:"keyword.other.haskell",regex:/\bwhere\b/,next:"pop"},{token:"support.class.prelude.haskell",regex:/\b(?:Monad|Functor|Eq|Ord|Read|Show|Num|(?:Frac|Ra)tional|Enum|Bounded|Real(?:Frac|Float)?|Integral|Floating)\b/},{token:"entity.other.inherited-class.haskell",regex:/[A-Z][A-Za-z_']*/},{token:"variable.other.generic-type.haskell",regex:/\b[a-z][a-zA-Z0-9_']*\b/},{defaultToken:"meta.declaration.class.haskell"}]},{token:"keyword.other.haskell",regex:/\binstance\b/,push:[{token:"keyword.other.haskell",regex:/\bwhere\b|$/,next:"pop"},{include:"#type_signature"},{defaultToken:"meta.declaration.instance.haskell"}]},{token:"keyword.other.haskell",regex:/import/,push:[{token:"meta.import.haskell",regex:/$|;/,next:"pop"},{token:"keyword.other.haskell",regex:/qualified|as|hiding/},{include:"#module_name"},{include:"#module_exports"},{defaultToken:"meta.import.haskell"}]},{token:["keyword.other.haskell","meta.deriving.haskell"],regex:/(deriving)(\s*\()/,push:[{token:"meta.deriving.haskell",regex:/\)/,next:"pop"},{token:"entity.other.inherited-class.haskell",regex:/\b[A-Z][a-zA-Z_']*/},{defaultToken:"meta.deriving.haskell"}]},{token:"keyword.other.haskell",regex:/\b(?:deriving|where|data|type|case|of|let|in|newtype|default)\b/},{token:"keyword.operator.haskell",regex:/\binfix[lr]?\b/},{token:"keyword.control.haskell",regex:/\b(?:do|if|then|else)\b/},{token:"constant.numeric.float.haskell",regex:/\b(?:[0-9]+\.[0-9]+(?:[eE][+-]?[0-9]+)?|[0-9]+[eE][+-]?[0-9]+)\b/,comment:"Floats are always decimal"},{token:"constant.numeric.haskell",regex:/\b(?:[0-9]+|0(?:[xX][0-9a-fA-F]+|[oO][0-7]+))\b/},{token:["meta.preprocessor.c","punctuation.definition.preprocessor.c","meta.preprocessor.c"],regex:/^(\s*)(#)(\s*\w+)/,comment:'In addition to Haskell\'s "native" syntax, GHC permits the C preprocessor to be run on a source file.'},{include:"#pragma"},{token:"punctuation.definition.string.begin.haskell",regex:/"/,push:[{token:"punctuation.definition.string.end.haskell",regex:/"/,next:"pop"},{token:"constant.character.escape.haskell",regex:/\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\"'\&])/},{token:"constant.character.escape.octal.haskell",regex:/\\o[0-7]+|\\x[0-9A-Fa-f]+|\\[0-9]+/},{token:"constant.character.escape.control.haskell",regex:/\^[A-Z@\[\]\\\^_]/},{defaultToken:"string.quoted.double.haskell"}]},{token:["punctuation.definition.string.begin.haskell","string.quoted.single.haskell","constant.character.escape.haskell","constant.character.escape.octal.haskell","constant.character.escape.hexadecimal.haskell","constant.character.escape.control.haskell","punctuation.definition.string.end.haskell"],regex:/(')(?:([\ -\[\]-~])|(\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\"'\&]))|(\\o[0-7]+)|(\\x[0-9A-Fa-f]+)|(\^[A-Z@\[\]\\\^_]))(')/},{token:["meta.function.type-declaration.haskell","entity.name.function.haskell","meta.function.type-declaration.haskell","keyword.other.double-colon.haskell"],regex:/^(\s*)([a-z_][a-zA-Z0-9_']*|\([|!%$+\-.,=<\/>]+\))(\s*)(::)/,push:[{token:"meta.function.type-declaration.haskell",regex:/$/,next:"pop"},{include:"#type_signature"},{defaultToken:"meta.function.type-declaration.haskell"}]},{token:"support.constant.haskell",regex:/\b(?:Just|Nothing|Left|Right|True|False|LT|EQ|GT|\(\)|\[\])\b/},{token:"constant.other.haskell",regex:/\b[A-Z]\w*\b/},{include:"#comments"},{token:"support.function.prelude.haskell",regex:/\b(?:abs|acos|acosh|all|and|any|appendFile|applyM|asTypeOf|asin|asinh|atan|atan2|atanh|break|catch|ceiling|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|div|divMod|drop|dropWhile|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromEnum|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|head|id|init|interact|ioError|isDenormalized|isIEEE|isInfinite|isNaN|isNegativeZero|iterate|last|lcm|length|lex|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|odd|or|otherwise|pi|pred|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|read|readFile|readIO|readList|readLn|readParen|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showList|showParen|showString|shows|showsPrec|significand|signum|sin|sinh|snd|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|toEnum|toInteger|toRational|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/},{include:"#infix_op"},{token:"keyword.operator.haskell",regex:/[|!%$?~+:\-.=<\/>\\]+/,comment:"In case this regex seems overly general, note that Haskell permits the definition of new operators which can be nearly any string of punctuation characters, such as $%^&*."},{token:"punctuation.separator.comma.haskell",regex:/,/}],"#block_comment":[{token:"punctuation.definition.comment.haskell",regex:/\{-(?!#)/,push:[{include:"#block_comment"},{token:"punctuation.definition.comment.haskell",regex:/-\}/,next:"pop"},{defaultToken:"comment.block.haskell"}]}],"#comments":[{token:["punctuation.definition.comment.haskell","comment.line.double-dash.haskell"],regex:/(--)(.*$)/},{include:"#block_comment"}],"#infix_op":[{token:"entity.name.function.infix.haskell",regex:/\([|!%$+:\-.=<\/>]+\)|\(,+\)/}],"#module_exports":[{token:"meta.declaration.exports.haskell",regex:/\(/,push:[{token:"meta.declaration.exports.haskell",regex:/\)/,next:"pop"},{token:"entity.name.function.haskell",regex:/\b[a-z][a-zA-Z_'0-9]*/},{token:"storage.type.haskell",regex:/\b[A-Z][A-Za-z_'0-9]*/},{token:"punctuation.separator.comma.haskell",regex:/,/},{include:"#infix_op"},{token:"meta.other.unknown.haskell",regex:/\(.*?\)/,comment:"So named because I don't know what to call this."},{defaultToken:"meta.declaration.exports.haskell"}]}],"#module_name":[{token:"support.other.module.haskell",regex:/[A-Z][A-Za-z._']*/}],"#pragma":[{token:"meta.preprocessor.haskell",regex:/\{-#/,push:[{token:"meta.preprocessor.haskell",regex:/#-\}/,next:"pop"},{token:"keyword.other.preprocessor.haskell",regex:/\b(?:LANGUAGE|UNPACK|INLINE)\b/},{defaultToken:"meta.preprocessor.haskell"}]}],"#type_signature":[{token:["meta.class-constraint.haskell","entity.other.inherited-class.haskell","meta.class-constraint.haskell","variable.other.generic-type.haskell","meta.class-constraint.haskell","keyword.other.big-arrow.haskell"],regex:/(\(\s*)([A-Z][A-Za-z]*)(\s+)([a-z][A-Za-z_']*)(\)\s*)(=>)/},{include:"#pragma"},{token:"keyword.other.arrow.haskell",regex:/->/},{token:"keyword.other.big-arrow.haskell",regex:/=>/},{token:"support.type.prelude.haskell",regex:/\b(?:Int(?:eger)?|Maybe|Either|Bool|Float|Double|Char|String|Ordering|ShowS|ReadS|FilePath|IO(?:Error)?)\b/},{token:"variable.other.generic-type.haskell",regex:/\b[a-z][a-zA-Z0-9_']*\b/},{token:"storage.type.haskell",regex:/\b[A-Z][a-zA-Z0-9_']*\b/},{token:"support.constant.unit.haskell",regex:/\(\)/},{include:"#comments"}]},this.normalizeRules()};a.metaData={fileTypes:["hs"],keyEquivalent:"^~H",name:"Haskell",scopeName:"source.haskell"},r.inherits(a,i);var s=a;t.default=s},1694:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(661),r=n(7),i=n(0);function a(e){return/^\d+$/.test(e)?e+"px":e}function s(){}var l=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),u=function(){return(u=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},p=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},c=function(e){function t(t){var n=e.call(this,t)||this;return n.assignRef=function(e){n.containerElement=e},n.containerElement=void 0,n}return l(t,e),t.prototype.componentDidMount=function(){this.initMonaco()},t.prototype.componentDidUpdate=function(e){var t=this.props,n=t.value,r=t.language,i=t.theme,a=t.height,s=t.options,l=t.width,u=this.editor,c=u.getModel();if(null!=this.props.value&&this.props.value!==c.getValue()&&(this.__prevent_trigger_change_event=!0,this.editor.pushUndoStop(),c.pushEditOperations([],[{range:c.getFullModelRange(),text:n}]),this.editor.pushUndoStop(),this.__prevent_trigger_change_event=!1),e.language!==r&&o.editor.setModelLanguage(c,r),e.theme!==i&&o.editor.setTheme(i),!u||l===e.width&&a===e.height||u.layout(),e.options!==s){s.model;var h=p(s,["model"]);u.updateOptions(h)}},t.prototype.componentWillUnmount=function(){this.destroyMonaco()},t.prototype.destroyMonaco=function(){if(this.editor){this.editor.dispose();var e=this.editor.getModel();e&&e.dispose()}this._subscription&&this._subscription.dispose()},t.prototype.initMonaco=function(){var e=null!=this.props.value?this.props.value:this.props.defaultValue,t=this.props,n=t.language,r=t.theme,i=t.overrideServices;if(this.containerElement){var a=u(u({},this.props.options),this.editorWillMount());this.editor=o.editor.create(this.containerElement,u(u({value:e,language:n},a),r?{theme:r}:{}),i),this.editorDidMount(this.editor)}},t.prototype.editorWillMount=function(){return(0,this.props.editorWillMount)(o)||{}},t.prototype.editorDidMount=function(e){var t=this;this.props.editorDidMount(e,o),this._subscription=e.onDidChangeModelContent((function(n){t.__prevent_trigger_change_event||t.props.onChange(e.getValue(),n)}))},t.prototype.render=function(){var e=this.props,t=e.width,n=e.height,o={width:a(t),height:a(n)};return i.createElement("div",{ref:this.assignRef,style:o,className:"react-monaco-editor-container"})},t.propTypes={width:r.oneOfType([r.string,r.number]),height:r.oneOfType([r.string,r.number]),value:r.string,defaultValue:r.string,language:r.string,theme:r.string,options:r.object,overrideServices:r.object,editorDidMount:r.func,editorWillMount:r.func,onChange:r.func},t.defaultProps={width:"100%",height:"100%",value:null,defaultValue:"",language:"javascript",theme:null,options:{},overrideServices:{},editorDidMount:s,editorWillMount:s,onChange:s},t}(i.Component),h=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),d=function(){return(d=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};!function(e){function t(t){var n=e.call(this,t)||this;return n.assignRef=function(e){n.containerElement=e},n.containerElement=void 0,n}h(t,e),t.prototype.componentDidMount=function(){this.initMonaco()},t.prototype.componentDidUpdate=function(e){var t=this.props,n=t.language,r=t.theme,i=t.height,a=t.options,s=t.width,l=this.editor.getModel(),u=l.original,p=l.modified;this.props.original!==u.getValue()&&u.setValue(this.props.original),null!=this.props.value&&this.props.value!==p.getValue()&&(this.__prevent_trigger_change_event=!0,this.editor.modifiedEditor.pushUndoStop(),p.pushEditOperations([],[{range:p.getFullModelRange(),text:this.props.value}]),this.editor.modifiedEditor.pushUndoStop(),this.__prevent_trigger_change_event=!1),e.language!==n&&(o.editor.setModelLanguage(u,n),o.editor.setModelLanguage(p,n)),e.theme!==r&&o.editor.setTheme(r),!this.editor||s===e.width&&i===e.height||this.editor.layout(),e.options!==a&&this.editor.updateOptions(a)},t.prototype.componentWillUnmount=function(){this.destroyMonaco()},t.prototype.editorWillMount=function(){return(0,this.props.editorWillMount)(o)||{}},t.prototype.editorDidMount=function(e){var t=this;this.props.editorDidMount(e,o);var n=e.getModel().modified;this._subscription=n.onDidChangeContent((function(e){t.__prevent_trigger_change_event||t.props.onChange(n.getValue(),e)}))},t.prototype.initModels=function(e,t){var n=this.props.language,r=o.editor.createModel(t,n),i=o.editor.createModel(e,n);this.editor.setModel({original:r,modified:i})},t.prototype.initMonaco=function(){var e=null!=this.props.value?this.props.value:this.props.defaultValue,t=this.props,n=t.original,r=t.theme,i=t.options,a=t.overrideServices;this.containerElement&&(this.editorWillMount(),this.editor=o.editor.createDiffEditor(this.containerElement,d(d({},i),r?{theme:r}:{}),a),this.initModels(e,n),this.editorDidMount(this.editor))},t.prototype.destroyMonaco=function(){if(this.editor){this.editor.dispose();var e=this.editor.getModel(),t=e.original,n=e.modified;t&&t.dispose(),n&&n.dispose()}this._subscription&&this._subscription.dispose()},t.prototype.render=function(){var e=this.props,t=e.width,n=e.height,o={width:a(t),height:a(n)};return i.createElement("div",{ref:this.assignRef,style:o,className:"react-monaco-editor-container"})},t.propTypes={width:r.oneOfType([r.string,r.number]),height:r.oneOfType([r.string,r.number]),original:r.string,value:r.string,defaultValue:r.string,language:r.string,theme:r.string,options:r.object,overrideServices:r.object,editorDidMount:r.func,editorWillMount:r.func,onChange:r.func},t.defaultProps={width:"100%",height:"100%",original:null,value:null,defaultValue:"",language:"javascript",theme:null,options:{},overrideServices:{},editorDidMount:s,editorWillMount:s,onChange:s}}(i.Component)}}]);
//# sourceMappingURL=119.171b59d9.chunk.js.map