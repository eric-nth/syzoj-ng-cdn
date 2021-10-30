(self["webpackJsonpsyzoj-ng-app"]=self["webpackJsonpsyzoj-ng-app"]||[]).push([[45],{1008:function(e,n,r){"use strict";r.d(n,"a",(function(){return l}));var t=r(10),a=r.n(t),c=r(19),i=r(29),o=r(15),s=r(214),u=r.n(s);function l(e,n,r,t,a,c){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(a.a.mark((function e(n,r,t,o,s,l){var p,d,f,b,j,m,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s&&s({status:"Requesting",progress:0}),e.next=3,n(Object(i.a)(Object(i.a)({},r),{},{uploadInfo:o?{size:o.size,uuid:null}:null}),t());case 3:if(!(p=e.sent).requestError){e.next=6;break}return e.abrupt("return",p);case 6:if(!p.response.signedUploadRequest){e.next=38;break}if(d=function(e){s&&setTimeout((function(){m||s({status:"Uploading",progress:e.loaded/e.total})}),0)},f=u.a.CancelToken.source(),b=!1,j=function(){b||(b=!0,f.cancel())},l&&l(j),m=!1,e.prev=13,"PUT"!==p.response.signedUploadRequest.method){e.next=19;break}return e.next=17,u.a.put(p.response.signedUploadRequest.url,o,{cancelToken:f.token,onUploadProgress:d});case 17:e.next=24;break;case 19:return h=new FormData,Object.entries(p.response.signedUploadRequest.extraFormData).forEach((function(e){var n=Object(c.a)(e,2),r=n[0],t=n[1];return h.append(r,t)})),h.append(p.response.signedUploadRequest.fileFieldName,o),e.next=24,u.a.post(p.response.signedUploadRequest.url,h,{cancelToken:f.token,onUploadProgress:d});case 24:e.next=32;break;case 26:if(e.prev=26,e.t0=e.catch(13),m=!0,!b){e.next=31;break}return e.abrupt("return",{uploadCancelled:!0});case 31:return e.abrupt("return",{uploadError:e.t0});case 32:return s&&s({status:"Requesting",progress:0}),e.next=35,n(Object(i.a)(Object(i.a)({},r),{},{uploadInfo:{size:o.size,uuid:p.response.signedUploadRequest.uuid}}),t());case 35:return e.abrupt("return",e.sent);case 38:return e.abrupt("return",p);case 39:case"end":return e.stop()}}),e,null,[[13,26]])})))).apply(this,arguments)}},1016:function(e,n,r){"use strict";function t(e,n){var r=document.createElement("input");r.accept=n,r.type="file",r.multiple=!0,r.onchange=function(){return e(Array.from(r.files))},r.click()}r.d(n,"a",(function(){return t}))},1017:function(e,n,r){"use strict";r.d(n,"b",(function(){return i})),r.d(n,"a",(function(){return o}));var t=r(10),a=r.n(t),c=r(15),i=(r(1441),window.ZIP);function o(e){return s.apply(this,arguments)}function s(){return(s=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Response(i(n)).blob();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1439:function(e,n){},913:function(e,n,r){"use strict";r.r(n),r.d(n,"downloadProblemFile",(function(){return Y})),r.d(n,"downloadProblemFilesAsArchive",(function(){return ee}));var t=r(80),a=r(622),c=r(10),i=r.n(c),o=r(19),s=r(15),u=r(1),l=r(0),p=r(99),d=r(1790),f=r(618),b=r(1795),j=r(1800),m=r(1807),h=r(1792),O=r(1803),x=r(593),g=r(614),w=r(1796),v=r(1701),k=r(1799),y=r(932),_=r.n(y),F=r(1422),C=r(1423),T=r(1424),S=r.n(T),z=r(1732),I=r(1440),E=r.n(I),R=r(181),P=r(9),D=r(182),A=r(22),N=r(851),U=r(781),q=r(1015),W=r(1016);function H(e,n,r){return L.apply(this,arguments)}function L(){return(L=Object(s.a)(i.a.mark((function e(n,r,t){var a,c,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.WritableStream||!n.pipeTo){e.next=7;break}return a=new AbortController,t&&(t.abort=a.abort.bind(a)),e.next=5,n.pipeTo(r,a);case 5:e.next=22;break;case 7:c=r.getWriter(),t&&(t.abort=c.abort.bind(c)),o=n.getReader();case 10:return e.next=13,o.read();case 13:if(!(s=e.sent).done){e.next=19;break}return c.close(),e.abrupt("break",22);case 19:c.write(s.value);case 20:e.next=10;break;case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=r(55),B=r(183),J=r(1008),K=r(1017),V=r(684),Z=r(689),G=r(686),Q=r(37),X=r(109);function Y(e,n,r,t){return $.apply(this,arguments)}function $(){return($=Object(s.a)(i.a.mark((function e(n,r,t,a){var c,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",D.a.error(a("problem_files.error.NO_SUCH_FILE")));case 2:return e.next=4,R.c.problem.downloadProblemFiles({problemId:n,type:r,filenameList:[t]});case 4:if(c=e.sent,o=c.requestError,s=c.response,!o){e.next=11;break}return e.abrupt("return",D.a.error(o(a)));case 11:if(0!==s.downloadInfo.length){e.next=13;break}return e.abrupt("return",D.a.error(a("problem_files.error.NO_SUCH_FILE")));case 13:Object(q.a)(s.downloadInfo[0].downloadUrl);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(e,n,r,t,a){return ne.apply(this,arguments)}function ne(){return(ne=Object(s.a)(i.a.mark((function e(n,r,t,a,c){var o,u,l,p,d,f,b,j,m,h,O;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O=function(e){h?h=!1:e.returnValue=""},m=function(){j.abort()},e.next=4,R.c.problem.downloadProblemFiles({problemId:n,type:t,filenameList:a});case 4:if(o=e.sent,u=o.requestError,l=o.response,!u){e.next=9;break}return e.abrupt("return",D.a.error(u(c)));case 9:if(!l.error){e.next=11;break}return e.abrupt("return",D.a.error(c("problem_files.error.".concat(l.error))));case 11:if(0!==(p=l.downloadInfo).length){e.next=14;break}return e.abrupt("return",D.a.error(c("problem_files.no_files_to_download")));case 14:return d=C.createWriteStream(r),f=0,b=Object(K.b)({pull:function(e){return Object(s.a)(i.a.mark((function n(){var r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(f!=p.length){n.next=2;break}return n.abrupt("return",e.close());case 2:return n.prev=2,n.next=5,fetch(p[f].downloadUrl);case 5:if((r=n.sent).ok){n.next=8;break}throw r.statusText;case 8:e.enqueue({name:p[f].filename,stream:function(){return r.body}}),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(2),m(),D.a.error(c("problem_files.download_as_archive_error",{filename:p[f].filename,error:n.t0.toString()}));case 15:f++;case 16:case"end":return n.stop()}}),n,null,[[2,11]])})))()}}),j={},h=!window.isSecureContext,window.addEventListener("unload",m),window.addEventListener("beforeunload",O),e.next=23,H(b,d,j);case 23:window.removeEventListener("unload",m),window.removeEventListener("beforeunload",O);case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.WritableStream||(C.WritableStream=F.a),window.apiEndpoint.toLowerCase().startsWith("https://")&&(C.mitm="".concat(window.apiEndpoint,"api/cors/streamsaver/mitm.html"));function re(e,n){return te.apply(this,arguments)}function te(){return(te=Object(s.a)(i.a.mark((function e(n,r){var a,c,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.c.problem.getProblem((a={},Object(t.a)(a,n,r),Object(t.a)(a,"testData",!0),Object(t.a)(a,"additionalFiles",!0),Object(t.a)(a,"permissionOfCurrentUser",!0),a));case 2:if(c=e.sent,o=c.requestError,s=c.response,!o){e.next=9;break}throw new B.a(o,{showRefresh:!0,showBack:!0});case 9:if(!s.error){e.next=11;break}throw new B.a(Object(Q.c)("problem_files.error.".concat(s.error)));case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ae=function(e){var n=Object(A.i)("problem_files"),r=Object(l.useState)(!1),t=Object(o.a)(r,2),a=t[0],c=t[1],O=Object(l.useState)(!1),x=Object(o.a)(O,2),g=x[0],w=x[1],v=Object(l.useState)(e.file.filename),k=Object(o.a)(v,2),y=k[0],_=k[1];function F(){return C.apply(this,arguments)}function C(){return(C=Object(s.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.onRename(y);case 2:c(!1);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function T(){return(T=Object(s.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.onDelete();case 2:w(!1);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function S(e){var n=e.toFixed(1);return"100.0"===n?"100":n}var I=Object(z.a)(e.file.upload&&e.file.upload.progress||0,24,{maxWait:24}),R=Object(o.a)(I,2),P=R[0],D=R[1];e.file.upload&&100===e.file.upload.progress&&D.flush();var q=Object(A.m)(0,426);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(b.a.Row,{children:[Object(u.jsxs)(b.a.Cell,{className:E.a.fileTableColumnFilename,children:[e.file.upload&&null!=e.file.upload.progress&&Object(u.jsx)(j.a,{percent:P,indicating:!0}),Object(u.jsx)(X.a,{children:Object(u.jsxs)("div",{className:E.a.filename,children:[Object(u.jsx)(m.a,{className:E.a.fileTableCheckbox,checked:e.selected,disabled:!!e.file.upload,onChange:function(n,r){var t=r.checked;return e.onSelect(t)}}),Object(u.jsx)(p.a,{name:Object(N.a)(e.file.filename)}),"‎"+e.file.filename]})})]}),!q&&Object(u.jsx)(b.a.Cell,{textAlign:"center",children:Object(U.a)(e.file.size,1)}),Object(u.jsx)(b.a.Cell,{className:E.a.fileTableColumnOperations,textAlign:"center",children:e.file.upload?function(){var r=function(){switch(e.file.upload.progressType){case"Waiting":return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p.a,{name:"hourglass half"}),n(".progress_waiting")]});case"Hashing":return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p.a,{name:"hashtag"}),n(".progress_hashing",{progress:S(P)})]});case"Uploading":return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p.a,{name:"cloud upload"}),n(".progress_uploading",{progress:S(P)})]});case"Requesting":return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p.a,{name:"spinner"}),n(".progress_requesting")]});case"Error":return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p.a,{name:"warning sign"}),n(".progress_error")]});case"Cancelled":return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p.a,{name:"warning circle"}),n(".progress_cancelled")]})}}();return"Error"===e.file.upload.progressType?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(d.a,{trigger:Object(u.jsx)("span",{children:r}),hoverable:!0,content:e.file.upload.error,on:"hover",position:"top center"})}):e.file.upload.cancel?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(d.a,{trigger:Object(u.jsx)("span",{children:r}),content:Object(u.jsx)(f.a,{onClick:e.file.upload.cancel,children:n(".cancel_upload")}),on:"hover",hoverable:!0,position:"top center"})}):r}():Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p.a,{className:E.a.fileTableOperationIcon,name:"download",onClick:function(){return e.onDownload()}}),e.hasPermission&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.a,{trigger:Object(u.jsx)(p.a,{disabled:e.pending,className:E.a.fileTableOperationIcon,name:"pencil alternate"}),disabled:e.pending,open:a,onOpen:function(){return c(!0)},onClose:function(){return!e.pending&&c(!1)},content:Object(u.jsxs)(h.a,{children:[Object(u.jsx)(h.a.Input,{style:{width:230},placeholder:n(".new_filename"),value:y,onChange:function(e,n){var r=n.value;return _(r)},onKeyPress:Object(Z.a)((function(){return F()}))}),Object(u.jsx)(f.a,{primary:!0,loading:e.pending,onClick:F,children:n(".rename")})]}),on:"click",position:"top center"}),Object(u.jsx)(d.a,{trigger:Object(u.jsx)(p.a,{disabled:e.pending,className:E.a.fileTableOperationIcon,name:"delete"}),disabled:e.pending,open:g,onOpen:function(){return w(!0)},onClose:function(){return!e.pending&&w(!1)},content:Object(u.jsx)(f.a,{negative:!0,loading:e.pending,onClick:function(){return T.apply(this,arguments)},children:n(".confirm_delete")}),on:"click",position:"top center"})]})]})})]})})};ae=Object(M.a)(ae);var ce=function(e){var n=Object(A.i)("problem_files"),r=Object(l.useState)(new Set),t=Object(o.a)(r,2),c=t[0],p=t[1],j=e.files.filter((function(e){return!e.upload}));Object(l.useEffect)((function(){var e,n=j.map((function(e){return e.uuid})),r=new Set,t=Object(a.a)(c);try{for(t.s();!(e=t.n()).done;){var i=e.value;n.includes(i)&&r.add(i)}}catch(o){t.e(o)}finally{t.f()}_()(c,r)||p(r)}),[e.files]);var h=e.files.filter((function(e){return c.has(e.uuid)})),v=Object(l.useState)(new Set),k=Object(o.a)(v,2),y=k[0],F=k[1];function C(e,n){var r=new Set(y);"string"===typeof e&&(e=[e]);var t,c=Object(a.a)(e);try{for(c.s();!(t=c.n()).done;){var i=t.value;n?r.add(i):r.delete(i)}}catch(o){c.e(o)}finally{c.f()}F(r)}function T(){return(T=Object(s.a)(i.a.mark((function n(r,t,a){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!y.has(r)){n.next=2;break}return n.abrupt("return");case 2:return C(r,!0),n.next=5,e.onRenameFile(t,a);case 5:C(r,!1);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function S(){return(S=Object(s.a)(i.a.mark((function n(r,t){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r.some((function(e){return y.has(e)}))){n.next=2;break}return n.abrupt("return");case 2:return C(r,!0),n.next=5,e.onDeleteFiles(t);case 5:C(r,!1);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var z=e.files.filter((function(e){return e.upload&&"Error"!==e.upload.progressType&&"Cancelled"!==e.upload.progressType})).length,I=Object(l.useState)([]),R=Object(o.a)(I,2),P=R[0],q=R[1],H=Object(l.useRef)();function L(){return(L=Object(s.a)(i.a.mark((function r(){return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!z){r.next=2;break}return r.abrupt("return");case 2:Object(W.a)((function(r){if(r.some((function(e){return!Object(G.c)(e.name)})))D.a.error(n(".invalid_filename"));else{var t=function(){return e.onUploadFiles(r)},a=e.files.filter((function(e){return!e.upload})).map((function(e){return e.filename})),c=r.map((function(e){return e.name})).filter((function(e){return a.includes(e)}));c.length>0?(q(c),H.current=t):t()}}));case 3:case"end":return r.stop()}}),r)})))).apply(this,arguments)}var M=Object(l.useState)(null),B=Object(o.a)(M,2),J=B[0],K=B[1],V=Object(l.useState)(!1),Z=Object(o.a)(V,2),Q=Z[0],Y=Z[1],$=Object(l.useState)(!1),ee=Object(o.a)($,2),ne=ee[0],re=ee[1],te=Object(A.b)(Object(s.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.onDeleteFiles(h.map((function(e){return e.filename})));case 2:re(!1);case 3:case"end":return n.stop()}}),n)})))),ce=Object(o.a)(te,2),ie=ce[0],oe=ce[1],se=Object(A.m)(0,426);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(b.a,{compact:!0,color:e.color,className:E.a.fileTable+(e.hasPermission?"":" "+E.a.noManagePermission),unstackable:!0,children:[Object(u.jsx)(b.a.Header,{children:Object(u.jsxs)(b.a.Row,{children:[Object(u.jsxs)(b.a.HeaderCell,{children:[Object(u.jsx)(m.a,{className:E.a.fileTableCheckbox,checked:c.size>0,indeterminate:c.size>0&&c.size<j.length,disabled:ie,onChange:function(e,n){return function(e){p(new Set(e?j.map((function(e){return e.uuid})):[]))}(n.checked)}}),n(".filename")]}),!se&&Object(u.jsx)(b.a.HeaderCell,{className:E.a.fileTableColumnSize,textAlign:"center",children:n(".size")}),Object(u.jsx)(b.a.HeaderCell,{textAlign:"center",className:E.a.fileTableColumnOperations,children:e.hasPermission?n(".operations_and_status"):n(".operations")})]})}),Object(u.jsx)(b.a.Body,{children:0===e.files.length?Object(u.jsx)(b.a.Row,{children:Object(u.jsx)(b.a.HeaderCell,{colSpan:se?2:3,textAlign:"center",className:E.a.filesTableNoFiles,children:Object(u.jsx)(O.a,{children:n(".no_files")})})}):e.files.map((function(n){return Object(u.jsx)(ae,{file:n,hasPermission:e.hasPermission,selected:c.has(n.uuid),pending:y.has(n.uuid),onSelect:function(e){return function(e,n){var r=new Set(c);n?r.add(e):r.delete(e),p(r)}(n.uuid,e)},onDownload:function(){return e.onDownloadFile(n.filename)},onRename:function(e){return function(e,n,r){return T.apply(this,arguments)}(n.uuid,n.filename,e)},onDelete:function(){return function(e,n){return S.apply(this,arguments)}([n.uuid],[n.filename])}},n.uuid)}))}),Object(u.jsx)(b.a.Footer,{fullWidth:!0,children:Object(u.jsx)(b.a.Row,{children:Object(u.jsx)(b.a.HeaderCell,{colSpan:se?2:3,children:Object(u.jsxs)("div",{className:E.a.fileTableFooterInfo,children:[Object(u.jsx)("div",{className:E.a.tableFooterText,children:h.length>0?Object(u.jsx)(x.a,{innerRef:K,children:Object(u.jsx)(g.a,{open:Q,onOpen:function(){return!ne&&Y(!0)},onClose:function(){return Y(!1)},pointing:!0,text:n(se?".selected_files_count_and_size_narrow":".selected_files_count_and_size",{count:h.length.toString(),totalSize:Object(U.a)(h.reduce((function(e,n){return e+n.size}),0),1)}),children:Object(u.jsxs)(g.a.Menu,{className:E.a.fileTableSelectedFilesDropdownMenu,children:[Object(u.jsx)(g.a.Item,{icon:"download",text:n(".download_as_archive"),onClick:function(){return e.onDownloadFilesAsArchive(h.map((function(e){return e.filename})))}}),e.hasPermission&&Object(u.jsx)(d.a,{trigger:Object(u.jsx)(g.a.Item,{icon:"delete",text:n(".delete")}),open:ne,onOpen:function(){return re(!0)},onClose:function(){return!ie&&re(!1)},context:J,content:Object(u.jsx)(f.a,{negative:!0,loading:ie,onClick:oe,children:n(".confirm_delete")}),on:"click",position:"top center"})]})})}):z?n(se?".files_count_and_size_with_uploading_narrow":".files_count_and_size_with_uploading",{count:e.files.length.toString(),totalSize:Object(U.a)(e.files.reduce((function(e,n){return e+n.size}),0),1),uploadingCount:z.toString()}):n(se?".files_count_and_size_narrow":".files_count_and_size",{count:e.files.length.toString(),totalSize:Object(U.a)(e.files.reduce((function(e,n){return e+n.size}),0),1)})}),e.hasPermission&&Object(u.jsx)(d.a,{trigger:Object(u.jsx)(f.a,{className:E.a.tableFooterButton,icon:"upload",content:n(".upload"),labelPosition:"left",primary:!0,size:"small",loading:0!==z,onClick:function(){return L.apply(this,arguments)}}),open:0!==P.length,onClose:function(){return q([])},content:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:n(".confirm_override_question")})}),Object(u.jsx)(w.a,{children:P.map((function(e){return Object(u.jsx)(X.a,{children:Object(u.jsx)(w.a.Item,{icon:Object(N.a)(e),content:e})},e)}))}),Object(u.jsx)(x.a,{innerRef:function(e){return e&&window.requestAnimationFrame((function(){return e.focus()}))},children:Object(u.jsx)(f.a,{onClick:function(){q([]),H.current()},children:n(".confirm_override")})})]}),on:"click",position:"left center"})]})})})})]})})};ce=Object(M.a)(ce);var ie=function(e){var n=Object(A.i)("problem_files"),r=Object(V.b)(e.problem.meta);Object(l.useEffect)((function(){P.a.enterNewPage("".concat(n(".title")," ").concat(r),"problem_set")}),[P.a.locale,e.problem]);var t=Object(A.l)();function c(e){return e.map((function(e){return{uuid:Object(k.a)(),filename:e.filename,size:e.size}}))}var p=Object(l.useState)(c(e.problem.testData)),d=Object(o.a)(p,2),b=d[0],j=d[1],m=Object(l.useState)(c(e.problem.additionalFiles)),h=Object(o.a)(m,2),x=h[0],g=h[1];function w(e,n,r,t){return y.apply(this,arguments)}function y(){return(y=Object(s.a)(i.a.mark((function r(t,a,c,o){var s,u,l;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(Object(G.c)(o)){r.next=3;break}return D.a.error(n(".invalid_filename")),r.abrupt("return");case 3:return r.next=5,R.c.problem.renameProblemFile({problemId:e.problem.meta.id,type:t,filename:c,newFilename:o});case 5:if(s=r.sent,u=s.requestError,l=s.response,!u){r.next=11;break}return D.a.error(u(n)),r.abrupt("return");case 11:if(!l.error){r.next=14;break}return D.a.error(n(".error.".concat(l.error))),r.abrupt("return");case 14:a((function(e){return e.map((function(e){return e.filename!==c?e:Object.assign({},e,{filename:o})}))}));case 15:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function _(e,n,r){return F.apply(this,arguments)}function F(){return(F=Object(s.a)(i.a.mark((function r(t,a,c){var o,s,u;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,R.c.problem.removeProblemFiles({problemId:e.problem.meta.id,type:t,filenames:c});case 2:if(o=r.sent,s=o.requestError,u=o.response,!s){r.next=8;break}return D.a.error(s(n)),r.abrupt("return");case 8:if(!u.error){r.next=11;break}return D.a.error(n(".error.".concat(u.error))),r.abrupt("return");case 11:a((function(e){return e.filter((function(e){return!c.includes(e.filename)}))}));case 12:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function C(e,n,r,t){return T.apply(this,arguments)}function T(){return(T=Object(s.a)(i.a.mark((function r(c,o,u,l){var p,d,f,b,j,m,h,O,x,g,w;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:h=function(e,n){u((function(r){var t=Array.from(r);for(var a in t)if(t[a].uuid===e)return t[a]=Object.assign({},r[a],{upload:n?Object.assign({},r[a].upload,n):null}),t;return r}))},p=l.map((function(e){return e.name})),d=[],f=Object(a.a)(l);try{for(f.s();!(b=f.n()).done;)j=b.value,d.push({uuid:Object(k.a)(),filename:j.name,size:j.size,upload:{file:j,progressType:"Waiting"}})}catch(v){f.e(v)}finally{f.f()}for(m=o.filter((function(e){return!p.includes(e.filename)})).concat(d),u(m),O=[],x=function(){var r=w[g];O.push(Object(s.a)(i.a.mark((function a(){var o,s,u,l,p;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(J.a)(R.c.problem.addProblemFile,{problemId:e.problem.meta.id,type:c,filename:r.filename},(function(){return t("AddProblemFile")}),r.upload.file,(function(e){return h(r.uuid,{progressType:e.status,progress:100*e.progress})}),(function(e){return h(r.uuid,{cancel:e})}));case 2:o=a.sent,s=o.uploadCancelled,u=o.uploadError,l=o.requestError,p=o.response,s?h(r.uuid,{progressType:"Cancelled",cancel:null}):u?(console.log("Error uploading file",u),h(r.uuid,{progressType:"Error",error:String(u)})):l?h(r.uuid,{progressType:"Error",error:l(n)}):p.error?h(r.uuid,{progressType:"Error",error:n(".error.".concat(p.error))}):h(r.uuid,null);case 8:case"end":return a.stop()}}),a)}))))},g=0,w=d;g<w.length;g++)x();return r.next=12,S()(O,{concurrency:5});case 12:case"end":return r.stop()}}),r)})))).apply(this,arguments)}var z=Object(A.m)(960,1/0),I=Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O.a,{className:E.a.header+" withIcon",icon:"file alternate",as:"h2",content:Object(u.jsxs)(u.Fragment,{children:[n(".header_testdata"),Object(u.jsx)(f.a,{className:E.a.backToProblem,primary:!0,as:A.a,href:Object(V.c)(e.problem.meta),content:n(".back_to_problem")})]})}),Object(u.jsx)(ce,{hasPermission:e.problem.permissionOfCurrentUser.includes("Modify"),color:"green",files:b,onDownloadFile:function(r){return Y(e.problem.meta.id,"TestData",r,n)},onDownloadFilesAsArchive:function(t){return ee(e.problem.meta.id,"TestData_".concat(r,".zip"),"TestData",t,n)},onRenameFile:function(e,n){return w("TestData",j,e,n)},onDeleteFiles:function(e){return _("TestData",j,e)},onUploadFiles:function(e){return C("TestData",b,j,e)}})]}),N=Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O.a,{className:E.a.header+" withIcon",icon:"file alternate outline",as:"h2",content:n(".header_additional_files")}),Object(u.jsx)(ce,{hasPermission:e.problem.permissionOfCurrentUser.includes("Modify"),color:"pink",files:x,onDownloadFile:function(r){return Y(e.problem.meta.id,"AdditionalFile",r,n)},onDownloadFilesAsArchive:function(t){return ee(e.problem.meta.id,"AdditionalFile_".concat(r,".zip"),"AdditionalFile",t,n)},onRenameFile:function(e,n){return w("AdditionalFile",g,e,n)},onDeleteFiles:function(e){return _("AdditionalFile",g,e)},onUploadFiles:function(e){return C("AdditionalFile",x,g,e)}})]});return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(v.a,{children:z?Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(v.a.Row,{children:[Object(u.jsx)(v.a.Column,{width:8,children:I}),Object(u.jsx)(v.a.Column,{width:8,children:N})]})}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v.a.Row,{children:Object(u.jsx)(v.a.Column,{width:16,children:I})}),Object(u.jsx)(v.a.Row,{children:Object(u.jsx)(v.a.Column,{width:16,children:N})})]})})})};ie=Object(M.a)(ie);n.default={byId:Object(B.c)(function(){var e=Object(s.a)(i.a.mark((function e(n){var r,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=parseInt(n.params.id),e.next=3,re("id",r);case 3:return t=e.sent,e.abrupt("return",Object(u.jsx)(ie,{idType:"id",problem:t},Object(k.a)()));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),byDisplayId:Object(B.c)(function(){var e=Object(s.a)(i.a.mark((function e(n){var r,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=parseInt(n.params.displayId),e.next=3,re("displayId",r);case 3:return t=e.sent,e.abrupt("return",Object(u.jsx)(ie,{idType:"displayId",problem:t},Object(k.a)()));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}}}]);
//# sourceMappingURL=45.5b39a38e.chunk.js.map