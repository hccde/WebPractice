/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	__webpack_require__(6);
	var Vue = __webpack_require__(7),
	    Nav = __webpack_require__(9);
	Item = __webpack_require__(18);

	var Parent = Vue.extend({
		template: '<nav><navtem></navtem></nav>',
		components: {
			'navtem': Nav
		}
	});

	var List = Vue.extend({
		template: '<ul><item></item></ul>',
		components: {
			'item': Item
		}
	});

	Vue.component('list-component', List);
	Vue.component('nav-component', Parent);

	new Vue({
		el: 'body'
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./utils.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./utils.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',Arial,sans-serif; }\n\ninput:focus {\n  border: none;\n  outline: none; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n.block-center {\n  margin: 0 auto; }\n\n.mt2 {\n  margin-top: 20px; }\n\n.ml2 {\n  margin-left: 20px; }\n\n.mt3 {\n  margin-top: 30px; }\n\n.mt6 {\n  margin-top: 60px; }\n\n.mb2 {\n  margin-bottom: 20px; }\n\n.mr1 {\n  margin-right: 10px; }\n\n.mb1 {\n  margin-bottom: 10px; }\n\n.ml1 {\n  margin-left: 10px; }\n\n.border {\n  border: 1px solid #d5d5d5; }\n\n.ellipsis {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.26
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}

	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */

	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */

	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}

	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}

	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}

	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function _toString(value) {
	  return value == null ? '' : value.toString();
	}

	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}

	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}

	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}

	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var camelizeRE = /-(\w)/g;

	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}

	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var hyphenateRE = /([a-z\d])([A-Z])/g;

	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}

	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var classifyRE = /(?:^|[-_\/])(\w)/g;

	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';

	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var isArray = Array.isArray;

	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}

	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}

	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */

	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}

	var hasProto = ('__proto__' in {});

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && UA.indexOf('trident') > 0;
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA);
	var iosVersionMatch = isIos && UA.match(/os ([\d_]+)/);
	var iosVersion = iosVersionMatch && iosVersionMatch[1].split('_');

	// detecting iOS UIWebView by indexedDB
	var hasMutationObserverBug = iosVersion && Number(iosVersion[0]) >= 9 && Number(iosVersion[1]) >= 3 && !window.indexedDB;

	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;

	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */

	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined' && !hasMutationObserverBug) {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
	    timerFunc = context.setImmediate || setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();

	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}

	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}

	var p = Cache.prototype;

	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

	p.put = function (key, value) {
	  var removed;

	  var entry = this.get(key, true);
	  if (!entry) {
	    if (this.size === this.limit) {
	      removed = this.shift();
	    }
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;

	  return removed;
	};

	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};

	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};

	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;

	/**
	 * Parser state
	 */

	var str;
	var dir;
	var c;
	var prev;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */

	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}

	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}

	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */

	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }

	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};

	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }

	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }

	  cache$1.put(s, dir);
	  return dir;
	}

	var directive = Object.freeze({
	  parseDirective: parseDirective
	});

	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}

	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}

	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}

	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */

	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}

	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */

	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}

	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}

	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});

	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];

	var config = Object.defineProperties({

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */

	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */

	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});

	var warn = undefined;
	var formatComponentName = undefined;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';

	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };

	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}

	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}

	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}

	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}

	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}

	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});

	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}

	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */

	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}

	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */

	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}

	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */

	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	function remove(el) {
	  el.parentNode.removeChild(el);
	}

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */

	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}

	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}

	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */

	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}

	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */

	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}

	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}

	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */

	var refRE = /^v-ref:/;

	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}

	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */

	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}

	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */

	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}

	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isFragment(node) {
	  return node && node.nodeType === 11;
	}

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}

	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;

	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        // Firefox returns unknown for some "Interactive elements."
	        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
	      );
	    }
	  };
	}

	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}

	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

	var strats = config.optionMergeStrategies = Object.create(null);

	/**
	 * Helper that recursively merges two data objects together.
	 */

	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}

	/**
	 * Data
	 */

	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */

	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};

	/**
	 * Other object hashes.
	 */

	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};

	/**
	 * Default strategy.
	 */

	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}

	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (process.env.NODE_ENV !== 'production') {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
	      parent = mergeOptions(parent, mixinOptions, vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */

	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}

	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};

	/**
	 * Add self as a dependency to the target watcher.
	 */

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};

	/**
	 * Notify all subscribers of a new value.
	 */

	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});

	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */

	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */

	var shouldConvert = true;

	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}

	// Instance methods

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */

	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};

	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */

	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}

	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */

	function defineReactive(obj, key, val) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}



	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE: isIE,
		isIE9: isIE9,
		isAndroid: isAndroid,
		isIos: isIos,
		iosVersionMatch: iosVersionMatch,
		iosVersion: iosVersion,
		hasMutationObserverBug: hasMutationObserverBug,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});

	var uid = 0;

	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */

	  Vue.prototype._init = function (options) {
	    options = options || {};

	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives

	    // a uid
	    this._uid = uid++;

	    // a flag to avoid this being observed
	    this._isVue = true;

	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization

	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}

	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;

	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;

	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;

	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }

	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }

	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);

	    // set ref
	    this._updateRef();

	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};

	    // call init hook
	    this._callHook('init');

	    // initialize data observation and scope inheritance.
	    this._initState();

	    // setup event system and option events.
	    this._initEvents();

	    // call created hook
	    this._callHook('created');

	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}

	var pathCache = new Cache(1000);

	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;

	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;

	var pathStateMachine = [];

	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};

	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};

	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};

	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};

	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }

	  var code = ch.charCodeAt(0);

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;

	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }

	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }

	  return 'else';
	}

	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */

	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}

	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;

	  var actions = [];

	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };

	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };

	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };

	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };

	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }

	  while (mode != null) {
	    index++;
	    c = path[index];

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }

	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;

	    if (transition === ERROR) {
	      return; // parse error
	    }

	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}

	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}

	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}

	/**
	 * Warn against setting non-existent root path on a vm.
	 */

	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}

	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}

	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});

	var expressionCache = new Cache(1000);

	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

	function noop() {}

	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

	var saved = [];

	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}

	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}

	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

	function restore(str, i) {
	  return saved[i];
	}

	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here because the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}

	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
	      } else {
	        warn('Invalid expression. ' + 'Generated function body: ' + body);
	      }
	    }
	    return noop;
	  }
	}

	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */

	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}

	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}

	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat literal values as paths
	  !literalValueRE$1.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}

	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.

	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;

	/**
	 * Reset the batcher's state.
	 */

	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */

	function flushBatcherQueue() {
	  var _again = true;

	  _function: while (_again) {
	    _again = false;

	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}

	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};

	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};

	/**
	 * Prepare for dependency collection.
	 */

	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */

	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */

	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */

	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */

	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}

	var text$1 = {

	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },

	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};

	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);

	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};

	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}

	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	var commentRE = /<!--/;

	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */

	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }

	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	  var commentMatch = commentRE.test(templateString);

	  if (!tagMatch && !entityMatch && !commentMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');

	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }

	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}

	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}

	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();

	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();

	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */

	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;

	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }

	  return frag && shouldClone ? cloneNode(frag) : frag;
	}

	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});

	var html = {

	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },

	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },

	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};

	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}

	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */

	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};

	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, single node version
	 */

	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, multi-nodes version
	 */

	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Prepare the fragment for removal.
	 */

	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};

	/**
	 * Destroy the fragment.
	 */

	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};

	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}

	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}

	var linkerCache = new Cache(5000);

	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}

	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */

	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};

	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;

	var uid$3 = 0;

	var vFor = {

	  priority: FOR,
	  terminal: true,

	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

	  bind: function bind() {
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }

	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }

	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;

	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);

	    // cache
	    this.cache = Object.create(null);

	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },

	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */

	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;

	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }

	    // we're done for the initial render.
	    if (init) {
	      return;
	    }

	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }

	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },

	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */

	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },

	  /**
	   * Update the v-ref on owner vm.
	   */

	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },

	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */

	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },

	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */

	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },

	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */

	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },

	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */

	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },

	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },

	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */

	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },

	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */

	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */

	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */

	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },

	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * watcher's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */

	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },

	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};

	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */

	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}

	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */

	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}

	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}

	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */

	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}

	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}

	var vIf = {

	  priority: IF,
	  terminal: true,

	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },

	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },

	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};

	var show = {

	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },

	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },

	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};

	var text$2 = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }

	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }

	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };

	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }

	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }

	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    // #3029 only update when the value changes. This prevent
	    // browsers from overwriting values like selectionStart
	    value = _toString(value);
	    if (value !== this.el.value) this.el.value = value;
	  },

	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};

	var radio = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };

	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);

	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};

	var select = {

	  bind: function bind() {
	    var _this = this;

	    var self = this;
	    var el = this.el;

	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };

	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');

	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);

	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }

	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', function () {
	      nextTick(_this.forceUpdate);
	    });
	    if (!inDoc(el)) {
	      nextTick(this.forceUpdate);
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};

	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */

	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}

	var checkbox = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };

	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }

	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };

	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};

	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};

	var model = {

	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */

	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },

	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};

	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}

	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}

	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}

	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}

	var on$1 = {

	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,

	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },

	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }

	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }

	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }

	    this.reset();
	    this.handler = handler;

	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },

	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },

	  unbind: function unbind() {
	    this.reset();
	  }
	};

	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);

	var testEl = null;

	var style = {

	  deep: true,

	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },

	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }

	};

	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}

	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;

	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};

	var bind$1 = {

	  priority: BIND,

	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }

	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }

	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }

	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  // share object handler with v-bind:class
	  handleObject: style.handleObject,

	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;

	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};

	var el = {

	  priority: EL,

	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },

	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};

	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};

	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};

	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};

	var vClass = {

	  deep: true,

	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },

	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },

	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};

	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */

	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}

	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */

	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}

	var component = {

	  priority: COMPONENT,

	  params: ['keep-alive', 'transition-mode', 'inline-template'],

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */

	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */

	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },

	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */

	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },

	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */

	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};

	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */

	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}

	var propBindingModes = config._propBindingModes;
	var empty = {};

	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */

	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;

	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }

	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }

	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };

	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;

	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}

	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}

	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */

	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value, vm);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}

	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}

	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}

	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */

	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}

	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */

	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */

	function coerceProp(prop, value, vm) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  if (typeof coerce === 'function') {
	    return coerce(value);
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
	    return value;
	  }
	}

	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */

	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}

	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */

	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}

	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}

	var bindingModes = config._propBindingModes;

	var propDef = {

	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;

	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });

	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);

	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },

	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};

	var queue$1 = [];
	var queued = false;

	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}

	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}

	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';

	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */

	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};

	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}

	var p$1 = Transition.prototype;

	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};

	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

	p$1.enterNextTick = function () {
	  var _this = this;

	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};

	/**
	 * The "cleanup" phase of an entering transition.
	 */

	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};

	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};

	/**
	 * The "nextTick" phase of a leaving transition.
	 */

	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};

	/**
	 * The "cleanup" phase of a leaving transition.
	 */

	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};

	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};

	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};

	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};

	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};

	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};

	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}

	var transition$1 = {

	  priority: TRANSITION,

	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    oldId = oldId || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    removeClass(el, oldId + '-transition');
	    addClass(el, id + '-transition');
	  }
	};

	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};

	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;

	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */

	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}

	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}

	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */

	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}

	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}

	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}

	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */

	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}

	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */

	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }

	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }

	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}

	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}

	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}

	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }

	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }

	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }

	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}

	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */

	function removeText(vm, node) {
	  remove(node);
	}

	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}

	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = _toString(value);
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}

	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}

	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}

	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}

	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}

	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }

	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }

	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}

	function skip() {}
	skip.terminal = true;

	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}

	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');

	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else

	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else

	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else

	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else

	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];

	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }

	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }

	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */

	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }

	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}

	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */

	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}

	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}

	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */

	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}

	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}

	var specialCharRE = /[^\w\-:\.]/;

	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}

	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}

	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}

	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}

	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */

	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}

	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */

	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}



	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});

	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */

	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });

	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */

	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };

	  /**
	   * Initialize props.
	   */

	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };

	  /**
	   * Initialize the data.
	   */

	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };

	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */

	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };

	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */

	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };

	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */

	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };

	  /**
	   * Force update on every watcher in scope.
	   */

	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };

	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */

	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };

	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }

	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */

	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };

	  /**
	   * Initialize meta information like $index, $key & $value.
	   */

	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}

	var eventRE = /^v-on:|^@/;

	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */

	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };

	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */

	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }

	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */

	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }

	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */

	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }

	  /**
	   * Setup recursive attached/detached calls
	   */

	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };

	  /**
	   * Callback to recursively call attached hook on children
	   */

	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }

	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */

	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }

	  /**
	   * Callback to recursively call detached hook on children
	   */

	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }

	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */

	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }

	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */

	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}

	function noop$1() {}

	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}

	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */

	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;

	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }

	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }

	  // setup directive params
	  this._setupParams();

	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;

	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop$1;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};

	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */

	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};

	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */

	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};

	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */

	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};

	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};

	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */

	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};

	/**
	 * Teardown the watcher and call unbind.
	 */

	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};

	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */

	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };

	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._compile = function (el) {
	    var options = this.$options;

	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);

	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }

	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);

	    // resolve slot distribution
	    resolveSlots(this, options._content);

	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }

	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };

	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }

	    this._isCompiled = true;
	    this._callHook('compiled');
	  };

	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };

	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */

	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };

	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */

	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }

	    var destroyReady;
	    var pendingRemoval;

	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };

	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }

	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }

	    destroyReady = true;
	    cleanupIfPossible();
	  };

	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */

	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}

	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */

	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };

	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}

	var filterRE$1 = /[^|]\|[^|]/;

	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */

	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };

	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */

	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };

	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */

	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };

	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */

	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };

	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */

	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };

	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */

	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };

	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */

	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };

	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */

	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}

	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */

	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };

	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };

	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };

	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };

	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */

	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }

	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */

	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }

	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }

	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }

	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}

	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };

	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };

	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };

	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */

	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };

	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };

	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };

	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */

	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}

	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */

	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };

	  /**
	   * Mark an instance as ready.
	   */

	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }

	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */

	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };

	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */

	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}

	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

	function Vue(options) {
	  this._init(options);
	}

	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);

	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);

	var slot = {

	  priority: SLOT,
	  params: ['name'],

	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },

	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },

	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },

	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};

	var partial = {

	  priority: PARTIAL,

	  params: ['name'],

	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },

	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },

	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};

	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};

	var convertArray = vFor._postProcess;

	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */

	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */

	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */

	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);

	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }

	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }

	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }

	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}

	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}

	var digitsRE = /(\d{3})(?=\d)/g;

	// asset collections must be a plain object.
	var filters = {

	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,

	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */

	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },

	  /**
	   * 'abc' => 'Abc'
	   */

	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },

	  /**
	   * 'abc' => 'ABC'
	   */

	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },

	  /**
	   * 'AbC' => 'abc'
	   */

	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },

	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */

	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },

	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */

	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    var length = args.length;
	    if (length > 1) {
	      var index = value % 10 - 1;
	      return index in args ? args[index] : args[length - 1];
	    } else {
	      return args[0] + (value === 1 ? '' : 's');
	    }
	  },

	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */

	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};

	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */

	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };

	  /**
	   * Expose useful internals
	   */

	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;

	  /**
	   * The following are exposed for advanced usage / plugins
	   */

	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };

	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */

	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */

	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };

	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */

	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }

	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */

	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };

	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */

	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };

	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */

	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          if (!definition.name) {
	            definition.name = id;
	          }
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });

	  // expose internal transition API
	  extend(Vue.transition, transition);
	}

	installGlobalAPI(Vue);

	Vue.version = '1.0.26';

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);

	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(8)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
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
	    var timeout = cachedSetTimeout(cleanUpNextTick);
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
	    cachedClearTimeout(timeout);
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
	        cachedSetTimeout(drainQueue, 0);
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

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(10)
	__vue_script__ = __webpack_require__(16)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/nav.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(17)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-ddae2a6c/nav.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./nav.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./nav.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\tinput{\n\t\toutline: none;\n\t\tborder:none;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t}\n\t.nav-outer{\n\t\tbackground:-webkit-linear-gradient(top,#086ed5,#055db5);\n\t\tbackground:linear-gradient(to bottom,#086ed5,#055db5);\n\t}\n\t.nav-wrap{\n\t\theight: 46px;\n\t\tborder-bottom: 1px solid #044e97;\n\t\tpadding-left: 5px;\n\t\tpadding-right: 10px;\n\t\tcolor: white;\n\t\tmargin:auto auto;\n\t\twidth: 960px;\n\t}\t\n\t.nav-logo{\n\t\theight:30px; \n\t\tmargin: 8px 0px;\n\t\twidth:61px;\n\t\tbackground-image: url(" + __webpack_require__(12) + ");\n\t\tdisplay: inline-block;\n\t}\n\t.nav-search-wrap{\n\t\twidth: 367px;\n\t\theight: 100%;\n\t\tdisplay: inline-block;\n\t\tvertical-align: top;\n\t\tmargin-left: 10px;\n\t\tfont-size: 0px;\n\t}\n\t.nav-search-wrap input{\n\t\t\theight: 17px;\n\t\t\tpadding:7px 10px;\n\t\t\tborder: 1px solid #045bb2;\n\t\t\tmargin-top: 5px;\n\t\t\tbackground-color:#e1eaf2;\n\t\t\tborder-top-left-radius: 4px;\n\t\t\tborder-bottom-left-radius: 4px;\nbox-shadow: inset 0 3px 8px rgba(0,0,0,.24);\n    \t\twidth:305px;\n    \t\tborder-right: 0;\n    \t\tcolor: #49525c;\n    \t\tfont-size: 14px;\n    \t\tline-height: 17px;\n\t}\n\t.nav-search-wrap input:focus{\n\t\tbackground-color: white;\n\t}\n\t.nav-search-wrap div{\n\t\theight: 31px;\n\t\twidth: 40px;\n\t\tborder-top-right-radius:4px;\n\t\tborder-bottom-right-radius: 4px; \n\t\tbackground-color: #0e75de;\nbox-shadow: 0 0 5px  rgba(0,0,0,.1);\n\t\tdisplay: inline-block;\n\t\tvertical-align: top;\n\t\tmargin-top: 5px;\n\t\tborder:1px solid #045bb2;\n\t\tborder-right: 0px;\n\t\tcursor: pointer;\n\t}\n\t.nav-search-wrap div span{\n\t\tbackground-image: url(" + __webpack_require__(13) + ");\n\t\tbackground-position: -82px 0;\n    \twidth: 15px;\n    \theight: 15px;\n    \tmargin-top: 8px;\n    \tmargin-left: 12.5px;\n    \tdisplay: inline-block;\n    }\n\n\t.nav-list{\n\t\tdisplay: inline-block;\n\t\tfont-size: 0;\n\t\tvertical-align: top;\n\t\tmargin-left: 10px;\n\t}\n\t.nav-list li {\n\t\twidth: 54px;\n\t\tdisplay: inline-block;\n\t\tfont-size: 14px;\n\t\theight:45px;\n\t\ttext-align: center;\n\t}\n\t.nav-list li a{\n\t\twidth: 54px;\n\t\tline-height: 45px;\n\t\tcursor: pointer;\n\t\tdisplay:inline-block;\n\t}\n\t.nav-list-active{\n\t\tbackground-color:#075fb6\n\t}\n\t.nav-ask-quest{\n\t\tmargin-left: 90px;\n\t\twidth: 66px;\n\t\tvertical-align: top;\n\t\tmargin-top: 6px;\n\t\theight: 34px;\n\t\tborder:1px solid #045bb2;\n\t\tborder-radius: 4px;\n\t\tcolor: white;\n\t\tfont-size: 14px;\n\t\ttext-align: center;\n\t\tbackground-color: #0e75de;\n    \tbox-shadow: 0 0 5px  rgba(0,0,0,.1);\n\n\t}\n\t.nav-person{\n\t\tdisplay: inline-block;\n\t\tvertical-align: top;\n\t\tcursor: pointer;\n\t}\n\t.nav-person span{\n\t\tdisplay: inline-block;\n\t\tvertical-align: top;\n\t\tmargin-top: 14px;\n\t\twidth: 60px;\n\t\tfont-size: 14px;\n\t\theight: 18px;\n\t\tmargin-left: 5px;\n\t}\n\t.nav-person-head{\n\t\tmargin-top: 9px;\n\t\twidth:27px;\n\t\theight:27px;\n\t\tdisplay: inline-block;\n\t\tbackground-image: url(" + __webpack_require__(14) + ");\n\t}\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAeCAMAAACohOZDAAACr1BMVEUAAAAAAAD///8AAAD///8AAAD///8AAAD///8AAAD///8AAABJSUmSkpL///8AAAD///8AAAD///8AAAAAAABGRkb///8AAAAAAAA7OzsAAAAAAAD///8AAAD///////8AAAAAAADy//8AAAAMDAxJSUlVVVVtbW3z//8AAAAAAAD0//8AAAArKyuKior09P8AAAAAAAATExOXl5f29vZkZGQjIyNKSkr39/dERESHh4eWnp68vLz4+Pj4+PheXl74+Pjy+fmIiI7z+fl9goL0+fn19fqHh4eMjIz19fWQkJD29vbBxsby9/egpaXz9/evs7Pz9/emqqrz9/f09/epqa30+Pi1tbW1tbW0tLT19fXS1dXi4uXy9fW6vb3s7+/z9va8v7/CxcXz9vbo6urz9vbCwsXz9vbOztH09/fj5ubu8fHFxcjIysrKzc3z9fXLzc3k5Obz9fXz9fXc3N7R0dP09vbS0tXS1dfn6eno6ury9PfV19fe4ODm5ujZ29vz9fXa3N7b3N7w8vLb3d/b3d/09vbs7u7y9vbe4ODy9Pbe4ODy9Pbj5OTm6urv8fPz9Pbz9fbg5OTi5eXx8/Xh4uTh4+Th4+Xz9fX09fXk5efk5ufy9fXn6eny9fXz9Pbl5ubl5ubr7u7w8fPz9Pbw8vPz9fbz9fbz9fbz9fbo6evr7O7y9fby9fXy9fXt8PDp7Ozz9Pbz9Pbr7e7z9fbt7vDs7e/s7/Ds7/Dz9fXz9fXt7/Dt7+/z9PXu8fHz9PXu8PHy8/Ty9Pbx8vPv8PHx8/Xv8fLx9PXv8fLv8fPv8fPz9fbx8/Tx8/Tx8/Ty9PTz9fXz9PXx8vPy8/Tx8vPx8/Tx8/Tx8/Tx8/Ty9PXx8/Ty9fbz9fbz9fbz9fbz9fbz9fbz9fbz9fbz9fby9PUwi4lDAAAA5HRSTlMAAQECAgMEBQUGBgcHBwcICAkJCgsLCwwNDQ4PDxAQERMUFBUVFRUVFRYXFxgYGBgZGhsbGxwdHyEiIiIiIyQmJygrLC0tMjMzNDU4Oj0+P0BBQkJDRERFSEtOT09PUVFTVFRVV1dYWFlaW1tcYWVmZ2hoa2xub3Jyc3h5ent8gIGEhYWGiIiJioyMjY2QkZGRk5WVlZiZmpqcnqCgoaGkpaamp6eqqqutrq+ysrS3uLq9v8TExsrKy8zNz9LS1NXX19jZ29vc3t/h4uPl5ufn5+jr6+zt7u/w8PHz9vf4+fr7/f4dtK1+AAAChklEQVQ4y62V51vTUBTGbyg1QpVaioqtVXGLq8U9EBWtW7S4994TFfcW995b3HvgHihaFw7cIqi1tH3/EHPTpE1b0qf28f3Qc/Oe80t673NyQginqXlm8s8qk+yOw/A+KnSqWse0iZnrj+b8Qn/++hkOM0HKIyrVb21OHzN76dbj1x6+s8OjCTSbCgz31kIit9MLpcvVnmbXeo3iZI52CBLpqHWFXMr+/c2Te7eA7ANbVi6aNWlo324pSvrHXkvuN52jTYJEmsQb26S0NBkTG9RKAAx6XeU4jTqKVSpoLg2YaTJ9wBpKaImHkawIo2D8vE5d3fE0XlUk5CtW+DPeVdObeYN8vXQnMmlsXlLUj7vxTyyRp5WXUdxB6jX8hPwmdDF6UxeWCzYslqdJ2wI8iPZ6kTn4M5jftkZHj464MDcIrRjnwkavtwpYJu2vaGBaEJqo9sHZQ/RSnbgUJ+2nqsCIYDSpm5tVTvTYhY9aCHbMbWn/XJSjmcbxjMfT1lYI9mQnlYtrPBp/RwTQGZDVY6Lh+2oO0JNfMAF0lf3f5Og9QuUGOMrL7JvRN0ryCEiSSC9UXsdTRv7UGI8ARiLxFf6IYyNjg515EI8MAJ7jSmSY9FlgG7AzPLqmHbm6k0BGWPReYDmpcx8OM81br5Lqh6xWa4h0Hxd+NCNM5wLscM+1eZ+lc02iCnD5W7EvgdVc6ymH2E4RYrHs5rjsgRZOAfR4fPGf6ueBF/X48bdgO/cKsL2RP9bAUkmqYs6cOLjrXAnu+MJlLwD8dKHd347+slmtVAFPZeY7+c1M8bU3294e6S4+RemeoaV9G7SjbhQW3Z2h9nX1pkSDMpQvkKqG0ZigJv9RfwENPbgd8rqjpgAAAABJRU5ErkJggg=="

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QBYRXhpZgAATU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACfqADAAQAAAABAAABZgAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQIBAQEBAQIBAQECAgICAgICAgIDAwQDAwMDAwICAwQDAwQEBAQEAgMFBQQEBQQEBAT/2wBDAQEBAQEBAQIBAQIEAwIDBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAT/wAARCAAZABkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+a608WWc+pacl1PcxXN/YpqmnQapZXGlXGoWzN8l1FHKiGWJscSRgqcHBNaF1qnn3CkziJllYRnyt0Xl4PUdyMjAr2T9kbwV4n+KXh2z8Z/EbxU2uaXZeENY8HeDbTULA32raal55NnNfedMP3kIjjDRW4bMUgEmfmGPGNf022tr+6WJpbiG1upYI7kRmFbtUldFkK5JRnChtmTjd1r7HLs9hmVatRj8VOydr2/HqmrfkYY7Jq+CwtHFz+Gpe17X0SfTo73X46s7fQvhb4j+LPh7VJvD3jw+HdS0+4bT9K07T9LW51jxDcC2e6ihSQsFt1Owru+87MACNpz8wf2H+0t/0EvHH/gBcf/G6/RH9k3U9WXUNf8D6RpepazqWtxDxBYabpOl/a7yM2qhJ5TcDlBFGYiMgnEj7cfMG+3v+GZviH/0S+L/wZxf/AByvCz3HZ5Qxy+pYepOm4rWKm1dN31jpfuumnc+iyvIsizDLaU8RXhCqr813G929NJbabW3R43oPwWktNETwN8OZJtDstLTTTOsuv2ei30cdvAlhAsUkjr5h3eZJIoOdzlnAUgnx/wCIfwL8VeGNRstNubfw/fWt7p8mrxalF4t0hIW+zGNboyM1xtDq8i8ZJYMSBgHHt/ib/kNx/wDYcH/ot6+ef2kP+RWtv+v6+/8ASeCvS4cwsKHtcFR0ip2u0m3eTV27X+9vXVWvY/IsTxVmuLz3K5YmV4Ymm7wWkItUoVLxWut7rde60pczipHypD8QvjV+zP4uuPi1pnj7R/C3ie4j1Dwtpg0XXfDni7fZ3sS3DWq2iyXKjdHDARcrGEzEVLmQslch/wAPGP2zv+jgPGH/AIK9C/8AkaviTxL/AMjQ3/XCxrpa/YMTVpYvF18thhqMFhqlSCajO8lzySuvaJLlULK173bbbPYwcXSoRxM5yk6iUtWtPJWXn/S2/9k="

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		data: function data() {
			return {
				navitems: [{ name: "首页", url: "", active: "nav-list-active" }, { name: "话题", url: "" }, { name: "发现", url: "" }, { name: "消息", url: "" }]
			};
		}
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"nav-outer\">\n\t<div class=\"nav-wrap\">\n\t\t<div class=\"nav-logo\">\n\t\t\t\n\t\t</div>\n\t\t<div class=\"nav-search-wrap\">\n\t\t\t<input type=\"type\" name=\"search\" required=\"\" placeholder=\"搜索你感兴趣的内容...\">\n\t\t\t<div>\n\t\t\t<span>\n\t\t\t\t\n\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<ul class=\"nav-list\">\n\t\t\t<li v-for=\"item in navitems\" class=\"{{item.active}}\">\n\t\t\t\t<a>{{item.name}}</a>\n\t\t\t</li>\n\t\t</ul>\n\t\t<input type=\"button\" name=\"ask\" value=\"提问\" class=\"nav-ask-quest\">\n\t\t<div class=\"nav-person ml2\">\n\t\t\t<div class=\"nav-person-head\">\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<span class=\"ellipsis\">\n\t\t\t\tvgyyuiof\n\t\t\t</span>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(19)
	__vue_script__ = __webpack_require__(21)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/listItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(22)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-62c42bba/listItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./listItem.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./listItem.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.list-li{\n\twidth:642px;\n\tpadding: 15px 0;\n\tborder-bottom: 1px solid #eee;\n}\n.list-li *{\n\tfont-family: '';\n}\n.list-item-head img{\n\theight: 38px;\n\twidth: 38px;\n\tcursor: pointer;\n}\n.list-item-votebar{\n\twidth: 38px;\n\tmargin-right: 10px;\n\tvertical-align: top;\n\tdisplay: inline-block;\n}\n.list-item-vote{\n\tmargin-top: 5px;\n\twidth: 38px;\n\theight: 24px;\n\tcolor: #698ebf;\n\tbackground-color: #eff6fa;\n\ttext-align: center;\n\tline-height: 24px;\n\tfont-size: 12px;\n\tfont-weight: 600;\n\tcursor: pointer;\n}\n.list-item-content{\n\tposition: relative;\n\twidth: 584px;\n\tdisplay: inline-block;\n}\n.list-item-content p{\n\tfont-size: 13px;\n\tcolor: #999;\n\twidth: 49%;\n}\n.list-item-content h3{\n\tfont-size: 14px;\n\tcolor:#259;\n\tfont-weight: 600;\n\tpadding:10px 0px;\n\tposition: relative;\n\tcursor: pointer;\n}\n.list-item-content h3 span{\n\tposition: absolute;\n\tbackground-image: url(" + __webpack_require__(6) + ");\n\tbackground-position: -261px -62px;\n\twidth: 20px;\n\theight: 20px;\n\tright: 0px;\n\ttop: 7px;\n\tcursor: pointer;\n}\n.list-item-content-time{\n\tright: 0px;\n\tposition: absolute;\n\ttop: 0px;\n\ttext-align: right;\n}\n.list-item-author{\n\tfont-size: 13px;\n\tcolor: #222;\n\tline-height: 1.7;\n\tcursor: pointer;\n\n}\n.list-item-author span{\n\tfont-weight: 600\n}\n.list-item-content section{\n\tline-height: 1.7;\n\tfont-size: 0px;\n\tfont-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;\n}\n\n.list-item-content section span{\n\tcolor: #259;\n\tcursor: pointer;\n}\n.list-item-content section div{\n\tfont-size:13px;\n\twidth: 384px;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tvertical-align: top;\n}\n.list-item-content section img{\n\twidth: 200px;\n\theight: 112px;\n\tdisplay: inline-block;\n}\n\n.list-item-bottom{\n\tmargin-top: 15px;\n}\n\n.list-item-add{\n\tbackground-image: url(" + __webpack_require__(6) + ");\n\tbackground-position: -97px -23px;\n\twidth: 12px;\n\theight: 10px;\n\tdisplay: inline-block;\n}\n.list-item-comment{\n\tbackground-image: url(" + __webpack_require__(6) + ");\n\tbackground-position: -28px -22px;\n\twidth: 12px;\n\theight: 10px;\n\tmargin-left: 4px;\n\tdisplay: inline-block;\n}\n\n", ""]);

	// exports


/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		data: function data() {
			return {
				list: {
					name: "",
					time: "",
					head: "",
					joiner: "",
					action: "",
					title: "",
					content: "",
					comments: ""
				}
			};
		}
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- li的宽度先写死 实际是由右边栏决定的 -->\n<li class=\"list-li\">\n\t<div class=\"list-item-votebar\">\n\t\t<div class=\"list-item-head\">\n\t\t\t<img src=\"" + __webpack_require__(23) + "\">\n\t\t</div>\n\t\t<p class=\"list-item-vote\">\n\t\t\t<span>\n\t\t\t\t817\n\t\t\t</span>\n\t\t</p>\n\t</div>\n\n\t<div class=\"list-item-content\">\n\t<div>\n\t\t<p>\n\t\t\t顾扯淡、徐湘楠 赞同该回答\n\t\t</p>\n\t\t<p class=\"list-item-content-time\">\n\t\t\t51 分钟前\n\t\t</p>\n\t\t<h3>\n\t\t\t如何评价动画电影 《大鱼海棠》?\n\t\t\t<span class=\"list-item-del\">\n\t\t\t</span>\n\t\t</h3>\n\t</div>\n\t<div class=\"list-item-author\"><span>刘幸桥</span>，谈笑风生又一年</div>\n\t<section>\n\t\t\t<img src=\"" + __webpack_require__(29) + "\">\n\t\t\t<div>\n\t\t\t为什么没有大V出来给大家发声音？我就想问问就现在微博上面还有哪几个经常指出政府或法规错误，还要关心弱势群体，在乎百姓感受，偶尔用自己的专业知识提出切实可行而且在理的整改意见，目的是想让社会变得更好。同时粉丝数和社\t会地位都能配得上「大V」两个...<span>显示全部</span>\n\t\t\t</div>\n\t</section>\n\t\t<p class=\"list-item-bottom\">\n\t\t\t<span class=\"list-item-add\"></span><span>关注问题</span>\n\t\t\t<span class=\"list-item-comment\"></span><span><span>4</span>&nbsp条评论</span>\n\t\t\t<span style=\"font-weight:800;width:line-height: 8px;display: inline-block;vertical-align: middle;font-size:18px;\">·</span><span>作者保留权利</span>\n\t\t</p>\n\t</div>\n</li>\n";

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ }
/******/ ]);