(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[8],{752:function(t,e,n){"use strict";e.a=n.p+"static/media/StaxLogoOnly.17f6a5b9.png"},754:function(t,e,n){"use strict";var a=n(72);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n(73)),i=n(1),c=(0,r.default)((0,i.jsx)("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");e.default=c},756:function(t,e,n){"use strict";e.a=n.p+"static/media/busdlogo.78457406.png"},758:function(t,e,n){"use strict";var a=n(72);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n(73)),i=n(1),c=(0,r.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");e.default=c},759:function(t,e,n){"use strict";var a=n(756),r=n(727),i=n(36),c=n(1);e.a=function(){return Object(i.a)(),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(r.a,{justifyContent:"center",children:Object(c.jsx)("img",{width:23,src:a.a,alt:"shares banner"})})})}},760:function(t,e,n){"use strict";var a=n(752),r=n(727),i=n(36),c=n(1);e.a=function(){return Object(i.a)(),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(r.a,{justifyContent:"center",alignContent:"center",children:Object(c.jsx)("img",{width:23,src:a.a,alt:"shares banner"})})})}},788:function(t,e,n){"use strict";var a=n(6),r=n(5),i=n(2),c=n(0),o=n(10),s=n(133),l=n(705),d=n(7),j=n(15),u=n(728),b=n(56),h=n(9),x=n(77),g=n(664),f=n(706);function m(t){return Object(g.a)("MuiCircularProgress",t)}Object(f.a)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var O,p,v,y,S,w,C,k,L=n(1),I=["className","color","disableShrink","size","style","thickness","value","variant"],A=44,P=Object(x.c)(S||(S=O||(O=Object(b.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),T=Object(x.c)(w||(w=p||(p=Object(b.a)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),D=Object(d.a)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,e[n.variant],e["color".concat(Object(o.a)(n.color))]]}})((function(t){var e=t.ownerState,n=t.theme;return Object(i.a)({display:"inline-block"},"determinate"===e.variant&&{transition:n.transitions.create("transform")},"inherit"!==e.color&&{color:n.palette[e.color].main})}),(function(t){return"indeterminate"===t.ownerState.variant&&Object(x.b)(C||(C=v||(v=Object(b.a)(["\n      animation: "," 1.4s linear infinite;\n    "]))),P)})),B=Object(d.a)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(t,e){return e.svg}})({display:"block"}),M=Object(d.a)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(t,e){var n=t.ownerState;return[e.circle,e["circle".concat(Object(o.a)(n.variant))],n.disableShrink&&e.circleDisableShrink]}})((function(t){var e=t.ownerState,n=t.theme;return Object(i.a)({stroke:"currentColor"},"determinate"===e.variant&&{transition:n.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(t){var e=t.ownerState;return"indeterminate"===e.variant&&!e.disableShrink&&Object(x.b)(k||(k=y||(y=Object(b.a)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),T)})),X=c.forwardRef((function(t,e){var n=Object(j.a)({props:t,name:"MuiCircularProgress"}),a=n.className,c=n.color,s=void 0===c?"primary":c,d=n.disableShrink,u=void 0!==d&&d,b=n.size,x=void 0===b?40:b,g=n.style,f=n.thickness,O=void 0===f?3.6:f,p=n.value,v=void 0===p?0:p,y=n.variant,S=void 0===y?"indeterminate":y,w=Object(r.a)(n,I),C=Object(i.a)({},n,{color:s,disableShrink:u,size:x,thickness:O,value:v,variant:S}),k=function(t){var e=t.classes,n=t.variant,a=t.color,r=t.disableShrink,i={root:["root",n,"color".concat(Object(o.a)(a))],svg:["svg"],circle:["circle","circle".concat(Object(o.a)(n)),r&&"circleDisableShrink"]};return Object(l.a)(i,m,e)}(C),P={},T={},X={};if("determinate"===S){var R=2*Math.PI*((A-O)/2);P.strokeDasharray=R.toFixed(3),X["aria-valuenow"]=Math.round(v),P.strokeDashoffset="".concat(((100-v)/100*R).toFixed(3),"px"),T.transform="rotate(-90deg)"}return Object(L.jsx)(D,Object(i.a)({className:Object(h.a)(k.root,a),style:Object(i.a)({width:x,height:x},T,g),ownerState:C,ref:e,role:"progressbar"},X,w,{children:Object(L.jsx)(B,{className:k.svg,ownerState:C,viewBox:"".concat(22," ").concat(22," ").concat(A," ").concat(A),children:Object(L.jsx)(M,{className:k.circle,style:P,ownerState:C,cx:A,cy:A,r:(A-O)/2,fill:"none",strokeWidth:O})})}))}));function R(t){return Object(g.a)("MuiLoadingButton",t)}var z=Object(f.a)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),U=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],E=Object(d.a)(u.a,{shouldForwardProp:function(t){return function(t){return"ownerState"!==t&&"theme"!==t&&"sx"!==t&&"as"!==t&&"classes"!==t}(t)||"classes"===t},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(t,e){return[e.root,e.startIconLoadingStart&&Object(a.a)({},"& .".concat(z.startIconLoadingStart),e.startIconLoadingStart),e.endIconLoadingEnd&&Object(a.a)({},"& .".concat(z.endIconLoadingEnd),e.endIconLoadingEnd)]}})((function(t){var e=t.ownerState,n=t.theme;return Object(i.a)(Object(a.a)({},"& .".concat(z.startIconLoadingStart,", & .").concat(z.endIconLoadingEnd),{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0}),"center"===e.loadingPosition&&Object(a.a)({transition:n.transitions.create(["background-color","box-shadow","border-color"],{duration:n.transitions.duration.short})},"&.".concat(z.loading),{color:"transparent"}),"start"===e.loadingPosition&&e.fullWidth&&Object(a.a)({},"& .".concat(z.startIconLoadingStart,", & .").concat(z.endIconLoadingEnd),{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0,marginRight:-8}),"end"===e.loadingPosition&&e.fullWidth&&Object(a.a)({},"& .".concat(z.startIconLoadingStart,", & .").concat(z.endIconLoadingEnd),{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0,marginLeft:-8}))})),F=Object(d.a)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(t,e){var n=t.ownerState;return[e.loadingIndicator,e["loadingIndicator".concat(Object(o.a)(n.loadingPosition))]]}})((function(t){var e=t.theme,n=t.ownerState;return Object(i.a)({position:"absolute",visibility:"visible",display:"flex"},"start"===n.loadingPosition&&("outlined"===n.variant||"contained"===n.variant)&&{left:14},"start"===n.loadingPosition&&"text"===n.variant&&{left:6},"center"===n.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:e.palette.action.disabled},"end"===n.loadingPosition&&("outlined"===n.variant||"contained"===n.variant)&&{right:14},"end"===n.loadingPosition&&"text"===n.variant&&{right:6},"start"===n.loadingPosition&&n.fullWidth&&{position:"relative",left:-10},"end"===n.loadingPosition&&n.fullWidth&&{position:"relative",right:-10})})),W=c.forwardRef((function(t,e){var n=Object(j.a)({props:t,name:"MuiLoadingButton"}),a=n.children,d=n.disabled,u=void 0!==d&&d,b=n.id,h=n.loading,x=void 0!==h&&h,g=n.loadingIndicator,f=n.loadingPosition,m=void 0===f?"center":f,O=n.variant,p=void 0===O?"text":O,v=Object(r.a)(n,U),y=Object(s.a)(b),S=null!=g?g:Object(L.jsx)(X,{"aria-labelledby":y,color:"inherit",size:16}),w=Object(i.a)({},n,{disabled:u,loading:x,loadingIndicator:S,loadingPosition:m,variant:p}),C=function(t){var e=t.loading,n=t.loadingPosition,a=t.classes,r={root:["root",e&&"loading"],startIcon:[e&&"startIconLoading".concat(Object(o.a)(n))],endIcon:[e&&"endIconLoading".concat(Object(o.a)(n))],loadingIndicator:["loadingIndicator",e&&"loadingIndicator".concat(Object(o.a)(n))]},c=Object(l.a)(r,R,a);return Object(i.a)({},a,c)}(w);return Object(L.jsx)(E,Object(i.a)({disabled:u||x,id:y,ref:e},v,{variant:p,classes:C,ownerState:w,children:"end"===w.loadingPosition?Object(L.jsxs)(c.Fragment,{children:[a,x&&Object(L.jsx)(F,{className:C.loadingIndicator,ownerState:w,children:S})]}):Object(L.jsxs)(c.Fragment,{children:[x&&Object(L.jsx)(F,{className:C.loadingIndicator,ownerState:w,children:S}),a]})}))}));e.a=W},813:function(t,e,n){"use strict";n.r(e);var a=n(727),r=n(36),i=n(26),c=n(14),o=n(12),s=n.n(o),l=n(7),d=n(722),j=n(734),u=n(676),b=n(728),h=n(679),x=n(677),g=n(816),f=n(725),m=n(788),O=n(754),p=n.n(O),v=n(48),y=n.n(v),S=n(210),w=n(19),C=n(0),k=n.n(C),L=n(46),I=n(757),A=n.n(I),P=n(761),T=n.n(P),D={type:"area",height:150,options:{chart:{id:"support-chart",sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:1},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:"Ticket "},marker:{show:!0}}},series:[{data:[20,22,24]}]},B=n(1),M=function(){var t=Object(r.a)(),e=Object(L.c)((function(t){return t.customization})).navType,n=t.palette.success.dark;return Object(C.useEffect)((function(){var t=Object(w.a)(Object(w.a)({},D.options),{},{colors:[n],tooltip:{theme:"light"}});A.a.exec("support-chart","updateOptions",t)}),[e,n]),Object(B.jsx)(x.a,{sx:{bgcolor:t.palette.grey[900]},children:Object(B.jsx)(T.a,Object(w.a)({},D))})},X=n(756),R=function(){return Object(r.a)(),Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(a.a,{item:!0,justifyContent:"center",alignContent:"center",children:Object(B.jsx)(a.a,{item:!0,lg:11,sx:{mx:1.5},children:Object(B.jsx)("img",{width:60,src:X.a,alt:"shares banner"})})})})},z=n(759),U=n(758),E=n.n(U),F=n(82),W=n(760);var N={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:300,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,borderRadius:7,borderColor:"black",p:3},V=Object(l.a)(f.a)({color:"#52af77",height:8,"& .MuiSlider-track":{border:"none"},"& .MuiSlider-thumb":{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor","&:focus, &:hover, &.Mui-active, &.Mui-focusVisible":{boxShadow:"inherit"},"&:before":{display:"none"}},"& .MuiSlider-valueLabel":{lineHeight:1.2,fontSize:12,background:"unset",padding:0,width:32,height:32,borderRadius:"50% 50% 50% 0",backgroundColor:"#52af77",transformOrigin:"bottom left",transform:"translate(50%, -100%) rotate(-45deg) scale(0)","&:before":{display:"none"},"&.MuiSlider-valueLabelOpen":{transform:"translate(50%, -100%) rotate(-45deg) scale(1)"},"& > *":{transform:"rotate(45deg)"}}}),Y=function(){var t=k.a.useState(1),e=Object(c.a)(t,2),o=e[0],l=e[1],f=k.a.useState(0),O=Object(c.a)(f,2),v=O[0],w=O[1],L=k.a.useState(0),I=Object(c.a)(L,2),A=I[0],P=I[1],T=Object(r.a)(),D=n(212),X=Object(C.useState)(0),U=Object(c.a)(X,2),Y=U[0],_=U[1],H=Object(C.useState)(0),J=Object(c.a)(H,2),q=(J[0],J[1]),G=Object(C.useState)(0),K=Object(c.a)(G,2),Q=K[0],Z=K[1],$=Object(C.useState)(0),tt=Object(c.a)($,2),et=tt[0],nt=tt[1],at=Object(C.useState)(0),rt=Object(c.a)(at,2),it=rt[0],ct=rt[1],ot=4.5625*et,st=(o*Y).toString(),lt=y.a.utils.toWei(st,"ether"),dt=new D(v).decimalPlaces(2).toLocaleString(void 0),jt=Q/it*100,ut=k.a.useState(!1),bt=Object(c.a)(ut,2),ht=(bt[0],bt[1],k.a.useState(!1)),xt=Object(c.a)(ht,2),gt=xt[0],ft=xt[1],mt=k.a.useState(!1),Ot=Object(c.a)(mt,2),pt=Ot[0],vt=Ot[1],yt=function(){return vt(!1)},St=jt.toLocaleString(void 0,{maximumFractionDigits:1}),wt=function(){var t=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(F.b)().then((function(t){_(t)})).catch((function(t){console.log(t)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Ct=function(){var t=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(F.c)().then((function(t){q(t),console.log(t)})).catch((function(t){console.log(t)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),kt=function(){var t=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(F.f)().then((function(t){Z(t),nt(t>20?20:t)})).catch((function(t){console.log(t)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Lt=function(){var t=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(F.e)().then((function(t){w(t)})).catch((function(t){console.log(t)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),It=function(){var t=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(F.h)().then((function(t){P(t)})).catch((function(t){console.log(t)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),At=function(){var t=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(F.l)().then((function(t){ct(t)})).catch((function(t){console.log(t)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(C.useEffect)((function(){function t(){return(t=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:kt(),Ct(),At(),wt(),Lt(),It();case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(d.a,{open:pt,onClose:yt,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(B.jsxs)(j.a,{sx:N,children:[Object(B.jsx)(a.a,{item:!0,sx:{display:"flex",justifyContent:"center"},children:Object(B.jsx)(p.a,{color:"success",fontSize:"large"})}),Object(B.jsx)(u.a,{variant:"h5",textAlign:"center",sx:{mt:3},component:"h2",children:"Transaction completed."}),Object(B.jsx)(a.a,{item:!0,sx:{display:"flex",justifyContent:"center"},children:Object(B.jsx)(b.a,{onClick:yt,sx:{mt:3,fontSize:15,width:80,height:30,color:T.palette.grey[900],backgroundColor:T.palette.success.main},children:"Close"})})]})}),Object(B.jsx)(S.a,{sx:{width:"full%",height:"108%",borderRadius:0,backgroundColor:T.palette.grey[900],border:0},content:!1,children:Object(B.jsx)(h.a,{children:Object(B.jsxs)(a.a,{container:!0,sx:{justifyContent:"center",display:"flex"},children:[Object(B.jsx)(a.a,{container:!0,sx:{justifyContent:"center",display:"flex"},mt:5,children:Object(B.jsx)(u.a,{textAlign:"center",variant:"h6",color:T.palette.grey[50],children:"Shares & BUSD Dividends"})}),Object(B.jsx)(a.a,{item:!0,container:!0,xs:12,sx:{mt:5,display:"flex",justifyContent:"center"},lg:4.5,children:Object(B.jsx)(x.a,{sx:{borderLeft:1,borderRight:1,borderBottom:3,borderColor:T.palette.success.light,borderRadius:5,boxShadow:"0px 10px 20px rgb(0, 230, 117)"},children:Object(B.jsxs)(a.a,{container:!0,sx:{mt:2,display:"flex",justifyContent:"center"},children:[Object(B.jsxs)(a.a,{container:!0,spacing:1,sx:{display:"flex",justifyContent:"center",mt:2},children:[Object(B.jsx)(a.a,{item:!0,xs:"auto",lg:"auto",md:"auto",sm:"auto",children:Object(B.jsx)(u.a,{variant:"h2",color:T.palette.grey[50],children:"SHARES"})}),Object(B.jsx)(a.a,{item:!0,xs:"auto",lg:"auto",sm:"auto",md:"auto",children:Object(B.jsx)(u.a,{variant:"h2",color:T.palette.success.main,textAlign:"left",children:"STAX"})}),Object(B.jsx)(a.a,{item:!0,lg:"auto",sx:{pl:.5,mt:.24},children:Object(B.jsx)(g.a,{sx:{color:T.palette.success.main},title:Object(B.jsx)(u.a,{sx:{color:T.palette.success.main},children:"The initial (starting) price of sSTX is 20 BUSD and it increases by 0.01 BUSD every sSTX sold. The current sSTX price can be checked below. 70% of the BUSD amount used for sSTX purchases is distributed to sSTX holders every 24 hours."}),children:Object(B.jsx)(E.a,{})})})]}),Object(B.jsx)(a.a,{item:!0,sx:{backgroundColor:T.palette.grey[900],my:0},lg:10,xs:9.3,children:Object(B.jsx)(M,{})}),Object(B.jsxs)(a.a,{item:!0,sx:{backgroundColor:T.palette.grey[900],mt:1.6},lg:4.7,md:7,sm:7,xs:"auto",children:[Object(B.jsx)(u.a,{sx:{my:2},variant:"h5",textAlign:"left",children:"Total Sold:"}),Object(B.jsx)(u.a,{sx:{my:2},variant:"h5",textAlign:"left",children:"Initial Price:"}),Object(B.jsx)(u.a,{sx:{my:2},variant:"h5",textAlign:"left",children:"Current Price:"}),Object(B.jsx)(u.a,{sx:{my:2},variant:"h5",textAlign:"left",children:"BUSD Balance:"}),Object(B.jsx)(u.a,{sx:{my:2},variant:"h5",textAlign:"left",children:"BONUS APY:"}),Object(B.jsx)(u.a,{sx:{my:2},variant:"h5",textAlign:"left",children:"sSTX Balance:"})]}),Object(B.jsxs)(a.a,{item:!0,sx:{backgroundColor:T.palette.grey[900],mt:1.6},lg:"auto",sm:"auto",md:"auto",xs:4,children:[Object(B.jsxs)(a.a,{item:!0,container:!0,sx:{mt:1.8,justifyContent:"right"},children:[Object(B.jsxs)(u.a,{variant:"h5",textAlign:"right",children:[it,"/40,000"]}),Object(B.jsx)(W.a,{})]}),Object(B.jsxs)(a.a,{item:!0,container:!0,sx:{mt:1,justifyContent:"right"},children:[Object(B.jsx)(u.a,{variant:"h5",textAlign:"right",children:"20"}),Object(B.jsx)(z.a,{})]}),Object(B.jsxs)(a.a,{item:!0,container:!0,sx:{mt:1,justifyContent:"right"},children:[Object(B.jsx)(u.a,{variant:"h5",textAlign:"right",children:Y}),Object(B.jsx)(z.a,{})]}),Object(B.jsxs)(a.a,{item:!0,container:!0,sx:{mt:1,justifyContent:"right"},children:[Object(B.jsx)(u.a,{variant:"h5",textAlign:"right",children:dt}),Object(B.jsx)(z.a,{})]}),Object(B.jsxs)(u.a,{sx:{mt:.7,color:T.palette.success.main},variant:"h5",textAlign:"right",children:[ot," %"]}),Object(B.jsxs)(u.a,{sx:{my:2,color:T.palette.success.main},variant:"h5",textAlign:"right",children:[Q," sSTX"]})]}),Object(B.jsx)(a.a,{container:!0,sx:{display:"flex",justifyContent:"center"},children:Object(B.jsx)(a.a,{item:!0,lg:5,xs:7.5,children:Object(B.jsx)(V,{valueLabelDisplay:"auto","aria-label":"pretto slider",onChange:function(t,e){l(e)},defaultValue:1,min:1,max:10})})}),Object(B.jsx)(a.a,{item:!0,sx:{mb:3,display:"flex",justifyContent:"center"},children:Object(B.jsxs)(m.a,{loading:gt,onClick:function(){Object(F.c)(),ft(!0),Object(F.a)("0xb08ce509cafb6660e4f7b951fbb8ae63930a6aee",lt).then((function(t){Object(F.j)(o).then((function(){ft(!1),vt(!0),kt(),At(),wt(),Lt(),It()}))}))},sx:{fontSize:18,minHeight:45,minWidth:140,bgcolor:T.palette.success.main,backgroundColor:T.palette.success.main,color:T.palette.grey[900]},children:["BUY ",o," sSTX"]})})]})})}),Object(B.jsxs)(a.a,{item:!0,container:!0,sx:{display:"flex",justifyContent:"center",mt:3},lg:4.5,children:[Object(B.jsx)(a.a,{item:!0,lg:11.5,xs:12,md:12,sm:12,mt:2,children:Object(B.jsx)(x.a,{sx:{borderLeft:1,borderRight:1,borderBottom:3,height:"auto",width:"100%",borderColor:T.palette.success.light,borderRadius:5,boxShadow:"0px 10px 20px rgb(0, 230, 117)"},children:Object(B.jsxs)(a.a,{container:!0,sx:{height:"auto",mt:2},children:[Object(B.jsxs)(a.a,{container:!0,sx:{display:"flex",justifyContent:"center"},children:[Object(B.jsx)(a.a,{item:!0,lg:"auto",xs:"auto",sm:"auto",children:Object(B.jsx)(u.a,{variant:"h2",color:T.palette.success.main,textAlign:"right",children:"STAX"})}),Object(B.jsx)(a.a,{item:!0,lg:"auto",xs:"auto",sm:"auto",children:Object(B.jsx)(u.a,{variant:"h2",sx:{ml:1},color:T.palette.grey[50],textAlign:"left",children:"Shares stats"})})]}),Object(B.jsxs)(a.a,{container:!0,sx:{display:"flex",justifyContent:"center"},children:[Object(B.jsx)(a.a,{item:!0,lg:12,xs:12,children:Object(B.jsxs)(u.a,{variant:"h5",sx:{mt:2},color:T.palette.grey[50],textAlign:"center",children:["My sSTX Balance: ",Q," sSTX"]})}),Object(B.jsx)(a.a,{item:!0,lg:12,xs:12,children:Object(B.jsxs)(u.a,{variant:"h5",sx:{mt:2},color:T.palette.grey[50],textAlign:"center",children:["Circulating sSTX: ",it," sSTX"]})}),Object(B.jsx)(a.a,{item:!0,lg:"auto",xs:"auto",sm:"auto",sx:{my:2},children:Object(B.jsxs)(u.a,{variant:"h5",color:T.palette.grey[50],textAlign:"center",children:["My Share Rate: ",St," %"]})}),Object(B.jsx)(a.a,{item:!0,lg:.5,sm:.5,sx:{pl:.5,mt:1.1,justifyContent:"center",display:"flex"},children:Object(B.jsx)(g.a,{sx:{height:20,color:T.palette.success.main,mt:.8},title:Object(B.jsx)(u.a,{sx:{color:T.palette.success.main},children:"`Share rate shows how many tokens you own from all minted tokens at the current moment. If user owns 1 sSTX out of 100sSTX, then that address has a share rate of 1% and earn 1% of all BUSD rewards at that moment.`"}),children:Object(B.jsx)(E.a,{})})})]})]})})}),Object(B.jsx)(a.a,{item:!0,container:!0,sx:{display:"flex",justifyContent:"center",mt:3},lg:11.5,children:Object(B.jsx)(a.a,{item:!0,lg:12,xs:12,md:12,sm:12,children:Object(B.jsx)(x.a,{sx:{borderLeft:1,borderRight:1,borderBottom:3,height:"100%",width:"100%",borderColor:T.palette.success.light,borderRadius:5,boxShadow:"0px 10px 20px rgb(0, 230, 117)"},children:Object(B.jsxs)(a.a,{container:!0,sx:{my:3.3,display:"flex",justifyContent:"center"},children:[Object(B.jsx)(a.a,{item:!0,lg:"auto",xs:"auto",sm:"auto",md:"auto",sx:{mt:1.3},children:Object(B.jsx)(R,{})}),Object(B.jsx)(a.a,{item:!0,lg:"auto",xs:"auto",md:"auto",sm:"auto",sx:{ml:.5,mt:3.3},children:Object(B.jsx)(u.a,{variant:"h2",color:T.palette.success.main,children:"Dividends"})}),Object(B.jsx)(a.a,{item:!0,lg:12,md:12,sx:{mt:1,justifyContent:"center",display:"flex"},children:Object(B.jsx)(a.a,{item:!0,lg:8,xs:10,md:7,children:Object(B.jsx)(u.a,{variant:"h5",sx:{mt:2},color:T.palette.grey[50],textAlign:"center",children:"Any pending BUSD Dividends will appear here. Claim the BUSD rewards by clicking below buttons."})})}),Object(B.jsxs)(a.a,{item:!0,lg:12,md:12,xs:10,sx:{mt:5,justifyContent:"center",display:"flex"},children:[Object(B.jsx)(u.a,{variant:"h5",color:T.palette.grey[50],textAlign:"center",children:"STAX Volume Dividends"}),Object(B.jsx)(g.a,{sx:{height:20,color:T.palette.success.main},title:Object(B.jsx)(u.a,{sx:{color:T.palette.success.main},children:"There is 1% fee on every STAX BUY / SELL transaction and those fees are distributed as BUSD Dividends in a direct proportion to sSTX holders."}),children:Object(B.jsx)(E.a,{})})]}),Object(B.jsxs)(a.a,{item:!0,lg:"auto",md:"auto",xs:"auto",sx:{mt:1,mx:1,justifyContent:"center",display:"flex"},children:[Object(B.jsx)(u.a,{variant:"h2",sx:{mr:1},color:T.palette.grey[50],textAlign:"right",children:"0"}),Object(B.jsx)(z.a,{}),Object(B.jsx)(b.a,{sx:{ml:1,fontSize:18,height:30,minWidth:80,bgcolor:T.palette.success.main,backgroundColor:T.palette.success.main,color:T.palette.grey[900]},children:"Claim"})]}),Object(B.jsxs)(a.a,{item:!0,lg:12,md:12,xs:10,sx:{mt:2,justifyContent:"center",display:"flex"},children:[Object(B.jsx)(u.a,{variant:"h5",color:T.palette.grey[50],textAlign:"center",children:"STAX Pool Dividends"}),Object(B.jsx)(g.a,{sx:{height:20,color:T.palette.success.main},title:Object(B.jsx)(u.a,{sx:{color:T.palette.success.main},children:"There is 1% fee on every STAX BUY / SELL transaction and those fees are distributed as BUSD Dividends in a direct proportion to sSTX holders."}),children:Object(B.jsx)(E.a,{})})]}),Object(B.jsxs)(a.a,{item:!0,lg:"auto",md:"auto",xs:"auto",sx:{mt:1,justifyContent:"center",display:"flex"},children:[Object(B.jsx)(u.a,{variant:"h2",sx:{mr:1},color:T.palette.grey[50],textAlign:"right",children:A}),Object(B.jsx)(z.a,{}),Object(B.jsx)(b.a,{sx:{ml:1,fontSize:18,height:30,minWidth:80,bgcolor:T.palette.success.main,backgroundColor:T.palette.success.main,color:T.palette.grey[900]},children:"Claim"})]})]})})})})]})]})})})]})};e.default=function(){return Object(r.a)(),Object(B.jsx)(a.a,{container:!0,sx:{justifyContent:"center",display:"flex"},children:Object(B.jsx)(a.a,{item:!0,lg:12,children:Object(B.jsx)(Y,{})})})}}}]);
//# sourceMappingURL=8.3ba06857.chunk.js.map