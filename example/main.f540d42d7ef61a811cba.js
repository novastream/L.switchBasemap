(()=>{var e={969:()=>{L.Control.basemapsSwitcher=L.Control.extend({options:{position:"topright"},initialize:function(e,t){L.Util.setOptions(this,t),this.layers=e},onAdd:function(e){var t=this,n=this.container=L.DomUtil.create("div","leaflet-control-basemapsSwitcher");return this._createItems(),this._collapse(),n.addEventListener("mouseover",(function(){t._expand()})),n.addEventListener("mouseout",(function(){t._collapse()})),n},_createItems:function(){var e=this;this.layers.forEach((function(t,n){var r;t.id=n;var a=L.DomUtil.create("div","basemapImg"),i=L.DomUtil.create("div"),o=L.DomUtil.create("div","name"),s=L.DomUtil.create("div","check");o.innerHTML=t.name,null!==(r=t.layer)&&void 0!==r&&r._map&&(e.activeMap=t,s.classList.add("activeMap")),i.style.backgroundImage="url(".concat(t.icon,")"),a.append(i),i.append(s),i.append(o),a.addEventListener("click",(function(){var n;e._removeLayers(t.layer),null!==(n=t.layer)&&void 0!==n&&n._map||(t.layer.addTo(e._map),e.activeMap=t,e._collapse(),s.classList.add("activeMap"))})),e.container.append(a)}))},_removeLayers:function(e){var t=this;this.layers.forEach((function(n){var r;n.layer._leaflet_id!==e._leaflet_id&&null!==(r=n.layer)&&void 0!==r&&r._map&&t._map.removeLayer(n.layer)}))},_collapse:function(){var e=this;this.container.childNodes.forEach((function(t,n){n!==e.activeMap.id&&(t.classList.add("hidden"),t.querySelector(".check").classList.remove("activeMap"))}))},_expand:function(){this.container.childNodes.forEach((function(e){e.classList.remove("hidden")}))}}),L.basemapsSwitcher=function(e,t){return new L.Control.basemapsSwitcher(e,t)}},188:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".hidden {\r\n    display: none;\r\n}\r\n\r\n.leaflet-control-basemapsSwitcher{\r\n    height: auto;\r\n    width: auto;\r\n    display:flex;\r\n}\r\n\r\n.leaflet-control-basemapsSwitcher:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.basemapImg{\r\n    box-shadow: 2px 2px 5px rgb(0 0 0 / 65%);\r\n    background-color: #fff;\r\n    margin:5px;\r\n    padding:5px;\r\n    border-radius: 3px 3px;\r\n}\r\n\r\n.basemapImg div{\r\n    background-size: 70px 70px;\r\n    width: 70px;\r\n    height: 70px;\r\n    border-radius: 3px 3px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n.basemapImg div .name{\r\n    width:100%;\r\n    height:auto;\r\n    background-color: rgba(255, 255, 255, 0.6);\r\n    border-radius: 0;\r\n    color:black;\r\n    display: flex;\r\n    align-items: center;\r\n    font-weight: 500;\r\n    padding:1px;\r\n}\r\n\r\n.basemapImg div .check{\r\n    width:auto;\r\n    height:auto;\r\n    border-radius: 0;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    font-weight: 500;\r\n    padding:1px;\r\n    content:''\r\n}\r\n\r\n.activeMap::before{\r\n    color:white;\r\n    content: '✔';\r\n    width: 18px;\r\n    height: 18px;\r\n    background-color: #387B23;\r\n    border-radius: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}",""]);const i=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function s(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],a=0;a<e.length;a++){var i=e[a],c=t.base?i[0]+t.base:i[0],l=n[c]||0,p="".concat(c," ").concat(l);n[c]=l+1;var d=s(p),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(o[d].references++,o[d].updater(u)):o.push({identifier:p,updater:v(u,t),references:1}),r.push(p)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var p,d=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function u(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,a=n.media,i=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(e,t){var n,r,a;if(t.singleton){var i=m++;n=h||(h=l(t)),r=u.bind(null,n,i,!1),a=u.bind(null,n,i,!0)}else n=l(t),r=f.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=s(n[r]);o[a].references--}for(var i=c(e,t),l=0;l<n.length;l++){var p=s(n[l]);0===o[p].references&&(o[p].updater(),o.splice(p,1))}n=i}}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(379),t=n.n(e),r=n(188),a={insert:"head",singleton:!1};t()(r.Z,a);r.Z.locals;n(969);var i=L.map("map").setView([51.505,-.09],13);new L.basemapsSwitcher([{layer:L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(i),icon:"./assets/images/img1.PNG",name:"Map one"},{layer:L.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",{attribution:'&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'}),icon:"./assets/images/img2.PNG",name:"Map two"},{layer:L.tileLayer("//{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png",{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}),icon:"./assets/images/img3.PNG",name:"Map three"}],{position:"topright"}).addTo(i)})()})();