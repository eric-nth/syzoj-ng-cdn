(self["webpackJsonpsyzoj-ng-app"]=self["webpackJsonpsyzoj-ng-app"]||[]).push([[172],{1552:function(e,r,t){"use strict";t.r(r);var n=t(179),a=t(10),c=t.n(a),s=t(19),o=t(15),u=t(1),i=t(0),p=t(1797),j=t(1701),b=t(99),l=t(1807),d=t(602),m=t(1790),O=t(618),h=t(1792),f=t(1795),g=t(1803),x=t(55),v=t(1553),w=t.n(v),k=t(9),y=t(181),_=t(22),C=t(183),G=t(182),I=t(720),N=t(733),S=t(779),P=t(689),A=t(37),E=t(686);function M(){return q.apply(this,arguments)}function q(){return(q=Object(o.a)(c.a.mark((function e(){var r,t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k.a.currentUser){e.next=2;break}throw new C.a(Object(A.c)("groups.not_logged_in"));case 2:return e.next=4,y.c.group.getGroupList();case 4:if(r=e.sent,t=r.requestError,n=r.response,!t){e.next=9;break}throw new C.a(t,{showRefresh:!0,showBack:!0});case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=function(e){var r=Object(_.i)("groups"),t=Object(i.useState)(!1),a=Object(s.a)(t,2),g=a[0],x=a[1],v=Object(i.useState)(null),C=Object(s.a)(v,2),A=C[0],M=C[1],q=Object(i.useState)(!1),L=Object(s.a)(q,2),U=L[0],z=L[1];function F(){return(F=Object(o.a)(c.a.mark((function t(){var n,a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!g&&!D){t.next=2;break}return t.abrupt("return");case 2:if(!U){t.next=5;break}return z(!1),t.abrupt("return");case 5:return x(!0),t.next=8,y.c.group.getGroupMemberList({groupId:e.meta.id});case 8:n=t.sent,a=n.requestError,s=n.response,a?G.a.error(a(r)):s.error?G.a.error(r(".errors.".concat(s.error))):(M(s.memberList),z(!0)),x(!1);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var H=k.a.currentUserHasPrivilege("ManageUserGroup"),R=Object(i.useState)(!1),B=Object(s.a)(R,2),D=B[0],J=B[1];function K(){return(K=Object(o.a)(c.a.mark((function t(n,a){var s,o,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!D){t.next=2;break}return t.abrupt("return");case 2:return J(!0),t.next=5,y.c.group.setGroupAdmin({groupId:e.meta.id,userId:n,isGroupAdmin:a});case 5:s=t.sent,o=s.requestError,u=s.response,o?G.a.error(o(r)):u.error?G.a.error(r(".errors.".concat(u.error))):M(A.map((function(e){return e.userMeta.id===n?Object.assign({},e,{isGroupAdmin:a}):e}))),J(!1);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var T=Object(i.useState)(e.meta.name),W=Object(s.a)(T,2),Q=W[0],V=W[1],X=Object(i.useState)(!1),Y=Object(s.a)(X,2),Z=Y[0],$=Y[1],ee=Object(i.useState)(Q),re=Object(s.a)(ee,2),te=re[0],ne=re[1];function ae(){return ce.apply(this,arguments)}function ce(){return(ce=Object(o.a)(c.a.mark((function t(){var n,a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(te!==Q){t.next=3;break}return $(!1),t.abrupt("return");case 3:if(Object(E.d)(Q)){t.next=5;break}return t.abrupt("return",G.a.error(r(".invalid_group_name")));case 5:if(!D){t.next=7;break}return t.abrupt("return");case 7:return J(!0),t.next=10,y.c.group.renameGroup({groupId:e.meta.id,name:te});case 10:n=t.sent,a=n.requestError,s=n.response,a?G.a.error(a(r)):s.error?G.a.error(r(".errors.".concat(s.error))):(V(te),$(!1)),J(!1);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function se(){return(se=Object(o.a)(c.a.mark((function t(a){var s,o,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!D){t.next=2;break}return t.abrupt("return");case 2:return J(!0),t.next=5,y.c.group.addMember({groupId:e.meta.id,userId:a.id});case 5:s=t.sent,o=s.requestError,u=s.response,o?G.a.error(o(r)):u.error?G.a.error(r(".errors.".concat(u.error))):M([].concat(Object(n.a)(A),[{userMeta:a,isGroupAdmin:!1}])),J(!1);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function oe(){return(oe=Object(o.a)(c.a.mark((function t(){var n,a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!D){t.next=2;break}return t.abrupt("return");case 2:return J(!0),t.next=5,y.c.group.deleteGroup({groupId:e.meta.id});case 5:n=t.sent,a=n.requestError,s=n.response,a?G.a.error(a(r)):s.error?G.a.error(r(".errors.".concat(s.error))):e.onDelete(),J(!1);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ue(){return(ue=Object(o.a)(c.a.mark((function t(n){var a,s,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!D){t.next=2;break}return t.abrupt("return");case 2:return J(!0),t.next=5,y.c.group.removeMember({groupId:e.meta.id,userId:n});case 5:a=t.sent,s=a.requestError,o=a.response,s?G.a.error(s(r)):o.error?G.a.error(r(".errors.".concat(o.error))):M(A.filter((function(e){return e.userMeta.id!==n}))),J(!1);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p.a.Title,{className:w.a.groupItem,onClick:function(){return F.apply(this,arguments)},active:U,children:Object(u.jsxs)(j.a,{children:[Object(u.jsxs)(j.a.Column,{width:5,children:[Object(u.jsx)(b.a,{name:"users"})," ",Q]}),Object(u.jsx)(j.a.Column,{width:8,children:!H&&Object(u.jsx)(l.a,{toggle:!0,label:r(".group_admin"),readOnly:!0,checked:e.hasPermission||H})}),Object(u.jsxs)(j.a.Column,{width:3,className:w.a.memberCount,children:[Object(u.jsx)(b.a,{name:"user"})," ×  ",A?A.length:e.meta.memberCount,g?Object(u.jsx)(b.a,{name:"spinner",loading:!0}):Object(u.jsx)(b.a,{name:"dropdown"})]})]})}),Object(u.jsx)(p.a.Content,{active:U,children:A&&Object(u.jsxs)(d.a,{className:w.a.memberListSegment,children:[Object(u.jsxs)("div",{className:w.a.memberListHeader,children:[(H||e.hasPermission)&&Object(u.jsx)(S.a,{className:w.a.memberListUserSearch,placeholder:r(".search_to_add_user"),onResultSelect:function(e){return se.apply(this,arguments)}}),H&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m.a,{trigger:Object(u.jsx)(O.a,{className:w.a.renameGroup,content:r(".rename_group")}),content:Object(u.jsxs)(h.a,{children:[Object(u.jsx)(h.a.Input,{style:{width:230},placeholder:r(".rename_group_new_name"),value:te,autoComplete:"username",readOnly:D,onChange:function(e){return ne(e.target.value)},onKeyPress:Object(P.a)((function(){return ae()}))}),Object(u.jsx)(O.a,{primary:!0,disabled:D,onClick:ae,children:r(".confirm_rename_group")})]}),open:Z,onOpen:function(){return $(!0)},onClose:function(){return $(!1)},on:"click",position:"top right"}),Object(u.jsx)(m.a,{trigger:Object(u.jsx)(O.a,{className:w.a.deleteGroup,negative:!0,content:r(".delete_group")}),content:Object(u.jsx)(O.a,{negative:!0,disabled:D,onClick:function(){return oe.apply(this,arguments)},children:r(".confirm_delete_group")}),on:"click",position:"top center"})]})]}),Object(u.jsx)(f.a,{basic:"very",compact:!0,structured:!0,className:w.a.memberList,children:A.length>0&&Object(u.jsx)(f.a.Body,{children:A.map((function(t){var n=t.userMeta,a=t.isGroupAdmin;return Object(u.jsxs)(f.a.Row,{children:[Object(u.jsx)(f.a.Cell,{width:5,children:Object(u.jsxs)("div",{className:w.a.usernameCellContainer,children:[Object(u.jsx)(N.a,{className:w.a.userAvatar,userAvatar:n.avatar,imageSize:24}),Object(u.jsx)(I.a,{user:n})]})}),Object(u.jsx)(f.a.Cell,{width:5,children:n.email}),Object(u.jsx)(f.a.Cell,{width:3,textAlign:"right",children:Object(u.jsx)(l.a,{checked:a,readOnly:!H,label:r(".group_admin"),toggle:!0,onChange:function(e,r){var t=r.checked;return function(e,r){return K.apply(this,arguments)}(n.id,t)}})}),Object(u.jsx)(f.a.Cell,{width:3,textAlign:"right",children:Object(u.jsx)(m.a,{disabled:D||!(e.hasPermission&&!a),trigger:Object(u.jsx)(b.a,{name:"delete",disabled:!(e.hasPermission&&!a),label:r(".remove_member")}),content:Object(u.jsx)(O.a,{negative:!0,disabled:D,content:r(".confirm_remove_member"),onClick:function(){return function(e){return ue.apply(this,arguments)}(n.id)}}),on:"click",position:"top center"})})]},n.id)}))})})]})})]})},U=function(e){var r=Object(_.i)("groups");Object(i.useEffect)((function(){k.a.enterNewPage(r(".title"),"members")}),[k.a.locale]);var t=k.a.currentUserHasPrivilege("ManageUserGroup"),a=Object(i.useState)(e.response.groups),j=Object(s.a)(a,2),l=j[0],f=j[1],x=Object(i.useState)(e.response.groupsWithAdminPermission),v=Object(s.a)(x,2),C=v[0],I=v[1],N=Object(i.useState)(""),S=Object(s.a)(N,2),A=S[0],M=S[1],q=Object(i.useState)(!1),U=Object(s.a)(q,2),z=U[0],F=U[1],H=Object(_.b)(Object(o.a)(c.a.mark((function e(){var t,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(E.d)(A)){e.next=2;break}return e.abrupt("return",G.a.error(r(".invalid_group_name")));case 2:return e.next=4,y.c.group.createGroup({groupName:A});case 4:t=e.sent,a=t.requestError,s=t.response,a?G.a.error(a(r)):s.error?G.a.error(r(".errors.".concat(s.error))):(f([].concat(Object(n.a)(l),[{id:s.groupId,name:A,memberCount:0}])),I([].concat(Object(n.a)(C),[s.groupId])),M(""),F(!1));case 8:case"end":return e.stop()}}),e)})))),R=Object(s.a)(H,2),B=R[0],D=R[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:w.a.header,children:[Object(u.jsx)(g.a,{className:"withIcon",icon:"users",as:"h1",content:r(".header")}),t&&Object(u.jsx)(m.a,{trigger:Object(u.jsx)(O.a,{className:w.a.createGroup,primary:!0,content:r(".create_group")}),content:Object(u.jsxs)(h.a,{children:[Object(u.jsx)(h.a.Input,{style:{width:230},placeholder:r(".create_group_name"),value:A,autoComplete:"username",readOnly:B,onChange:function(e){return M(e.target.value)},onKeyPress:Object(P.a)((function(){return D()}))}),Object(u.jsx)(O.a,{primary:!0,loading:B,onClick:D,children:r(".confirm_create_group")})]}),open:z,onOpen:function(){return F(!0)},onClose:function(){return F(!1)},on:"click",position:"bottom right"})]}),l.length>0?Object(u.jsx)(p.a,{children:l.map((function(e){return Object(u.jsx)(L,{meta:e,hasPermission:C.includes(e.id),onDelete:function(){f(l.filter((function(r){return r.id!==e.id}))),I(C.filter((function(r){return r!=e.id})))}},e.id)}))}):Object(u.jsx)(d.a,{placeholder:!0,children:Object(u.jsxs)(g.a,{icon:!0,children:[Object(u.jsx)(b.a,{name:"file"}),r(".no_groups")]})})]})};U=Object(x.a)(U),r.default=Object(C.c)(function(){var e=Object(o.a)(c.a.mark((function e(r){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:return t=e.sent,e.abrupt("return",Object(u.jsx)(U,{response:t}));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}())}}]);
//# sourceMappingURL=172.de67e6fa.chunk.js.map