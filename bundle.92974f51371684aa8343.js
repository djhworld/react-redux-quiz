webpackJsonp([1],[,,,,,,,,,,,,,,function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},,,function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(36),o=n(139),i=n(75),u=Object.defineProperty;e.f=n(20)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){t.exports=!n(38)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},,,,,,function(t,e,n){var r=n(14),o=n(15),i=n(138),u=n(27),c=function(t,e,n){var a,f,s,l=t&c.F,p=t&c.G,d=t&c.S,v=t&c.P,y=t&c.B,h=t&c.W,m=p?o:o[e]||(o[e]={}),b=m.prototype,g=p?r:d?r[e]:(r[e]||{}).prototype;p&&(n=e);for(a in n)(f=!l&&g&&void 0!==g[a])&&a in m||(s=f?g[a]:n[a],m[a]=p&&"function"!=typeof g[a]?n[a]:y&&f?i(s,r):h&&g[a]==s?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(s):v&&"function"==typeof s?i(Function.call,s):s,v&&((m.virtual||(m.virtual={}))[a]=s,t&c.R&&b&&!b[a]&&u(b,a,s)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){var r=n(19),o=n(49);t.exports=n(20)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(321),o=n(72);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(74)("wks"),o=n(48),i=n(14).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},,,,,,,function(t,e,n){var r=n(37);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},,,,,,,,,,function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},,,,,,,,,,,,,,,,,,,,,,,function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(74)("keys"),o=n(48);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(14),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var r=n(37);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=!0},function(t,e){t.exports={}},function(t,e,n){var r=n(36),o=n(320),i=n(81),u=n(73)("IE_PROTO"),c=function(){},a=function(){var t,e=n(140)("iframe"),r=i.length;for(e.style.display="none",n(325).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=a(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(144),o=n(81);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(19).f,o=n(18),i=n(29)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){e.f=n(29)},function(t,e,n){var r=n(14),o=n(15),i=n(77),u=n(83),c=n(19).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:u.f(t)})}},function(t,e){e.f={}.propertyIsEnumerable},,,function(t,e,n){"use strict";function r(){var t=i.default.get(c).catch(function(t){return console.log("ERROR GETTING QUESTION: "+t)});return{type:u,payload:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.GET_QUESTIONS=void 0,e.getQuestions=r;var o=n(86),i=function(t){return t&&t.__esModule?t:{default:t}}(o),u=e.GET_QUESTIONS="GET_QUESTIONS",c="https://vtwd20wsbe.execute-api.eu-west-2.amazonaws.com/dev/question"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var r=n(72);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(18),o=n(136),i=n(73)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(308);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){t.exports=!n(20)&&!n(38)(function(){return 7!=Object.defineProperty(n(140)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(37),o=n(14).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(315),i=r(o),u=n(330),c=r(u),a="function"==typeof c.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":typeof t};e.default="function"==typeof c.default&&"symbol"===a(i.default)?function(t){return void 0===t?"undefined":a(t)}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":void 0===t?"undefined":a(t)}},function(t,e,n){"use strict";var r=n(77),o=n(26),i=n(143),u=n(27),c=n(18),a=n(78),f=n(319),s=n(82),l=n(137),p=n(29)("iterator"),d=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,y,h,m,b){f(n,e,y);var g,x,_,w=function(t){if(!d&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",S="values"==h,E=!1,j=t.prototype,M=j[p]||j["@@iterator"]||h&&j[h],P=M||w(h),T=h?S?w("entries"):P:void 0,k="Array"==e?j.entries||M:M;if(k&&(_=l(k.call(new t)))!==Object.prototype&&_.next&&(s(_,O,!0),r||c(_,p)||u(_,p,v)),S&&M&&"values"!==M.name&&(E=!0,P=function(){return M.call(this)}),r&&!b||!d&&!E&&j[p]||u(j,p,P),a[e]=P,a[O]=v,h)if(g={values:S?P:w("values"),keys:m?P:w("keys"),entries:T},b)for(x in g)x in j||i(j,x,g[x]);else o(o.P+o.F*(d||E),e,g);return g}},function(t,e,n){t.exports=n(27)},function(t,e,n){var r=n(18),o=n(28),i=n(322)(!1),u=n(73)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),a=0,f=[];for(n in c)n!=u&&r(c,n)&&f.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~i(f,n)||f.push(n));return f}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(144),o=n(81).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(85),o=n(49),i=n(28),u=n(75),c=n(18),a=n(139),f=Object.getOwnPropertyDescriptor;e.f=n(20)?f:function(t,e){if(t=i(t),e=u(e,!0),a)try{return f(t,e)}catch(t){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){"use strict";function r(t,e){var n=i.default.post(c,{country:t,city:e}).catch(function(t){return console.log("ERROR GETTING QUESTION: "+t)});return{type:u,payload:n}}Object.defineProperty(e,"__esModule",{value:!0}),e.CHECK_ANSWER=void 0,e.checkAnswer=r;var o=n(86),i=function(t){return t&&t.__esModule?t:{default:t}}(o),u=e.CHECK_ANSWER="CHECK_ANSWER",c="https://vtwd20wsbe.execute-api.eu-west-2.amazonaws.com/dev/answer"},,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(21),i=r(o),u=n(96),c=r(u),a=n(68),f=n(35),s=n(131),l=r(s);n(133),n(288),n(290);var p=n(302),d=r(p),v=n(366),y=r(v),h=(0,f.applyMiddleware)(l.default)(f.createStore);c.default.render(i.default.createElement(a.Provider,{store:h(y.default)},i.default.createElement(d.default,null)),document.getElementById("app"))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var r=n(289);"string"==typeof r&&(r=[[t.i,r,""]]);var o={};o.transform=void 0;n(135)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(134)(void 0),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,700);",""]),e.push([t.i,"*{box-sizing:border-box}body,html{font-family:Source Serif Pro,serif;color:#222;height:100%}h1,h2,h3,p{margin:0}#app,.wrapper{height:100%;background-color:#caceb5}.title{text-align:center;height:100px;line-height:100px;text-decoration:underline}.main{height:calc(100% - 130px);width:95%;margin:0 auto;padding-top:10px;position:relative;border-left:20px solid transparent;border-right:20px solid transparent;display:flex;flex-flow:column wrap}.main ul{list-style-type:none;padding:0}.main ul li{padding:10px;margin:5px;border:2px solid #222;cursor:pointer;background-color:#fff;font-size:1.5em}.main .response{height:100px;font-size:1.5em;font-weight:700}.main .correct{color:green;background-color:#d2f7c3;font-weight:700}.main .incorrect{color:red;background-color:#f9ab9f}.main button{margin:0 auto;text-align:center;width:200px;padding:10px;cursor:pointer}@media (min-width:1024px){.main{width:60%}}.footer{text-align:center;font-weight:700;height:30px;line-height:30px}.footer a{color:#444}",""])},function(t,e,n){"use strict";var r=n(291);r.keys().forEach(r)},function(t,e,n){function r(t){return n(o(t))}function o(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./android-chrome-192x192.png":292,"./android-chrome-512x512.png":293,"./apple-touch-icon.png":294,"./browserconfig.xml":295,"./favicon-16x16.png":296,"./favicon-32x32.png":297,"./favicon.ico":298,"./manifest.json":299,"./mstile-150x150.png":300,"./safari-pinned-tab.svg":301};r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id=291},function(t,e,n){t.exports=n.p+"assets/favicons/android-chrome-192x192.png"},function(t,e,n){t.exports=n.p+"assets/favicons/android-chrome-512x512.png"},function(t,e,n){t.exports=n.p+"assets/favicons/apple-touch-icon.png"},function(t,e,n){t.exports=n.p+"assets/favicons/browserconfig.xml"},function(t,e,n){t.exports=n.p+"assets/favicons/favicon-16x16.png"},function(t,e,n){t.exports=n.p+"assets/favicons/favicon-32x32.png"},function(t,e,n){t.exports=n.p+"assets/favicons/favicon.ico"},function(t,e,n){t.exports=n.p+"assets/favicons/manifest.json"},function(t,e,n){t.exports=n.p+"assets/favicons/mstile-150x150.png"},function(t,e,n){t.exports=n.p+"assets/favicons/safari-pinned-tab.svg"},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(21),i=r(o),u=n(303),c=r(u),a=function(){return i.default.createElement("div",{className:"wrapper"},i.default.createElement("h1",{className:"title"},"Capital Cities Quiz"),i.default.createElement(c.default,null),i.default.createElement("footer",{className:"footer"},"Coded by ",i.default.createElement("a",{href:"https://github.com/matt2112",target:"_blank",rel:"noreferrer noopener"},"Matt Lewis")))};e.default=a},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){return{question:t.question,answer:t.answer}}function i(t){return(0,_.bindActionCreators)({checkAnswer:w.checkAnswer,getQuestions:O.getQuestions},t)}Object.defineProperty(e,"__esModule",{value:!0});var u=n(304),c=r(u),a=n(309),f=r(a),s=n(310),l=r(s),p=n(314),d=r(p),v=n(340),y=r(v),h=n(21),m=r(h),b=n(68),g=n(47),x=r(g),_=n(35),w=n(149),O=n(88),S=function(t){function e(t){(0,f.default)(this,e);var n=(0,d.default)(this,(e.__proto__||(0,c.default)(e)).call(this,t));return n.clickHandler=n.clickHandler.bind(n),n.renderAnswers=n.renderAnswers.bind(n),n.renderResponse=n.renderResponse.bind(n),n}return(0,y.default)(e,t),(0,l.default)(e,[{key:"componentDidMount",value:function(){this.props.getQuestions()}},{key:"clickHandler",value:function(t){if("LI"===t.target.tagName){var e=this.props.question.country;this.props.checkAnswer(e,t.target.innerText)}else this.props.getQuestions()}},{key:"renderAnswers",value:function(){var t=this;return this.props.question.answers?this.props.question.answers.map(function(e){var n="";return t.props.answer.userAnswer===e?n=t.props.answer.correct?"correct":"incorrect":t.props.answer.correctAnswer===e&&(n="correct"),m.default.createElement("li",{key:e,className:"answer "+n,onClick:t.clickHandler},e)}):""}},{key:"renderResponse",value:function(){var t=this.props.answer.correct;return!0===t?"CORRECT!":!1===t?"INCORRECT!":""}},{key:"render",value:function(){return m.default.createElement("div",{className:"main"},m.default.createElement("h2",null,"What is the capital of ",this.props.question.country,"?"),m.default.createElement("h3",null,"Select the answer from the list below:"),m.default.createElement("ul",null,this.renderAnswers()),m.default.createElement("p",{className:"response"},this.renderResponse()),m.default.createElement("button",{onClick:this.clickHandler},"New Question"))}}]),e}(h.Component);S.propTypes={answer:x.default.object,checkAnswer:x.default.func,getQuestions:x.default.func,question:x.default.object},e.default=(0,b.connect)(o,i)(S)},function(t,e,n){t.exports={default:n(305),__esModule:!0}},function(t,e,n){n(306),t.exports=n(15).Object.getPrototypeOf},function(t,e,n){var r=n(136),o=n(137);n(307)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(26),o=n(15),i=n(38);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(311),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){t.exports={default:n(312),__esModule:!0}},function(t,e,n){n(313);var r=n(15).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(26);r(r.S+r.F*!n(20),"Object",{defineProperty:n(19).f})},function(t,e,n){"use strict";e.__esModule=!0;var r=n(141),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,o.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){t.exports={default:n(316),__esModule:!0}},function(t,e,n){n(317),n(326),t.exports=n(83).f("iterator")},function(t,e,n){"use strict";var r=n(318)(!0);n(142)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(76),o=n(72);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),a=r(n),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a),i<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536)}}},function(t,e,n){"use strict";var r=n(79),o=n(49),i=n(82),u={};n(27)(u,n(29)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(19),o=n(36),i=n(80);t.exports=n(20)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,a=0;c>a;)r.f(t,n=u[a++],e[n]);return t}},function(t,e,n){var r=n(145);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(28),o=n(323),i=n(324);t.exports=function(t){return function(e,n,u){var c,a=r(e),f=o(a.length),s=i(u,f);if(t&&n!=n){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(76),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(76),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(14).document;t.exports=r&&r.documentElement},function(t,e,n){n(327);for(var r=n(14),o=n(27),i=n(78),u=n(29)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<c.length;a++){var f=c[a],s=r[f],l=s&&s.prototype;l&&!l[u]&&o(l,u,f),i[f]=i.Array}},function(t,e,n){"use strict";var r=n(328),o=n(329),i=n(78),u=n(28);t.exports=n(142)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){t.exports={default:n(331),__esModule:!0}},function(t,e,n){n(332),n(337),n(338),n(339),t.exports=n(15).Symbol},function(t,e,n){"use strict";var r=n(14),o=n(18),i=n(20),u=n(26),c=n(143),a=n(333).KEY,f=n(38),s=n(74),l=n(82),p=n(48),d=n(29),v=n(83),y=n(84),h=n(334),m=n(335),b=n(36),g=n(28),x=n(75),_=n(49),w=n(79),O=n(336),S=n(148),E=n(19),j=n(80),M=S.f,P=E.f,T=O.f,k=r.Symbol,N=r.JSON,C=N&&N.stringify,A=d("_hidden"),L=d("toPrimitive"),R={}.propertyIsEnumerable,I=s("symbol-registry"),F=s("symbols"),G=s("op-symbols"),Q=Object.prototype,H="function"==typeof k,W=r.QObject,q=!W||!W.prototype||!W.prototype.findChild,D=i&&f(function(){return 7!=w(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=M(Q,e);r&&delete Q[e],P(t,e,n),r&&t!==Q&&P(Q,e,r)}:P,z=function(t){var e=F[t]=w(k.prototype);return e._k=t,e},U=H&&"symbol"==typeof k.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof k},K=function(t,e,n){return t===Q&&K(G,e,n),b(t),e=x(e,!0),b(n),o(F,e)?(n.enumerable?(o(t,A)&&t[A][e]&&(t[A][e]=!1),n=w(n,{enumerable:_(0,!1)})):(o(t,A)||P(t,A,_(1,{})),t[A][e]=!0),D(t,e,n)):P(t,e,n)},V=function(t,e){b(t);for(var n,r=h(e=g(e)),o=0,i=r.length;i>o;)K(t,n=r[o++],e[n]);return t},J=function(t,e){return void 0===e?w(t):V(w(t),e)},B=function(t){var e=R.call(this,t=x(t,!0));return!(this===Q&&o(F,t)&&!o(G,t))&&(!(e||!o(this,t)||!o(F,t)||o(this,A)&&this[A][t])||e)},Y=function(t,e){if(t=g(t),e=x(e,!0),t!==Q||!o(F,e)||o(G,e)){var n=M(t,e);return!n||!o(F,e)||o(t,A)&&t[A][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=T(g(t)),r=[],i=0;n.length>i;)o(F,e=n[i++])||e==A||e==a||r.push(e);return r},Z=function(t){for(var e,n=t===Q,r=T(n?G:g(t)),i=[],u=0;r.length>u;)!o(F,e=r[u++])||n&&!o(Q,e)||i.push(F[e]);return i};H||(k=function(){if(this instanceof k)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===Q&&e.call(G,n),o(this,A)&&o(this[A],t)&&(this[A][t]=!1),D(this,t,_(1,n))};return i&&q&&D(Q,t,{configurable:!0,set:e}),z(t)},c(k.prototype,"toString",function(){return this._k}),S.f=Y,E.f=K,n(147).f=O.f=X,n(85).f=B,n(146).f=Z,i&&!n(77)&&c(Q,"propertyIsEnumerable",B,!0),v.f=function(t){return z(d(t))}),u(u.G+u.W+u.F*!H,{Symbol:k});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)d($[tt++]);for(var et=j(d.store),nt=0;et.length>nt;)y(et[nt++]);u(u.S+u.F*!H,"Symbol",{for:function(t){return o(I,t+="")?I[t]:I[t]=k(t)},keyFor:function(t){if(!U(t))throw TypeError(t+" is not a symbol!");for(var e in I)if(I[e]===t)return e},useSetter:function(){q=!0},useSimple:function(){q=!1}}),u(u.S+u.F*!H,"Object",{create:J,defineProperty:K,defineProperties:V,getOwnPropertyDescriptor:Y,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),N&&u(u.S+u.F*(!H||f(function(){var t=k();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!U(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&m(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!U(e))return e}),r[1]=e,C.apply(N,r)}}}),k.prototype[L]||n(27)(k.prototype,L,k.prototype.valueOf),l(k,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){var r=n(48)("meta"),o=n(37),i=n(18),u=n(19).f,c=0,a=Object.isExtensible||function(){return!0},f=!n(38)(function(){return a(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!a(t))return"F";if(!e)return"E";s(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!a(t))return!0;if(!e)return!1;s(t)}return t[r].w},d=function(t){return f&&v.NEED&&a(t)&&!i(t,r)&&s(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},function(t,e,n){var r=n(80),o=n(146),i=n(85);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,c=n(t),a=i.f,f=0;c.length>f;)a.call(t,u=c[f++])&&e.push(u);return e}},function(t,e,n){var r=n(145);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(28),o=n(147).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?c(t):o(r(t))}},function(t,e){},function(t,e,n){n(84)("asyncIterator")},function(t,e,n){n(84)("observable")},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(341),i=r(o),u=n(345),c=r(u),a=n(141),f=r(a);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,f.default)(e)));t.prototype=(0,c.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(i.default?(0,i.default)(t,e):t.__proto__=e)}},function(t,e,n){t.exports={default:n(342),__esModule:!0}},function(t,e,n){n(343),t.exports=n(15).Object.setPrototypeOf},function(t,e,n){var r=n(26);r(r.S,"Object",{setPrototypeOf:n(344).set})},function(t,e,n){var r=n(37),o=n(36),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(138)(Function.call,n(148).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){t.exports={default:n(346),__esModule:!0}},function(t,e,n){n(347);var r=n(15).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){var r=n(26);r(r.S,"Object",{create:n(79)})},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(35),i=n(367),u=r(i),c=n(368),a=r(c),f=(0,o.combineReducers)({answer:u.default,question:a.default});e.default=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];switch(e.type){case r.CHECK_ANSWER:return e.payload.data;case o.GET_QUESTIONS:return{};default:return t}};var r=n(149),o=n(88)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];switch(e.type){case r.GET_QUESTIONS:return e.payload.data;default:return t}};var r=n(88)}],[155]);