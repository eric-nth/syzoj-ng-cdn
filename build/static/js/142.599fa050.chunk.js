(self["webpackJsonpsyzoj-ng-app"]=self["webpackJsonpsyzoj-ng-app"]||[]).push([[142],{1420:function(e,t,r){"use strict";r.r(t);var n=r(10),a=r.n(n),c=r(29),o=r(15),s=r(19),i=r(1),u=r(0),l=r(1803),f=r(1792),b=r(602),j=r(593),d=r(1725),p=r(618),O=r(99),g=r(14),x=r(39),m=r(55),h=r(843),v=r.n(h),_=r(9),w=r(181),k=r(22),y=r(182),C=r(686),S=r(185),R=r(689),P=function(){var e=Object(k.i)("forgot"),t=Object(x.e)(),r=Object(k.k)(),n=function(){r.navigate(t.url.query.loginRedirectUrl||"/")};Object(u.useEffect)((function(){_.a.currentUser&&n()}),[]),Object(u.useEffect)((function(){_.a.enterNewPage(e(".title"))}),[_.a.locale]);var g=Object(k.l)(),m=Object(u.useState)(null),h=Object(s.a)(m,2),P=h[0],E=h[1],I=Object(u.useState)(""),N=Object(s.a)(I,2),q=N[0],F=N[1],L=Object(u.useState)(""),V=Object(s.a)(L,2),z=V[0],A=V[1],B=Object(u.useState)(""),K=Object(s.a)(B,2),M=K[0],T=K[1],U=Object(u.useState)(""),D=Object(s.a)(U,2),J=D[0],H=D[1],G=Object(u.useState)(!1),Q=Object(s.a)(G,2),W=Q[0],X=Q[1],Y=Object(u.useRef)(),Z=Object(u.useRef)(),$=Object(u.useRef)(),ee=Object(u.useRef)(),te=Object(u.useRef)(null),re=Object(k.f)(q,!1,!1,(function(t){return t?!!Object(C.b)(t)||e(".invalid_email"):e(".empty_email")})),ne=Object(s.a)(re,4),ae=ne[0],ce=ne[1],oe=ne[2],se=ne[3],ie=Object(k.f)(M,!1,!1,(function(t){return t?!!Object(C.e)(t)||e(".invalid_password"):e(".empty_password")})),ue=Object(s.a)(ie,5),le=ue[0],fe=ue[1],be=ue[2],je=ue[3],de=ue[4],pe=Object(k.f)(J,!0,!1,(function(t){return console.log("retype check: ",J,de()),t!==de()?e(".passwords_do_not_match"):!!t||e(".empty_password")})),Oe=Object(s.a)(pe,4),ge=Oe[0],xe=Oe[1],me=Oe[2],he=Oe[3],ve=Object(u.useState)(!1),_e=Object(s.a)(ve,2),we=_e[0],ke=_e[1];function ye(){return Ce.apply(this,arguments)}function Ce(){return(Ce=Object(o.a)(a.a.mark((function t(){var r,c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!W){t.next=2;break}return t.abrupt("return");case 2:return X(!0),t.next=5,ce();case 5:if(t.sent){t.next=11;break}y.a.error(e(".email_invalid_message")),Y.current.focus(),Y.current.select(),t.next=53;break;case 11:return t.next=13,fe();case 13:if(t.sent){t.next=19;break}y.a.error(e(".invalid_password_message")),$.current.focus(),$.current.select(),t.next=53;break;case 19:return t.next=21,xe();case 21:if(t.sent){t.next=27;break}y.a.error(e(".passwords_do_not_match_message")),ee.current.focus(),ee.current.select(),t.next=53;break;case 27:return t.next=29,w.c.auth.resetPassword({email:q,emailVerificationCode:z,newPassword:M},g("ResetPassword"));case 29:if(r=t.sent,c=r.requestError,s=r.response,!c){t.next=36;break}y.a.error(c(e)),t.next=53;break;case 36:if(!s.error){t.next=49;break}t.t0=s.error,t.next="NO_SUCH_USER"===t.t0?40:"INVALID_EMAIL_VERIFICATION_CODE"===t.t0?43:47;break;case 40:return y.a.error(e(".errors.".concat(s.error))),Y.current.focus(),t.abrupt("break",47);case 43:return y.a.error(e(".errors.".concat(s.error))),ke(!0),Z.current.focus(),t.abrupt("break",47);case 47:t.next=53;break;case 49:return _.a.token=s.token,E(e(".success")),setTimeout(Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.b)();case 2:n();case 3:case"end":return e.stop()}}),e)}))),1e3),t.abrupt("return");case 53:X(!1);case 54:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var Se=Object(u.useState)(0),Re=Object(s.a)(Se,2),Pe=Re[0],Ee=Re[1],Ie=Object(u.useState)(!1),Ne=Object(s.a)(Ie,2),qe=Ne[0],Fe=Ne[1];function Le(){return Ve.apply(this,arguments)}function Ve(){return(Ve=Object(o.a)(a.a.mark((function t(){var r,n,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!qe){t.next=2;break}return t.abrupt("return");case 2:return Fe(!0),t.next=5,ce();case 5:if(t.sent){t.next=11;break}y.a.error(e(".email_invalid_message")),Y.current.focus(),Y.current.select(),t.next=17;break;case 11:return t.next=13,w.c.auth.sendEmailVerificationCode({email:q,type:"ResetPassword",locale:_.a.locale},g("SendEmailVerifactionCode_ResetPassword"));case 13:r=t.sent,n=r.requestError,c=r.response,n?y.a.error(n(e)):c.error?y.a.error(e(".errors.".concat(c.error),{errorMessage:c.errorMessage})):(y.a.success(e(".email_verification_code_sent")),Ee(61));case 17:Fe(!1);case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(u.useEffect)((function(){var e=setInterval((function(){Ee((function(e){return e&&e-1}))}),1e3);return function(){return clearInterval(e)}}),[]);var ze=_.a.appLogoThemed&&Object(i.jsx)("img",Object(c.a)({className:v.a.logo},_.a.appLogoThemed));return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:v.a.wrapper,children:[Object(i.jsxs)(l.a,{as:"h2",className:v.a.header+(ze?" "+v.a.withLogo:""),textAlign:"center",children:[ze,e(".reset_your_password")]}),Object(i.jsx)(f.a,{size:"large",ref:te,children:Object(i.jsxs)(b.a,{children:[Object(i.jsx)(j.a,{innerRef:function(e){return e&&(Y.current=e.querySelector("input"))},children:Object(i.jsx)(f.a.Field,{control:d.a,error:"error"===oe()&&{content:se(),pointing:"left"},loading:"validating"===oe(),fluid:!0,icon:"envelope",iconPosition:"left",placeholder:e(".email"),value:q,autoComplete:"email",onChange:function(e){return F(e.target.value)},onBlur:function(){return ae()},onKeyPress:Object(R.a)((function(){0===Pe&&Le(),Z.current.focus()}))})}),Object(i.jsx)(j.a,{innerRef:function(e){return e&&(Z.current=e.querySelector("input"))},children:Object(i.jsx)(f.a.Field,{control:d.a,error:we&&{content:e(".invalid_email_verification_code"),pointing:"left"},fluid:!0,icon:"shield",iconPosition:"left",placeholder:e(".email_verification_code"),value:z,autoComplete:"off",onChange:function(e){return t=e.target.value,ke(!1),void A(Object(C.g)(t));var t},onKeyPress:Object(R.a)((function(){return $.current.focus()})),action:Object(i.jsx)(p.a,{tabIndex:-1,disabled:0!==Pe,loading:qe,content:Pe?"".concat(Pe>60?60:Pe,"s"):e(".send_email_verification_code"),onClick:Le})})}),Object(i.jsx)(j.a,{innerRef:function(e){return e&&($.current=e.querySelector("input"))},children:Object(i.jsx)(f.a.Field,{control:d.a,error:"error"===be()&&{content:je(),pointing:"left"},loading:"validating"===be(),fluid:!0,icon:"lock",iconPosition:"left",placeholder:e(".password"),value:M,type:"password",autoComplete:"new-password",onChange:function(e){return T(e.target.value)},onBlur:function(){return le()},onKeyPress:Object(R.a)((function(){return ee.current.focus()}))})}),Object(i.jsx)(j.a,{innerRef:function(e){return e&&(ee.current=e.querySelector("input"))},children:Object(i.jsx)(f.a.Field,{control:d.a,error:"error"===me()&&{content:he(),pointing:"left"},loading:"validating"===me(),fluid:!0,icon:"lock",iconPosition:"left",placeholder:e(".retype_password"),value:J,type:"password",autoComplete:"new-password",onChange:function(e){return H(e.target.value)},onBlur:function(){return ge()},onKeyPress:Object(R.a)((function(){ge(),ye()}))})}),g.getCopyrightMessage(v.a.recaptchaCopyright),Object(i.jsx)(p.a,{className:P&&v.a.successButton,primary:!P,color:P?"green":null,fluid:!0,size:"large",loading:W&&!P,onClick:function(){return ye()},children:P?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(O.a,{name:"checkmark"}),P]}):e(".submit")})]})})]})})};P=Object(m.a)(P),t.default=Object(g.j)({view:Object(i.jsx)(P,{})})}}]);
//# sourceMappingURL=142.599fa050.chunk.js.map