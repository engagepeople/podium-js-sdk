<<<<<<< HEAD
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("podiumSdk",[],t):"object"==typeof exports?exports.podiumSdk=t():e.podiumSdk=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=12)}([function(e,t,r){"use strict";var n=r(5),s=r(17),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function u(e){return null!==e&&"object"==typeof e}function a(e){return"[object Function]"===o.call(e)}function c(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),i(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:s,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:a,isStream:function(e){return u(e)&&a(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,s=arguments.length;n<s;n++)c(arguments[n],r);return t},extend:function(e,t,r){return c(t,function(t,s){e[s]=r&&"function"==typeof t?n(t,r):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(14),s=r(2),o=r(4);t.Resource=class extends n.Request{constructor(e){super(e)}SetResourceOnce(e){return super.ResourceOnce=e,this}SetResource(e){return super.Resource=e,this}SetLegacy(e){return super.Legacy=e,this}Get(e,t){return super.GetRequest(e,t)}List(e,t){let r;if(e instanceof o.Paginator){if(t)throw new TypeError("Order of parameters passed into List method must be Filter then Paginator");t=e,r=null}else e instanceof s.Filter&&(r=e);return t instanceof o.Paginator&&t.isLoading(!0),super.ListRequest(r,t).then(e=>(t instanceof o.Paginator&&(t.setResponse(e.current_page,e.from,e.last_page,e.per_page,e.to,e.total),t.isLoading(!1)),r instanceof s.Filter&&e.hasOwnProperty("facets")&&r.setFacets(e.facets),e.data))}Create(e){return super.PostRequest(e)}Update(e,t){return super.UpdateRequest(e,t)}Delete(e){return super.DeleteRequest(e)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(10);t.Filter=class extends n.ListQuery{constructor(e){super(),this.values=e}setFacetQuery(e){return this.facetQuery=e,this}getFacetQuery(){const e={};for(const t in this.facetQuery)this.facetQuery.hasOwnProperty(t)&&null!==this.facetQuery[t]&&0!==this.facetQuery[t].length&&(e[t]=this.facetQuery[t]);return e}setFacets(e){return this.facets=e,this}getFacets(){return this.facets}setValue(e,t){return this.values[e]=t,this}getValue(e){return this.values[e]}setValues(e){return this.values=e,this}getValues(){return this.values}toParams(){const e=this.getValues();return this.getFacetQuery()&&(e.facets=this.getFacetQuery()),super.isLegacyMode()?{filter:e}:e}}},function(e,t,r){"use strict";(function(t){var n=r(0),s=r(20),o={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=r(6):void 0!==t&&(e=r(6)),e}(),transformRequest:[function(e,t){return s(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],function(e){u.headers[e]={}}),n.forEach(["post","put","patch"],function(e){u.headers[e]=n.merge(o)}),e.exports=u}).call(this,r(19))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(10);t.Paginator=class extends n.ListQuery{constructor(){super(),this.loading=!1,this.page=1,this.perPage=50,this.sortField="created_at",this.sortDirection="desc",this.response={currentPage:null,from:null,lastPage:null,perPage:null,to:null,total:null}}setResponse(e,t,r,n,s,o){return this.response.currentPage=e,this.response.from=t,this.response.lastPage=r,this.response.perPage=n,this.response.to=s,this.response.total=o,this}isLoading(e){return this.loading=e,this}setPage(e){return this.page=e,this}setPerPage(e){return this.perPage=e,this}setSort(e,t){return this.sortField=e,this.sortDirection=t,this}setSortField(e){return this.sortField=e,this}setSortDirection(e){return this.sortDirection=e,this}setSortDesc(e){return this.sortDirection=e?"desc":"asc",this}toParams(){const e={count:this.perPage,page:this.page};return super.isLegacyMode()?Object.assign(e,{sorting:{[this.sortField]:this.sortDirection}}):Object.assign(e,{sort_direction:this.sortDirection,sort_field:this.sortField})}}},function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){"use strict";var n=r(0),s=r(21),o=r(23),i=r(24),u=r(25),a=r(7),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(26);e.exports=function(e){return new Promise(function(t,f){var l=e.data,p=e.headers;n.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",g=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||u(e.url)||(d=new window.XDomainRequest,h="onload",g=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var m=e.auth.username||"",y=e.auth.password||"";p.Authorization="Basic "+c(m+":"+y)}if(d.open(e.method.toUpperCase(),o(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[h]=function(){if(d&&(4===d.readyState||g)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:r,config:e,request:d};s(t,f,n),d=null}},d.onerror=function(){f(a("Network Error",e,null,d)),d=null},d.ontimeout=function(){f(a("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var R=r(27),w=(e.withCredentials||u(e.url))&&e.xsrfCookieName?R.read(e.xsrfCookieName):void 0;w&&(p[e.xsrfHeaderName]=w)}if("setRequestHeader"in d&&n.forEach(p,function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),f(e),d=null)}),void 0===l&&(l=null),d.send(l)})}},function(e,t,r){"use strict";var n=r(22);e.exports=function(e,t,r,s,o){var i=new Error(e);return n(i,t,r,s,o)}},function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ListQuery=class{constructor(){this.legacy=!1}setLegacyMode(e){this.legacy=e}isLegacyMode(){return this.legacy}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n="__podiumSDK__";class s{constructor(){if(this.token=null,s.instance)throw new Error("Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.");s.instance=this}static getInstance(){return s.instance}SetToken(e){return this.token=e,this.hasLocalStorage()?(localStorage.setItem(`${n}token`,this.token),this.token):this.token}GetToken(){return this.hasLocalStorage()?localStorage.getItem(`${n}token`):this.token}HasToken(){const e=this.GetToken();return"string"==typeof e&&e.length>0}RemoveToken(){return this.hasLocalStorage()&&localStorage.removeItem(`${n}token`),this.token=null,!0}hasLocalStorage(){return!("undefined"==typeof localStorage||null===localStorage)}}s.instance=new s,t.Token=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(13),s=r(36),o=r(37),i=r(38),u=r(39),a=r(40),c=r(1),f=r(41),l=r(15);var p=r(2);t.PodiumFilter=p.Filter;var d=r(4);t.PodiumPaginator=d.Paginator;t.Podium=class{constructor(e){this.RequestsInProgress=[],this.Auth=new n.Auth(e),this.Discretionary={DirectReports:new c.Resource(e).SetResource("user/reports"),Discretionary:new c.Resource(e).SetResource("campaign/discretionary"),Ledger:new c.Resource(e).SetResource("campaign/discretionary/ledger"),Transactions:new c.Resource(e).SetResource("campaign/discretionary/transactions")},this.Ecards={Categories:new c.Resource(e).SetResource("ecard/category"),Ecards:new s.Ecards(e),Templates:new c.Resource(e).SetResource("ecard/template")},this.Ledgers=new a.Ledgers(e),this.LRG=new u.LRG(e),this.Permissions=new c.Resource(e).SetResource("member/modulePermissions"),this.Shop={Cart:new o.ShopCart(e),Orders:new i.Orders(e),Products:new c.Resource(e).SetResource("member/product")},this.Terms=new f.Terms(e),this.User={Address:new c.Resource(e).SetResource("address").SetLegacy(!0),Profile:new c.Resource(e).SetResource("profile").SetLegacy(!0)},this.Users=new c.Resource(e).SetResource("user").SetLegacy(!0),l.default.interceptors.request.use(e=>(this.RequestsInProgress.push(e.url),e),e=>Promise.reject(e)),l.default.interceptors.response.use(e=>{const t=e.config.url;return this.RequestsInProgress.splice(this.RequestsInProgress.findIndex(e=>e===t),1),e},e=>{const t=e.config.url;return this.RequestsInProgress.splice(this.RequestsInProgress.findIndex(e=>e===t),1),Promise.reject(e)})}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1),s=r(11);t.Auth=class extends n.Resource{constructor(e){super(e),super.SetResource("login")}Login(e,t,r){return s.Token.getInstance().RemoveToken(),super.PostRequest({password:t,program_slug:r,user_account:e}).then(e=>{if("success"===e.code)return this.SetToken(e.token),e.user_id})}SSO(e){return super.SetResourceOnce("authenticate"),s.Token.getInstance().RemoveToken(),super.PostRequest({token:e,type:"sso"}).then(e=>{if("success"===e.code)return this.SetToken(e.token),e.user_id})}GetToken(){return s.Token.getInstance().GetToken()}SetToken(e){return s.Token.getInstance().SetToken(e)}HasToken(){return s.Token.getInstance().HasToken()}Logout(){return super.SetResourceOnce("logout"),super.PostRequest().then(e=>(s.Token.getInstance().RemoveToken(),e))}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(15),s=r(35),o=r(2),i=r(11),u=r(4);class a{constructor(e){this.Legacy=!1,this.settings=e}static parseError(e){return{data:e.response.data,status:e.response.status,statusText:e.response.statusText}}GetRequest(e,t){const r={method:"get",params:t};let n=`${this.makeURL()}`;return e&&(n=`${n}/${e}`),this.Request(r,n)}DeleteRequest(e){return this.Request({method:"delete"},this.makeURL(e))}ListRequest(e,t){let r={};e instanceof o.Filter&&(e.setLegacyMode(this.Legacy),r=Object.assign(r,e.toParams())),t instanceof u.Paginator&&(t.setLegacyMode(this.Legacy),r=Object.assign(r,t.toParams()));const n={method:"get",params:r};return this.Request(n,this.makeURL())}PostRequest(e={}){const t={data:e,method:"post"};return this.Request(t,this.makeURL())}UpdateRequest(e,t){const r={data:t,method:"put"};return this.Request(r,this.makeURL(e))}Request(e,t,r){if(t||(t=this.makeURL(r)),"object"==typeof e.data){const t=new s.ConvertTime(e.data);e.data=t.ToAPI()}return e=Object.assign({headers:this.makeHeaders(),transformResponse:[e=>{return new s.ConvertTime(JSON.parse(e)).ToUTC()}]},e),new Promise((r,s)=>n.default(t,e).then(e=>{r(e.data)}).catch(e=>{const t=a.parseError(e);400===t.status&&"INVALID_TOKEN"===t.data.apiCode&&i.Token.getInstance().RemoveToken(),this.onRequestError(t),s(t)}))}makeURL(e){let t=this.settings.endpoint||"https://api.podiumrewards.com/";t.endsWith("/")||(t+="/");const r=this.settings.version||1,n=this.ResourceOnce||this.Resource;this.ResourceOnce=null;let s=`${t}v${r}/${n}`;return e&&(s+=`/${e}`),s}GetLocale(){return this.settings.locale||"en-US"}makeHeaders(){if(i.Token.getInstance().GetToken())return{"Accept-Language":this.GetLocale(),Authentication:i.Token.getInstance().GetToken()}}onRequestError(e){"function"==typeof this.settings.onRequestError&&this.settings.onRequestError(e)}}t.Request=a},function(e,t,r){e.exports=r(16)},function(e,t,r){"use strict";var n=r(0),s=r(5),o=r(18),i=r(3);function u(e){var t=new o(e),r=s(o.prototype.request,t);return n.extend(r,o.prototype,t),n.extend(r,t),r}var a=u(i);a.Axios=o,a.create=function(e){return u(n.merge(i,e))},a.Cancel=r(9),a.CancelToken=r(33),a.isCancel=r(8),a.all=function(e){return Promise.all(e)},a.spread=r(34),e.exports=a,e.exports.default=a},function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
=======
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("podiumSdk", [], factory);
	else if(typeof exports === 'object')
		exports["podiumSdk"] = factory();
	else
		root["podiumSdk"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ "./node_modules/axios/lib/helpers/btoa.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");
var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/btoa.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/btoa.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

>>>>>>> master
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
<<<<<<< HEAD
e.exports=function(e){return null!=e&&(r(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}(e)||!!e._isBuffer)}},function(e,t,r){"use strict";var n=r(3),s=r(0),o=r(28),i=r(29);function u(e){this.defaults=e,this.interceptors={request:new o,response:new o}}u.prototype.request=function(e){"string"==typeof e&&(e=s.merge({url:arguments[0]},arguments[1])),(e=s.merge(n,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[i,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},s.forEach(["delete","get","head","options"],function(e){u.prototype[e]=function(t,r){return this.request(s.merge(r||{},{method:e,url:t}))}}),s.forEach(["post","put","patch"],function(e){u.prototype[e]=function(t,r,n){return this.request(s.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=u},function(e,t){var r,n,s=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var a,c=[],f=!1,l=-1;function p(){f&&a&&(f=!1,a.length?c=a.concat(c):l=-1,c.length&&d())}function d(){if(!f){var e=u(p);f=!0;for(var t=c.length;t;){for(a=c,c=[];++l<t;)a&&a[l].run();l=-1,t=c.length}a=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function g(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new h(e,t)),1!==c.length||f||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=g,s.addListener=g,s.once=g,s.off=g,s.removeListener=g,s.removeAllListeners=g,s.emit=g,s.prependListener=g,s.prependOnceListener=g,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},function(e,t,r){"use strict";var n=r(7);e.exports=function(e,t,r){var s=r.config.validateStatus;r.status&&s&&!s(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,s){return e.config=t,r&&(e.code=r),e.request=n,e.response=s,e}},function(e,t,r){"use strict";var n=r(0);function s(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var o;if(r)o=r(t);else if(n.isURLSearchParams(t))o=t.toString();else{var i=[];n.forEach(t,function(e,t){null!==e&&void 0!==e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(s(t)+"="+s(e))}))}),o=i.join("&")}return o&&(e+=(-1===e.indexOf("?")?"?":"&")+o),e}},function(e,t,r){"use strict";var n=r(0),s=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,o,i={};return e?(n.forEach(e.split("\n"),function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t){if(i[t]&&s.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([r]):i[t]?i[t]+", "+r:r}}),i):i}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function s(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=s(window.location.href),function(t){var r=n.isString(t)?s(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},function(e,t,r){"use strict";var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function s(){this.message="String contains an invalid character"}s.prototype=new Error,s.prototype.code=5,s.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,r,o=String(e),i="",u=0,a=n;o.charAt(0|u)||(a="=",u%1);i+=a.charAt(63&t>>8-u%1*8)){if((r=o.charCodeAt(u+=.75))>255)throw new s;t=t<<8|r}return i}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,s,o,i){var u=[];u.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&u.push("expires="+new Date(r).toGMTString()),n.isString(s)&&u.push("path="+s),n.isString(o)&&u.push("domain="+o),!0===i&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,r){"use strict";var n=r(0);function s(){this.handlers=[]}s.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},s.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},s.prototype.forEach=function(e){n.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=s},function(e,t,r){"use strict";var n=r(0),s=r(30),o=r(8),i=r(3),u=r(31),a=r(32);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!u(e.url)&&(e.url=a(e.baseURL,e.url)),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||i.adapter)(e).then(function(t){return c(e),t.data=s(t.data,t.headers,e.transformResponse),t},function(t){return o(t)||(c(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){"use strict";var n=r(9);function s(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new n(e),t(r.reason))})}s.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},s.source=function(){var e;return{token:new s(function(t){e=t}),cancel:e}},e.exports=s},function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.TO_UTC=0]="TO_UTC",e[e.TO_API=1]="TO_API"}(n||(n={}));t.ConvertTime=class{constructor(e){if(this.APIDateRegEx=new RegExp("^\\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\\d|3[0-1]) ([0-1]?\\d|2[0-3]):([0-5]\\d):([0-5]\\d)$"),this.loopNestedObj=((e,t)=>(Object.keys(e).forEach(r=>{!e[r]||"object"!=typeof e[r]||e[r]instanceof Date?(t===n.TO_UTC&&"string"==typeof e[r]&&this.isAPIDate(e[r])&&(e[r]=this.StringToUTC(e[r])),t===n.TO_API&&e[r]instanceof Date&&(e[r]=this.DateToAPI(e[r]))):this.loopNestedObj(e[r],t)}),e)),this.isAPIDate=(e=>this.APIDateRegEx.test(e)),this.StringToUTC=(e=>new Date(e.replace(" ","T")+"Z")),this.DateToAPI=(e=>`${e.getUTCFullYear()}-${this.strPad(e.getUTCMonth()+1)}-${this.strPad(e.getUTCDate())} ${this.strPad(e.getUTCHours())}:${this.strPad(e.getUTCMinutes())}:${this.strPad(e.getUTCSeconds())}`),this.strPad=(e=>String("00"+e).slice(-2)),"object"!=typeof e)throw new Error("Convert Time must accept an object");this.data=e}ToUTC(){return this.loopNestedObj(this.data,n.TO_UTC)}ToAPI(){return this.loopNestedObj(this.data,n.TO_API)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1),s=r(2);t.Ecards=class extends n.Resource{constructor(e){super(e),super.SetResource("ecard")}GetReceived(e){const t=new s.Filter({status:"received"});return super.List(t,e)}GetSent(e){const t=new s.Filter({status:"sent"});return super.List(t,e)}GetPending(e){const t=new s.Filter({status:"pending"});return super.List(t,e)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1);t.ShopCart=class extends n.Resource{constructor(e){super(e),super.SetResource("shoppingCart")}Confirm(e,t,r){return super.SetResourceOnce("shoppingCart/confirm"),super.Create({address_id:t,ledger_id:r,shopping_cart_id:e})}Checkout(e,t,r){return super.SetResourceOnce("shoppingCart/checkout"),super.Create({address_id:t,ledger_id:r,shopping_cart_id:e})}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1);t.Orders=class extends n.Resource{constructor(e){super(e),super.SetResource("member/order")}CancelOrder(e){return super.SetResourceOnce("member/orderCancel"),super.Update(e)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1);t.LRG=class extends n.Resource{constructor(e){super(e),super.SetResource("lrg/session")}GetUrl(e){return super.PostRequest({website_back:e})}Redirect(e){return"undefined"!=typeof window&&null!==window&&(this.GetUrl(e).then(e=>{window.location.replace(e.body.redirect_url)}),!0)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1);t.Ledgers=class extends n.Resource{constructor(e){super(e),super.SetResource("ledger")}GetTransactions(e,t){return super.SetResourceOnce(`ledger/${e}/transaction`),super.List(t)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1);t.Terms=class extends n.Resource{constructor(e){super(e),super.SetResource("terms")}Accept(e){return super.PostRequest({terms_id:e})}}}])});
=======

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/tslint/lib/error.js":
/*!******************************************!*\
  !*** ./node_modules/tslint/lib/error.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2016 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var shownWarnings = new Set();
/**
 * Used to exit the program and display a friendly message without the callstack.
 */
var FatalError = /** @class */ (function (_super) {
    tslib_1.__extends(FatalError, _super);
    function FatalError(message, innerError) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.innerError = innerError;
        _this.name = FatalError.NAME;
        // Fix prototype chain for target ES5
        Object.setPrototypeOf(_this, FatalError.prototype);
        return _this;
    }
    FatalError.NAME = "FatalError";
    return FatalError;
}(Error));
exports.FatalError = FatalError;
function isError(possibleError) {
    return possibleError != undefined && possibleError.message !== undefined;
}
exports.isError = isError;
function showWarningOnce(message) {
    if (!shownWarnings.has(message)) {
        console.warn(message);
        shownWarnings.add(message);
    }
}
exports.showWarningOnce = showWarningOnce;


/***/ }),

/***/ "./src/Api/Auth.ts":
/*!*************************!*\
  !*** ./src/Api/Auth.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = __webpack_require__(/*! ../Podium/Resource */ "./src/Podium/Resource.ts");
const Token_1 = __webpack_require__(/*! ../Podium/Token */ "./src/Podium/Token.ts");
class Auth extends Resource_1.Resource {
    constructor(settings) {
        super(settings);
        super.SetResource('login');
    }
    Login(username, password, slug) {
        Token_1.Token.getInstance().RemoveToken();
        return super.PostRequest({
            password,
            program_slug: slug,
            user_account: username,
        }).then((response) => {
            if (response.code === "success" /* SUCCESS */) {
                this.SetToken(response.token);
                return response.user_id;
            }
        });
    }
    SSO(token) {
        super.SetResourceOnce('authenticate');
        Token_1.Token.getInstance().RemoveToken();
        return super.PostRequest({
            token,
            type: 'sso',
        }).then((response) => {
            if (response.code === "success" /* SUCCESS */) {
                this.SetToken(response.token);
                return response.user_id;
            }
        });
    }
    GetToken() {
        return Token_1.Token.getInstance().GetToken();
    }
    SetToken(token) {
        return Token_1.Token.getInstance().SetToken(token);
    }
    HasToken() {
        return Token_1.Token.getInstance().HasToken();
    }
    Logout() {
        super.SetResourceOnce('logout');
        return super.PostRequest().then((rsp) => {
            Token_1.Token.getInstance().RemoveToken();
            return rsp;
        });
    }
}
exports.Auth = Auth;


/***/ }),

/***/ "./src/Api/Ecards/Ecards.ts":
/*!**********************************!*\
  !*** ./src/Api/Ecards/Ecards.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = __webpack_require__(/*! ../../Podium/Resource */ "./src/Podium/Resource.ts");
const Filter_1 = __webpack_require__(/*! ../../Podium/Filter */ "./src/Podium/Filter.ts");
class Ecards extends Resource_1.Resource {
    constructor(settings) {
        super(settings);
        super.SetResource('ecard');
    }
    GetReceived(paginator) {
        const filter = new Filter_1.Filter({ status: "received" /* RECEIVED */ });
        return super.List(filter, paginator);
    }
    GetSent(paginator) {
        const filter = new Filter_1.Filter({ status: "sent" /* SENT */ });
        return super.List(filter, paginator);
    }
    GetPending(paginator) {
        const filter = new Filter_1.Filter({ status: "pending" /* PENDING */ });
        return super.List(filter, paginator);
    }
}
exports.Ecards = Ecards;


/***/ }),

/***/ "./src/Api/Ledgers.ts":
/*!****************************!*\
  !*** ./src/Api/Ledgers.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = __webpack_require__(/*! ../Podium/Resource */ "./src/Podium/Resource.ts");
class Ledgers extends Resource_1.Resource {
    constructor(settings) {
        super(settings);
        super.SetResource('ledger');
    }
    GetTransactions(LedgerID, paginator) {
        super.SetResourceOnce(`ledger/${LedgerID}/transaction`);
        return super.List(paginator);
    }
}
exports.Ledgers = Ledgers;


/***/ }),

/***/ "./src/Api/Lrg.ts":
/*!************************!*\
  !*** ./src/Api/Lrg.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = __webpack_require__(/*! ../Podium/Resource */ "./src/Podium/Resource.ts");
class LRG extends Resource_1.Resource {
    constructor(settings) {
        super(settings);
        super.SetResource('lrg/session');
    }
    GetUrl(redirectUrl) {
        return super.PostRequest({
            website_back: redirectUrl,
        });
    }
    Redirect(redirectUrl) {
        if (!(typeof window === 'undefined' || window === null)) {
            this.GetUrl(redirectUrl).then((response) => {
                window.location.replace(response.body.redirect_url);
            });
            return true;
        }
        else {
            return false;
        }
    }
}
exports.LRG = LRG;


/***/ }),

/***/ "./src/Api/Shop/Cart.ts":
/*!******************************!*\
  !*** ./src/Api/Shop/Cart.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = __webpack_require__(/*! ../../Podium/Resource */ "./src/Podium/Resource.ts");
class ShopCart extends Resource_1.Resource {
    constructor(settings) {
        super(settings);
        super.SetResource('shoppingCart');
    }
    Confirm(cartId, addressId, ledgerId) {
        super.SetResourceOnce(`shoppingCart/confirm`);
        return super.Create({
            address_id: addressId,
            ledger_id: ledgerId,
            shopping_cart_id: cartId,
        });
    }
    Checkout(cartId, addressId, ledgerId) {
        super.SetResourceOnce(`shoppingCart/checkout`);
        return super.Create({
            address_id: addressId,
            ledger_id: ledgerId,
            shopping_cart_id: cartId,
        });
    }
}
exports.ShopCart = ShopCart;


/***/ }),

/***/ "./src/Api/Terms.ts":
/*!**************************!*\
  !*** ./src/Api/Terms.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = __webpack_require__(/*! ../Podium/Resource */ "./src/Podium/Resource.ts");
class Terms extends Resource_1.Resource {
    constructor(settings) {
        super(settings);
        super.SetResource('terms');
    }
    Accept(termsId) {
        return super.PostRequest({
            terms_id: termsId,
        });
    }
}
exports.Terms = Terms;


/***/ }),

/***/ "./src/Podium/ConvertTime.ts":
/*!***********************************!*\
  !*** ./src/Podium/ConvertTime.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DIRECTION;
(function (DIRECTION) {
    DIRECTION[DIRECTION["TO_UTC"] = 0] = "TO_UTC";
    DIRECTION[DIRECTION["TO_API"] = 1] = "TO_API";
})(DIRECTION || (DIRECTION = {}));
class ConvertTime {
    constructor(data) {
        // tslint:disable-next-line:max-line-length
        this.APIDateRegEx = new RegExp('^\\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\\d|3[0-1]) ([0-1]?\\d|2[0-3]):([0-5]\\d):([0-5]\\d)$');
        // tslint:disable-next-line:no-any
        this.loopNestedObj = (obj, method) => {
            Object.keys(obj).forEach((key) => {
                if (obj[key] && typeof obj[key] === 'object' && !(obj[key] instanceof Date)) {
                    this.loopNestedObj(obj[key], method);
                }
                else {
                    if ((method === DIRECTION.TO_UTC) && (typeof obj[key] === 'string')) {
                        if (this.isAPIDate(obj[key])) {
                            obj[key] = this.StringToUTC(obj[key]);
                        }
                    }
                    if ((method === DIRECTION.TO_API) && (obj[key] instanceof Date)) {
                        obj[key] = this.DateToAPI(obj[key]);
                    }
                }
            });
            return obj;
        };
        this.isAPIDate = (key) => {
            return this.APIDateRegEx.test(key);
        };
        this.StringToUTC = (key) => {
            return new Date(key.replace(' ', 'T') + 'Z');
        };
        this.DateToAPI = (key) => {
            // tslint:disable-next-line:max-line-length
            return `${key.getUTCFullYear()}-${this.strPad(key.getUTCMonth() + 1)}-${this.strPad(key.getUTCDate())} ${this.strPad(key.getUTCHours())}:${this.strPad(key.getUTCMinutes())}:${this.strPad(key.getUTCSeconds())}`;
        };
        this.strPad = (n) => {
            return String('00' + n).slice(-2);
        };
        if (typeof data !== 'object') {
            throw new Error('Convert Time must accept an object');
        }
        this.data = data;
    }
    ToUTC() {
        return this.loopNestedObj(this.data, DIRECTION.TO_UTC);
    }
    ToAPI() {
        return this.loopNestedObj(this.data, DIRECTION.TO_API);
    }
}
exports.ConvertTime = ConvertTime;


/***/ }),

/***/ "./src/Podium/Filter.ts":
/*!******************************!*\
  !*** ./src/Podium/Filter.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ListQuery_1 = __webpack_require__(/*! ./ListQuery */ "./src/Podium/ListQuery.ts");
// tslint:disable-next-line:no-any
class Filter extends ListQuery_1.ListQuery {
    constructor(values) {
        super();
        // if (!values) {
        //     values = {}
        // }
        this.values = values;
    }
    setFacetQuery(facets) {
        this.facetQuery = facets;
        return this;
    }
    getFacetQuery() {
        // tslint:disable-next-line:no-any
        const build = {};
        for (const property in this.facetQuery) {
            if (this.facetQuery.hasOwnProperty(property)) {
                if (!(this.facetQuery[property] === null || this.facetQuery[property].length === 0)) {
                    build[property] = this.facetQuery[property];
                }
            }
        }
        return build;
    }
    setFacets(facets) {
        this.facets = facets;
        return this;
    }
    getFacets() {
        return this.facets;
    }
    // tslint:disable-next-line:no-any
    setValue(key, value) {
        this.values[key] = value;
        return this;
    }
    getValue(key) {
        return this.values[key];
    }
    setValues(values) {
        this.values = values;
        return this;
    }
    getValues() {
        return this.values;
    }
    toParams() {
        // tslint:disable-next-line:no-any
        const build = this.getValues();
        if (this.getFacetQuery()) {
            build.facets = this.getFacetQuery();
        }
        if (super.isLegacyMode()) {
            return {
                filter: build,
            };
        }
        else {
            return build;
        }
    }
}
exports.Filter = Filter;


/***/ }),

/***/ "./src/Podium/ListQuery.ts":
/*!*********************************!*\
  !*** ./src/Podium/ListQuery.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ListQuery {
    constructor() {
        this.legacy = false;
    }
    setLegacyMode(mode) {
        this.legacy = mode;
    }
    isLegacyMode() {
        return this.legacy;
    }
}
exports.ListQuery = ListQuery;


/***/ }),

/***/ "./src/Podium/Paginator.ts":
/*!*********************************!*\
  !*** ./src/Podium/Paginator.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ListQuery_1 = __webpack_require__(/*! ./ListQuery */ "./src/Podium/ListQuery.ts");
class Paginator extends ListQuery_1.ListQuery {
    constructor() {
        super();
        this.loading = false;
        this.page = 1;
        this.perPage = 50;
        this.sortField = "created_at" /* CREATED_AT */;
        this.sortDirection = "desc" /* DESC */;
        this.response = {
            currentPage: null,
            from: null,
            lastPage: null,
            perPage: null,
            to: null,
            total: null,
        };
    }
    setResponse(currentPage, from, lastPage, perPage, to, total) {
        this.response.currentPage = currentPage;
        this.response.from = from;
        this.response.lastPage = lastPage;
        this.response.perPage = perPage;
        this.response.to = to;
        this.response.total = total;
        return this;
    }
    isLoading(status) {
        this.loading = status;
        return this;
    }
    setPage(page) {
        this.page = page;
        return this;
    }
    setPerPage(perPage) {
        this.perPage = perPage;
        return this;
    }
    setSort(field, direction) {
        this.sortField = field;
        this.sortDirection = direction;
        return this;
    }
    setSortField(field) {
        this.sortField = field;
        return this;
    }
    setSortDirection(direction) {
        this.sortDirection = direction;
        return this;
    }
    setSortDesc(direction) {
        if (direction) {
            this.sortDirection = "desc" /* DESC */;
        }
        else {
            this.sortDirection = "asc" /* ASC */;
        }
        return this;
    }
    toParams() {
        const payload = {
            count: this.perPage,
            page: this.page,
        };
        if (super.isLegacyMode()) {
            return Object.assign(payload, {
                sorting: { [this.sortField]: this.sortDirection },
            });
        }
        else {
            return Object.assign(payload, {
                sort_direction: this.sortDirection,
                sort_field: this.sortField,
            });
        }
    }
}
exports.Paginator = Paginator;


/***/ }),

/***/ "./src/Podium/Request.ts":
/*!*******************************!*\
  !*** ./src/Podium/Request.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
const ConvertTime_1 = __webpack_require__(/*! ./ConvertTime */ "./src/Podium/ConvertTime.ts");
const Filter_1 = __webpack_require__(/*! ./Filter */ "./src/Podium/Filter.ts");
const Token_1 = __webpack_require__(/*! ./Token */ "./src/Podium/Token.ts");
const Paginator_1 = __webpack_require__(/*! ./Paginator */ "./src/Podium/Paginator.ts");
class Request {
    constructor(settings) {
        this.Legacy = false;
        this.settings = settings;
    }
    static parseError(error) {
        return {
            data: error.response.data,
            status: error.response.status,
            statusText: error.response.statusText,
        };
    }
    GetRequest(id, params) {
        const request = {
            method: 'get',
            params,
        };
        let url = `${this.makeURL()}`;
        if (id) {
            url = `${url}/${id}`;
        }
        return this.Request(request, url);
    }
    DeleteRequest(id) {
        const request = {
            method: 'delete',
        };
        return this.Request(request, this.makeURL(id));
    }
    ListRequest(filter, paginator) {
        let params = {};
        if (filter instanceof Filter_1.Filter) {
            filter.setLegacyMode(this.Legacy);
            params = Object.assign(params, filter.toParams());
        }
        if (paginator instanceof Paginator_1.Paginator) {
            paginator.setLegacyMode(this.Legacy);
            params = Object.assign(params, paginator.toParams());
        }
        const request = {
            method: 'get',
            params,
        };
        return this.Request(request, this.makeURL());
    }
    PostRequest(data = {}) {
        const request = {
            data,
            method: 'post',
        };
        return this.Request(request, this.makeURL());
    }
    UpdateRequest(id, data) {
        const request = {
            data,
            method: 'put',
        };
        return this.Request(request, this.makeURL(id));
    }
    Request(config, url, id) {
        if (!url) {
            url = this.makeURL(id);
        }
        if (typeof config.data === 'object') {
            const convertTimeToAPI = new ConvertTime_1.ConvertTime(config.data);
            config.data = convertTimeToAPI.ToAPI();
        }
        config = Object.assign({
            headers: this.makeHeaders(),
            transformResponse: [(data) => {
                    const convertTimeToUTC = new ConvertTime_1.ConvertTime(JSON.parse(data));
                    return convertTimeToUTC.ToUTC();
                }],
        }, config);
        return new Promise((resolve, reject) => {
            return axios_1.default(url, config)
                .then((response) => {
                resolve(response.data);
            })
                .catch((error) => {
                const parsedError = Request.parseError(error);
                if ((parsedError.status === 400) && (parsedError.data.apiCode === "INVALID_TOKEN" /* INVALID_TOKEN */)) {
                    Token_1.Token.getInstance().RemoveToken();
                }
                this.onRequestError(parsedError);
                reject(parsedError);
            });
        });
    }
    makeURL(id) {
        let endpoint = this.settings.getEndpoint();
        if (!endpoint.endsWith('/')) {
            endpoint += '/';
        }
        const version = this.settings.getVersion();
        const resource = this.ResourceOnce || this.Resource;
        this.ResourceOnce = null;
        let build = `${endpoint}v${version}/${resource}`;
        if (id) {
            build += `/${id}`;
        }
        return build;
    }
    GetLocale() {
        return this.settings.getLocale();
    }
    makeHeaders() {
        if (Token_1.Token.getInstance().GetToken()) {
            return {
                'Accept-Language': this.GetLocale(),
                'Authentication': Token_1.Token.getInstance().GetToken(),
            };
        }
    }
    onRequestError(errorData) {
        if (typeof this.settings.getOnRequestError() === 'function') {
            this.settings.getOnRequestError()(errorData);
        }
    }
}
exports.Request = Request;


/***/ }),

/***/ "./src/Podium/Resource.ts":
/*!********************************!*\
  !*** ./src/Podium/Resource.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = __webpack_require__(/*! ./Request */ "./src/Podium/Request.ts");
const Filter_1 = __webpack_require__(/*! ./Filter */ "./src/Podium/Filter.ts");
const Paginator_1 = __webpack_require__(/*! ./Paginator */ "./src/Podium/Paginator.ts");
class Resource extends Request_1.Request {
    constructor(settings) {
        super(settings);
    }
    SetResourceOnce(resource) {
        super.ResourceOnce = resource;
        return this;
    }
    SetResource(resource) {
        super.Resource = resource;
        return this;
    }
    SetLegacy(legacy) {
        super.Legacy = legacy;
        return this;
    }
    Get(id, data) {
        return super.GetRequest(id, data);
    }
    List(arg1, paginator) {
        let filter;
        if (arg1 instanceof Paginator_1.Paginator) {
            if (paginator) {
                throw new TypeError('Order of parameters passed into List method must be Filter then Paginator');
            }
            paginator = arg1;
            filter = null;
        }
        else if (arg1 instanceof Filter_1.Filter) {
            filter = arg1;
        }
        if (paginator instanceof Paginator_1.Paginator) {
            paginator.isLoading(true);
        }
        return super.ListRequest(filter, paginator).then((rep) => {
            if (paginator instanceof Paginator_1.Paginator) {
                paginator.setResponse(rep.current_page, rep.from, rep.last_page, rep.per_page, rep.to, rep.total);
                paginator.isLoading(false);
            }
            if (filter instanceof Filter_1.Filter && rep.hasOwnProperty('facets')) {
                filter.setFacets(rep.facets);
            }
            return rep.data;
        });
    }
    Create(params) {
        return super.PostRequest(params);
    }
    Update(id, params) {
        return super.UpdateRequest(id, params);
    }
    Delete(id) {
        return super.DeleteRequest(id);
    }
}
exports.Resource = Resource;


/***/ }),

/***/ "./src/Podium/Settings.ts":
/*!********************************!*\
  !*** ./src/Podium/Settings.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = __webpack_require__(/*! tslint/lib/error */ "./node_modules/tslint/lib/error.js");
class Settings {
    constructor() {
        this.settings = {};
        this.APIVersions = [1];
        this.setEndpoint('https://api.podiumrewards.com/');
        this.setLocale("en-CA" /* EN_CA */);
        this.setVersion(this.APIVersions[this.APIVersions.length - 1]);
    }
    setVersion(version) {
        if (this.APIVersions.includes(version)) {
            this.settings.version = version;
        }
        else {
            throw new error_1.FatalError(`Version ${version} does not exist in the API`);
        }
        return this;
    }
    getVersion() {
        return this.settings.version;
    }
    setLocale(locale) {
        this.settings.locale = locale;
        return this;
    }
    getLocale() {
        return this.settings.locale;
    }
    setEndpoint(endpoint) {
        this.settings.endpoint = endpoint;
        return this;
    }
    getEndpoint() {
        return this.settings.endpoint;
    }
    setOnRequestError(callback) {
        this.settings.onRequestError = callback;
        return this;
    }
    getOnRequestError() {
        return this.settings.onRequestError;
    }
}
exports.Settings = Settings;


/***/ }),

/***/ "./src/Podium/Token.ts":
/*!*****************************!*\
  !*** ./src/Podium/Token.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LOCAL_STORAGE_KEY = '__podiumSDK__';
class Token {
    constructor() {
        this.token = null;
        if (Token.instance) {
            throw new Error('Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.');
        }
        Token.instance = this;
    }
    static getInstance() {
        return Token.instance;
    }
    SetToken(token) {
        this.token = token;
        if (this.hasLocalStorage()) {
            localStorage.setItem(`${LOCAL_STORAGE_KEY}token`, this.token);
            return this.token;
        }
        return this.token;
    }
    GetToken() {
        if (this.hasLocalStorage()) {
            return localStorage.getItem(`${LOCAL_STORAGE_KEY}token`);
        }
        else {
            return this.token;
        }
    }
    HasToken() {
        const token = this.GetToken();
        return (typeof token === 'string' && token.length > 0);
    }
    RemoveToken() {
        if (this.hasLocalStorage()) {
            localStorage.removeItem(`${LOCAL_STORAGE_KEY}token`);
        }
        this.token = null;
        return true;
    }
    hasLocalStorage() {
        return !(typeof localStorage === 'undefined' || localStorage === null);
    }
}
Token.instance = new Token();
exports.Token = Token;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:max-classes-per-file
const Auth_1 = __webpack_require__(/*! ./Api/Auth */ "./src/Api/Auth.ts");
const Ecards_1 = __webpack_require__(/*! ./Api/Ecards/Ecards */ "./src/Api/Ecards/Ecards.ts");
const Cart_1 = __webpack_require__(/*! ./Api/Shop/Cart */ "./src/Api/Shop/Cart.ts");
const Lrg_1 = __webpack_require__(/*! ./Api/Lrg */ "./src/Api/Lrg.ts");
const Ledgers_1 = __webpack_require__(/*! ./Api/Ledgers */ "./src/Api/Ledgers.ts");
const Resource_1 = __webpack_require__(/*! ./Podium/Resource */ "./src/Podium/Resource.ts");
const Terms_1 = __webpack_require__(/*! ./Api/Terms */ "./src/Api/Terms.ts");
var Settings_1 = __webpack_require__(/*! ./Podium/Settings */ "./src/Podium/Settings.ts");
exports.PodiumSettings = Settings_1.Settings;
var Filter_1 = __webpack_require__(/*! ./Podium/Filter */ "./src/Podium/Filter.ts");
exports.PodiumFilter = Filter_1.Filter;
var Paginator_1 = __webpack_require__(/*! ./Podium/Paginator */ "./src/Podium/Paginator.ts");
exports.PodiumPaginator = Paginator_1.Paginator;
class Podium {
    constructor(settings) {
        this.Auth = new Auth_1.Auth(settings);
        this.Discretionary = {
            DirectReports: new Resource_1.Resource(settings).SetResource('user/reports'),
            Discretionary: new Resource_1.Resource(settings).SetResource('campaign/discretionary'),
            Ledger: new Resource_1.Resource(settings).SetResource('campaign/discretionary/ledger'),
            Transactions: new Resource_1.Resource(settings).SetResource('campaign/discretionary/transactions'),
        };
        this.Ecards = {
            Categories: new Resource_1.Resource(settings).SetResource('ecard/category'),
            Ecards: new Ecards_1.Ecards(settings),
            Templates: new Resource_1.Resource(settings).SetResource('ecard/template'),
        };
        this.Ledgers = new Ledgers_1.Ledgers(settings);
        this.LRG = new Lrg_1.LRG(settings);
        this.Permissions = new Resource_1.Resource(settings).SetResource('member/modulePermissions');
        this.Shop = {
            Cart: new Cart_1.ShopCart(settings),
            Orders: new Resource_1.Resource(settings).SetResource('member/order'),
            Products: new Resource_1.Resource(settings).SetResource('member/product'),
        };
        this.Terms = new Terms_1.Terms(settings);
        this.User = {
            Address: new Resource_1.Resource(settings).SetResource('address').SetLegacy(true),
            Profile: new Resource_1.Resource(settings).SetResource('profile').SetLegacy(true),
        };
        this.Users = new Resource_1.Resource(settings).SetResource('user').SetLegacy(true);
    }
}
exports.Podium = Podium;


/***/ })

/******/ });
});
>>>>>>> master
//# sourceMappingURL=index.js.map