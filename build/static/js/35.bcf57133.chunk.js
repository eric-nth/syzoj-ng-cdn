(self["webpackJsonpsyzoj-ng-app"]=self["webpackJsonpsyzoj-ng-app"]||[]).push([[35],{824:function(e,t,n){"use strict";var r=n(10),a=n.n(r),s=n(15),c=n(19),u=n(1),o=n(0),l=n(1791),i=n(597),b=n(1097),p=n.n(b),f=n(22),j=n(689);t.a=function(e){var t=Object(o.useState)(""),n=Object(c.a)(t,2),r=n[0],b=n[1],O=Object(o.useState)([]),d=Object(c.a)(O,2),h=d[0],v=d[1],R=Object(o.useState)(!1),k=Object(c.a)(R,2),y=k[0],S=k[1],m=Object(o.useRef)(""),g=Object(i.a)(function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=n.trim(),S(!0),m.current=n,n){t.next=6;break}return S(!1),t.abrupt("return");case 6:return t.next=8,e.onSearch(n);case 8:if(r=t.sent,m.current===n){t.next=11;break}return t.abrupt("return");case 11:v(r||[]),P(!1),S(!1);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),500).callback,w=Object(o.useState)(!0),x=Object(c.a)(w,2),N=x[0],P=x[1];Object(f.k)().subscribe((function(e){return"ready"===e.type&&!N&&P(!0)}));var z=Object(f.m)(0,768);return Object(u.jsx)(l.a,{className:p.a.search+(e.className?" "+e.className:""),placeholder:e.placeholder,value:r,noResultsMessage:e.noResultsMessage,onSearchChange:function(e,t){var n=t.value;b(n),S(!0),g(n)},input:{iconPosition:"left",fluid:z},results:N?[]:h.map((function(t){return{key:e.onGetResultKey(t),title:"",data:t}})),loading:y,showNoResults:!y&&!N,resultRenderer:function(t){return e.onRenderResult(t.data)},onResultSelect:function(t,n){var r=n.result;return e.onResultSelect(r.data)},onKeyPress:Object(j.a)((function(){return r&&e.onEnterPress&&e.onEnterPress(r)}))})}}}]);
//# sourceMappingURL=35.bcf57133.chunk.js.map