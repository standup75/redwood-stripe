!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var s in r)("object"==typeof exports?exports:e)[s]=r[s]}}(global,(function(){return(()=>{var __webpack_modules__={710:function(e,t,r){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=s(r(879)),o=s(r(174)),c=r(605),a=s(r(563));o.default.config(),t.default=async function(e){c.createServer((async(e,t)=>{try{const r=await a.default(e),s=r.path.split("/").reverse()[0],{handler:o}=n.default(`../api/dist/functions/${s}`),c=await o({...e,...r},{}),{body:u,statusCode:i,statusMessage:l,multiValueHeaders:p}=c;for(let e in p){const r=p[e];t.setHeader(e,r)}t.writeHead(i,l),t.end(u)}catch(e){console.error(e),t.writeHead(534,"Project Unexpected Error")}})).listen(e)}},421:e=>{"use strict";e.exports=function(e){return new Promise(((t,r)=>{const s=[];e.on("data",(e=>s.push(e))),e.on("end",(()=>t(Buffer.concat(s)))),e.on("error",r)}))}},563:(e,t,r)=>{"use strict";const{parse:s}=r(191),n=r(421),o=r(75);e.exports=async function(e){const[t,r]=e.url.split(/\?/),c=s(r),a=await n(e);return{path:t,queryStringParameters:c,multiValueQueryStringParameters:c,httpMethod:e.method,isBase64Encoded:!0,body:a.toString("base64"),multiValueHeaders:o(e.headers)}}},75:e=>{"use strict";e.exports=function(e){const t={};for(let r in e){const s=e[r];Array.isArray(s)?t[r]=s:t[r]=[s]}return t}},879:function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const slash_1=__importDefault(__webpack_require__(313));function nonWebpackRequire(modulePath,{ignoreErrors=!1}={}){try{return eval("require")(slash_1.default(modulePath))}catch(e){if(ignoreErrors)return;throw e}}exports.default=nonWebpackRequire},313:e=>{"use strict";e.exports=e=>{const t=/^\\\\\?\\/.test(e),r=/[^\u0000-\u0080]+/.test(e);return t||r?e:e.replace(/\\/g,"/")}},174:(e,t,r)=>{const s=r(738),n=(e={},t={})=>Object.assign({},t,e);e.exports={parse:(e,t="")=>{const r=s.parse(e),o=s.parse(t);return n(r,o)},config:(e={})=>{const t=s.config(e),r=s.config(Object.assign({},e,{path:e.defaults||".env.defaults"}));return{parsed:n(t.parsed,r.parsed)}}}},738:(e,t,r)=>{const s=r(747),n=r(622),o=r(87);function c(e){console.log(`[dotenv][DEBUG] ${e}`)}const a=/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,u=/\\n/g,i=/\r\n|\n|\r/;function l(e,t){const r=Boolean(t&&t.debug),s={};return e.toString().split(i).forEach((function(e,t){const n=e.match(a);if(null!=n){const e=n[1];let t=n[2]||"";const r=t.length-1,o='"'===t[0]&&'"'===t[r];"'"===t[0]&&"'"===t[r]||o?(t=t.substring(1,r),o&&(t=t.replace(u,"\n"))):t=t.trim(),s[e]=t}else r&&c(`did not match key and value when parsing line ${t+1}: ${e}`)})),s}e.exports.config=function(e){let t=n.resolve(process.cwd(),".env"),r="utf8",a=!1;var u;e&&(null!=e.path&&(t="~"===(u=e.path)[0]?n.join(o.homedir(),u.slice(1)):u),null!=e.encoding&&(r=e.encoding),null!=e.debug&&(a=!0));try{const e=l(s.readFileSync(t,{encoding:r}),{debug:a});return Object.keys(e).forEach((function(t){Object.prototype.hasOwnProperty.call(process.env,t)?a&&c(`"${t}" is already defined in \`process.env\` and will not be overwritten`):process.env[t]=e[t]})),{parsed:e}}catch(e){return{error:e}}},e.exports.parse=l},747:e=>{"use strict";e.exports=require("fs")},605:e=>{"use strict";e.exports=require("http")},87:e=>{"use strict";e.exports=require("os")},622:e=>{"use strict";e.exports=require("path")},191:e=>{"use strict";e.exports=require("querystring")}},__webpack_module_cache__={};function __webpack_require__(e){if(__webpack_module_cache__[e])return __webpack_module_cache__[e].exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(t.exports,t,t.exports,__webpack_require__),t.exports}return __webpack_require__(710)})()}));