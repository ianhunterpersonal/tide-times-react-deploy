(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){e.exports={App:"App_App__pKBOl","App-logo":"App_App-logo__2u-Mj","App-logo-spin":"App_App-logo-spin__2liTs","App-header":"App_App-header__4cjZ3","App-link":"App_App-link__-fE-Z"}},104:function(e,t){},197:function(e,t,a){e.exports=a(370)},202:function(e,t,a){},214:function(e,t){},220:function(e,t){},370:function(e,t,a){"use strict";a.r(t);var o=a(0),r=a.n(o),n=a(36),i=a.n(n),l=(a(202),a(204),a(19)),s=a(20),c=a(22),d=a(21),p=a(23),u=a(62),h=a(103),m=a.n(h),y=a(6),b=a(46),g=a.n(b),f=a(110),v=a.n(f),E=a(26),k={"App.title":"Tide Times","App.action.login":"Login","App.sidebar.title":"Sites","App.text.yesterday":"Yesterday","App.text.today":"Today","App.text.tomorrow":"Tomorrow","App.error.no_site_id":"No Site ID","App.error.loading":"Loading...","App.error.no_data_avail":"No data available"},w={"en-GB":k,en_GB:k,"en-UK":k,en_UK:k,"es-ES":{"App.title":"Tiempo de la Marea","App.action.login":"Login","App.sidebar.title":"Lugares","App.text.yesterday":"Ayer","App.text.today":"Ahoy","App.text.tomorrow":"Manana","App.error.no_site_id":"No Site ID [es]","App.error.loading":"Loading... [es]","App.error.no_data_avail":"No data available  [es]"}},j=a(105),A=a.n(j),O=a(106),S=a.n(O),D=a(44),C=a.n(D),T=a(45),_=a.n(T),N=a(375),x={list:{width:250},fullList:{width:"auto"},root:{background:"yellow",color:"red"}},I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={drawIsOpen:!1,siteId:null},a.openTheDrawer=function(){a.setState({drawIsOpen:!0})},a.closeTheDrawer=function(){a.setState({drawIsOpen:!1})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"sideButtonClicked",value:function(e){this.props.history.push("/?siteId="+e)}},{key:"render",value:function(){var e=this,t=this.props.classes;r.a.createElement("div",{className:t.list},r.a.createElement(C.a,null,["salcombe","exmouth-dock","newquay"].map(function(t,a){return r.a.createElement(_.a,{button:!0,key:t},r.a.createElement("button",{type:"button",onClick:function(){e.sideButtonClicked(t)}},t))})));return r.a.createElement("div",{className:x.root},this.props.children)}}]),t}(o.Component),L=Object(N.a)(Object(y.withStyles)(x)(I)),W=a(109),M=a.n(W),B=a(37),R=a.n(B),H=a(25),U=a.n(H),Y=a(61),G=a.n(Y),F=a(7),P=a(28),q=a.n(P);var K=Object(y.withStyles)(function(e){return{root:{width:"100%",marginTop:e.spacing.unit,overflowX:"auto"},table:{width:"100%",minWidth:0,colWidth:"2rem",tableLayout:"fixed",borderWidth:1,borderColor:"black",borderStyle:"solid"},tideLevelHigh:{backgroundColor:"lightBlue",borderWidth:1,borderColor:"black",borderStyle:"solid",textColor:"yellow"},tideLevelLow:{backgroundColor:"lightGray",borderWidth:1,borderColor:"black",borderStyle:"solid"},columnHeader:{backgroundColor:"darkGray",borderWidth:1,borderColor:"black",borderStyle:"solid"},todayColumnHeader:{backgroundColor:"lightYellow",borderWidth:1,borderColor:"black",borderStyle:"solid"}}})(function(e){var t=e.classes,a=[];if(!e.data)return r.a.createElement(F.i,{variant:"h6"},"No Data for Site");Object.keys(e.data).forEach(function(e,t){var o=q()(e,"YYYYMMDD");o.isSame(q()(),"day")?a.push("Today"):o.isSame(q()().subtract(1,"day"),"day")?a.push("Yesterday"):o.isSame(q()().add(1,"day"),"day")?a.push("Tomorrow"):a.push(e.slice(6)+"/"+e.slice(4,6)+"/"+e.slice(2,4))});var o=[[],[],[],[]],n=function(t){Object.keys(e.data).forEach(function(a,r){var n=e.data[a];n?o[t].push(n[t]):o[t].push({})})};for(var i in[0,1,2,3])n(i);return r.a.createElement(F.a,{className:t.root},r.a.createElement(F.c,{className:t.table},r.a.createElement(F.f,{className:t.columnHeader},r.a.createElement(F.g,null,a.map(function(e,a){return r.a.createElement(F.e,{key:a,className:1===a?t.todayColumnHeader:t.columnHeader},r.a.createElement(F.i,{variant:"Today"===e?"h6":"body1"},e))}))),r.a.createElement(F.d,null,o.map(function(e,a){return r.a.createElement(F.g,{key:a},e.map(function(e,o){return e&&e.time?r.a.createElement(F.e,{className:e.isLow?t.tideLevelLow:t.tideLevelHigh,key:a+o,color:"primary"},r.a.createElement(F.i,{variant:"h6"},e.time.trim())):r.a.createElement(F.e,{className:t.tideLevelLow,key:a+o},r.a.createElement(F.i,{variant:"body1"},"----".trim()))}))}))))}),J=function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).siteNames={salcombe:"Salcombe",newquay:"Newquay","exmouth-dock":"Exmouth"},a.state={siteToDisplay:"",siteDate:{}},a.handleTabChange=function(e,t){a.props.history.push("/?siteId="+t)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({siteData:this.props.siteData,siteToDisplay:Object.keys(this.props.siteData)[0]})}},{key:"componentWillReceiveProps",value:function(e){this.setState({siteData:e.siteData,siteToDisplay:Object.keys(e.siteData)[0]})}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,o=a.siteData,n=a.siteToDisplay;return o?r.a.createElement("div",{className:t.root},r.a.createElement(F.h,{value:n,onChange:this.handleTabChange,indicatorColor:"secondary",textColor:"primary",fullWidth:!0,classes:{root:t.tabsRoot,indicator:t.tabsIndicator}},Object.keys(this.siteNames).map(function(a,o){return r.a.createElement(F.b,{disableRipple:!0,label:e.siteNames[a],key:a,value:a,classes:{root:t.tabRoot,selected:t.tabSelected}})})),""===n?r.a.createElement("div",null,"Nothing to see"):r.a.createElement(K,{data:o[n]})):r.a.createElement(F.i,{variant:"h3"},"No Data")}}]),t}(r.a.Component),Z=Object(y.withStyles)(function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper},tabsRoot:{borderBottom:"2px solid #e8e8e8"},tabsIndicator:{backgroundColor:"orange",height:"2px"},tabRoot:{textTransform:"initial",minWidth:96,fontWeight:e.typography.fontWeightRegular,marginRight:e.spacing.unit,fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{color:"#40a9ff",opacity:1},"&$tabSelected":{color:"blue",backgroundColor:"lightBlue",fontWeight:e.typography.fontWeightMedium},"&:focus":{color:"#40a9ff"}},tabSelected:{},typography:{padding:e.spacing.unit}}})(Object(N.a)(J));var $=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={loading:!1,data:{}},a.loadData=function(e,t){e=e||"salcombe",t=t||R()(new Date,"yyyymmdd"),console.log("TideTimes.loadData() siteId = "+e+" For "+t),M.a.get("https://opalescent-radiator.glitch.me?locationIds="+e+"&dates="+t,{crossdomain:!0}).then(function(e){var t=e.data;a.setState(t)}).catch(function(e){console.error("error: ",e)})};var o=new Date,r=new Date(o);r.setDate(o.getDate()-1);var n=new Date(o);return n.setDate(o.getDate()+1),a.todayStr=R()(o,"yyyymmdd"),a.yesterdayStr=R()(r,"yyyymmdd"),a.tomorrowStr=R()(n,"yyyymmdd"),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=G.a.parse(this.props.location.search);console.log("TideTimes.componentDidMount() Site = "+e.siteId),this.loadData(e.siteId,[this.yesterdayStr,this.todayStr,this.tomorrowStr].join(","))}},{key:"componentWillReceiveProps",value:function(e){var t=G.a.parse("/"+e.location.search)["/?siteId"];this.loadData(t,[this.yesterdayStr,this.todayStr,this.tomorrowStr].join(","))}},{key:"ucfirst",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.error,o=e.data;return t?r.a.createElement(U.a,{variant:"h3"},r.a.createElement(E.a,{id:"App.error.loading"})):!o||function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}(o)?r.a.createElement(U.a,{variant:"h3"},r.a.createElement(E.a,{id:"App.error.no_data_avail"})):a?r.a.createElement(U.a,{variant:"h4"},"There was an error loading the repos."," ",r.a.createElement("button",{onClick:this.loadData},"Try again")):(Object.keys(o).forEach(function(e,t){Object.keys(o[e]).forEach(function(t,a){var r=o[e][t],n=r[0].height<r[1].height;r.forEach(function(e){e.isLow=n,n=!n})})}),r.a.createElement(Z,{key:this.props.location.pathname+this.props.location.search,siteData:this.state.data}))}}]),t}(o.Component),V=a(373),X=a(374),z=a(372);Object(E.c)(Object(u.a)(A.a).concat(Object(u.a)(S.a)));var Q=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage||"en-US",ee=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=Object(y.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:v.a,background:{paper:"#ffffff",default:"#fafafa"}}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null),r.a.createElement(y.MuiThemeProvider,{theme:e},r.a.createElement(E.b,{locale:Q,messages:w[Q]},r.a.createElement(V.a,null,r.a.createElement(L,null,r.a.createElement(X.a,null,r.a.createElement(z.a,{path:"/",exact:!0,component:$}),r.a.createElement(z.a,{path:"/?siteId=:siteId",exact:!0,component:$}),r.a.createElement(z.a,{component:function(){return r.a.createElement("h1",null,"No path in router")}})," "))))))}}]),t}(o.Component),te=Object(y.withStyles)(m.a)(ee);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage;i.a.render(r.a.createElement(te,{lang:ae}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[197,2,1]]]);
//# sourceMappingURL=main.0410472c.chunk.js.map