(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,n){e.exports=n(98)},78:function(e,t,n){},80:function(e,t,n){},82:function(e,t,n){},84:function(e,t,n){},86:function(e,t,n){},88:function(e,t,n){},90:function(e,t,n){},92:function(e,t,n){},94:function(e,t,n){},96:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(34),o=n.n(r),l=n(12),i=n(13),s=n(15),u=n(14),d=n(16),p=n(10),f=n(38),v=n(5),m=n(39),h=n.n(m),b=n(30),E=n(26),O=n(9),w=n(8),g=n(24),y=n.n(g),j=n(40),N=n.n(j),k={current:0,initial:0,expenses:0,data:{},list:[]},C={data:{},list:[]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXPENSE":var n=y()();return Object(w.a)({},e,{data:Object(w.a)({},e.data,Object(O.a)({},n,Object(w.a)({},t.payload,{addedDate:(new Date).toISOString()}))),list:[n].concat(Object(E.a)(e.list))});default:return e}},B=Object(v.b)({balance:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BALANCE":var n=y()(),a=e.list.filter(function(t){return N()(e.data[t].addedDate)});return Object(w.a)({},e,{current:e.current+t.payload.value,data:Object(w.a)({},e.data,Object(O.a)({},n,Object(w.a)({},t.payload,{addedDate:(new Date).toISOString()}))),list:[n].concat(Object(E.a)(a))});case"ADD_EXPENSE":return Object(w.a)({},e,{expenses:e.expenses+t.payload.value,current:e.current-t.payload.value});default:return e}},expense:x}),S={key:"root",storage:h.a},A=Object(b.a)(S,B),D=Object(v.c)(A,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),R=Object(b.b)(D),_=n(100),I=n(101),L=n(6),P=n.n(L);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var W=c.a.createElement("path",{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"}),q=function(e){return c.a.createElement("svg",T({viewBox:"0 0 512 512"},e),W)};n.p;function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var F=c.a.createElement("path",{d:"M492 257.1c-2.6-2.6-6-4-9.6-4-3.6 0-7 1.4-9.6 4l-13 13c4.3-61.8-19.5-122.5-65.3-165C356.9 70.2 307.7 51 256.1 51c-26.7 0-52.8 5.1-77.4 15.1-25.5 10.4-48.3 25.6-67.7 45.3-13.2 13.4-24.6 28.5-33.6 44.8-1.9 3.4-2.3 7.4-1.2 11.1 1.1 3.7 3.8 6.8 7.2 8.5 2 1 4.2 1.5 6.4 1.5 5.2 0 9.9-2.8 12.4-7.3 7.9-14.3 17.8-27.5 29.4-39.1 16.8-16.8 36.3-29.8 58.1-38.7 21.1-8.6 43.4-12.9 66.2-12.9 22.9 0 45.2 4.3 66.3 12.9 21.8 8.9 41.4 21.9 58.2 38.8 20.3 20.4 35.4 45.6 43.8 73 7 22.9 9.2 47.3 6.6 71.2l-18.9-18.5c-2.5-2.4-5.8-3.8-9.3-3.8-3.5 0-6.9 1.4-9.4 3.9-5.2 5.2-5.2 13.6 0 18.8l42.8 42.9c1.9 1.9 4.4 2.9 7 2.9 2.6 0 5.1-1 7-2.9l42.1-42.2c5.2-5.3 5.2-13.9-.1-19.2zM428.6 335.9c-2-1-4.2-1.5-6.4-1.5-5.2 0-9.9 2.8-12.4 7.3-7.9 14.3-17.8 27.5-29.4 39.1-16.8 16.8-36.3 29.9-58.2 38.7-21.1 8.6-43.4 12.9-66.3 12.9s-45.2-4.3-66.2-12.9c-21.8-8.9-41.4-21.9-58.2-38.7-37.6-37.8-56-90.9-50.3-143.9l18.4 18.5c2.4 2.4 5.6 3.7 9 3.7 3.4 0 6.6-1.3 9-3.7l1.3-1.3c4.9-4.9 4.9-13 0-17.9l-42.9-43c-1.9-1.9-4.4-2.9-7-2.9-2.6 0-5.1 1-7 2.9l-42 42.3c-5.3 5.3-5.3 13.9 0 19.2 2.6 2.6 6 4 9.6 4 3.6 0 7-1.4 9.6-4l13-13.1c-1.8 25.8 1.3 52 9 76.5 9.9 31.4 26.8 59.3 50.3 82.8 19.5 19.6 42.2 34.7 67.6 45.1 24.5 10 50.4 15 76.9 15 26.5 0 52.4-5.1 76.9-15 25.4-10.3 48.1-25.5 67.6-45.1 13.5-13.5 25-28.8 34.2-45.4 1.9-3.4 2.3-7.4 1.2-11.1-1.2-3.7-3.8-6.8-7.3-8.5z"}),U=function(e){return c.a.createElement("svg",X({viewBox:"0 0 512 512"},e),F)},z=(n.p,function(e){var t=e.sync,n=void 0!==t&&t,a=e.back,r=void 0!==a&&a,o=e.title,l=void 0===o?"Balance":o,i=e.onRequestClose,s=void 0===i?function(e){return e}:i;return c.a.createElement("div",{className:"appbar"},r&&c.a.createElement(q,{onClick:s}),c.a.createElement("p",{className:P()("app-title",{back:r,sync:n})},l),n&&c.a.createElement(U,null))}),V="/",M="/expense/add",J="/balance/add",H=function(e){var t=e.label,n=e.primary,a=e.secondary,r=e.onClick,o=void 0===r?function(e){return e}:r;return c.a.createElement("button",{onClick:o,className:P()("button",{primary:n,secondary:a})},t)},$=n(11),G=n(41),K=n.n(G),Q=n(42),Y=n(25),Z=n.n(Y),ee=function(e){var t=e.value,n=void 0===t?0:t,a=e.className,r=void 0===a?"":a,o=e.title,l=void 0===o?"Balance":o;return c.a.createElement("div",{className:P()("card",r)},c.a.createElement("p",{className:"card-title"},l),c.a.createElement("p",{className:"card-value"},"Rs ",Z()(n).format("0,0")))},te=Object(Q.virtualize)(K.a);var ne=Object(p.b)(function(e){return{balance:e.balance}})(function(e){var t=e.balance;return c.a.createElement(te,{className:"card-swipe",slideRenderer:function(e){return function(e,t){var n=e.index,a=e.key;switch(Object($.mod)(n,3)){case 0:return c.a.createElement(ee,{key:a,title:"Balance",value:t.current,className:"balance"});case 1:return c.a.createElement(ee,{key:a,title:"Expenses",value:t.expenses,className:"expenses"});case 2:return c.a.createElement(ee,{key:a,title:"Initial",value:t.initial,className:"initial"});default:return null}}(e,t)}})}),ae=function(e){var t=e.title,n=void 0===t?"":t,a=e.value,r=void 0===a?"":a;return c.a.createElement("li",{className:"expense-item"},c.a.createElement("span",{className:"expense-title"},n),c.a.createElement("span",{className:"expense-value"},"Rs ",Z()(r).format("0,0")))},ce=Object(p.b)(function(e){return{expense:e.expense}})(function(e){var t=e.expense,n=void 0===t?{}:t,a=e.history;return c.a.createElement("div",null,c.a.createElement(z,{sync:!0}),c.a.createElement(ne,null),c.a.createElement("p",{className:"expense-section-title"},"Recent Expenses"),c.a.createElement("ul",{className:"expense-section"},n.list.slice(0,5).map(function(e,t){return c.a.createElement(ae,{key:t,title:n.data[e].title,value:n.data[e].value})})),c.a.createElement("p",{className:"expense-section-more"},"more"),c.a.createElement("div",{className:"button-container"},c.a.createElement(H,{primary:!0,label:"Add Expense",onClick:function(){return a.push(M)}}),c.a.createElement(H,{secondary:!0,label:"Add Balance",onClick:function(){return a.push(J)}})))}),re=n(43),oe=n.n(re),le=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleClose=function(){e.setState({close:!0});var t=setTimeout(function(){e.props.onRequestClose(),clearTimeout(t)},140)},e.state={close:!1},e.handleClose=oe()(e.handleClose,150,{leading:!0,trailing:!1}),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:P()("fullscreen-page",{close:this.state.close})},c.a.createElement(z,{back:!0,onRequestClose:this.handleClose,title:this.props.title}),this.props.children)}}]),t}(c.a.Component);le.defaultProps={onRequestClose:function(e){return e}};var ie=function(e){var t=e.history;return c.a.createElement(le,{onRequestClose:function(){return t.goBack()},title:"Add Expense"})},se=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onFocus=function(t){e.props.onFocus(t),e.setState({focused:!0,touched:!0})},e.onBlur=function(t){e.props.onBlur(t),e.setState({focused:!1})},e.onInput=function(t){e.props.onInput(t),e.props.onValueChange(t.target.value),e.setState({edited:!0,value:t.target.value})},e.state={edited:!1,focused:!1,touched:!1,value:void 0},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("input",{onBlur:this.onBlur,onFocus:this.onFocus,onInput:this.onInput,value:this.state.value,placeholder:this.props.placeholder,className:P()("input",Object(O.a)({},this.props.activeClassName,this.state.focused))})}}]),t}(c.a.PureComponent);se.defaultProps={onBlur:function(e){return e},onFocus:function(e){return e},onInput:function(e){return e},onValueChange:function(e){return e},activeClassName:"active"};var ue=Object(p.b)(function(e){return{balance:e.balance}})(function(e){var t=e.history,n=e.balance;return c.a.createElement(le,{onRequestClose:function(){return t.goBack()},title:"Add Balance"},c.a.createElement("div",{className:"input-container"},c.a.createElement("p",null,"Add some amount to your current balance."),c.a.createElement(se,{placeholder:"How much do you want to add?"}),c.a.createElement(ae,{title:"Current Balance",value:n.current}),c.a.createElement(ae,{title:"New Balance",value:n.current})))}),de=function(){return c.a.createElement(_.a,null,c.a.createElement("div",{className:"route-container"},c.a.createElement(I.a,{path:V,component:ce}),c.a.createElement(I.a,{path:M,component:ie}),c.a.createElement(I.a,{path:J,component:ue})))},pe=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,{store:D},c.a.createElement(f.a,{loading:null,persistor:R},c.a.createElement(de,null)))}}]),t}(a.Component),fe=(n(78),n(80),n(82),n(84),n(86),n(88),n(90),n(92),n(94),n(96),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ve(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(c.a.createElement(pe,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/balance-pwa",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/balance-pwa","/service-worker.js");fe?(function(e,t){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ve(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ve(t,e)})}}()}},[[45,2,1]]]);
//# sourceMappingURL=main.d8a3ad14.chunk.js.map