(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{425:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2IiBmaWxsPSIjQzRDNEM0Ii8+CjxwYXRoIGQ9Ik0yNTYuMDAxIDI1MC45MjFDMjk0LjE1MiAyNTAuOTIxIDMyNS4wOCAyMTkuOTkzIDMyNS4wOCAxODEuODQxQzMyNS4wOCAxNDMuNjkgMjk0LjE1MiAxMTIuNzYyIDI1Ni4wMDEgMTEyLjc2MkMyMTcuODQ5IDExMi43NjIgMTg2LjkyMSAxNDMuNjkgMTg2LjkyMSAxODEuODQxQzE4Ni45MjEgMjE5Ljk5MyAyMTcuODQ5IDI1MC45MjEgMjU2LjAwMSAyNTAuOTIxWiIgc3Ryb2tlPSIjNzk3OTc5IiBzdHJva2Utd2lkdGg9IjM0LjYwNzEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTUyLjM4MSAzOTkuMjM4VjM2NC42OThDMTUyLjM4MSAzNDYuMzc3IDE1OS42NTkgMzI4LjgwNyAxNzIuNjE0IDMxNS44NTJDMTg1LjU2OSAzMDIuODk3IDIwMy4xMzkgMjk1LjYxOSAyMjEuNDYgMjk1LjYxOUgyOTAuNTRDMzA4Ljg2MSAyOTUuNjE5IDMyNi40MzEgMzAyLjg5NyAzMzkuMzg2IDMxNS44NTJDMzUyLjM0MSAzMjguODA3IDM1OS42MTkgMzQ2LjM3NyAzNTkuNjE5IDM2NC42OThWMzk5LjIzOCIgc3Ryb2tlPSIjNzk3OTc5IiBzdHJva2Utd2lkdGg9IjM0LjYwNzEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"},436:function(t,e,r){var content=r(468);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("6746fc20",content,!0,{sourceMap:!1})},466:function(t,e,r){t.exports=r.p+"img/avatar-mayor.ca481dc.jpg"},467:function(t,e,r){"use strict";r(436)},468:function(t,e,r){var n=r(12)(!1);n.push([t.i,".avatar[data-v-1ed45343]{min-width:48px;min-height:48px;max-width:48px;max-height:48px;border:2px solid hsla(0,0%,100%,.4);border-radius:24px}.font-weight-bold[data-v-1ed45343]{font-size:18px}.small[data-v-1ed45343]{font-size:12px;opacity:.5;font-weight:600}",""]),t.exports=n},491:function(t,e,r){"use strict";r.r(e);r(8),r(5),r(7),r(14),r(6),r(15);var n=r(3),c=r(22),o=(r(29),r(79),r(425)),M=r.n(o),j=r(466),l=r.n(j);function I(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={data:function(){return{avatar:l.a}},computed:{user:function(){return this.$store.state.user.data}},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get();case 2:case"end":return e.stop()}}),e)})))()},methods:{get:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,JSON.parse(localStorage.getItem("user"));case 2:r=e.sent,t.$store.commit("user/setCurrentUser",y(y({},r),{},{userName:r.name,avatar:r.avatar?r.avatar:M.a}));case 4:case"end":return e.stop()}}),e)})))()}}},d=(r(467),r(35)),component=Object(d.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex align-center"},[r("img",{staticClass:"avatar",attrs:{src:t.avatar,alt:"Avatar profile",width:"48",height:"48"}}),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ml-4 white--text d-flex flex-column"},[r("span",{staticClass:"font-weight-bold"},[t._v("Marco Antonio Franzato")]),t._v(" "),r("span",{staticClass:"small"},[t._v("Município de Cianorte, PR")])])}],!1,null,"1ed45343",null);e.default=component.exports}}]);