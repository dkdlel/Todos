(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{16:function(e,t,c){e.exports={virtual:"TodoListItem_virtual__26OA5",wrap:"TodoListItem_wrap__3yY4n",checkbox:"TodoListItem_checkbox__ITdpH",text:"TodoListItem_text__2u34B",checked:"TodoListItem_checked__2h1lz",remove:"TodoListItem_remove__3SZ1Q"}},21:function(e,t,c){e.exports={wrap:"TodoTemplate_wrap__XQI-M",title:"TodoTemplate_title__2yPCB",content:"TodoTemplate_content__xGGXQ"}},29:function(e,t,c){e.exports={wrap:"TodoList_wrap__3KzOg"}},36:function(e,t,c){e.exports={wrap:"TodoInsert_wrap__1idzF"}},44:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c.n(n),a=c(12),i=c.n(a),r=(c(44),c(20)),s=c(24),l=c(37),d=c(29),u=c.n(d),j=c(15),b=c(30),h=c.n(b),O=c(72),m=c(16),x=c.n(m),p=c(6),k=h.a.bind(x.a),_=function(e){var t=e.todo,c=e.handleClickRemove,n=e.handleClickToggle,o=e.style,a=t.id,i=t.text,r=t.checked;return Object(p.jsx)("div",{className:x.a.virtual,style:o,children:Object(p.jsxs)("main",{className:x.a.wrap,children:[Object(p.jsxs)("section",{className:k("checkbox",{checked:r}),onClick:function(){return n(a)},children:[Object(p.jsx)(O.a,{component:"div",children:r?Object(p.jsx)(j.b,{}):Object(p.jsx)(j.c,{})}),Object(p.jsx)("div",{className:x.a.text,children:i})]}),Object(p.jsx)(O.a,{component:"div",className:x.a.remove,onClick:function(){return c(a)},children:Object(p.jsx)(j.d,{})})]})})},f=o.a.memo(_,(function(e,t){return e.todo===t.todo})),v=function e(t){var c=t.todosList,o=t.handleClickRemove,a=t.handleClickToggle,i=Object(n.useCallback)((function(e){var t=e.index,n=e.key,i=e.style,r=c[t];return Object(p.jsx)(f,{todo:r,handleClickRemove:o,handleClickToggle:a,style:i},n)}),[o,a,c]);return Object(p.jsx)(l.a,{className:u.a.wrap,width:512,height:513,rowCount:c.length,rowHeight:57,rowRenderer:i,list:e,style:{outline:"none"}})},T=o.a.memo(v),C=c(21),w=c.n(C),g=function(e){var t=e.children;return Object(p.jsxs)("main",{className:w.a.wrap,children:[Object(p.jsx)("div",{className:w.a.title,children:"\uc77c\uc815 \uad00\ub9ac"}),Object(p.jsx)("div",{className:w.a.content,children:t})]})},I=c(36),y=c.n(I),L=function(e){var t=e.handleClickInsert,c=Object(n.useState)(""),o=Object(r.a)(c,2),a=o[0],i=o[1],s=Object(n.useCallback)((function(e){i(e.target.value)}),[]),l=Object(n.useCallback)((function(){t(a),i("")}),[t,a]);return Object(p.jsxs)("form",{className:y.a.wrap,children:[Object(p.jsx)("input",{type:"text",placeholder:"\ud560 \uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",value:a,onChange:s}),Object(p.jsx)(O.a,{component:"button",onClick:l,children:Object(p.jsx)(j.a,{})})]})};function N(){for(var e=[],t=0;t<2500;t++)e.push({id:t,text:"\ud560 \uc77c".concat(t),checked:!1});return e}function R(e,t){switch(t.type){case"INSERT":return e.concat(t.newTodo);case"REMOVE":return e.filter((function(e){return e.id!==t.id}));case"TOGGLE":return e.map((function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},e),{},{checked:!e.checked}):e}));default:return e}}var E=function(){var e=Object(n.useReducer)(R,void 0,N),t=Object(r.a)(e,2),c=t[0],o=t[1],a=Object(n.useRef)(2500),i=Object(n.useCallback)((function(e){var t={id:a.current,text:e,checked:!1};o({type:"INSERT",newTodo:t}),a.current+=1}),[]),s=Object(n.useCallback)((function(e){o({type:"REMOVE",id:e})}),[]),l=Object(n.useCallback)((function(e){o({type:"TOGGLE",id:e})}),[]);return Object(p.jsxs)(g,{children:[Object(p.jsx)(L,{handleClickInsert:i}),Object(p.jsx)(T,{todosList:c,handleClickRemove:s,handleClickToggle:l})]})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,73)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),o(e),a(e),i(e)}))};i.a.render(Object(p.jsx)(E,{}),document.getElementById("root")),G()}},[[60,1,2]]]);
//# sourceMappingURL=main.77ffec99.chunk.js.map