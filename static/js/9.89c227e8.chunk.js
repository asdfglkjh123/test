(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[9],{742:function(e,t,n){"use strict";n.d(t,"e",(function(){return p})),n.d(t,"i",(function(){return b})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"j",(function(){return f})),n.d(t,"k",(function(){return y})),n.d(t,"a",(function(){return g})),n.d(t,"f",(function(){return S})),n.d(t,"d",(function(){return v})),n.d(t,"g",(function(){return k})),n.d(t,"h",(function(){return w}));var a,r,c,s,i=n(126),o=n(48),l=n.n(o),u=n(213),x=n.n(u),j=!1,h=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"undefined"!==typeof(t=window.ethereum)&&(t.request({method:"eth_requestAccounts"}).then((function(e){a=e[0],console.log("Selected account is ".concat(a))})).catch((function(e){console.log(e)})),window.ethereum.on("accountsChanged",(function(e){a=e[0],console.log("Selected account changed to ".concat(a))}))),n=new x.a(t),e.next=5,n.eth.net.getId();case 5:e.sent,i=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],name:"_getSoldSHARES",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"samount",type:"uint256"}],name:"PurchaseSHARES",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getSTXPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_staker",type:"address"}],name:"hasStake",outputs:[{components:[{internalType:"uint256",name:"total_amount",type:"uint256"},{components:[{internalType:"address",name:"user",type:"address"},{internalType:"string",name:"stakename",type:"string"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"since",type:"uint256"},{internalType:"uint256",name:"claimable",type:"uint256"},{internalType:"uint256",name:"sharesbonus",type:"uint256"}],internalType:"struct Stakeable.Stake[]",name:"stakes",type:"tuple[]"}],internalType:"struct Stakeable.StakingSummary",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"string",name:"_stakename",type:"string"}],name:"stake",outputs:[],stateMutability:"nonpayable",type:"function"}],r=new n.eth.Contract(i,"0xb08CE509caFb6660E4F7b951Fbb8ae63930a6aEE"),c=new n.eth.Contract(i,"0xF224398d6d757142eDE2F6AFFa4837DBDa9C04CA"),s=new n.eth.Contract(i,"0xd389253265dd6b85C47c410EC5fF0c6A383CE949"),j=!0;case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=3;break}return e.next=3,h();case 3:return e.abrupt("return",r.methods.balanceOf(a).call().then((function(e){return x.a.utils.toWei(e,"wei")})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=3;break}return e.next=3,h();case 3:return e.abrupt("return",r.methods.totalSupply().call().then((function(e){return x.a.utils.toWei(e,"wei")})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=3;break}return e.next=3,h();case 3:return e.abrupt("return",r.methods.getSTXPrice().call().then((function(e){return x.a.utils.fromWei(e,"ether")})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=3;break}return e.next=3,h();case 3:return e.abrupt("return",r.methods.getSTXPrice().call().then((function(e){return x.a.utils.toWei(e,"ether")})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=3;break}return e.next=3,h();case 3:return e.abrupt("return",c.methods.hasStake(a).call());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=3;break}return e.next=3,h();case 3:return e.abrupt("return",r.methods.PurchaseSHARES(t).send({from:a}).catch((function(e){console.log(e)})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(i.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=3;break}return e.next=3,h();case 3:return e.abrupt("return",c.methods.stake(t,n).send({from:a}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(l.a.mark((function e(t,n,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=3;break}return e.next=3,h();case 3:return e.abrupt("return",s.methods.approve("0xb08ce509cafb6660e4f7b951fbb8ae63930a6aee",n).send({from:a}).then((function(){O(r)})).catch((function(e){console.log(e)})));case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=3;break}return e.next=3,h();case 3:return e.abrupt("return",c.methods.balanceOf(a).call().then((function(e){return x.a.utils.fromWei(e,"ether")})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=3;break}return e.next=3,h();case 3:return e.abrupt("return",s.methods.balanceOf(a).call().then((function(e){return x.a.utils.fromWei(e,"ether")})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=3;break}return e.next=3,h();case 3:return e.abrupt("return",s.methods.balanceOf("0xb08ce509cafb6660e4f7b951fbb8ae63930a6aee").call().then((function(e){return x.a.utils.fromWei(e,"ether")})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=3;break}return e.next=3,h();case 3:return e.abrupt("return",c.methods.totalSupply().call().then((function(e){return x.a.utils.fromWei(e,"ether")})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},776:function(e,t,n){"use strict";n.r(t);var a=n(722),r=n(32),c=n(116),s=n(126),i=n(14),o=n(48),l=n.n(o),u=n(0),x=n(330),j=n(208),h=n(329),p=n(328),b=n(777),d=n(774),m=n(723),f=n(209),O=n.p+"static/media/StaxLogoOnly.17f6a5b9.png",y=n(1),g=function(){return Object(r.a)(),Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(a.a,{justifyContent:"center",alignContent:"center",sx:{height:100},children:Object(y.jsx)("img",{height:80,width:"height",src:O,alt:"shares banner"})})})},S=n(746),v=n.n(S),k=n(742),w=n(744),A=n.n(w),C=function(){var e=Object(r.a)(),t=Object(u.useState)(0),n=Object(i.a)(t,2),c=n[0],o=n[1],O=(new A.a(c).decimalPlaces(2).toLocaleString(void 0),Object(u.useState)(0)),S=Object(i.a)(O,2),w=S[0],C=S[1],T=Object(u.useState)(0),E=Object(i.a)(T,2),R=E[0],P=E[1],B=1e18,U=new A.a(w),N=Object(u.useState)(0),H=Object(i.a)(N,2),X=H[0],Y=H[1],F=Object(u.useState)([[],[]]),M=Object(i.a)(F,2),W=M[0],I=M[1],L=Object(i.a)(W,2),_=(L[0],L[1]),D=9.125+4.5625*X,q=function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(k.f)().then((function(e){o(e)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(k.j)(!0).then((function(e){I(e),console.log(e)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(k.e)().then((function(e){Y(e>20?20:e)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:q(),Object(k.j)(),J(),z();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(f.a,{sx:{borderRadius:0,backgroundColor:e.palette.grey[900],border:0},content:!1,children:Object(y.jsx)(x.a,{children:Object(y.jsxs)(a.a,{container:!0,spacing:2,sx:{justifyContent:"center",display:"flex"},children:[Object(y.jsx)(a.a,{container:!0,mt:5,sx:{justifyContent:"center",display:"flex"},children:Object(y.jsxs)(a.a,{item:!0,children:[Object(y.jsx)(j.a,{textAlign:"center",variant:"h1",color:e.palette.grey[50],children:"Staking"}),Object(y.jsx)(h.a,{})]})}),Object(y.jsx)(a.a,{item:!0,lg:4.5,xs:12,sx:{mt:6},justifyContent:"center",children:Object(y.jsx)(p.a,{sx:{borderLeft:1,borderRight:1,borderBottom:3,borderColor:e.palette.success.light,borderRadius:5,boxShadow:"0px 10px 20px rgb(0, 230, 117)"},children:Object(y.jsxs)(a.a,{container:!0,sx:{mt:2,display:"flex",justifyContent:"center"},children:[Object(y.jsx)(a.a,{item:!0,sx:{backgroundColor:e.palette.grey[900],mt:2,ml:1},lg:3.6,xs:"auto",children:Object(y.jsx)(g,{})}),Object(y.jsx)(a.a,{item:!0,lg:"auto",xs:"auto",sx:{ml:2,mt:5},children:Object(y.jsx)(j.a,{variant:"h2",color:e.palette.grey[50],textAlign:"center",children:"Stake"})}),Object(y.jsx)(a.a,{item:!0,lg:"auto",xs:"auto",children:Object(y.jsx)(j.a,{variant:"h2",sx:{ml:.7,mt:5},color:e.palette.success.main,textAlign:"center",children:"STAX"})}),Object(y.jsx)(a.a,{item:!0,lg:1,xs:"auto",sx:{mt:5,pl:.5,pt:.2},children:Object(y.jsx)(b.a,{sx:{color:e.palette.success.main},title:Object(y.jsx)(j.a,{sx:{color:e.palette.success.main},children:"Stakes have name, staked amount and SHARESBONUS. Users choose the name and tokens to be staked. When creating a stake, the smart contract will get the user`s current sSTX balance and save it as SHARESBONUS in the stake`s properties."}),children:Object(y.jsx)(v.a,{})})}),Object(y.jsxs)(a.a,{container:!0,sx:{mt:2,display:"flex",justifyContent:"center"},children:[Object(y.jsx)(a.a,{item:!0,sx:{justifyContent:"center",backgroundColor:e.palette.grey[900],my:1},lg:"auto",md:"auto",xs:"auto",children:Object(y.jsx)(j.a,{variant:"h4",textAlign:"center",children:"NAME:"})}),Object(y.jsxs)(a.a,{item:!0,sx:{backgroundColor:e.palette.grey[900]},lg:"auto",children:[Object(y.jsx)(d.a,{sx:{borderBottom:2,borderColor:e.palette.success.main},onChange:function(e){return P(e.target.value)},inputProps:{style:{width:110,color:"white"}},id:"standard-basic",variant:"standard",color:"success"}),Object(y.jsx)(j.a,{variant:"h5",textAlign:"left",children:"Enter stake name"})]})]}),Object(y.jsxs)(a.a,{container:!0,sx:{mt:3,display:"flex",justifyContent:"center"},children:[Object(y.jsx)(a.a,{item:!0,sx:{justifyContent:"center",backgroundColor:e.palette.grey[900],my:1},lg:"auto",md:"auto",xs:"auto",children:Object(y.jsx)(j.a,{variant:"h4",textAlign:"center",children:"AMOUNT:"})}),Object(y.jsx)(a.a,{item:!0,sx:{backgroundColor:e.palette.grey[900]},lg:"auto",children:Object(y.jsx)(d.a,{sx:{borderBottom:2,borderColor:e.palette.success.main},onChange:function(e){return C(e.target.value)},inputProps:{style:{width:110,color:"white"}},type:"number",id:"standard-basic",variant:"standard",color:"success"})}),Object(y.jsx)(a.a,{item:!0,xs:12,sx:{display:"flex",justifyContent:"center"},children:Object(y.jsx)(j.a,{variant:"h5",textAlign:"left",children:"Balance: STAX"})})]}),Object(y.jsxs)(a.a,{container:!0,sx:{mt:3,display:"flex",justifyContent:"center"},children:[Object(y.jsx)(a.a,{item:!0,xs:"auto",children:Object(y.jsx)(j.a,{variant:"h4",color:e.palette.grey[50],textAlign:"center",children:"SHARESBONUS:"})}),Object(y.jsx)(a.a,{item:!0,xs:"auto",children:Object(y.jsx)(j.a,{variant:"h4",sx:{ml:1},color:e.palette.success.main,textAlign:"center",children:X})}),Object(y.jsx)(a.a,{item:!0,xs:"auto",sx:{ml:.7,mt:-.3},children:Object(y.jsx)(b.a,{sx:{color:e.palette.success.main},title:Object(y.jsx)(j.a,{sx:{color:e.palette.success.main},children:"SHARESBONUS - shows your current sSTX balance. Each sSTX in your wallet, increases your APY by 5%. An user may hold unlimited amount of sSTX but the SHARESBONUS is limited to 20. Therefore, we can say the maximum APY is 108% (20 * 5% + 8%)."}),children:Object(y.jsx)(v.a,{})})})]}),Object(y.jsxs)(a.a,{container:!0,sx:{mt:2,display:"flex",justifyContent:"center"},children:[Object(y.jsx)(a.a,{item:!0,xs:"auto",children:Object(y.jsx)(j.a,{variant:"h4",sx:{mt:1},color:e.palette.grey[50],textAlign:"center",children:"INITIAL APY:"})}),Object(y.jsx)(a.a,{item:!0,xs:"auto",children:Object(y.jsx)(j.a,{variant:"h4",sx:{mt:1,ml:1},color:e.palette.success.main,textAlign:"center",children:"9.13%"})}),Object(y.jsx)(a.a,{item:!0,xs:"auto",sx:{ml:.7,my:.9},children:Object(y.jsx)(b.a,{sx:{color:e.palette.success.main},title:Object(y.jsx)(j.a,{sx:{color:e.palette.success.main},children:"Initial APY - That is the minimum APY that a stake can get if there are no sSTX in the wallet of the staker at that given moment."}),children:Object(y.jsx)(v.a,{})})})]}),Object(y.jsxs)(a.a,{container:!0,sx:{mt:2,display:"flex",justifyContent:"center"},children:[Object(y.jsx)(a.a,{item:!0,xs:"auto",children:Object(y.jsx)(j.a,{variant:"h4",color:e.palette.grey[50],textAlign:"center",children:"CURRENT APY:"})}),Object(y.jsx)(a.a,{item:!0,xs:"auto",children:Object(y.jsxs)(j.a,{variant:"h4",sx:{ml:1},color:e.palette.success.main,textAlign:"center",children:[D,"%"]})}),Object(y.jsx)(a.a,{item:!0,xs:"auto",sx:{ml:.7,mt:-.3},children:Object(y.jsx)(b.a,{sx:{color:e.palette.success.main},title:Object(y.jsx)(j.a,{sx:{color:e.palette.success.main},children:"Current APY - shows your APY at the moment if you open a stake. It is calculated by the following formula: SHARESBONUS * 5 + 8%. The APY is limited to 108% (20 SHARESBONUS)."}),children:Object(y.jsx)(v.a,{})})})]}),Object(y.jsx)(a.a,{container:!0,sx:{display:"flex",justifyContent:"center"},children:Object(y.jsx)(a.a,{item:!0,sx:{backgroundColor:e.palette.grey[900],mt:2,mb:3},lg:"auto",children:Object(y.jsx)(m.a,{onClick:function(){Object(k.k)(U,R).then((function(){q(),J(),z()}))},sx:{fontSize:20,width:130,color:e.palette.grey[900],backgroundColor:e.palette.success.main},children:"Stake"})})})]})})}),Object(y.jsx)(a.a,{item:!0,lg:4.5,xs:12,sx:{mt:6},children:Object(y.jsxs)(p.a,{sx:{borderLeft:1,borderRight:1,borderBottom:3,borderColor:e.palette.success.light,borderRadius:5,boxShadow:"0px 10px 20px rgb(0, 230, 117)",mb:1},children:[Object(y.jsxs)(a.a,{container:!0,sx:{backgroundColor:e.palette.grey[900],mt:3,display:"flex",justifyContent:"center"},children:[Object(y.jsx)(a.a,{item:!0,xs:"auto",children:Object(y.jsx)(j.a,{variant:"h2",sx:{ml:1},color:e.palette.grey[50],textAlign:"center",children:"APY /"})}),Object(y.jsx)(a.a,{item:!0,xs:"auto",children:Object(y.jsx)(j.a,{variant:"h2",sx:{ml:1},color:e.palette.success.main,textAlign:"center",children:"REWARDS RATE"})})]}),Object(y.jsx)(a.a,{container:!0,sx:{display:"flex",justifyContent:"center"},children:Object(y.jsx)(a.a,{item:!0,xs:10,children:Object(y.jsx)(j.a,{variant:"h5",sx:{my:4},color:e.palette.grey[50],textAlign:"center",children:"When creating a stake, the contract will save the staker`s` sSTX balance as SHARESBONUS. 1 SHARESBONUS + ~4.56% APY."})})}),Object(y.jsxs)(a.a,{container:!0,sx:{display:"flex",justifyContent:"center"},children:[Object(y.jsx)(a.a,{item:!0,xs:"auto",children:Object(y.jsx)(j.a,{variant:"h3",color:e.palette.grey[50],textAlign:"center",children:"Initial APY:"})}),Object(y.jsx)(a.a,{item:!0,xs:"auto",children:Object(y.jsx)(j.a,{variant:"h3",sx:{ml:1},color:e.palette.success.main,textAlign:"center",children:"9.125%"})})]}),Object(y.jsxs)(a.a,{container:!0,sx:{display:"flex",justifyContent:"center"},children:[Object(y.jsx)(a.a,{item:!0,xs:"auto",children:Object(y.jsx)(j.a,{variant:"h3",sx:{my:4},color:e.palette.grey[50],textAlign:"center",children:"Current APY:"})}),Object(y.jsx)(a.a,{item:!0,xs:"auto",children:Object(y.jsxs)(j.a,{variant:"h3",sx:{my:4,ml:1},color:e.palette.success.main,textAlign:"center",children:[D,"%"]})})]})]})}),Object(y.jsx)(a.a,{item:!0,lg:9,xs:12,sx:{mt:5},children:Object(y.jsxs)(p.a,{sx:{width:"auto",borderLeft:1,borderRight:1,borderBottom:3,borderColor:e.palette.success.light,borderRadius:5,boxShadow:"0px 10px 20px rgb(0, 230, 117)",mb:10},children:[Object(y.jsx)(a.a,{container:!0,sx:{backgroundColor:e.palette.grey[900],mt:3,display:"flex",justifyContent:"center"},children:Object(y.jsx)(a.a,{item:!0,xs:"auto",children:Object(y.jsx)(j.a,{variant:"h2",sx:{ml:1},color:e.palette.grey[50],textAlign:"center",children:"Active Stakes"})})}),Object(y.jsxs)(a.a,{container:!0,sx:{my:3,display:"flex",justifyContent:"center"},children:[Object(y.jsxs)(a.a,{item:!0,lg:1.8,md:1.9,xs:"auto",sx:{pl:1,pt:.2},children:[Object(y.jsxs)(a.a,{container:!0,sx:{display:"flex",justifyContent:"center"},children:[Object(y.jsx)(j.a,{variant:"h4",sx:{mt:-.2},color:e.palette.success.main,textAlign:"center",children:"Name"}),Object(y.jsx)(b.a,{sx:{color:e.palette.success.main,mt:-.3},title:Object(y.jsx)(j.a,{sx:{color:e.palette.success.main},children:"Name of the stake."}),children:Object(y.jsx)(v.a,{})})]}),Object(y.jsx)(h.a,{sx:{backgroundColor:e.palette.grey[50]}}),Object(y.jsx)(a.a,{item:!0,lg:"auto",xs:"auto",sx:{mt:1},children:Object(y.jsx)(j.a,{variant:"h4",color:e.palette.grey[50],textAlign:"center",children:_.map((function(e,t){return Object(y.jsx)(j.a,{sx:{mb:3},children:e.stakename},t)}))})})]}),Object(y.jsxs)(a.a,{item:!0,lg:1.8,md:2,xs:"auto",sx:{pl:1,pt:.2},children:[Object(y.jsxs)(a.a,{container:!0,sx:{display:"flex",justifyContent:"center"},children:[Object(y.jsx)(j.a,{variant:"h4",sx:{mt:-.2},color:e.palette.success.main,textAlign:"center",children:"Sharesbonus"}),Object(y.jsx)(b.a,{sx:{color:e.palette.success.main,mt:-.3},title:Object(y.jsx)(j.a,{sx:{color:e.palette.success.main},children:"SHARESBONUS (BONUS) shows the amount of sSTX that you held at the moment of opening the stake. It also increases your stake APY as it follows: 5% per sSTX token. Each sSTX increases the SHAREBONUS by the factor of 1. There is a limit of maximum 20 SHARESBONUS or 100% Bonus APY."}),children:Object(y.jsx)(v.a,{})})]}),Object(y.jsx)(a.a,{item:!0,lg:"auto",xs:"auto",sx:{mt:1},children:_.map((function(e,t){return Object(y.jsx)(j.a,{sx:{mb:3},textAlign:"center",children:e.sharesbonus},t)}))})]}),Object(y.jsxs)(a.a,{item:!0,lg:1.8,md:1.9,sm:"auto",xs:"auto",sx:{pl:1,pt:.2},children:[Object(y.jsxs)(a.a,{container:!0,sx:{display:"flex",justifyContent:"center"},children:[Object(y.jsx)(j.a,{variant:"h4",sx:{mt:-.2},color:e.palette.success.main,textAlign:"center",children:"Staked"}),Object(y.jsx)(b.a,{sx:{color:e.palette.success.main,mt:-.3},title:Object(y.jsx)(j.a,{sx:{color:e.palette.success.main},children:"Shows the amount of staked STAX tokens."}),children:Object(y.jsx)(v.a,{})})]}),Object(y.jsx)(a.a,{container:!0,sx:{display:"flex",justifyContent:"center",mt:1},children:Object(y.jsx)(j.a,{variant:"h4",color:e.palette.grey[50],textAlign:"center",children:_.map((function(e,t){return Object(y.jsx)(j.a,{sx:{mb:3},children:(e.amount/B).toLocaleString(void 0,{maximumFractionDigits:2})},t)}))})})]}),Object(y.jsxs)(a.a,{item:!0,lg:1.8,md:1.9,xs:"auto",sx:{pl:1,pt:.2},children:[Object(y.jsxs)(a.a,{container:!0,sx:{display:"flex",justifyContent:"center"},children:[Object(y.jsx)(j.a,{variant:"h4",sx:{mt:-.2},color:e.palette.success.main,textAlign:"center",children:"Rewards"}),Object(y.jsx)(b.a,{sx:{color:e.palette.success.main,mt:-.3},title:Object(y.jsx)(j.a,{sx:{color:e.palette.success.main},children:"Shows the rewards of the stake."}),children:Object(y.jsx)(v.a,{})})]}),Object(y.jsx)(a.a,{container:!0,sx:{display:"flex",justifyContent:"center",mt:1},children:Object(y.jsx)(j.a,{variant:"h4",color:e.palette.grey[50],textAlign:"center",children:_.map((function(t,n){return Object(y.jsx)(j.a,{sx:{mb:3},color:e.palette.grey[50],textAlign:"center",children:(t.claimable/B).toLocaleString(void 0,{maximumFractionDigits:2})},n)}))})})]}),Object(y.jsxs)(a.a,{item:!0,lg:1.8,md:1.9,xs:"auto",sx:{pl:1,pt:.2},children:[Object(y.jsxs)(a.a,{container:!0,sx:{display:"flex",justifyContent:"center"},children:[Object(y.jsx)(j.a,{variant:"h4",sx:{mt:-.2},color:e.palette.success.main,textAlign:"center",children:"TUM"}),Object(y.jsx)(b.a,{sx:{color:e.palette.success.main,mt:-.3},title:Object(y.jsx)(j.a,{sx:{color:e.palette.success.main},children:"TUM stands for Time Until Mature and it shows how many days left until a user can claim the stake rewards or close it without facing a penalty."}),children:Object(y.jsx)(v.a,{})})]}),Object(y.jsx)(a.a,{item:!0,lg:"auto",xs:"auto",sx:{mt:1},children:_.map((function(t,n){return Object(y.jsx)(j.a,{sx:{mb:3},color:e.palette.grey[50],textAlign:"center",children:t.since},n)}))})]}),Object(y.jsxs)(a.a,{item:!0,lg:1.6,md:1.9,xs:"auto",sx:{pl:1},children:[Object(y.jsxs)(a.a,{container:!0,sx:{display:"flex",justifyContent:"center"},children:[Object(y.jsx)(j.a,{variant:"h4",sx:{mt:-.2},color:e.palette.success.main,textAlign:"center",children:"Activities"}),Object(y.jsx)(b.a,{sx:{color:e.palette.success.main,mt:-.3},title:Object(y.jsx)(j.a,{sx:{color:e.palette.success.main},children:"Users may claim their rewards or close the stake by clicking below buttons."}),children:Object(y.jsx)(v.a,{})})]}),Object(y.jsx)(a.a,{container:!0,sx:{display:"flex",justifyContent:"center",mt:.7},children:_.map((function(t,n){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(m.a,{sx:{mb:2.5,fontSize:15,width:30,height:23,color:e.palette.grey[900],backgroundColor:e.palette.success.main},children:"Close"},n)})}))})]})]})]})})]})})})})};t.default=function(){return Object(r.a)(),Object(y.jsx)(a.a,{container:!0,spacing:c.a,children:Object(y.jsx)(a.a,{item:!0,lg:12,children:Object(y.jsx)(C,{})})})}}}]);
//# sourceMappingURL=9.89c227e8.chunk.js.map