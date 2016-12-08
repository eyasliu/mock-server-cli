#!/usr/bin/env node
!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,i){try{var a=t[o](i),u=a.value}catch(e){return void r(e)}return a.done?void e(u):Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};r(1);var a=r(3),u=(n(a),r(4)),s=n(u),c=r(5),f=n(c),l=r(6),p=r(7),d=n(p),v=r(17),h=n(v),y=r(20),m=n(y),g=r(22),b=n(g),w=r(24),x=n(w),k=r(25),_=n(k),P=r(26),j=n(P),E=r(15),O=n(E),L=r(27),S=n(L),N=i({db:l.argv.db&&l.argv.db!==!0?l.argv.db:"mockdata.json",domain:l.argv.address&&l.argv.address!==!0?l.argv.address:"localhost",port:l.argv.port&&l.argv.port!==!0?l.argv.port:3e3},l.argv),R={version:S.default.version};if(console.log({cwd:process.cwd(),dirname:__dirname,filenmae:__filename}),N.h||N.help)console.log("\n\nUsage: mock-server [options] [ --db mockdata | mockdata.json ]\n\nOptions:\n\n  -h, --help                     output usage information\n  -v, --version                  output the version number\n\n  --port [number]                Port to use [3000]\n  --db [string]                  use the json database\n  --address [domain | ip]        Address to use [localhost]\n");else if(N.v||N.version)console.log("version: "+R.version);else{var q=new s.default;q.use(function(){var e=o(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.appConfig=N,e.next=3,r();case 3:case"end":return e.stop()}},e,void 0)}));return function(t,r){return e.apply(this,arguments)}}()),q.use((0,f.default)()),q.use((0,_.default)(O.default.join(__dirname,"./client"))),q.use((0,j.default)()),q.use((0,x.default)("http://portal.wps.cn")),q.use((0,d.default)(O.default.join(process.cwd(),N.db))),q.use(b.default.routes()),q.use(b.default.allowedMethods()),q.use(m.default),q.use((0,h.default)()),q.listen(N.port,"0.0.0.0",function(){console.log("mock server listening http://"+N.domain+":"+N.port)})}},function(e,t,r){(function(e){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(r){function n(e,t,r,n){var o=t&&t.prototype instanceof i?t:i,a=Object.create(o.prototype),u=new d(n||[]);return a._invoke=f(e,r,u),a}function o(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function i(){}function a(){}function u(){}function s(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function c(e){function r(n,i,a,u){var s=o(e[n],e,i);if("throw"!==s.type){var c=s.arg,f=c.value;return f&&"object"===("undefined"==typeof f?"undefined":t(f))&&m.call(f,"__await")?Promise.resolve(f.__await).then(function(e){r("next",e,a,u)},function(e){r("throw",e,a,u)}):Promise.resolve(f).then(function(e){c.value=e,a(c)},u)}u(s.arg)}function n(e,t){function n(){return new Promise(function(n,o){r(e,t,n,o)})}return i=i?i.then(n,n):n()}"object"===("undefined"==typeof process?"undefined":t(process))&&process.domain&&(r=process.domain.bind(r));var i;this._invoke=n}function f(e,t,r){var n=_;return function(i,a){if(n===j)throw new Error("Generator is already running");if(n===E){if("throw"===i)throw a;return h()}for(;;){var u=r.delegate;if(u){if("return"===i||"throw"===i&&u.iterator[i]===y){r.delegate=null;var s=u.iterator.return;if(s){var c=o(s,u.iterator,a);if("throw"===c.type){i="throw",a=c.arg;continue}}if("return"===i)continue}var c=o(u.iterator[i],u.iterator,a);if("throw"===c.type){r.delegate=null,i="throw",a=c.arg;continue}i="next",a=y;var f=c.arg;if(!f.done)return n=P,f;r[u.resultName]=f.value,r.next=u.nextLoc,r.delegate=null}if("next"===i)r.sent=r._sent=a;else if("throw"===i){if(n===_)throw n=E,a;r.dispatchException(a)&&(i="next",a=y)}else"return"===i&&r.abrupt("return",a);n=j;var c=o(e,t,r);if("normal"===c.type){n=r.done?E:P;var f={value:c.arg,done:r.done};if(c.arg!==O)return f;r.delegate&&"next"===i&&(a=y)}else"throw"===c.type&&(n=E,i="throw",a=c.arg)}}}function l(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function p(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function d(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(l,this),this.reset(!0)}function v(e){if(e){var t=e[b];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(m.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=y,t.done=!0,t};return n.next=n}}return{next:h}}function h(){return{value:y,done:!0}}var y,m=Object.prototype.hasOwnProperty,g="function"==typeof Symbol?Symbol:{},b=g.iterator||"@@iterator",w=g.toStringTag||"@@toStringTag",x="object"===t(e),k=r.regeneratorRuntime;if(k)return void(x&&(e.exports=k));k=r.regeneratorRuntime=x?e.exports:{},k.wrap=n;var _="suspendedStart",P="suspendedYield",j="executing",E="completed",O={},L=u.prototype=i.prototype;a.prototype=L.constructor=u,u.constructor=a,u[w]=a.displayName="GeneratorFunction",k.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===a||"GeneratorFunction"===(t.displayName||t.name))},k.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,u):(e.__proto__=u,w in e||(e[w]="GeneratorFunction")),e.prototype=Object.create(L),e},k.awrap=function(e){return{__await:e}},s(c.prototype),k.AsyncIterator=c,k.async=function(e,t,r,o){var i=new c(n(e,t,r,o));return k.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},s(L),L[b]=function(){return this},L[w]="Generator",L.toString=function(){return"[object Generator]"},k.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},k.values=v,d.prototype={constructor:d,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.tryEntries.forEach(p),!e)for(var t in this)"t"===t.charAt(0)&&m.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=y)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,n){return i.type="throw",i.arg=e,r.next=t,!!n}if(this.done)throw e;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=m.call(o,"catchLoc"),u=m.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&m.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?this.next=o.finallyLoc:this.complete(i),O},complete:function(e,t){if("throw"===e.type)throw e.arg;"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=e.arg,this.next="end"):"normal"===e.type&&t&&(this.next=t)},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),p(r),O}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;p(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:v(e),resultName:t,nextLoc:r},O}}}("object"===("undefined"==typeof global?"undefined":t(global))?global:"object"===("undefined"==typeof window?"undefined":t(window))?window:"object"===("undefined"==typeof self?"undefined":t(self))?self:void 0)}).call(t,r(2)(e))},function(e,t){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("koa")},function(e,t){e.exports=require("koa-logger")},function(e,t){e.exports=require("yargs")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,i){try{var a=t[o](i),u=a.value}catch(e){return void r(e)}return a.done?void e(u):Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.DB=void 0;var a=r(8),u=n(a),s=r(9),c=n(s),f=r(15),l=n(f),p=r(16),d=(n(p),{apis:{"/example":{example:"@name"}},description:{}}),v=t.DB=function e(t){i(this,e),this.dbPath=l.default.join(~t.indexOf("json")?t:t+".json"),this.db=(0,u.default)(this.dbPath,{storage:c.default}),this.db.defaults(d).value(),this.apis=this.db.get("apis")};t.default=function(e){return function(){var t=o(regeneratorRuntime.mark(function t(r,n){var o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.host,i=r.appConfig,r.db=new v(e),t.next=4,n();case 4:case"end":return t.stop()}},t,void 0)}));return function(e,r){return t.apply(this,arguments)}}()}},function(e,t){e.exports=require("lowdb")},function(e,t,r){"use strict";var n=r(10),o=r(11),i=o.stringify;e.exports={read:r(13).read,write:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;return new Promise(function(o,i){var a=r(t);n.writeFile(e,a,function(e){return e?i(e):void o()})})}}},function(e,t){e.exports=require("steno")},function(e,t,r){"use strict";var n=r(12);e.exports={parse:n.parse,stringify:function(e){return JSON.stringify(e,null,2)}}},function(e,t){e.exports=require("json-parse-helpfulerror")},function(e,t,r){"use strict";var n=r(14),o=r(11),i=o.parse,a=o.stringify;e.exports={read:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;if(!n.existsSync(e))return n.writeFileSync(e,"{}"),{};var r=n.readFileSync(e,"utf-8").trim()||"{}";try{return t(r)}catch(t){throw t instanceof SyntaxError&&(t.message="Malformed JSON in file: "+e+"\n"+t.message),t}},write:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,o=r(t);n.writeFileSync(e,o)}}},function(e,t){e.exports=require("graceful-fs")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("lodash")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,i){try{var a=t[o](i),u=a.value}catch(e){return void r(e)}return a.done?void e(u):Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(18),a=r(19),u=n(a);u.default.locale="zh_CN";var s=function(e,t){i.Random.extend({param:function(e){return t&&t[e]?t[e]:""}});var r=void 0;try{var n=JSON.parse(e),o=Array.isArray(n);r=o?JSON.stringify((0,i.mock)({"array|1-20":n}).array):JSON.stringify((0,i.mock)(JSON.parse(e)))}catch(e){r="ERROR: "+e.message}return u.default.fake(r)};t.default=function(){return function(){var e=o(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.body&&(t.body=s(t.body,t.routerParams)),e.next=3,r();case 3:case"end":return e.stop()}},e,void 0)}));return function(t,r){return e.apply(this,arguments)}}()}},function(e,t){e.exports=require("mockjs")},function(e,t){e.exports=require("faker")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,i){try{var a=t[o](i),u=a.value}catch(e){return void r(e)}return a.done?void e(u):Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(21),a=n(i),u=r(16),s=n(u);t.default=function(){var e=o(regeneratorRuntime.mark(function e(t,r){var n,o,i,u,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.method,o=t.db,i=o.apis,u=t.url,c=i.get(n.toLowerCase()+" "+t.url).value(),c||(c=i.get(t.url).value()),c||!function(){var e=i.value();s.default.find(e,function(r,n){var o=n.split(" ").length>1?n.split(" ")[1]:n.split(" ")[0],i=new a.default(o),s=i.match(u);if(s&&!c)return t.routerParams=s,c=e[n],!0})}(),c&&(t.body=JSON.stringify(c)||""),t.set("Content-Type","application/json;charset=utf-8"),e.next=10,r();case 10:case"end":return e.stop()}},e,void 0)}));return function(t,r){return e.apply(this,arguments)}}()},function(e,t){e.exports=require("route-parser")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,i){try{var a=t[o](i),u=a.value}catch(e){return void r(e)}return a.done?void e(u):Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(23),a=n(i),u=(0,a.default)({prefix:"/admin"});u.get("/project",function(){var e=o(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=t.db,t.body=r.apis.value();case 2:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}()),u.post("/project",function(){var e=o(regeneratorRuntime.mark(function e(t,r){var n,o,i,a,u,s,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.request,o=t.db,i=o.db,a=o.apis,u=n.body,s=u.url,c=u.data,a.set(s,c).value(),t.body={result:!0};case 5:case"end":return e.stop()}},e,void 0)}));return function(t,r){return e.apply(this,arguments)}}()),u.delete("/project",function(){var e=o(regeneratorRuntime.mark(function e(t){var r,n,o,i,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=t.request,n=t.db,o=n.db,i=n.apis,a=r.body.url,i.set(a,void 0).value(),t.body={result:!0};case 5:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}()),t.default=u},function(e,t){e.exports=require("koa-router")},function(e,t){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,i){try{var a=t[o](i),u=a.value}catch(e){return void r(e)}return a.done?void e(u):Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var e=r(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.set("Access-Control-Allow-Credentials","true"),t.set("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS"),t.set("Access-Control-Allow-Headers","Accept,Content-Type"),t.set("Access-Control-Allow-Origin",t.req.headers.origin||t.protocol+"://"+t.host),t.set("Access-Control-Expose-Headers","Accept,Content-Type"),e.next=7,r();case 7:case"end":return e.stop()}},e,void 0)}));return function(t,r){return e.apply(this,arguments)}}()}},function(e,t){e.exports=require("koa-static")},function(e,t){e.exports=require("koa-bodyparser")},function(e,t){e.exports={name:"mock-server-cli",version:"1.0.0",description:"",main:"index.js",scripts:{test:'echo "Error: no test specified" && exit 1',dev:'nodemon --ignore client/ --exec "babel-node" index.js',webpack:"webpack --watch","build:client":"cross-env APP_ENV=client NODE_ENV=production webpack","build:server":"cross-env APP_ENV=server NODE_ENV=production webpack","build:scripts":"babel scripts/ --out-dir scripts/dest --ignore scripts/dest/",build:"npm run build:server && npm run build:client"},repository:{type:"git",url:"git+https://github.com/eyasliu/mock-server-cli.git"},author:"",license:"ISC",bugs:{url:"https://github.com/eyasliu/mock-server-cli/issues"},bin:{"mock-server":"server.js"},homepage:"https://github.com/eyasliu/mock-server-cli#readme",dependencies:{faker:"^3.1.0",koa:"^2.0.0","koa-bodyparser":"^3.2.0","koa-logger":"^2.0.0","koa-router":"^7.0.1","koa-static":"^3.0.0",lodash:"^4.17.2",lowdb:"^0.14.0",mockjs:"^1.0.1-beta3",qiniu:"^6.1.13","regenerator-runtime":"^0.10.0","route-parser":"0.0.5",yargs:"^6.5.0"},devDependencies:{"babel-cli":"^6.18.0","babel-core":"^6.18.2","babel-loader":"^6.2.8","babel-polyfill":"^6.16.0","babel-preset-latest":"^6.16.0","babel-preset-react":"^6.16.0","babel-preset-stage-0":"^6.16.0","babel-register":"^6.18.0","cross-env":"^3.1.3","css-loader":"^0.26.0","json-loader":"^0.5.4","material-ui":"^0.16.4",nodemon:"^1.11.0",react:"^15.4.1","react-codemirror":"^0.3.0","react-dom":"^15.4.1","react-tap-event-plugin":"^2.0.1","style-loader":"^0.13.1",webpack:"^1.13.3"}}}]);