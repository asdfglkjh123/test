(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[7],{742:function(e,t,n){"use strict";n.d(t,"e",(function(){return p})),n.d(t,"j",(function(){return b})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return j})),n.d(t,"k",(function(){return m})),n.d(t,"i",(function(){return y})),n.d(t,"l",(function(){return g})),n.d(t,"a",(function(){return O})),n.d(t,"f",(function(){return v})),n.d(t,"d",(function(){return S})),n.d(t,"g",(function(){return w})),n.d(t,"h",(function(){return k}));var a,r,c,s,i=n(126),o=n(48),u=n.n(o),l=n(213),d=n.n(l),h=!1,x=function(){var e=Object(i.a)(u.a.mark((function e(){var t,n,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"undefined"!==typeof(t=window.ethereum)&&(t.request({method:"eth_requestAccounts"}).then((function(e){a=e[0],console.log("Selected account is ".concat(a))})).catch((function(e){console.log(e)})),window.ethereum.on("accountsChanged",(function(e){a=e[0],console.log("Selected account changed to ".concat(a))}))),n=new d.a(t),e.next=5,n.eth.net.getId();case 5:e.sent,i=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],name:"_getSoldSHARES",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"samount",type:"uint256"}],name:"PurchaseSHARES",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getSTXPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_staker",type:"address"}],name:"hasStake",outputs:[{components:[{internalType:"uint256",name:"total_amount",type:"uint256"},{components:[{internalType:"address",name:"user",type:"address"},{internalType:"string",name:"stakename",type:"string"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"since",type:"uint256"},{internalType:"uint256",name:"claimable",type:"uint256"},{internalType:"uint256",name:"sharesbonus",type:"uint256"}],internalType:"struct Stakeable.Stake[]",name:"stakes",type:"tuple[]"}],internalType:"struct Stakeable.StakingSummary",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"string",name:"_stakename",type:"string"}],name:"stake",outputs:[],stateMutability:"nonpayable",type:"function"}],r=new n.eth.Contract(i,"0xb08CE509caFb6660E4F7b951Fbb8ae63930a6aEE"),c=new n.eth.Contract(i,"0xF224398d6d757142eDE2F6AFFa4837DBDa9C04CA"),s=new n.eth.Contract(i,"0xd389253265dd6b85C47c410EC5fF0c6A383CE949"),h=!0;case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=3;break}return e.next=3,x();case 3:return e.abrupt("return",r.methods.balanceOf(a).call().then((function(e){return d.a.utils.toWei(e,"wei")})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=3;break}return e.next=3,x();case 3:return e.abrupt("return",r.methods.totalSupply().call().then((function(e){return d.a.utils.toWei(e,"wei")})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=3;break}return e.next=3,x();case 3:return e.abrupt("return",r.methods.getSTXPrice().call().then((function(e){return d.a.utils.fromWei(e,"ether")})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=3;break}return e.next=3,x();case 3:return e.abrupt("return",r.methods.getSTXPrice().call().then((function(e){return d.a.utils.toWei(e,"ether")})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=3;break}return e.next=3,x();case 3:return e.abrupt("return",c.methods.hasStake(a).call());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=3;break}return e.next=3,x();case 3:return e.abrupt("return",r.methods.PurchaseSHARES(t).send({from:a}).catch((function(e){console.log(e)})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=3;break}return e.next=3,x();case 3:return e.abrupt("return",c.methods.stake(t,n).send({from:a}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=3;break}return e.next=3,x();case 3:return e.abrupt("return",s.methods.approve("0xb08ce509cafb6660e4f7b951fbb8ae63930a6aee",n).send({from:a}).catch((function(e){console.log(e)})));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=3;break}return e.next=3,x();case 3:return e.abrupt("return",c.methods.balanceOf(a).call().then((function(e){return d.a.utils.fromWei(e,"ether")})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=3;break}return e.next=3,x();case 3:return e.abrupt("return",s.methods.balanceOf(a).call().then((function(e){return d.a.utils.fromWei(e,"ether")})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=3;break}return e.next=3,x();case 3:return e.abrupt("return",s.methods.balanceOf("0xb08ce509cafb6660e4f7b951fbb8ae63930a6aee").call().then((function(e){return d.a.utils.fromWei(e,"ether")})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=3;break}return e.next=3,x();case 3:return e.abrupt("return",c.methods.totalSupply().call().then((function(e){return d.a.utils.fromWei(e,"ether")})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},746:function(e,t,n){"use strict";var a=n(124);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(125)),c=n(1),s=(0,r.default)((0,c.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");t.default=s},775:function(e,t,n){"use strict";n.r(t);var a=n(722),r=n(32),c=n(126),s=n(14),i=n(48),o=n.n(i),u=n(7),l=n(330),d=n(208),h=n(328),x=n(777),p=n(723),b=n(720),f=n(209),j=n(18),m=n(0),y=n.n(m),g=n(44),O=n(745),v=n.n(O),S=n(748),w=n.n(S),k={type:"area",height:150,options:{chart:{id:"support-chart",sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:1},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:"Ticket "},marker:{show:!0}}},series:[{data:[20,22,24]}]},C=n(1),T=function(){var e=Object(r.a)(),t=Object(g.c)((function(e){return e.customization})).navType,n=e.palette.success.dark;return Object(m.useEffect)((function(){var e=Object(j.a)(Object(j.a)({},k.options),{},{colors:[n],tooltip:{theme:"light"}});v.a.exec("support-chart","updateOptions",e)}),[t,n]),Object(C.jsx)(h.a,{sx:{bgcolor:e.palette.grey[900]},children:Object(C.jsx)(w.a,Object(j.a)({},k))})},A=n.p+"static/media/busdlogo.78457406.png",X=function(){return Object(r.a)(),Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(a.a,{item:!0,justifyContent:"center",alignContent:"center",children:Object(C.jsx)(a.a,{item:!0,lg:11,sx:{mx:1.5},children:Object(C.jsx)("img",{width:60,src:A,alt:"shares banner"})})})})},B=function(){return Object(r.a)(),Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(a.a,{justifyContent:"center",children:Object(C.jsx)("img",{width:26,src:A,alt:"shares banner"})})})},D=n(746),M=n.n(D),U=n(742),E=Object(u.a)(b.a)({color:"#52af77",height:8,"& .MuiSlider-track":{border:"none"},"& .MuiSlider-thumb":{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor","&:focus, &:hover, &.Mui-active, &.Mui-focusVisible":{boxShadow:"inherit"},"&:before":{display:"none"}},"& .MuiSlider-valueLabel":{lineHeight:1.2,fontSize:12,background:"unset",padding:0,width:32,height:32,borderRadius:"50% 50% 50% 0",backgroundColor:"#52af77",transformOrigin:"bottom left",transform:"translate(50%, -100%) rotate(-45deg) scale(0)","&:before":{display:"none"},"&.MuiSlider-valueLabelOpen":{transform:"translate(50%, -100%) rotate(-45deg) scale(1)"},"& > *":{transform:"rotate(45deg)"}}}),L=function(){var e=y.a.useState(1),t=Object(s.a)(e,2),i=t[0],u=t[1],b=y.a.useState(0),j=Object(s.a)(b,2),g=j[0],O=j[1],v=y.a.useState(0),S=Object(s.a)(v,2),w=S[0],k=S[1],A=Object(r.a)(),D=n(744),L=Object(m.useState)(0),F=Object(s.a)(L,2),R=F[0],P=F[1],W=Object(m.useState)(0),_=Object(s.a)(W,2),z=_[0],H=_[1],I=Object(m.useState)(0),V=Object(s.a)(I,2),Y=V[0],q=V[1],J=Object(m.useState)(0),N=Object(s.a)(J,2),G=N[0],K=N[1],Q=Object(m.useState)(0),Z=Object(s.a)(Q,2),$=Z[0],ee=Z[1],te=4.5625*G,ne=new D(g).decimalPlaces(4).toLocaleString(void 0),ae=new D(i),re=new D(z).multipliedBy(ae),ce=(Y/$*100).toLocaleString(void 0,{maximumFractionDigits:1}),se=function(){var e=Object(c.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(U.b)().then((function(e){P(e)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=Object(c.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(U.c)().then((function(e){H(e),console.log(e)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=Object(c.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(U.e)().then((function(e){q(e),K(e>20?20:e)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(c.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(U.d)().then((function(e){O(e)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=Object(c.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(U.g)().then((function(e){k(e)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=Object(c.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(U.j)().then((function(e){ee(e)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.useEffect)((function(){function e(){return(e=Object(c.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:oe(),ie(),de(),se(),ue(),le();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(f.a,{sx:{width:"full%",height:"108%",borderRadius:0,backgroundColor:A.palette.grey[900],border:0},content:!1,children:Object(C.jsx)(l.a,{children:Object(C.jsxs)(a.a,{container:!0,sx:{justifyContent:"center",display:"flex"},children:[Object(C.jsx)(a.a,{container:!0,lg:12,sx:{justifyContent:"center",display:"flex"},mt:5,children:Object(C.jsx)(d.a,{textAlign:"center",variant:"h6",color:A.palette.grey[50],children:"Shares & BUSD Dividends"})}),Object(C.jsx)(a.a,{container:!0,sx:{display:"flex",justifyContent:"center"},lg:4.5,children:Object(C.jsx)(a.a,{item:!0,lg:11.5,xs:12,md:12,sm:12,sx:{mt:5},children:Object(C.jsx)(h.a,{sx:{borderLeft:1,borderRight:1,borderBottom:3,borderColor:A.palette.success.light,borderRadius:5,boxShadow:"0px 10px 20px rgb(0, 230, 117)"},children:Object(C.jsxs)(a.a,{container:!0,sx:{mt:2,display:"flex",justifyContent:"center"},children:[Object(C.jsxs)(a.a,{container:!0,spacing:1,sx:{display:"flex",justifyContent:"center",mt:2},children:[Object(C.jsx)(a.a,{item:!0,xs:"auto",lg:"auto",md:"auto",sm:"auto",children:Object(C.jsx)(d.a,{variant:"h4",color:A.palette.grey[50],children:z})}),Object(C.jsx)(a.a,{item:!0,xs:"auto",lg:"auto",sm:"auto",md:"auto",children:Object(C.jsx)(d.a,{variant:"h2",color:A.palette.success.main,textAlign:"left",children:"STAX"})}),Object(C.jsx)(a.a,{item:!0,lg:"auto",sx:{pl:.5,mt:.24},children:Object(C.jsx)(x.a,{sx:{color:A.palette.success.main},title:Object(C.jsx)(d.a,{sx:{color:A.palette.success.main},children:"The initial (starting) price of sSTX is 20 BUSD and it increases by 0.01 BUSD every sSTX sold. The current sSTX price can be checked below. 70% of the BUSD amount used for sSTX purchases is distributed to sSTX holders every 24 hours."}),children:Object(C.jsx)(M.a,{})})})]}),Object(C.jsx)(a.a,{item:!0,sx:{backgroundColor:A.palette.grey[900],my:0},lg:10,xs:9.3,children:Object(C.jsx)(T,{})}),Object(C.jsxs)(a.a,{item:!0,sx:{backgroundColor:A.palette.grey[900],mt:1.6},lg:4.7,xs:5.5,children:[Object(C.jsx)(d.a,{sx:{my:2},variant:"h5",textAlign:"left",children:"Total sSTX Sold:"}),Object(C.jsx)(d.a,{sx:{my:2},variant:"h5",textAlign:"left",children:"Initial sSTX Price:"}),Object(C.jsx)(d.a,{sx:{my:2},variant:"h5",textAlign:"left",children:"Current sSTX Price:"}),Object(C.jsx)(d.a,{sx:{my:2},variant:"h5",textAlign:"left",children:"My BUSD Balance:"}),Object(C.jsx)(d.a,{sx:{my:2},variant:"h5",textAlign:"left",children:"My BONUS APY:"}),Object(C.jsx)(d.a,{sx:{my:2},variant:"h5",textAlign:"left",children:"My sSTX Balance:"})]}),Object(C.jsxs)(a.a,{item:!0,sx:{backgroundColor:A.palette.grey[900],mt:1.6},lg:"auto",sm:"auto",md:"auto",xs:"auto",children:[Object(C.jsxs)(d.a,{sx:{my:2},variant:"h5",textAlign:"right",children:[$,"/100,000 sSTX"]}),Object(C.jsx)(d.a,{sx:{my:2},variant:"h5",textAlign:"right",children:"20 BUSD"}),Object(C.jsxs)(d.a,{sx:{my:2},variant:"h5",textAlign:"right",children:[R," BUSD"]}),Object(C.jsxs)(d.a,{sx:{my:2},variant:"h5",textAlign:"right",children:[ne," BUSD"]}),Object(C.jsxs)(d.a,{sx:{my:2,color:A.palette.success.main},variant:"h5",textAlign:"right",children:[te," %"]}),Object(C.jsxs)(d.a,{sx:{my:2,color:A.palette.success.main},variant:"h5",textAlign:"right",children:[Y," sSTX"]})]}),Object(C.jsx)(a.a,{container:!0,sx:{display:"flex",justifyContent:"center"},children:Object(C.jsx)(a.a,{item:!0,lg:5,xs:7.5,children:Object(C.jsx)(E,{valueLabelDisplay:"auto","aria-label":"pretto slider",onChange:function(e){return u(e.target.value)},min:1,max:10,defaultValue:1})})}),Object(C.jsx)(a.a,{container:!0,sx:{display:"flex",justifyContent:"center"},children:Object(C.jsx)(a.a,{item:!0,lg:12,sx:{mb:3,display:"flex",justifyContent:"center"},children:Object(C.jsxs)(p.a,{onClick:function(){Object(U.c)(),Object(U.a)("0xb08ce509cafb6660e4f7b951fbb8ae63930a6aee",re).then((function(e){Object(U.i)(i).then((function(e){oe(),ie(),de(),se(),ue(),le()}))}))},sx:{minHeight:45,minWidth:140,backgroundColor:A.palette.success.main,color:A.palette.grey[900]},children:["BUY ",i," sSTX"]})})})]})})})}),Object(C.jsxs)(a.a,{container:!0,sx:{display:"flex",justifyContent:"center",mt:3},lg:4.5,children:[Object(C.jsx)(a.a,{item:!0,lg:11.5,xs:12,md:12,sm:12,mt:2,children:Object(C.jsx)(h.a,{sx:{borderLeft:1,borderRight:1,borderBottom:3,height:"auto",width:"100%",borderColor:A.palette.success.light,borderRadius:5,boxShadow:"0px 10px 20px rgb(0, 230, 117)"},children:Object(C.jsxs)(a.a,{container:!0,sx:{height:"auto",mt:2},children:[Object(C.jsxs)(a.a,{container:!0,sx:{display:"flex",justifyContent:"center"},children:[Object(C.jsx)(a.a,{item:!0,lg:"auto",xs:"auto",sm:"auto",children:Object(C.jsx)(d.a,{variant:"h2",color:A.palette.success.main,textAlign:"right",children:"STAX"})}),Object(C.jsx)(a.a,{item:!0,lg:"auto",xs:"auto",sm:"auto",children:Object(C.jsx)(d.a,{variant:"h2",sx:{ml:1},color:A.palette.grey[50],textAlign:"left",children:"Shares stats"})})]}),Object(C.jsxs)(a.a,{container:!0,sx:{display:"flex",justifyContent:"center"},children:[Object(C.jsx)(a.a,{item:!0,lg:12,xs:12,children:Object(C.jsxs)(d.a,{variant:"h5",sx:{mt:2},color:A.palette.grey[50],textAlign:"center",children:["My sSTX Balance: ",Y," sSTX"]})}),Object(C.jsx)(a.a,{item:!0,lg:12,xs:12,children:Object(C.jsxs)(d.a,{variant:"h5",sx:{mt:2},color:A.palette.grey[50],textAlign:"center",children:["Circulating sSTX: ",$," sSTX"]})}),Object(C.jsx)(a.a,{item:!0,lg:"auto",xs:"auto",sm:"auto",sx:{my:2},children:Object(C.jsxs)(d.a,{variant:"h5",color:A.palette.grey[50],textAlign:"center",children:["My Share Rate: ",ce," %"]})}),Object(C.jsx)(a.a,{item:!0,lg:.5,sm:.5,sx:{pl:.5,mt:1.1,justifyContent:"center",display:"flex"},children:Object(C.jsx)(x.a,{sx:{height:20,color:A.palette.success.main,mt:.8},title:Object(C.jsx)(d.a,{sx:{color:A.palette.success.main},children:"`Share rate shows how many tokens you own from all minted tokens at the current moment. If user owns 1 sSTX out of 100sSTX, then that address has a share rate of 1% and earn 1% of all BUSD rewards at that moment.`"}),children:Object(C.jsx)(M.a,{})})})]})]})})}),Object(C.jsx)(a.a,{container:!0,sx:{display:"flex",justifyContent:"center",mt:3},lg:11.5,children:Object(C.jsx)(a.a,{item:!0,lg:12,xs:12,md:12,sm:12,children:Object(C.jsx)(h.a,{sx:{borderLeft:1,borderRight:1,borderBottom:3,height:"100%",width:"100%",borderColor:A.palette.success.light,borderRadius:5,boxShadow:"0px 10px 20px rgb(0, 230, 117)"},children:Object(C.jsxs)(a.a,{container:!0,sx:{my:3.3,display:"flex",justifyContent:"center"},children:[Object(C.jsx)(a.a,{item:!0,lg:"auto",xs:"auto",sm:"auto",md:"auto",sx:{mt:1.3},children:Object(C.jsx)(X,{})}),Object(C.jsx)(a.a,{item:!0,lg:"auto",md:"auto",xs:"auto",sm:"auto",children:Object(C.jsx)(d.a,{variant:"h2",xs:"auto",sx:{mt:3.3},color:A.palette.grey[50],children:"BUSD"})}),Object(C.jsx)(a.a,{item:!0,lg:"auto",xs:"auto",md:"auto",sm:"auto",sx:{ml:.5,mt:3.3},children:Object(C.jsx)(d.a,{variant:"h2",color:A.palette.success.main,children:"Dividends"})}),Object(C.jsx)(a.a,{item:!0,lg:12,sx:{mt:1,justifyContent:"center",display:"flex"},children:Object(C.jsx)(a.a,{item:!0,lg:8,xs:10,md:7,children:Object(C.jsx)(d.a,{variant:"h5",sx:{mt:2},color:A.palette.grey[50],textAlign:"center",children:"Any pending BUSD Dividends will appear here. Claim the BUSD rewards by clicking below buttons."})})}),Object(C.jsxs)(a.a,{item:!0,lg:12,xs:10,sx:{mt:5,justifyContent:"center",display:"flex"},children:[Object(C.jsx)(d.a,{variant:"h5",color:A.palette.grey[50],textAlign:"center",children:"STAX Volume Dividends"}),Object(C.jsx)(x.a,{sx:{height:20,color:A.palette.success.main},title:Object(C.jsx)(d.a,{sx:{color:A.palette.success.main},children:"There is 1% fee on every STAX BUY / SELL transaction and those fees are distributed as BUSD Dividends in a direct proportion to sSTX holders."}),children:Object(C.jsx)(M.a,{})})]}),Object(C.jsxs)(a.a,{item:!0,lg:5,xs:"auto",sx:{mt:1,mx:1,justifyContent:"right",display:"flex"},children:[Object(C.jsx)(d.a,{variant:"h2",sx:{mr:1},color:A.palette.grey[50],textAlign:"center",children:"0"}),Object(C.jsx)(B,{})]}),Object(C.jsx)(a.a,{item:!0,lg:4.3,xs:3,sx:{mt:.7,justifyContent:"left",display:"flex"},children:Object(C.jsx)(p.a,{sx:{mb:1,height:35,backgroundColor:A.palette.success.main,color:A.palette.grey[900]},children:"Claim"})}),Object(C.jsxs)(a.a,{item:!0,lg:12,xs:10,sx:{mt:2,justifyContent:"center",display:"flex"},children:[Object(C.jsx)(d.a,{variant:"h5",color:A.palette.grey[50],textAlign:"center",children:"STAX Pool Dividends"}),Object(C.jsx)(x.a,{sx:{height:20,color:A.palette.success.main},title:Object(C.jsx)(d.a,{sx:{color:A.palette.success.main},children:"There is 1% fee on every STAX BUY / SELL transaction and those fees are distributed as BUSD Dividends in a direct proportion to sSTX holders."}),children:Object(C.jsx)(M.a,{})})]}),Object(C.jsxs)(a.a,{item:!0,lg:5,xs:"auto",sx:{mt:1,mx:1,justifyContent:"right",display:"flex"},children:[Object(C.jsx)(d.a,{variant:"h2",sx:{mr:1},color:A.palette.grey[50],textAlign:"center",children:w}),Object(C.jsx)(B,{})]}),Object(C.jsx)(a.a,{item:!0,lg:4.3,xs:3,sx:{mt:.7,justifyContent:"left",display:"flex"},children:Object(C.jsx)(p.a,{sx:{mb:1,height:35,backgroundColor:A.palette.success.main,color:A.palette.grey[900]},children:"Claim"})})]})})})})]})]})})})})};t.default=function(){return Object(r.a)(),Object(C.jsx)(a.a,{container:!0,sx:{justifyContent:"center",display:"flex"},children:Object(C.jsx)(a.a,{item:!0,lg:12,children:Object(C.jsx)(L,{})})})}}}]);
//# sourceMappingURL=7.324c7658.chunk.js.map