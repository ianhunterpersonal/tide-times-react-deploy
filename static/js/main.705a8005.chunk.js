(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,a){e.exports={App:"App_App__pKBOl","App-logo":"App_App-logo__2u-Mj","App-logo-spin":"App_App-logo-spin__2liTs","App-header":"App_App-header__4cjZ3","App-link":"App_App-link__-fE-Z"}},122:function(e,t){},212:function(e,t,a){e.exports=a(406)},217:function(e,t,a){},229:function(e,t){},235:function(e,t){},406:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),i=a.n(o),l=(a(217),a(219),a(22)),c=a(23),s=a(26),p=a(24),u=a(27),d=a(80),m=a(121),h=a.n(m),y=a(16),g=a(55),f=a.n(g),v=a(130),b=a.n(v),E=a(28),w={"App.title":"Tide Times","App.action.login":"Login","App.sidebar.title":"Sites","App.text.yesterday":"Yesterday","App.text.today":"Today","App.text.tomorrow":"Tomorrow","App.error.no_site_id":"No Site ID","App.error.loading":"Loading...","App.error.no_data_avail":"No data available"},A={"en-GB":w,en_GB:w,"en-UK":w,en_UK:w,"es-ES":{"App.title":"Tiempo de la Marea","App.action.login":"Login","App.sidebar.title":"Lugares","App.text.yesterday":"Ayer","App.text.today":"Ahoy","App.text.tomorrow":"Manana","App.error.no_site_id":"No Site ID [es]","App.error.loading":"Loading... [es]","App.error.no_data_avail":"No data available  [es]"}},j=a(123),O=a.n(j),k=a(124),D=a.n(k),T=a(14),_=a(52),S=a.n(_),I=a(54),C=a.n(I),x=a(25),N=a.n(x),L=a(53),M=a.n(L),B=a(126),K=a.n(B),U=a(50),W=a.n(U),F=a(51),G=a.n(F),J=a(410),P={list:{width:250},fullList:{width:"auto"},root:{background:"yellow",color:"red"}},Z=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={drawIsOpen:!1,changed:!1},a.openTheDrawer=function(){a.setState({drawIsOpen:!0})},a.closeTheDrawer=function(){a.setState({drawIsOpen:!1})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=r.a.createElement("div",{className:t.list},r.a.createElement(W.a,null,["salcombe","exmouth-dock","newquay"].map(function(t,a){return r.a.createElement(G.a,{button:!0,key:t},r.a.createElement("button",{type:"button",onClick:function(){return e.props.history.push("/?siteId="+t)}},t))})));return r.a.createElement("div",{className:P.root},r.a.createElement(T.a,{position:"sticky"},r.a.createElement(S.a,null,r.a.createElement(M.a,{className:P.menuButton,color:"inherit","aria-label":"Menu",onClick:this.openTheDrawer},r.a.createElement(K.a,null)),r.a.createElement(N.a,{variant:"h6",color:"inherit",className:P.grow},r.a.createElement(E.a,{id:"App.title",defaultMessage:"App.title"})))),this.props.children,r.a.createElement(C.a,{open:this.state.drawIsOpen,onClose:this.closeTheDrawer},r.a.createElement("div",{tabIndex:0,role:"button",onClick:this.closeTheDrawer,onKeyDown:this.closeTheDrawer},a)))}}]),t}(n.Component),q=Object(J.a)(Object(y.withStyles)(P)(Z)),H=a(128),V=a.n(H),X=a(40),Y=a.n(X),$=a(129),z=a.n($),Q=Object(y.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{width:"100%",minWidth:0,colWidth:"2rem",tableLayout:"fixed"},tideLevelHigh:{backgroundColor:"blue"},tideLevelLow:{backgroundColor:"lightBlue"}}})(function(e){var t=e.classes,a=[];Object.keys(e.data).forEach(function(e,t){a.push(e.slice(6)+"/"+e.slice(4,6)+"/"+e.slice(2,4))});var n=[[],[],[],[]],o=function(t){Object.keys(e.data).forEach(function(a,r){var o=e.data[a];o?n[t].push(o[t]):n[t].push({})})};for(var i in[0,1,2,3])o(i);return r.a.createElement(T.b,{className:t.root},r.a.createElement(T.d,{className:t.table},r.a.createElement(T.g,null,r.a.createElement(T.h,null,a.map(function(e,t){return r.a.createElement(T.f,{key:t},r.a.createElement(T.j,{variant:"h6"},e))}))),r.a.createElement(T.e,null,n.map(function(e,t){return r.a.createElement(T.h,{key:t},e.map(function(e,a){return e&&e.time?r.a.createElement(T.f,{key:t+a},r.a.createElement(T.j,{variant:"body1"},e.time.trim())):r.a.createElement(T.f,{key:t+a},r.a.createElement(T.j,{variant:"body1"},"----".trim()))}))}))))}),R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={siteToDisplay:"",siteDate:{}},a.handleTabChange=function(e,t){a.setState({siteToDisplay:t})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({siteData:this.props.siteData,siteToDisplay:Object.keys(this.props.siteData)[0]})}},{key:"render",value:function(){var e=this.state,t=e.siteData,a=e.siteToDisplay;return t?r.a.createElement("div",null,r.a.createElement(T.i,{value:a,onChange:this.handleTabChange},Object.keys(t).map(function(e,t){return r.a.createElement(T.c,{label:e,key:t})})),""===a?r.a.createElement("div",null,"Nothing to see"):r.a.createElement(Q,{data:t[a]})):r.a.createElement(T.j,{variant:"h3"},"No Data")}}]),t}(r.a.Component);var ee=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={loading:!1,data:{}},a.loadData=function(e,t){e=e||"salcombe",t=t||Y()(new Date,"yyyymmdd"),console.log("TideTimes.loadData() siteId = "+e+" For "+t),V.a.get("https://opalescent-radiator.glitch.me?locationIds="+e+"&dates="+t,{crossdomain:!0}).then(function(e){var t=e.data;a.setState(t)}).catch(function(e){console.error("error: ",e)})};var n=new Date,r=new Date(n);r.setDate(n.getDate()-1);var o=new Date(n);return o.setDate(n.getDate()+1),a.todayStr=Y()(n,"yyyymmdd"),a.yesterdayStr=Y()(r,"yyyymmdd"),a.tomorrowStr=Y()(o,"yyyymmdd"),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=z.a.parse(this.props.location.search);console.log("TideTimes.componentDidMount() Site = "+e.siteId),this.loadData(e.siteId,[this.yesterdayStr,this.todayStr,this.tomorrowStr].join(","))}},{key:"ucfirst",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.error,n=e.data;if(t)return r.a.createElement(N.a,{variant:"h3"},r.a.createElement(E.b,{id:"App.error.loading"}));if(!n||function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}(n))return r.a.createElement(N.a,{variant:"h3"},r.a.createElement(E.b,{id:"App.error.no_data_avail"}));if(a)return r.a.createElement(N.a,{variant:"h4"},"There was an error loading the repos."," ",r.a.createElement("button",{onClick:this.loadData},"Try again"));var o=Object.keys(n)[0],i=Object.keys(n[o])[0],l=n[o][i],c=l[0].height<l[1].height;return l.forEach(function(e){e.isLow=c,c=!c}),r.a.createElement(R,{siteData:this.state.data})}}]),t}(n.Component),te=a(408),ae=a(409),ne=a(407);Object(E.d)(Object(d.a)(O.a).concat(Object(d.a)(D.a)));var re=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage||"en-US",oe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).startSiteId="salcombe",a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=Object(y.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:b.a,background:{paper:"#ffffff",default:"#fafafa"}}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null),r.a.createElement(y.MuiThemeProvider,{theme:e},r.a.createElement(E.c,{locale:re,messages:A[re]},r.a.createElement(te.a,null,r.a.createElement(q,null,r.a.createElement(ae.a,null,r.a.createElement(ne.a,{path:"/",exact:!0,component:ee}),r.a.createElement(ne.a,{path:"/?siteId=:siteId",exact:!0,component:ee}),r.a.createElement(ne.a,{component:function(){return r.a.createElement("h1",null,"No path in router")}})," "))))))}}]),t}(n.Component),ie=Object(y.withStyles)(h.a)(oe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage;i.a.render(r.a.createElement(ie,{lang:le}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[212,2,1]]]);
//# sourceMappingURL=main.705a8005.chunk.js.map