(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,a){e.exports={App:"App_App__pKBOl","App-logo":"App_App-logo__2u-Mj","App-logo-spin":"App_App-logo-spin__2liTs","App-header":"App_App-header__4cjZ3","App-link":"App_App-link__-fE-Z"}},117:function(e,t){},206:function(e,t,a){e.exports=a(395)},211:function(e,t,a){},223:function(e,t){},229:function(e,t){},26:function(e,t,a){e.exports={root:"Layout_root__rOBWl",grow:"Layout_grow__2devG",menuButton:"Layout_menuButton__2WIBQ",listItem:"Layout_listItem__Po5i7"}},395:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(19),l=a.n(r),i=(a(211),a(213),a(30)),c=a(31),s=a(34),p=a(32),u=a(35),m=a(86),d=a(116),h=a.n(d),g=a(16),E=a(65),v=a.n(E),f=a(126),b=a.n(f),I=a(24),w={"App.title":"Tide Times","App.action.login":"Login","App.sidebar.title":"Sites"},A={"en-GB":w,en_GB:w,"en-UK":w,en_UK:w,"es-ES":{"App.title":"Tiempo de la Marea","App.action.login":"Login","App.sidebar.title":"Lugares"}},_=a(119),y=a.n(_),O=a(120),T=a.n(O),j=a(26),k=a.n(j),D=a(123),S=a(58),B=a.n(S),L=a(61),M=a.n(L),N=a(18),x=a.n(N),C=a(60),W=a.n(C),K=a(59),P=a.n(K),U=a(56),G=a.n(U),J=a(55),R=a.n(J),Z=a(57),F=a.n(Z),H=a(124),Q=a.n(H),V=a(399),$=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={drawIsOpen:!1,changed:!1},a.openTheDrawer=function(){a.setState({drawIsOpen:!0})},a.closeTheDrawer=function(){a.setState({drawIsOpen:!1})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=o.a.createElement("div",{className:k.a.list},o.a.createElement(x.a,{variant:"h6"},o.a.createElement(I.b,{id:"App.sidebar.title",defaultMessage:"App.sidebar.title"})),o.a.createElement(R.a,{className:k.a.list},o.a.createElement("nav",null,["salcombe","exmouth"].map(function(e,t){return o.a.createElement(G.a,{title:e+" "+t,key:t},o.a.createElement("p",null,o.a.createElement(V.a,{className:k.a.listItem,to:"/?siteId="+e},e)))}))),o.a.createElement(F.a,null));return o.a.createElement("div",{className:k.a.root},o.a.createElement(D.a,{position:"sticky"},o.a.createElement(B.a,null,o.a.createElement(P.a,{className:k.a.menuButton,color:"inherit","aria-label":"Menu",onClick:this.openTheDrawer},o.a.createElement(Q.a,null)),o.a.createElement(x.a,{variant:"h6",color:"inherit",className:k.a.grow},o.a.createElement(I.a,{id:"App.title",defaultMessage:"App.title"})),o.a.createElement(W.a,{color:"inherit"},o.a.createElement(I.b,{id:"App.action.login",defaultMessage:"App.action.login"})))),this.props.children,o.a.createElement(M.a,{open:this.state.drawIsOpen,onClose:this.closeTheDrawer,width:400},o.a.createElement("div",{tabIndex:0,role:"button",onClick:this.closeTheDrawer,onKeyDown:this.closeTheDrawer},e)))}}]),t}(n.Component),q=a(125),z=a.n(q),X=a(62),Y=a.n(X),ee=a(64),te=a.n(ee),ae=a(23),ne=a.n(ae),oe=a(63),re=a.n(oe),le=a(33),ie=a.n(le),ce=a(68),se=a.n(ce),pe=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={loading:!1,siteId:"salcombe"},a.loadData=function(e){e=e||"salcombe",console.log("TideTimes.loadData() siteId = "+e),a.setState({loading:!0,siteId:e}),z.a.get("https://opalescent-radiator.glitch.me?locationId="+e,{crossdomain:!0}).then(function(t){console.log(t.data);var n=t.data;a.setState({siteId:e,loading:!1,json:n})}).catch(function(t){console.error("error: ",t),a.setState({siteId:e,error:"".concat(t),loading:!1})})};var n=se.a.parse(a.props.location.search);return n.siteId&&(a.state.siteId=n.siteId),console.log("TideTimes.constructor() Site = "+a.state.siteId),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=se.a.parse(this.props.location.search);console.log("TideTimes.componentDidMount() Site = "+e.siteId),this.loadData(e.siteId)}},{key:"componentWillReceiveProps",value:function(e){console.log("TideTimes.componentWillReceiveProps() props = "),console.log(e);var t=se.a.parse(e.location.search);this.loadData(t.siteId?t.siteId:this.state.siteId)}},{key:"ucfirst",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},{key:"render",value:function(){console.log("TideTimes.render() siteId = "+this.state.siteId);var e=this.state,t=e.loading,a=e.error,n=e.siteId,r=e.json;return n?t?o.a.createElement(x.a,{variant:"h3"},"Loading..."):r?a?o.a.createElement(x.a,{variant:"h4"},"There was an error loading the repos."," ",o.a.createElement("button",{onClick:this.loadData},"Try again")):o.a.createElement("div",null,o.a.createElement(x.a,{variant:"h5"},this.ucfirst(n)),o.a.createElement(x.a,{variant:"caption"},(new Date).toDateString()),o.a.createElement(Y.a,null,o.a.createElement(re.a,null,o.a.createElement(ie.a,null,o.a.createElement(ne.a,null,"Time"),o.a.createElement(ne.a,null,"Height (meters)"))),o.a.createElement(te.a,null,r[n]?r[n].map(function(e,t){return e?o.a.createElement(ie.a,{key:t},o.a.createElement(ne.a,null,e.time),o.a.createElement(ne.a,null,e.height)):o.a.createElement(ie.a,{key:t})}):null))):o.a.createElement(x.a,{variant:"h3"}):o.a.createElement(x.a,{variant:"h3"},"No Site ID")}}]),t}(n.Component),ue=a(397),me=a(398),de=a(396);Object(I.d)(Object(m.a)(y.a).concat(Object(m.a)(T.a)));var he=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage||"en-US",ge=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).startSiteId="salcombe",a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=Object(g.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:b.a}});return o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,null),o.a.createElement(g.MuiThemeProvider,{theme:e},o.a.createElement(I.c,{locale:he,messages:A[he]},o.a.createElement(ue.a,null,o.a.createElement($,null,o.a.createElement(me.a,null,o.a.createElement(de.a,{path:"/",exact:!0,component:pe}),o.a.createElement(de.a,{path:"/?siteId=:siteId",exact:!0,component:pe}),o.a.createElement(de.a,{component:function(){return o.a.createElement("h1",null,"No path in router")}})," "))))))}}]),t}(n.Component),Ee=Object(g.withStyles)(h.a)(ge);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage;l.a.render(o.a.createElement(Ee,{lang:ve}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[206,2,1]]]);
//# sourceMappingURL=main.026ccc6d.chunk.js.map