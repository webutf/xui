/*!
 * weui.js v1.0.0 (https://weui.io)
 * Copyright 2016, wechat ui team
 * MIT license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["weui"] = factory();
	else
		root["weui"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dialog = __webpack_require__(1);

	var _dialog2 = _interopRequireDefault(_dialog);

	var _alert = __webpack_require__(7);

	var _alert2 = _interopRequireDefault(_alert);

	var _confirm = __webpack_require__(8);

	var _confirm2 = _interopRequireDefault(_confirm);

	var _toast = __webpack_require__(9);

	var _toast2 = _interopRequireDefault(_toast);

	var _loading = __webpack_require__(11);

	var _loading2 = _interopRequireDefault(_loading);

	var _actionSheet = __webpack_require__(13);

	var _actionSheet2 = _interopRequireDefault(_actionSheet);

	var _topTips = __webpack_require__(15);

	var _topTips2 = _interopRequireDefault(_topTips);

	var _searchBar = __webpack_require__(17);

	var _searchBar2 = _interopRequireDefault(_searchBar);

	var _tab = __webpack_require__(18);

	var _tab2 = _interopRequireDefault(_tab);

	var _form = __webpack_require__(19);

	var _form2 = _interopRequireDefault(_form);

	var _uploader = __webpack_require__(20);

	var _uploader2 = _interopRequireDefault(_uploader);

	var _picker = __webpack_require__(24);

	var _gallery = __webpack_require__(29);

	var _gallery2 = _interopRequireDefault(_gallery);

	var _slider = __webpack_require__(31);

	var _slider2 = _interopRequireDefault(_slider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    dialog: _dialog2.default,
	    alert: _alert2.default,
	    confirm: _confirm2.default,
	    toast: _toast2.default,
	    loading: _loading2.default,
	    actionSheet: _actionSheet2.default,
	    topTips: _topTips2.default,
	    searchBar: _searchBar2.default,
	    tab: _tab2.default,
	    form: _form2.default,
	    uploader: _uploader2.default,
	    picker: _picker.picker,
	    datePicker: _picker.datePicker,
	    gallery: _gallery2.default,
	    slider: _slider2.default
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _dialog = __webpack_require__(6);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _sington = void 0;

	/**
	 * dialog锛屽脊绐楋紝alert鍜宑onfirm鐨勭埗绫�
	 *
	 * @param {object=} options 閰嶇疆椤�
	 * @param {string=} options.title 寮圭獥鐨勬爣棰�
	 * @param {string=} options.content 寮圭獥鐨勫唴瀹�
	 * @param {string=} options.className 寮圭獥鐨勮嚜瀹氫箟绫诲悕
	 * @param {array=} options.buttons 鎸夐挳閰嶇疆椤�
	 *
	 * @param {string} [options.buttons[].label=纭畾] 鎸夐挳鐨勬枃瀛�
	 * @param {string} [options.buttons[].type=primary] 鎸夐挳鐨勭被鍨� [primary, default]
	 * @param {function} [options.buttons[].onClick=$.noop] 鎸夐挳鐨勫洖璋�
	 *
	 * @example
	 * weui.dialog({
	 *     title: 'dialog鏍囬',
	 *     content: 'dialog鍐呭',
	 *     className: 'custom-classname',
	 *     buttons: [{
	 *         label: '鍙栨秷',
	 *         type: 'default',
	 *         onClick: function () { alert('鍙栨秷') }
	 *     }, {
	 *         label: '纭畾',
	 *         type: 'primary',
	 *         onClick: function () { alert('纭畾') }
	 *     }]
	 * });
	 */
	function dialog() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    if (_sington) return _sington;

	    var isAndroid = _util2.default.os.android;
	    options = _util2.default.extend({
	        title: null,
	        content: '',
	        className: '',
	        buttons: [{
	            label: '纭畾',
	            type: 'primary',
	            onClick: _util2.default.noop
	        }],
	        isAndroid: isAndroid
	    }, options);

	    var $dialogWrap = (0, _util2.default)(_util2.default.render(_dialog2.default, options));
	    var $dialog = $dialogWrap.find('.weui-dialog');
	    var $mask = $dialogWrap.find('.weui-mask');

	    function hide() {
	        var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _util2.default.noop;

	        $mask.addClass('weui-animate-fade-out');
	        $dialog.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
	            $dialogWrap.remove();
	            _sington = false;
	            callback();
	        });
	    }

	    (0, _util2.default)('body').append($dialogWrap);
	    // 涓嶈兘鐩存帴鎶�.weui-animate-fade-in鍔犲埌$dialog锛屼細瀵艰嚧mask鐨剒-index鏈夐棶棰�
	    $mask.addClass('weui-animate-fade-in');
	    $dialog.addClass('weui-animate-fade-in');

	    $dialogWrap.on('click', '.weui-dialog__btn', function (evt) {
	        var _this = this;

	        var index = (0, _util2.default)(this).index();
	        hide(function () {
	            options.buttons[index].onClick && options.buttons[index].onClick.call(_this, evt);
	        });
	    });

	    _sington = $dialogWrap[0];
	    _sington.hide = hide;
	    return _sington;
	}
	exports.default = dialog;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	__webpack_require__(3);

	var _objectAssign = __webpack_require__(4);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _balajs = __webpack_require__(5);

	var _balajs2 = _interopRequireDefault(_balajs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 鍏跺疄锛�$ 鐨勫師鍨嬪氨鏄竴涓暟缁勶紝鎷ユ湁鏁扮粍鐨勫悇绉嶆柟娉�
	// 杩欓噷鍙槸搴撳唴閮ㄤ娇鐢紝鎵€浠ラ€氳繃鏂囨。绾︽潫锛屼笉鍋氬閿欐牎楠岋紝杈惧埌浠ｇ爜鏈€灏忓寲

	/* 鍒ゆ柇绯荤粺 */
	function _detect(ua) {
	    var os = this.os = {},
	        android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
	    if (android) {
	        os.android = true;
	        os.version = android[2];
	    }
	}
	_detect.call(_balajs2.default, navigator.userAgent);

	(0, _objectAssign2.default)(_balajs2.default.fn, {
	    /**
	     * 鍙兘鏄竴涓� HTMLElement 鍏冪礌鎴栬€� HTMLElement 鏁扮粍锛屼笉鏀寔瀛楃涓�
	     * @param {Element|Element[]} $child
	     * @returns {append}
	     */
	    append: function append($child) {
	        if (!($child instanceof HTMLElement)) {
	            $child = $child[0];
	        }
	        this.forEach(function ($element) {
	            $element.appendChild($child);
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {remove}
	     */
	    remove: function remove() {
	        this.forEach(function ($element) {
	            $element.parentNode.removeChild($element);
	        });
	        return this;
	    },
	    /**
	     *
	     * @param selector
	     * @returns {HTMLElement}
	     */
	    find: function find(selector) {
	        return (0, _balajs2.default)(selector, this);
	    },
	    /**
	     *
	     * @param {String} className
	     * @returns {addClass}
	     */
	    addClass: function addClass(className) {
	        this.forEach(function ($element) {
	            // http://caniuse.com/#search=classList
	            $element.classList.add(className);
	        });
	        return this;
	    },
	    /**
	     *
	     * @param {String} className
	     * @returns {removeClass}
	     */
	    removeClass: function removeClass(className) {
	        this.forEach(function ($element) {
	            // http://caniuse.com/#search=classList
	            $element.classList.remove(className);
	        });
	        return this;
	    },
	    /**
	     *
	     * @param index
	     * @returns {*|jQuery|HTMLElement}
	     */
	    eq: function eq(index) {
	        return (0, _balajs2.default)(this[index]);
	    },
	    /**
	     *
	     * @returns {show}
	     */
	    show: function show() {
	        this.forEach(function ($element) {
	            $element.style.display = 'block';
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {hide}
	     */
	    hide: function hide() {
	        this.forEach(function ($element) {
	            $element.style.display = 'none';
	        });
	        return this;
	    },
	    /**
	     *
	     * @param html 鐩墠鍙兘鎺ュ彈瀛楃涓�
	     * @returns {html}
	     */
	    html: function html(_html) {
	        this.forEach(function ($element) {
	            $element.innerHTML = _html;
	        });
	        return this;
	    },
	    /**
	     *
	     * @param {Object} obj 鐩墠鍙兘鎺ュ彈object
	     * @returns {css}
	     */
	    css: function css(obj) {
	        var _this = this;

	        Object.keys(obj).forEach(function (key) {
	            _this.forEach(function ($element) {
	                $element.style[key] = obj[key];
	            });
	        });
	        return this;
	    },
	    /**
	     *
	     * @param eventType
	     * @param selector
	     * @param handler
	     */
	    on: function on(eventType, selector, handler) {
	        var isDelegate = typeof selector === 'string' && typeof handler === 'function';
	        if (!isDelegate) {
	            handler = selector;
	        }
	        this.forEach(function ($element) {
	            eventType.split(' ').forEach(function (event) {
	                $element.addEventListener(event, function (evt) {
	                    if (isDelegate) {
	                        // http://caniuse.com/#search=closest
	                        if (this.contains(evt.target.closest(selector))) {
	                            handler.call(evt.target, evt);
	                        }
	                    } else {
	                        handler.call(this, evt);
	                    }
	                });
	            });
	        });
	        return this;
	    },
	    /**
	     *
	     * @param {String} eventType
	     * @param {String|Function} selector
	     * @param {Function=} handler
	     * @returns {off}
	     */
	    off: function off(eventType, selector, handler) {
	        if (typeof selector === 'function') {
	            handler = selector;
	            selector = null;
	        }

	        this.forEach(function ($element) {
	            eventType.split(' ').forEach(function (event) {
	                if (typeof selector === 'string') {
	                    $element.querySelectorAll(selector).forEach(function ($element) {
	                        $element.removeEventListener(event, handler);
	                    });
	                } else {
	                    $element.removeEventListener(event, handler);
	                }
	            });
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {Number}
	     */
	    index: function index() {
	        var $element = this[0];
	        var $parent = $element.parentNode;
	        return Array.prototype.indexOf.call($parent.children, $element);
	    },
	    /**
	     * @desc 鍥犱负off鏂规硶鐩墠涓嶅彲浠ョЩ闄ょ粦瀹氱殑鍖垮悕鍑芥暟锛岀幇鍦ㄧ洿鎺ユ毚鍔涚Щ闄ゆ墍鏈塴istener
	     * @returns {offAll}
	     */
	    offAll: function offAll() {
	        var _this2 = this;

	        this.forEach(function ($element, index) {
	            var clone = $element.cloneNode(true);
	            $element.parentNode.replaceChild(clone, $element);

	            _this2[index] = clone;
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {*}
	     */
	    val: function val() {
	        var _arguments = arguments;

	        if (arguments.length) {
	            this.forEach(function ($element) {
	                $element.value = _arguments[0];
	            });
	            return this;
	        }
	        return this[0].value;
	    },
	    /**
	     *
	     * @returns {*}
	     */
	    attr: function attr() {
	        var _arguments2 = arguments,
	            _this3 = this;

	        if (_typeof(arguments[0]) == 'object') {
	            var _ret = function () {
	                var attrsObj = _arguments2[0];
	                var that = _this3;
	                Object.keys(attrsObj).forEach(function (attr) {
	                    that.forEach(function ($element) {
	                        $element.setAttribute(attr, attrsObj[attr]);
	                    });
	                });
	                return {
	                    v: _this3
	                };
	            }();

	            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	        }

	        if (typeof arguments[0] == 'string' && arguments.length < 2) {
	            return this[0].getAttribute(arguments[0]);
	        }

	        this.forEach(function ($element) {
	            $element.setAttribute(_arguments2[0], _arguments2[1]);
	        });
	        return this;
	    }
	});

	(0, _objectAssign2.default)(_balajs2.default, {
	    extend: _objectAssign2.default,
	    /**
	     * noop
	     */
	    noop: function noop() {},
	    /**
	     * render
	     * 鍙栧€硷細<%= variable %>
	     * 琛ㄨ揪寮忥細<% if {} %>
	     * 渚嬪瓙锛�
	     *  <div>
	     *    <div class="weui-mask"></div>
	     *    <div class="weui-dialog">
	     *    <% if(typeof title === 'string'){ %>
	     *           <div class="weui-dialog__hd"><strong class="weui-dialog__title"><%=title%></strong></div>
	     *    <% } %>
	     *    <div class="weui-dialog__bd"><%=content%></div>
	     *    <div class="weui-dialog__ft">
	     *    <% for(var i = 0; i < buttons.length; i++){ %>
	     *        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_<%=buttons[i]['type']%>"><%=buttons[i]['label']%></a>
	     *    <% } %>
	     *    </div>
	     *    </div>
	     *  </div>
	     * A very simple template engine
	     * @param {String} tpl
	     * @param {Object=} data
	     * @returns {String}
	     */
	    render: function render(tpl, data) {
	        var code = 'var p=[],print=function(){p.push.apply(p,arguments);};with(this){p.push(\'' + tpl.replace(/[\r\t\n]/g, ' ').split('<%').join('\t').replace(/((^|%>)[^\t]*)'/g, '$1\r').replace(/\t=(.*?)%>/g, '\',$1,\'').split('\t').join('\');').split('%>').join('p.push(\'').split('\r').join('\\\'') + '\');}return p.join(\'\');';
	        return new Function(code).apply(data);
	    },
	    /**
	     * getStyle 鑾峰緱鍏冪礌璁＄畻鍚庣殑鏍峰紡鍊�
	     */
	    getStyle: function getStyle(el, styleProp) {
	        var value,
	            defaultView = (el.ownerDocument || document).defaultView;
	        // W3C standard way:
	        if (defaultView && defaultView.getComputedStyle) {
	            // sanitize property name to css notation
	            // (hypen separated words eg. font-Size)
	            styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
	            return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
	        } else if (el.currentStyle) {
	            // IE
	            // sanitize property name to camelCase
	            styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
	                return letter.toUpperCase();
	            });
	            value = el.currentStyle[styleProp];
	            // convert other units to pixels on IE
	            if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
	                return function (value) {
	                    var oldLeft = el.style.left,
	                        oldRsLeft = el.runtimeStyle.left;
	                    el.runtimeStyle.left = el.currentStyle.left;
	                    el.style.left = value || 0;
	                    value = el.style.pixelLeft + 'px';
	                    el.style.left = oldLeft;
	                    el.runtimeStyle.left = oldRsLeft;
	                    return value;
	                }(value);
	            }
	            return value;
	        }
	    }
	});

	exports.default = _balajs2.default;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	// element-closest | CC0-1.0 | github.com/jonathantneal/closest

	(function (ElementProto) {
		if (typeof ElementProto.matches !== 'function') {
			ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
				var element = this;
				var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
				var index = 0;

				while (elements[index] && elements[index] !== element) {
					++index;
				}

				return Boolean(elements[index]);
			};
		}

		if (typeof ElementProto.closest !== 'function') {
			ElementProto.closest = function closest(selector) {
				var element = this;

				while (element && element.nodeType === 1) {
					if (element.matches(selector)) {
						return element;
					}

					element = element.parentNode;
				}

				return null;
			};
		}
	})(window.Element.prototype);


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, $) {
		$ = (function(document, s_addEventListener, s_querySelectorAll) {
			function $(s, context, bala) {
				bala = Object.create($.fn);

				s && bala.push.apply(bala, // if s is truly then push the following
					s[s_addEventListener] // if arg is node or window,
						? [s] // then pass [s]
						: "" + s === s // else if arg is a string
							? /</.test(s) // if the string contains "<" (if HTML code is passed)
								// then parse it and return node.children
								// use 'addEventListener' (HTMLUnknownElement) if content is not presented
								? ((context = document.createElement(context || s_addEventListener)).innerHTML = s
									, context.children)
								: context // else if context is truly
									? ((context = $(context)[0]) // if context element is found
										? context[s_querySelectorAll](s) // then select element from context
										: bala) // else pass [] (context isn't found)
									: document[s_querySelectorAll](s) // else select elements globally
							: typeof s == 'function' // else if function is passed
								// if DOM is ready
								// readyState[7] means readyState value is "interactive" or "complete" (not "loading")
								? document.readyState[7]
									? s() // then run given function
									: document[s_addEventListener]('DOMContentLoaded', s) // else wait for DOM ready
								: s); // else guessing that s variable is array-like Object

				return bala;
			}

			$.fn = [];

			$.one = function(s, context) {
				return $(s, context)[0] || null;
			};

			return $;
		})(document, 'addEventListener', 'querySelectorAll');


		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return $;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module == 'object' && module.exports) {
			module.exports = $;
		} else {
			root.$ = $;
		}
	})(this);


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<div class=\"<%=className%>\"> <div class=weui-mask></div> <div class=\"weui-dialog <% if(isAndroid){ %> weui-skin_android <% } %>\"> <% if(title){ %> <div class=weui-dialog__hd><strong class=weui-dialog__title><%=title%></strong></div> <% } %> <div class=weui-dialog__bd><%=content%></div> <div class=weui-dialog__ft> <% for(var i = 0; i < buttons.length; i++){ %> <a href=javascript:; class=\"weui-dialog__btn weui-dialog__btn_<%=buttons[i]['type']%>\"><%=buttons[i]['label']%></a> <% } %> </div> </div> </div> ";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _dialog = __webpack_require__(1);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * alert 璀﹀憡寮规锛屽姛鑳界被浼间簬娴忚鍣ㄨ嚜甯︾殑 alert 寮规锛岀敤浜庢彁閱掋€佽鍛婄敤鎴风畝鍗曟壖瑕佺殑淇℃伅锛屽彧鏈変竴涓€滅‘璁も€濇寜閽紝鐐瑰嚮鈥滅‘璁も€濇寜閽悗鍏抽棴寮规銆�
	 * @param {string} content 寮圭獥鍐呭
	 * @param {function=} yes 鐐瑰嚮纭畾鎸夐挳鐨勫洖璋�
	 * @param {object=} options 閰嶇疆椤�
	 * @param {string=} options.title 寮圭獥鐨勬爣棰�
	 * @param {string=} options.className 鑷畾涔夌被鍚�
	 * @param {array=} options.buttons 鎸夐挳閰嶇疆椤癸紝璇︽儏鍙傝€僤ialog
	 *
	 * @example
	 * weui.alert('鏅€氱殑alert');
	 * weui.alert('甯﹀洖璋冪殑alert', function(){ console.log('ok') });
	 * weui.alert('鑷畾涔夋爣棰樼殑alert', { title: '鑷畾涔夋爣棰�' });
	 * weui.alert('甯﹀洖璋冪殑鑷畾涔夋爣棰樼殑alert', function(){
	 *    console.log('ok')
	 * }, {
	 *    title: '鑷畾涔夋爣棰�'
	 * });
	 * weui.alert('鑷畾涔夋寜閽殑alert', {
	 *     title: '鑷畾涔夋寜閽殑alert',
	 *     buttons: [{
	 *         label: 'OK',
	 *         type: 'primary',
	 *         onClick: function(){ console.log('ok') }
	 *     }]
	 * });
	 */
	function alert() {
	    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var yes = arguments[1];
	    var options = arguments[2];

	    var type = (typeof yes === 'undefined' ? 'undefined' : _typeof(yes)) === 'object';
	    if (type) {
	        options = yes;
	    }

	    options = _util2.default.extend({
	        content: content,
	        buttons: [{
	            label: '纭畾',
	            type: 'primary',
	            onClick: type ? _util2.default.noop : yes
	        }]
	    }, options);

	    return (0, _dialog2.default)(options);
	}
	exports.default = alert;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _dialog = __webpack_require__(1);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 纭寮圭獥
	 * @param {string} content 寮圭獥鍐呭
	 * @param {function=} yes 鐐瑰嚮纭畾鎸夐挳鐨勫洖璋�
	 * @param {function=} no  鐐瑰嚮鍙栨秷鎸夐挳鐨勫洖璋�
	 * @param {object=} options 閰嶇疆椤�
	 * @param {string=} options.title 寮圭獥鐨勬爣棰�
	 * @param {string=} options.className 鑷畾涔夌被鍚�
	 * @param {array=} options.buttons 鎸夐挳閰嶇疆椤癸紝璇︽儏鍙傝€僤ialog
	 *
	 * @example
	 * weui.confirm('鏅€氱殑confirm');
	 * weui.confirm('鑷畾涔夋爣棰樼殑confirm', { title: '鑷畾涔夋爣棰�' });
	 * weui.confirm('甯﹀洖璋冪殑confirm', function(){ console.log('yes') }, function(){ console.log('no') });
	 * weui.confirm('甯﹀洖璋冪殑鑷畾涔夋爣棰樼殑confirm', function(){ console.log('yes') }, function(){ console.log('no') }, {
	 *     title: '鑷畾涔夋爣棰�'
	 * });
	 * weui.confirm('鑷畾涔夋寜閽殑confirm', {
	 *     title: '鑷畾涔夋寜閽殑confirm',
	 *     buttons: [{
	 *         label: 'NO',
	 *         type: 'default',
	 *         onClick: function(){ console.log('no') }
	 *     }, {
	 *         label: 'YES',
	 *         type: 'primary',
	 *         onClick: function(){ console.log('yes') }
	 *     }]
	 * });
	 */
	function confirm() {
	    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var yes = arguments[1];
	    var no = arguments[2];
	    var options = arguments[3];

	    var type = (typeof yes === 'undefined' ? 'undefined' : _typeof(yes)) === 'object';
	    if (type) {
	        options = yes;
	    }

	    options = _util2.default.extend({
	        content: content,
	        buttons: [{
	            label: '鍙栨秷',
	            type: 'default',
	            onClick: type ? _util2.default.noop : no
	        }, {
	            label: '纭畾',
	            type: 'primary',
	            onClick: type ? _util2.default.noop : yes
	        }]
	    }, options);

	    return (0, _dialog2.default)(options);
	}
	exports.default = confirm;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _toast = __webpack_require__(10);

	var _toast2 = _interopRequireDefault(_toast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _sington = void 0;

	/**
	 * toast 涓€鑸敤浜庢搷浣滄垚鍔熸椂鐨勬彁绀哄満鏅�
	 * @param {string} content toast鐨勬枃瀛�
	 * @param {Object|function=} options 閰嶇疆椤规垨鍥炶皟
	 * @param {number=} [options.duration=3000] 澶氬皯姣鍚庡叧闂璽oast
	 * @param {function=} options.callback 鍏抽棴鍚庣殑鍥炶皟
	 * @param {string=} options.className 鑷畾涔夌被鍚�
	 *
	 * @example
	 * weui.toast('鎿嶄綔鎴愬姛', 3000);
	 * weui.toast('鎿嶄綔鎴愬姛', {
	 *     duration: 3000,
	 *     className: 'custom-classname',
	 *     callback: function(){ console.log('close') }
	 * });
	 */
	function toast() {
	    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (_sington) return _sington;

	    if (typeof options === 'number') {
	        options = {
	            duration: options
	        };
	    }
	    if (typeof options === 'function') {
	        options = {
	            callback: options
	        };
	    }

	    options = _util2.default.extend({
	        content: content,
	        duration: 3000,
	        callback: _util2.default.noop,
	        className: ''
	    }, options);

	    var $toast = (0, _util2.default)(_util2.default.render(_toast2.default, options));
	    (0, _util2.default)('body').append($toast);
	    $toast.addClass('weui-animate-fade-in');

	    setTimeout(function () {
	        $toast.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
	            $toast.remove();
	            _sington = false;
	            options.callback();
	        });
	    }, options.duration);

	    _sington = $toast[0];
	    return $toast[0];
	}
	exports.default = toast;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div class=\"<%= className %>\"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class=\"weui-icon_toast weui-icon-success-no-circle\"></i> <p class=weui-toast__content><%=content%></p> </div> </div> ";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _loading = __webpack_require__(12);

	var _loading2 = _interopRequireDefault(_loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _sington = void 0;

	/**
	 * loading
	 * @param {string} content loading鐨勬枃瀛�
	 * @param {object=} options 閰嶇疆椤�
	 * @param {string=} options.className 鑷畾涔夌被鍚�
	 *
	 * @example
	 * var loading = weui.loading('loading', {
	 *     className: 'custom-classname'
	 * });
	 * setTimeout(function () {
	 *     loading.hide();
	 * }, 3000);
	 */
	function loading() {
	    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (_sington) return _sington;

	    options = _util2.default.extend({
	        content: content,
	        className: ''
	    }, options);

	    var $loading = (0, _util2.default)(_util2.default.render(_loading2.default, options));
	    function hide() {
	        $loading.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
	            $loading.remove();
	            _sington = false;
	        });
	    }
	    (0, _util2.default)('body').append($loading);
	    $loading.addClass('weui-animate-fade-in');

	    _sington = $loading[0];
	    _sington.hide = hide;
	    return _sington;
	}
	exports.default = loading;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui-loading_toast <%= className %>\"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class=\"weui-loading weui-icon_toast\"></i> <p class=weui-toast__content><%=content%></p> </div> </div> ";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _actionSheet = __webpack_require__(14);

	var _actionSheet2 = _interopRequireDefault(_actionSheet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _sington = void 0;

	/**
	 * actionsheet 寮瑰嚭寮忚彍鍗�
	 * @param {array} menus 涓婂眰鐨勯€夐」
	 * @param {string} menus[].label 閫夐」鐨勬枃瀛�
	 * @param {function} menus[].onClick 閫夐」鐐瑰嚮鏃剁殑鍥炶皟
	 *
	 * @param {array} actions 涓嬪眰鐨勯€夐」
	 * @param {string} actions[].label 閫夐」鐨勬枃瀛�
	 * @param {function} actions[].onClick 閫夐」鐐瑰嚮鏃剁殑鍥炶皟
	 *
	 * @param {object=} options 閰嶇疆椤�
	 * @param {string=} options.className 鑷畾涔夌被鍚�
	 *
	 * @example
	 * weui.actionSheet([
	 *     {
	 *         label: '鎷嶇収',
	 *         onClick: function () {
	 *             console.log('鎷嶇収');
	 *         }
	 *     }, {
	 *         label: '浠庣浉鍐岄€夋嫨',
	 *         onClick: function () {
	 *             console.log('浠庣浉鍐岄€夋嫨');
	 *         }
	 *     }, {
	 *         label: '鍏朵粬',
	 *         onClick: function () {
	 *             console.log('鍏朵粬');
	 *         }
	 *     }
	 * ], [
	 *     {
	 *         label: '鍙栨秷',
	 *         onClick: function () {
	 *             console.log('鍙栨秷');
	 *         }
	 *     }
	 * ], {
	 *     className: 'custom-classname'
	 * });
	 */
	function actionSheet() {
	    var menus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var actions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    if (_sington) return _sington;

	    var isAndroid = _util2.default.os.android;
	    options = _util2.default.extend({
	        menus: menus,
	        actions: actions,
	        className: '',
	        isAndroid: isAndroid
	    }, options);
	    var $actionSheetWrap = (0, _util2.default)(_util2.default.render(_actionSheet2.default, options));
	    var $actionSheet = $actionSheetWrap.find('.weui-actionsheet');
	    var $actionSheetMask = $actionSheetWrap.find('.weui-mask');

	    function hide() {
	        $actionSheet.addClass(isAndroid ? 'weui-animate-fade-out' : 'weui-animate-slide-down');
	        $actionSheetMask.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
	            $actionSheetWrap.remove();
	            _sington = false;
	        });
	    }
	    (0, _util2.default)('body').append($actionSheetWrap);

	    // 杩欓噷鑾峰彇涓€涓嬭绠楀悗鐨勬牱寮忥紝寮哄埗瑙﹀彂娓叉煋. fix IOS10涓嬮棯鐜扮殑闂
	    _util2.default.getStyle($actionSheet[0], 'transform');

	    $actionSheet.addClass(isAndroid ? 'weui-animate-fade-in' : 'weui-animate-slide-up');
	    $actionSheetMask.addClass('weui-animate-fade-in').on('click', hide);
	    $actionSheetWrap.find('.weui-actionsheet__menu').on('click', '.weui-actionsheet__cell', function (evt) {
	        var index = (0, _util2.default)(this).index();
	        menus[index].onClick.call(this, evt);
	        hide();
	    });
	    $actionSheetWrap.find('.weui-actionsheet__action').on('click', '.weui-actionsheet__cell', function (evt) {
	        var index = (0, _util2.default)(this).index();
	        actions[index].onClick.call(this, evt);
	        hide();
	    });

	    _sington = $actionSheetWrap[0];
	    _sington.hide = hide;
	    return _sington;
	}
	exports.default = actionSheet;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<div class=\"<% if(isAndroid){ %>weui-skin_android <% } %><%= className %>\"> <div class=weui-mask></div> <div class=weui-actionsheet> <div class=weui-actionsheet__menu> <% for(var i = 0; i < menus.length; i++){ %> <div class=weui-actionsheet__cell><%= menus[i].label %></div> <% } %> </div> <div class=weui-actionsheet__action> <% for(var j = 0; j < actions.length; j++){ %> <div class=weui-actionsheet__cell><%= actions[j].label %></div> <% } %> </div> </div> </div> ";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _topTips = __webpack_require__(16);

	var _topTips2 = _interopRequireDefault(_topTips);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _toptips = null;

	/**
	 * toptips 椤堕儴鎶ラ敊鎻愮ず
	 * @param {string} content 鎶ラ敊鐨勬枃瀛�
	 * @param {number|function|object=} options 澶氬皯姣鍚庢秷澶眧娑堝け鍚庣殑鍥炶皟|閰嶇疆椤�
	 * @param {number=} [options.duration=3000] 澶氬皯姣鍚庢秷澶�
	 * @param {function=} options.callback 娑堝け鍚庣殑鍥炶皟
	 *
	 * @example
	 * weui.topTips('璇峰～鍐欐纭殑瀛楁');
	 * weui.topTips('璇峰～鍐欐纭殑瀛楁', 3000);
	 * weui.topTips('璇峰～鍐欐纭殑瀛楁', function(){ console.log('close') });
	 * weui.topTips('璇峰～鍐欐纭殑瀛楁', {
	 *     duration: 3000,
	 *     className: 'custom-classname',
	 *     callback: function(){ console.log('close') }
	 * });
	 */
	function topTips(content) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (typeof options === 'number') {
	        options = {
	            duration: options
	        };
	    }

	    if (typeof options === 'function') {
	        options = {
	            callback: options
	        };
	    }

	    options = _util2.default.extend({
	        content: content,
	        duration: 3000,
	        callback: _util2.default.noop,
	        className: ''
	    }, options);

	    var $topTips = (0, _util2.default)(_util2.default.render(_topTips2.default, options));
	    function hide() {
	        $topTips.remove();
	        options.callback();
	        _toptips = null;
	    }

	    (0, _util2.default)('body').append($topTips);
	    if (_toptips) {
	        clearTimeout(_toptips.timeout);
	        _toptips.hide();
	    }

	    _toptips = {
	        hide: hide
	    };
	    _toptips.timeout = setTimeout(hide, options.duration);

	    $topTips[0].hide = hide;
	    return $topTips[0];
	}
	exports.default = topTips;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui-toptips weui-toptips_warn <%= className %>\" style=display:block><%= content %></div> ";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * searchbar 鎼滅储妗嗭紝涓昏瀹炵幇鎼滅储妗嗙粍浠朵竴浜涙樉闅愰€昏緫
	 * @param {string} selector searchbar鐨剆elector
	 *
	 * @example
	 * weui.searchBar('#searchBar');
	 */
	function searchBar(selector) {
	    var $eles = (0, _util2.default)(selector);

	    $eles.forEach(function (ele) {
	        var $searchBar = (0, _util2.default)(ele);
	        var $searchLabel = $searchBar.find('.weui-search-bar__label');
	        var $searchInput = $searchBar.find('.weui-search-bar__input');
	        var $searchClear = $searchBar.find('.weui-icon-clear');
	        var $searchCancel = $searchBar.find('.weui-search-bar__cancel-btn');

	        function cancelSearch() {
	            $searchInput.val('');
	            $searchBar.removeClass('weui-search-bar_focusing');
	        }

	        $searchLabel.on('click', function () {
	            $searchBar.addClass('weui-search-bar_focusing');
	            $searchInput[0].focus();
	        });
	        $searchInput.on('blur', function () {
	            if (!this.value.length) cancelSearch();
	        });
	        $searchClear.on('click', function () {
	            $searchInput.val('');
	            $searchInput[0].focus();
	        });
	        $searchCancel.on('click', function () {
	            cancelSearch();
	            $searchInput[0].blur();
	        });
	    });

	    return $eles;
	}
	exports.default = searchBar;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * tab tab瀵艰埅鏍�
	 * @param {string} selector tab鐨剆elector
	 * @param {object=} options 閰嶇疆椤�
	 * @param {number=} [options.defaultIndex=0] 鍒濆灞曠ず鐨刬ndex
	 * @param {function=} options.onChange 鐐瑰嚮tab鏃讹紝杩斿洖瀵瑰簲鐨刬ndex
	 *
	 * @example
	 * weui.tab('#tab',{
	 *     defaultIndex: 0,
	 *     onChange: function(index){
	 *         console.log(index);
	 *     }
	 * });
	 */
	function tab(selector) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var $eles = (0, _util2.default)(selector);
	    options = _util2.default.extend({
	        defaultIndex: 0,
	        onChange: _util2.default.noop
	    }, options);

	    $eles.forEach(function (ele) {
	        var $tab = (0, _util2.default)(ele);
	        var $tabItems = $tab.find('.weui-navbar__item, .weui-tabbar__item');
	        var $tabContents = $tab.find('.weui-tab__content');

	        $tabItems.eq(options.defaultIndex).addClass('weui-bar__item_on');
	        $tabContents.eq(options.defaultIndex).show();

	        $tabItems.on('click', function () {
	            var $this = (0, _util2.default)(this),
	                index = $this.index();

	            $tabItems.removeClass('weui-bar__item_on');
	            $this.addClass('weui-bar__item_on');

	            $tabContents.hide();
	            $tabContents.eq(index).show();

	            options.onChange.call(this, index);
	        });
	    });

	    return this;
	}
	exports.default = tab;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _topTips = __webpack_require__(15);

	var _topTips2 = _interopRequireDefault(_topTips);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _findCellParent(ele) {
	    if (!ele || !ele.classList) return null;
	    if (ele.classList.contains('weui-cell')) return ele;
	    return _findCellParent(ele.parentNode);
	}
	function _validate($input, $form, regexp) {
	    var input = $input[0],
	        val = $input.val();

	    if (input.tagName == 'INPUT' || input.tagName == 'TEXTAREA') {
	        var reg = input.getAttribute('required') || input.getAttribute('pattern') || '';

	        if (input.type == 'radio') {
	            var radioInputs = $form.find('input[type="radio"][name="' + input.name + '"]');
	            for (var i = 0, len = radioInputs.length; i < len; ++i) {
	                if (radioInputs[i].checked) return null;
	            }
	            return 'empty';
	        } else if (input.type == 'checkbox') {
	            if (reg) {
	                var _ret = function () {
	                    var checkboxInputs = $form.find('input[type="checkbox"][name="' + input.name + '"]');
	                    var regs = reg.replace(/[{\s}]/g, '').split(',');
	                    var count = 0;

	                    if (regs.length != 2) {
	                        throw input.outerHTML + ' regexp is wrong.';
	                    }

	                    checkboxInputs.forEach(function (checkboxInput) {
	                        if (checkboxInput.checked) ++count;
	                    });

	                    if (!count) return {
	                            v: 'empty'
	                        };

	                    if (regs[1] === '') {
	                        // {0,}
	                        if (count >= parseInt(regs[0])) {
	                            return {
	                                v: null
	                            };
	                        } else {
	                            return {
	                                v: 'notMatch'
	                            };
	                        }
	                    } else {
	                        // {0,2}
	                        if (parseInt(regs[0]) <= count && count <= parseInt(regs[1])) {
	                            return {
	                                v: null
	                            };
	                        } else {
	                            return {
	                                v: 'notMatch'
	                            };
	                        }
	                    }
	                }();

	                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	            } else {
	                return input.checked ? null : 'empty';
	            }
	        } else if (!$input.val().length) {
	            return 'empty';
	        } else if (reg) {
	            if (/^REG_/.test(reg)) {
	                if (!regexp) throw 'RegExp ' + reg + ' is empty.';

	                reg = reg.replace(/^REG_/, '');
	                if (!regexp[reg]) throw 'RegExp ' + reg + ' has not found.';

	                reg = regexp[reg];
	            }
	            return new RegExp(reg).test(val) ? null : 'notMatch';
	        } else {
	            return null;
	        }
	    } else if (val.length) {
	        // 鏈夎緭鍏ュ€�
	        return null;
	    }

	    return 'empty';
	}
	function _showErrorMsg(error) {
	    if (error) {
	        var $ele = (0, _util2.default)(error.ele),
	            msg = error.msg,
	            tips = $ele.attr(msg + 'Tips') || $ele.attr('tips') || $ele.attr('placeholder');
	        if (tips) (0, _topTips2.default)(tips);

	        if (error.ele.type == 'checkbox' || error.ele.type == 'radio') return;

	        var cellParent = _findCellParent(error.ele);
	        if (cellParent) cellParent.classList.add('weui-cell_warn');
	    }
	}

	/**
	 * 琛ㄥ崟鏍￠獙
	 * @param {string} selector 琛ㄥ崟鐨剆elector
	 * @param {function} callback 鏍￠獙鍚庣殑鍥炶皟
	 * @param {Object=} options 閰嶇疆椤�
	 * @param {object=} options.regexp 琛ㄥ崟鎵€闇€鐨勬鍒欒〃杈惧紡
	 *
	 * @example
	 * ##### 鏅€歩nput鐨凥TML
	 * ```html
	 * <input type="tel" required pattern="[0-9]{11}" placeholder="杈撳叆浣犵幇鍦ㄧ殑鎵嬫満鍙�" emptyTips="璇疯緭鍏ユ墜鏈哄彿" notMatchTips="璇疯緭鍏ユ纭殑鎵嬫満鍙�">
	 * <input type="text" required pattern="REG_IDNUM" placeholder="杈撳叆浣犵殑韬唤璇佸彿鐮�" emptyTips="璇疯緭鍏ヨ韩浠借瘉鍙风爜" notMatchTips="璇疯緭鍏ユ纭殑韬唤璇佸彿鐮�">
	 * ```
	 * - required 琛ㄧず闇€瑕佹牎楠�
	 * - pattern 琛ㄧず鏍￠獙鐨勬鍒欙紝涓嶅～鍒欒繘琛屼负绌烘牎楠屻€傚綋浠EG_寮€澶存椂锛屽垯鑾峰彇鏍￠獙鏃朵紶鍏ョ殑姝ｅ垯銆傚`pattern="REG_IDNUM"`锛屽垯闇€瑕佸湪璋冪敤鐩稿簲鏂规硶鏃朵紶鍏{regexp:{IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/}}`锛岃鎯呰鐪嬩笅闈checkIfBlur`鍜宍validate`
	 * - 鎶ラ敊鐨剋ording浼氫粠 emptyTips | notMatchTips | tips | placeholder 閲岃幏寰�
	 * <br>
	 *
	 * ##### radio
	 * radio闇€瑕佹楠岋紝鍙渶鎶婂弬鏁板啓鍦ㄥ悓涓€琛ㄥ崟涓嬶紝鍚宯ame鐨勭涓€涓厓绱犲嵆鍙€�
	 * ```html
	 * <input type="radio" value="male" name="sex" required tips="璇烽€夋嫨鎬у埆" />
	 * <input type="radio" value="female" name="sex" />
	 * ```
	 * <br>
	 *
	 * ##### checkbox
	 * checkbox闇€瑕佹牎楠岋紝鍙渶鎶婂弬鏁板啓鍦ㄥ悓涓€琛ㄥ崟涓嬶紝鍚宯ame鐨勭涓€涓厓绱犲嵆鍙€�
	 * pattern 瑙勫畾閫夋嫨涓暟锛岀敤娉曚笌姝ｅ垯涓€鑷达紝渚嬪锛�
	 * ```html
	 * <input type="checkbox" name="assistance" value="榛勮嵂甯�" required pattern="{1,2}" tips="璇峰嬀閫�1-2涓暡鐮佸姪鎵�" />
	 * <input type="checkbox" name="assistance" value="娆ч槼閿�" />
	 * <input type="checkbox" name="assistance" value="娈垫櫤鍏�" />
	 * <input type="checkbox" name="assistance" value="娲竷鍏�" />
	 * ```
	 * - {1,}   鑷冲皯閫夋嫨1涓�
	 * - {1,2}  閫夋嫨1-2涓�
	 * - 杩欓噷涓嶄細鍑虹幇{0,}杩欑鎯呭喌锛屽洜涓烘湁required灏辫〃绀哄繀閫夈€傚惁鍒欑洿鎺ュ幓鎺塺equired鍗冲彲銆�
	 * <br>
	 *
	 * ``` js
	 * // weui.form.validate('#form', function(error){ console.log(error);}); // error: {dom:[Object], msg:[String]}
	 * weui.form.validate('#form', function (error) {
	 *     if (!error) {
	 *         var loading = weui.loading('鎻愪氦涓�...');
	 *         setTimeout(function () {
	 *             loading.hide();
	 *             weui.toast('鎻愪氦鎴愬姛', 3000);
	 *         }, 1500);
	 *     }
	 *     // return true; // 褰搑eturn true鏃讹紝涓嶄細鏄剧ず閿欒
	 * }, {
	 *     regexp: {
	 *         IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
	 *         VCODE: /^.{4}$/
	 *     }
	 * });
	 * ```
	 */
	function validate(selector) {
	    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util2.default.noop;
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    var $eles = (0, _util2.default)(selector);

	    $eles.forEach(function (ele) {
	        var $form = (0, _util2.default)(ele);
	        var $requireds = $form.find('[required]');
	        if (typeof callback != 'function') callback = _showErrorMsg;

	        for (var i = 0, len = $requireds.length; i < len; ++i) {
	            var $required = $requireds.eq(i),
	                errorMsg = _validate($required, $form, options.regexp),
	                error = { ele: $required[0], msg: errorMsg };
	            if (errorMsg) {
	                if (!callback(error)) _showErrorMsg(error);
	                return;
	            }
	        }
	        callback(null);
	    });

	    return this;
	}

	/**
	 * checkIfBlur 褰撹〃鍗曠殑input澶卞幓鐒︾偣鏃舵牎楠�
	 * @param {string} selector 琛ㄥ崟鐨剆elector
	 * @param {Object=} options 閰嶇疆椤�
	 * @param {object=} options.regexp 琛ㄥ崟鎵€闇€鐨勬鍒欒〃杈惧紡
	 *
	 * @example
	 * weui.form.checkIfBlur('#form', {
	 *     regexp: {
	 *         IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
	 *         VCODE: /^.{4}$/
	 *     }
	 * });
	 */
	function checkIfBlur(selector) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var $eles = (0, _util2.default)(selector);

	    $eles.forEach(function (ele) {
	        var $form = (0, _util2.default)(ele);
	        $form.find('[required]').on('blur', function () {
	            // checkbox 鍜� radio 涓嶅仛blur妫€娴嬶紝浠ュ厤璇Е鍙�
	            if (this.type == 'checkbox' || this.type == 'radio') return;

	            var $this = (0, _util2.default)(this);
	            if ($this.val().length < 1) return; // 褰撶┖鐨勬椂鍊欎笉鏍￠獙锛屼互闃蹭笉鏂脊鍑簍optips

	            var errorMsg = _validate($this, $form, options.regexp);
	            if (errorMsg) {
	                _showErrorMsg({
	                    ele: $this[0],
	                    msg: errorMsg
	                });
	            }
	        }).on('focus', function () {
	            var cellParent = _findCellParent(this);
	            if (cellParent) cellParent.classList.remove('weui-cell_warn');
	        });
	    });

	    return this;
	}

	exports.default = {
	    validate: validate,
	    checkIfBlur: checkIfBlur
	};
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _item = __webpack_require__(21);

	var _item2 = _interopRequireDefault(_item);

	var _image = __webpack_require__(22);

	var _upload = __webpack_require__(23);

	var _upload2 = _interopRequireDefault(_upload);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _id = 0;

	/**
	 * uploader 涓婁紶缁勪欢
	 * @param {string} selector 涓婁紶缁勪欢鐨剆elector
	 * @param {object} options 閰嶇疆椤�
	 * @param {string} [options.url] 涓婁紶鐨剈rl锛岃繑鍥炲€奸渶瑕佷娇鐢╦son鏍煎紡
	 * @param {boolean} [options.auto=true] 璁剧疆涓篳true`鍚庯紝涓嶉渶瑕佹墜鍔ㄨ皟鐢ㄤ笂浼狅紝鏈夋枃浠堕€夋嫨鍗冲紑濮嬩笂浼犮€傜敤this.upload()鏉ヤ笂浼狅紝璇︽儏璇风湅example
	 * @param {string} [options.type='file'] 涓婁紶绫诲瀷, `file`涓烘枃浠朵笂浼�; `base64`涓轰互base64涓婁紶
	 * @param {string=} [options.fileVal=file] 鏂囦欢涓婁紶鍩熺殑name
	 * @param {object=} [options.compress] 鍘嬬缉閰嶇疆, `false`鍒欎笉鍘嬬缉
	 * @param {number=} [options.compress.width=1600] 鍥剧墖鐨勬渶澶у搴�
	 * @param {number=} [options.compress.height=1600] 鍥剧墖鐨勬渶澶ч珮搴�
	 * @param {number=} [options.compress.quality=.8] 鍘嬬缉璐ㄩ噺, 鍙栧€艰寖鍥� 0 ~ 1
	 * @param {function=} [options.onBeforeQueued] 鏂囦欢娣诲姞鍓嶇殑鍥炶皟锛宺eturn false鍒欎笉娣诲姞
	 * @param {function=} [options.onQueued] 鏂囦欢娣诲姞鎴愬姛鐨勫洖璋�
	 * @param {function=} [options.onBeforeSend] 鏂囦欢涓婁紶鍓嶈皟鐢紝鍏蜂綋鍙傛暟鐪媏xample
	 * @param {function=} [options.onSuccess] 涓婁紶鎴愬姛鐨勫洖璋�
	 * @param {function=} [options.onProgress] 涓婁紶杩涘害鐨勫洖璋�
	 * @param {function=} [options.onError] 涓婁紶澶辫触鐨勫洖璋�
	 *
	 * @example
	 * var uploadCount = 0;
	 * weui.uploader('#uploader', {
	 *    url: 'http://localhost:8081',
	 *    auto: true,
	 *    type: 'file',
	 *    fileVal: 'fileVal',
	 *    compress: {
	 *        width: 1600,
	 *        height: 1600,
	 *        quality: .8
	 *    },
	 *    onBeforeQueued: function(files) {
	 *        // `this` 鏄疆璇㈠埌鐨勬枃浠�, `files` 鏄墍鏈夋枃浠�
	 *
	 *        if(["image/jpg", "image/jpeg", "image/png", "image/gif"].indexOf(this.type) < 0){
	 *            weui.alert('璇蜂笂浼犲浘鐗�');
	 *            return false; // 闃绘鏂囦欢娣诲姞
	 *        }
	 *        if(this.size > 10 * 1024 * 1024){
	 *            weui.alert('璇蜂笂浼犱笉瓒呰繃10M鐨勫浘鐗�');
	 *            return false;
	 *        }
	 *        if (files.length > 5) { // 闃叉涓€涓嬪瓙閫夋嫨杩囧鏂囦欢
	 *            weui.alert('鏈€澶氬彧鑳戒笂浼�5寮犲浘鐗囷紝璇烽噸鏂伴€夋嫨');
	 *            return false;
	 *        }
	 *        if (uploadCount + 1 > 5) {
	 *            weui.alert('鏈€澶氬彧鑳戒笂浼�5寮犲浘鐗�');
	 *            return false;
	 *        }
	 *
	 *        ++uploadCount;
	 *
	 *        // return true; // 闃绘榛樿琛屼负锛屼笉鎻掑叆棰勮鍥剧殑妗嗘灦
	 *    },
	 *    onQueued: function(){
	 *        console.log(this);
	 *        // console.log(this.base64); // 濡傛灉鏄痓ase64涓婁紶锛宖ile.base64鍙互鑾峰緱鏂囦欢鐨刡ase64
	 *
	 *        // this.upload(); // 濡傛灉鏄墜鍔ㄤ笂浼狅紝杩欓噷鍙互閫氳繃璋冪敤upload鏉ュ疄鐜�
	 *
	 *        // return true; // 闃绘榛樿琛屼负锛屼笉鏄剧ず棰勮鍥剧殑鍥惧儚
	 *    },
	 *    onBeforeSend: function(data, headers){
	 *        console.log(this, data, headers);
	 *        // $.extend(data, { test: 1 }); // 鍙互鎵╁睍姝ゅ璞℃潵鎺у埗涓婁紶鍙傛暟
	 *        // $.extend(headers, { Origin: 'http://127.0.0.1' }); // 鍙互鎵╁睍姝ゅ璞℃潵鎺у埗涓婁紶澶撮儴
	 *
	 *        // return false; // 闃绘鏂囦欢涓婁紶
	 *    },
	 *    onProgress: function(procent){
	 *        console.log(this, procent);
	 *        // return true; // 闃绘榛樿琛屼负锛屼笉浣跨敤榛樿鐨勮繘搴︽樉绀�
	 *    },
	 *    onSuccess: function (ret) {
	 *        console.log(this, ret);
	 *        // return true; // 闃绘榛樿琛屼负锛屼笉浣跨敤榛樿鐨勬垚鍔熸€�
	 *    },
	 *    onError: function(err){
	 *        console.log(this, err);
	 *        // return true; // 闃绘榛樿琛屼负锛屼笉浣跨敤榛樿鐨勫け璐ユ€�
	 *    }
	 * });
	 */
	function uploader(selector, options) {
	    var $uploader = (0, _util2.default)(selector);
	    var URL = window.URL || window.webkitURL || window.mozURL;

	    // 鎵惧埌DOM閲宖ile-content锛岃嫢鏃狅紝鍒欐彃鍏ヤ竴涓€�
	    function findFileCtn($uploader, id) {
	        var $file = $uploader.find('[data-id="' + id + '"]');
	        var $fileCtn = $file.find('.weui-uploader__file-content');

	        if (!$fileCtn.length) {
	            $fileCtn = (0, _util2.default)('<div class="weui-uploader__file-content"></div>');
	            $file.append($fileCtn);
	        }
	        $file.addClass('weui-uploader__file_status');
	        return $fileCtn;
	    }

	    // 娓呴櫎DOM閲岀殑涓婁紶鐘舵€�
	    function clearFileStatus($uploader, id) {
	        var $file = $uploader.find('[data-id="' + id + '"]').removeClass('weui-uploader__file_status');
	        $file.find('.weui-uploader__file-content').remove();
	    }

	    // 璁剧疆涓婁紶
	    function setUploadFile(file) {
	        file.url = URL.createObjectURL(file);
	        file.upload = function () {
	            (0, _upload2.default)(_util2.default.extend({
	                $uploader: $uploader,
	                file: file
	            }, options));
	        };

	        options.onQueued(file);
	        if (options.auto) file.upload();
	    }

	    options = _util2.default.extend({
	        url: '',
	        auto: true,
	        type: 'file',
	        fileVal: 'file',
	        onBeforeQueued: _util2.default.noop,
	        onQueued: _util2.default.noop,
	        onBeforeSend: _util2.default.noop,
	        onSuccess: _util2.default.noop,
	        onProgress: _util2.default.noop,
	        onError: _util2.default.noop
	    }, options);

	    if (options.compress !== false) {
	        options.compress = _util2.default.extend({
	            width: 1600,
	            height: 1600,
	            quality: .8
	        }, options.compress);
	    }

	    if (options.onBeforeQueued) {
	        (function () {
	            var onBeforeQueued = options.onBeforeQueued;
	            options.onBeforeQueued = function (file, files) {
	                var ret = onBeforeQueued.call(file, files);
	                if (ret === false) {
	                    return false;
	                }
	                if (ret === true) {
	                    return;
	                }

	                var $item = (0, _util2.default)(_util2.default.render(_item2.default, {
	                    id: file.id
	                }));
	                $uploader.find('.weui-uploader__files').append($item);
	            };
	        })();
	    }
	    if (options.onQueued) {
	        (function () {
	            var onQueued = options.onQueued;
	            options.onQueued = function (file) {
	                if (!onQueued.call(file)) {
	                    var $file = $uploader.find('[data-id="' + file.id + '"]');
	                    $file.css({
	                        backgroundImage: 'url("' + (file.base64 || file.url) + '")'
	                    });
	                    if (!options.auto) {
	                        clearFileStatus($uploader, file.id);
	                    }
	                }
	            };
	        })();
	    }
	    if (options.onBeforeSend) {
	        (function () {
	            var onBeforeSend = options.onBeforeSend;
	            options.onBeforeSend = function (file, data, headers) {
	                var ret = onBeforeSend.call(file, data, headers);
	                if (ret === false) {
	                    return false;
	                }
	            };
	        })();
	    }
	    if (options.onSuccess) {
	        (function () {
	            var onSuccess = options.onSuccess;
	            options.onSuccess = function (file, ret) {
	                if (!onSuccess.call(file, ret)) {
	                    clearFileStatus($uploader, file.id);
	                }
	            };
	        })();
	    }
	    if (options.onProgress) {
	        (function () {
	            var onProgress = options.onProgress;
	            options.onProgress = function (file, percent) {
	                if (!onProgress.call(file, percent)) {
	                    findFileCtn($uploader, file.id).html(percent + '%');
	                }
	            };
	        })();
	    }
	    if (options.onError) {
	        (function () {
	            var onError = options.onError;
	            options.onError = function (file, err) {
	                if (!onError.call(file, err)) {
	                    findFileCtn($uploader, file.id).html('<i class="weui-icon-warn"></i>');
	                }
	            };
	        })();
	    }

	    $uploader.find('input[type="file"]').on('change', function (evt) {
	        var files = evt.target.files;

	        if (files.length === 0) {
	            return;
	        }

	        if (options.compress === false && options.type == 'file') {
	            // 浠ュ師鏂囦欢鏂瑰紡涓婁紶
	            Array.prototype.forEach.call(files, function (file) {
	                file.id = ++_id;

	                if (options.onBeforeQueued(file, files) === false) return;

	                setUploadFile(file);
	            });
	        } else {
	            // base64涓婁紶 鍜� 鍘嬬缉涓婁紶
	            Array.prototype.forEach.call(files, function (file) {
	                file.id = ++_id;

	                if (options.onBeforeQueued(file, files) === false) return;

	                (0, _image.compress)(file, options, function (blob) {
	                    if (blob) setUploadFile(blob);
	                });
	            });
	        }

	        this.value = '';
	    });
	}
	exports.default = uploader;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<li class=\"weui-uploader__file weui-uploader__file_status\" data-id=\"<%= id %>\"> <div class=weui-uploader__file-content> <i class=weui-loading style=width:30px;height:30px></i> </div> </li> ";

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.detectVerticalSquash = detectVerticalSquash;
	exports.dataURItoBlob = dataURItoBlob;
	exports.compress = compress;
	/**
	 * 妫€鏌ュ浘鐗囨槸鍚︽湁琚帇鎵侊紝濡傛灉鏈夛紝杩斿洖姣旂巼
	 */
	function detectVerticalSquash(img) {
	    // 鎷嶇収鍦↖OS7鎴栦互涓嬬殑鏈哄瀷浼氬嚭鐜扮収鐗囪鍘嬫墎鐨刡ug
	    var data;
	    var ih = img.naturalHeight;
	    var canvas = document.createElement('canvas');
	    canvas.width = 1;
	    canvas.height = ih;
	    var ctx = canvas.getContext('2d');
	    ctx.drawImage(img, 0, 0);
	    try {
	        data = ctx.getImageData(0, 0, 1, ih).data;
	    } catch (err) {
	        console.log('Cannot check verticalSquash: CORS?');
	        return 1;
	    }
	    var sy = 0;
	    var ey = ih;
	    var py = ih;
	    while (py > sy) {
	        var alpha = data[(py - 1) * 4 + 3];
	        if (alpha === 0) {
	            ey = py;
	        } else {
	            sy = py;
	        }
	        py = ey + sy >> 1; // py = parseInt((ey + sy) / 2)
	    }
	    var ratio = py / ih;
	    return ratio === 0 ? 1 : ratio;
	}

	/**
	 * dataURI to blob, ref to https://gist.github.com/fupslot/5015897
	 * @param dataURI
	 */
	function dataURItoBlob(dataURI) {
	    var byteString = atob(dataURI.split(',')[1]);
	    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
	    var ab = new ArrayBuffer(byteString.length);
	    var ia = new Uint8Array(ab);
	    for (var i = 0; i < byteString.length; i++) {
	        ia[i] = byteString.charCodeAt(i);
	    }
	    return new Blob([ab], { type: mimeString });
	}

	/**
	 * 鍘嬬缉鍥剧墖
	 */
	function compress(file, options, callback) {
	    var reader = new FileReader();
	    reader.onload = function (evt) {
	        if (options.compress === false) {
	            // 涓嶅惎鐢ㄥ帇缂� & base64涓婁紶 鐨勫垎鏀�
	            file.base64 = evt.target.result;
	            callback(file);
	            return;
	        }

	        // 鍚敤鍘嬬缉鐨勫垎鏀�
	        var img = new Image();
	        img.onload = function () {
	            var ratio = detectVerticalSquash(img);
	            var canvas = document.createElement('canvas');
	            var ctx = canvas.getContext('2d');

	            var maxW = options.compress.width;
	            var maxH = options.compress.height;
	            var w = img.width;
	            var h = img.height;
	            var dataURL = void 0;

	            if (w < h && h > maxH) {
	                w = parseInt(maxH * img.width / img.height);
	                h = maxH;
	            } else if (w >= h && w > maxW) {
	                h = parseInt(maxW * img.height / img.width);
	                w = maxW;
	            }

	            canvas.width = w;
	            canvas.height = h;

	            ctx.drawImage(img, 0, 0, w, h / ratio);

	            if (/image\/jpeg/.test(file.type) || /image\/jpg/.test(file.type)) {
	                dataURL = canvas.toDataURL('image/jpeg', options.compress.quality);
	            } else {
	                dataURL = canvas.toDataURL(file.type);
	            }

	            if (options.type == 'file') {
	                if (/;base64,null/.test(dataURL) || /;base64,$/.test(dataURL)) {
	                    // 鍘嬬缉鍑洪敊锛屼互鏂囦欢鏂瑰紡涓婁紶鐨勶紝閲囩敤鍘熸枃浠朵笂浼�
	                    console.warn('Compress fail, dataURL is ' + dataURL + '. Next will use origin file to upload.');
	                    callback(file);
	                } else {
	                    var blob = dataURItoBlob(dataURL);
	                    blob.id = file.id;
	                    blob.name = file.name;
	                    blob.lastModified = file.lastModified;
	                    blob.lastModifiedDate = file.lastModifiedDate;
	                    callback(blob);
	                }
	            } else {
	                if (/;base64,null/.test(dataURL) || /;base64,$/.test(dataURL)) {
	                    // 鍘嬬缉澶辫触锛屼互base64涓婁紶鐨勶紝鐩存帴鎶ラ敊涓嶄笂浼�
	                    options.onError(file, new Error('Compress fail, dataURL is ' + dataURL + '.'));
	                    callback();
	                } else {
	                    file.base64 = dataURL;
	                    callback(file);
	                }
	            }
	        };
	        img.src = evt.target.result;
	    };
	    reader.readAsDataURL(file);
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = upload;
	function upload(options) {
	    var url = options.url,
	        file = options.file,
	        fileVal = options.fileVal,
	        onBeforeSend = options.onBeforeSend,
	        onProgress = options.onProgress,
	        onError = options.onError,
	        onSuccess = options.onSuccess;
	    var name = file.name,
	        type = file.type,
	        lastModifiedDate = file.lastModifiedDate;

	    var data = {
	        name: name,
	        type: type,
	        size: options.type == 'file' ? file.size : file.base64.length,
	        lastModifiedDate: lastModifiedDate
	    };
	    var headers = {};

	    if (onBeforeSend(file, data, headers) === false) return;

	    onProgress(file, 0);

	    var formData = new FormData();
	    var xhr = new XMLHttpRequest();

	    file.xhr = xhr;

	    // 璁剧疆鍙傛暟
	    Object.keys(data).forEach(function (key) {
	        formData.append(key, data[key]);
	    });
	    if (options.type == 'file') {
	        formData.append(fileVal, file, name);
	    } else {
	        formData.append(fileVal, file.base64);
	    }

	    xhr.onreadystatechange = function () {
	        if (xhr.readyState == 4) {
	            if (xhr.status == 200) {
	                try {
	                    // 鍙敮鎸乯son
	                    var ret = JSON.parse(xhr.responseText);
	                    onSuccess(file, ret);
	                } catch (err) {
	                    onError(file, err);
	                }
	            } else {
	                onError(file, new Error('XMLHttpRequest response status is ' + xhr.status));
	            }
	        }
	    };
	    xhr.upload.addEventListener('progress', function (evt) {
	        if (evt.total == 0) return;

	        var percent = Math.ceil(evt.loaded / evt.total) * 100;

	        onProgress(file, percent);
	    }, false);

	    xhr.open('POST', url);

	    // 璁剧疆澶撮儴淇℃伅
	    Object.keys(headers).forEach(function (key) {
	        xhr.setRequestHeader(key, headers[key]);
	    });

	    xhr.send(formData);
	}
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	__webpack_require__(25);

	var _util3 = __webpack_require__(26);

	var util = _interopRequireWildcard(_util3);

	var _picker = __webpack_require__(27);

	var _picker2 = _interopRequireDefault(_picker);

	var _group = __webpack_require__(28);

	var _group2 = _interopRequireDefault(_group);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _sington = void 0;

	var destroy = function destroy($picker) {
	    if ($picker) {
	        $picker.remove();
	        _sington = false;
	    }
	};

	var show = function show($picker) {
	    (0, _util2.default)('body').append($picker);

	    // 杩欓噷鑾峰彇涓€涓嬭绠楀悗鐨勬牱寮忥紝寮哄埗瑙﹀彂娓叉煋. fix IOS10涓嬮棯鐜扮殑闂
	    _util2.default.getStyle($picker[0], 'transform');

	    $picker.find('.weui-mask').addClass('weui-animate-fade-in');
	    $picker.find('.weui-picker').addClass('weui-animate-slide-up');
	};

	var hide = function hide($picker) {
	    $picker.find('.weui-mask').addClass('weui-animate-fade-out');
	    $picker.find('.weui-picker').addClass('weui-animate-slide-down').on('animationend webkitAnimationEnd', function () {
	        destroy($picker);
	    });
	};

	// temp 瀛樺湪涓婁竴娆℃粦鍔ㄧ殑浣嶇疆
	var temp = {};

	/**
	 * picker 澶氬垪閫夋嫨鍣ㄣ€�
	 * @param {array} items picker鐨勬暟鎹紝鍗崇敤浜庣敓鎴恜icker鐨勬暟鎹紝picker鐨勫眰绾у彲浠ヨ嚜宸卞畾涔夛紝浣嗗缓璁渶澶氫笁灞傘€傛暟鎹牸寮忓弬鑰僥xample銆�
	 * @param {Object} options 閰嶇疆椤�
	 * @param {number=} [options.depth] picker娣卞害(涔熷氨鏄痯icker鏈夊灏戝垪) 鍙栧€间负1-3銆傚鏋滀负绌猴紝鍒欏彇items绗竴椤圭殑娣卞害銆�
	 * @param {string=} [options.id=default] 浣滀负picker鐨勫敮涓€鏍囪瘑
	 * @param {string=} [options.className] 鑷畾涔夌被鍚�
	 * @param {array=} [options.defaultValue] 榛樿閫夐」鐨剉alue鏁扮粍
	 * @param {function=} [options.onChange] 鍦╬icker閫変腑鐨勫€煎彂鐢熷彉鍖栫殑鏃跺€欏洖璋�
	 * @param {function=} [options.onConfirm] 鍦ㄧ偣鍑�"纭畾"涔嬪悗鐨勫洖璋冦€傚洖璋冭繑鍥為€変腑鐨勭粨鏋�(Array)锛屾暟缁勯暱搴︿緷璧栦簬picker鐨勫眰绾с€�
	 *
	 * @example
	 * // 鍗曞垪picker
	 * weui.picker([
	 * {
	 *     label: '椋炴満绁�',
	 *     value: 0,
	 *     disabled: true // 涓嶅彲鐢�
	 * },
	 * {
	 *     label: '鐏溅绁�',
	 *     value: 1
	 * },
	 * {
	 *     label: '姹借溅绁�',
	 *     value: 3
	 * },
	 * {
	 *     label: '鍏溅绁�',
	 *     value: 4,
	 * }
	 * ], {
	 *    className: 'custom-classname',
	 *    defaultValue: [3],
	 *    onChange: function (result) {
	 *        console.log(result)
	 *    },
	 *    onConfirm: function (result) {
	 *        console.log(result)
	 *    },
	 *    id: 'singleLinePicker'
	 * });
	 *
	 * @example
	 * // 澶氬垪picker
	 * weui.picker([
	 *     {
	 *         label: '1',
	 *         value: '1'
	 *     }, {
	 *         label: '2',
	 *         value: '2'
	 *     }, {
	 *         label: '3',
	 *         value: '3'
	 *     }
	 * ], [
	 *     {
	 *         label: 'A',
	 *         value: 'A'
	 *     }, {
	 *         label: 'B',
	 *         value: 'B'
	 *     }, {
	 *         label: 'C',
	 *         value: 'C'
	 *     }
	 * ], {
	 *     defaultValue: ['3', 'A'],
	 *     onChange: function (result) {
	 *         console.log(result);
	 *     },
	 *     onConfirm: function (result) {
	 *         console.log(result);
	 *     },
	 *     id: 'multiPickerBtn'
	 * });
	 *
	 * @example
	 * // 绾ц仈picker
	 * weui.picker([
	 * {
	 *     label: '椋炴満绁�',
	 *     value: 0,
	 *     children: [
	 *         {
	 *             label: '缁忔祹鑸�',
	 *             value: 1
	 *         },
	 *         {
	 *             label: '鍟嗗姟鑸�',
	 *             value: 2
	 *         }
	 *     ]
	 * },
	 * {
	 *     label: '鐏溅绁�',
	 *     value: 1,
	 *     children: [
	 *         {
	 *             label: '鍗ч摵',
	 *             value: 1,
	 *             disabled: true // 涓嶅彲鐢�
	 *         },
	 *         {
	 *             label: '鍧愮エ',
	 *             value: 2
	 *         },
	 *         {
	 *             label: '绔欑エ',
	 *             value: 3
	 *         }
	 *     ]
	 * },
	 * {
	 *     label: '姹借溅绁�',
	 *     value: 3,
	 *     children: [
	 *         {
	 *             label: '蹇彮',
	 *             value: 1
	 *         },
	 *         {
	 *             label: '鏅€�',
	 *             value: 2
	 *         }
	 *     ]
	 * }
	 * ], {
	 *    className: 'custom-classname',
	 *    defaultValue: [1, 3],
	 *    onChange: function (result) {
	 *        console.log(result)
	 *    },
	 *    onConfirm: function (result) {
	 *        console.log(result)
	 *    },
	 *    id: 'doubleLinePicker'
	 * });
	 */
	function picker() {
	    if (_sington) return _sington;

	    var isMulti = false; // 鏄惁澶氬垪鐨勭被鍨�

	    // 鏁版嵁
	    var items = void 0;
	    if (arguments.length > 2) {
	        var i = 0;
	        items = [];
	        while (i < arguments.length - 1) {
	            items.push(arguments[i++]);
	        }
	        isMulti = true;
	    } else {
	        items = arguments[0];
	    }

	    // 閰嶇疆椤�
	    var options = arguments[arguments.length - 1];
	    var defaults = _util2.default.extend({
	        id: 'default',
	        className: '',
	        onChange: _util2.default.noop,
	        onConfirm: _util2.default.noop
	    }, options);

	    // 鑾峰彇缂撳瓨
	    temp[defaults.id] = temp[defaults.id] || [];
	    var result = [];
	    var lineTemp = temp[defaults.id];
	    var $picker = (0, _util2.default)(_util2.default.render(_picker2.default, defaults));
	    var depth = options.depth || (isMulti ? items.length : util.depthOf(items[0])),
	        groups = '';

	    while (depth--) {
	        groups += _group2.default;
	    }

	    $picker.find('.weui-picker__bd').html(groups);
	    show($picker);

	    // 鍒濆鍖栨粴鍔�
	    function scroll(items, level) {
	        if (lineTemp[level] === undefined && defaults.defaultValue && defaults.defaultValue[level] !== undefined) {
	            // 娌℃湁缂撳瓨閫夐」锛岃€屼笖瀛樺湪defaultValue
	            var defaultVal = defaults.defaultValue[level];
	            var index = 0,
	                len = items.length;

	            for (; index < len; ++index) {
	                if (defaultVal == items[index].value) break;
	            }
	            if (index < len) {
	                lineTemp[level] = index;
	            } else {
	                console.warn('Picker has not match defaultValue: ' + defaultVal);
	            }
	        }
	        $picker.find('.weui-picker__group').eq(level).scroll({
	            items: items,
	            temp: lineTemp[level],
	            onChange: function onChange(item, index) {
	                //涓哄綋鍓嶇殑result璧嬪€笺€�
	                if (item) {
	                    result[level] = item.value;
	                } else {
	                    result[level] = null;
	                }
	                lineTemp[level] = index;

	                if (isMulti) {
	                    defaults.onChange(result);
	                } else {
	                    /**
	                     * @瀛愬垪琛ㄥ鐞�
	                     * 1. 鍦ㄦ病鏈夊瓙鍒楄〃锛屾垨鑰呭€煎垪琛ㄧ殑鏁扮粍闀垮害涓�0鏃讹紝闅愯棌鎺夊瓙鍒楄〃銆�
	                     * 2. 婊戝姩涔嬪悗鍙戠幇閲嶆柊鏈夊瓙鍒楄〃鏃讹紝鍐嶆鏄剧ず瀛愬垪琛ㄣ€�
	                     *
	                     * @鍥炶皟澶勭悊
	                     * 1. 鍥犱负婊戝姩瀹為檯涓婃槸涓€灞備竴灞備紶閫掔殑锛氱埗鍒楄〃婊氬姩瀹屾垚涔嬪悗锛屼細call瀛愬垪琛ㄧ殑onChange锛屼粠鑰屽甫鍔ㄥ瓙鍒楄〃鐨勬粦鍔ㄣ€�
	                     * 2. 鎵€浠ワ紝浣跨敤鑰呯殑浼犺繘鏉nChange鍥炶皟搴旇鍦ㄦ渶鍚庝竴涓瓙鍒楄〃婊戝姩鏃跺啀call
	                     */
	                    if (item.children && item.children.length > 0) {
	                        $picker.find('.weui-picker__group').eq(level + 1).show();
	                        !isMulti && scroll(item.children, level + 1); // 涓嶆槸澶氬垪鐨勬儏鍐典笅鎵嶇户缁鐞哻hildren
	                    } else {
	                        //濡傛灉瀛愬垪琛╰est涓嶉€氳繃锛屽瓙瀛欏垪琛ㄩ兘闅愯棌銆�
	                        var $items = $picker.find('.weui-picker__group');
	                        $items.forEach(function (ele, index) {
	                            if (index > level) {
	                                (0, _util2.default)(ele).hide();
	                            }
	                        });

	                        result.splice(level + 1);

	                        defaults.onChange(result);
	                    }
	                }
	            },
	            onConfirm: defaults.onConfirm
	        });
	    }
	    if (isMulti) {
	        items.forEach(function (item, index) {
	            scroll(item, index);
	        });
	    } else {
	        scroll(items, 0);
	    }

	    $picker.on('click', '.weui-mask', function () {
	        hide($picker);
	    }).on('click', '.weui-picker__action', function () {
	        hide($picker);
	    }).on('click', '#weui-picker-confirm', function () {
	        defaults.onConfirm(result);
	    });

	    _sington = $picker[0];
	    _sington.hide = function () {
	        hide($picker);
	    };
	    return _sington;
	}

	/**
	 * dataPicker 鏃堕棿閫夋嫨鍣紝鐢眕icker鎷撳睍鑰屾潵锛屾彁渚涘勾銆佹湀銆佹棩鐨勯€夋嫨銆�
	 * @param options 閰嶇疆椤�
	 * @param {string=} [options.id=datePicker] 浣滀负picker鐨勫敮涓€鏍囪瘑
	 * @param {number=} [options.start=2000] 璧峰骞翠唤
	 * @param {number=} [options.end=2030] 缁撴潫骞翠唤
	 * @param {function=} [options.onChange] 鍦╬icker閫変腑鐨勫€煎彂鐢熷彉鍖栫殑鏃跺€欏洖璋�
	 * @param {function=} [options.onConfirm] 鍦ㄧ偣鍑�"纭畾"涔嬪悗鐨勫洖璋冦€傚洖璋冭繑鍥為€変腑鐨勭粨鏋�(Array)锛屾暟缁勯暱搴︿緷璧栦簬picker鐨勫眰绾с€�
	 *
	 *@example
	 * weui.datePicker({
	 *     start: 2010,
	 *     end: 2016,
	 *     onChange: function(result){
	 *         console.log(result);
	 *     },
	 *     onConfirm: function(result){
	 *         console.log(result);
	 *     },
	 *     id: 'datePicker'
	 * });
	 */
	function datePicker(options) {
	    var defaults = _util2.default.extend({
	        id: 'datePicker',
	        onChange: _util2.default.noop,
	        onConfirm: _util2.default.noop,
	        start: 2000,
	        end: 2030
	    }, options);

	    var date = [];
	    var daysTotal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //鎵€鏈夋湀浠界殑澶╂暟
	    for (var i = defaults.start; i <= defaults.end; i++) {
	        var months = [];
	        if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) {
	            //鍒ゅ畾涓洪棸骞�
	            daysTotal[1] = 29;
	        } else {
	            daysTotal[1] = 28;
	        }
	        for (var j = 0; j < 12; j++) {
	            var dates = [];
	            for (var k = 1; k < daysTotal[j] + 1; k++) {
	                var _date = {
	                    label: k + '鏃�',
	                    value: k
	                };
	                dates.push(_date);
	            }
	            months.push({
	                label: j + 1 + '鏈�',
	                value: j + 1,
	                children: dates
	            });
	        }

	        var year = {
	            label: i + '骞�',
	            value: i,
	            children: months
	        };

	        date.push(year);
	    }

	    return picker(date, defaults);
	}

	exports.default = {
	    picker: picker,
	    datePicker: datePicker
	};
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * set transition
	 * @param $target
	 * @param time
	 */
	var setTransition = function setTransition($target, time) {
	    return $target.css({
	        '-webkit-transition': 'all ' + time + 's',
	        'transition': 'all ' + time + 's'
	    });
	};

	/**
	 * set translate
	 */
	var setTranslate = function setTranslate($target, diff) {
	    return $target.css({
	        '-webkit-transform': 'translate3d(0, ' + diff + 'px, 0)',
	        'transform': 'translate3d(0, ' + diff + 'px, 0)'
	    });
	};

	/**
	 * @desc get index of middle item
	 * @param items
	 * @returns {number}
	 */
	var getDefaultIndex = function getDefaultIndex(items) {
	    var current = Math.floor(items.length / 2);
	    var count = 0;
	    while (!!items[current] && items[current].disabled) {
	        current = ++current % items.length;
	        count++;

	        if (count > items.length) {
	            throw new Error('No selectable item.');
	        }
	    }

	    return current;
	};

	var getDefaultTranslate = function getDefaultTranslate(offset, rowHeight, items) {
	    var currentIndex = getDefaultIndex(items);

	    return (offset - currentIndex) * rowHeight;
	};

	/**
	 * get max translate
	 * @param offset
	 * @param rowHeight
	 * @returns {number}
	 */
	var getMax = function getMax(offset, rowHeight) {
	    return offset * rowHeight;
	};

	/**
	 * get min translate
	 * @param offset
	 * @param rowHeight
	 * @param length
	 * @returns {number}
	 */
	var getMin = function getMin(offset, rowHeight, length) {
	    return -(rowHeight * (length - offset - 1));
	};

	_util2.default.fn.scroll = function (options) {
	    var _this = this;

	    var defaults = _util2.default.extend({
	        items: [], // 鏁版嵁
	        scrollable: '.weui-picker__content', // 婊氬姩鐨勫厓绱�
	        offset: 3, // 鍒楄〃鍒濆鍖栨椂鐨勫亸绉婚噺锛堝垪琛ㄥ垵濮嬪寲鏃讹紝閫夐」鏄仛鐒﹀湪涓棿鐨勶紝閫氳繃offset寮哄埗寰€涓婃尓3椤癸紝浠ヨ揪鍒板垵濮嬮€夐」鏄负椤堕儴鐨勯偅椤癸級
	        rowHeight: 34, // 鍒楄〃姣忎竴琛岀殑楂樺害
	        onChange: _util2.default.noop, // onChange鍥炶皟
	        temp: null, // translate鐨勭紦瀛�
	        bodyHeight: 7 * 34 // picker鐨勯珮搴︼紝鐢ㄤ簬杈呭姪鐐瑰嚮婊氬姩鐨勮绠�
	    }, options);
	    var items = defaults.items.map(function (item) {
	        return '<div class="weui-picker__item' + (item.disabled ? ' weui-picker__item_disabled' : '') + '">' + item.label + '</div>';
	    }).join('');
	    (0, _util2.default)(this).find('.weui-picker__content').html(items);

	    var $scrollable = (0, _util2.default)(this).find(defaults.scrollable); // 鍙粴鍔ㄧ殑鍏冪礌
	    var start = void 0; // 淇濆瓨寮€濮嬫寜涓嬬殑浣嶇疆
	    var end = void 0; // 淇濆瓨缁撴潫鏃剁殑浣嶇疆
	    var startTime = void 0; // 寮€濮嬭Е鎽哥殑鏃堕棿
	    var translate = void 0; // 缂撳瓨 translate
	    var points = []; // 璁板綍绉诲姩鐐�
	    var windowHeight = window.innerHeight; // 灞忓箷鐨勯珮搴�

	    // 棣栨瑙﹀彂閫変腑浜嬩欢
	    // 濡傛灉鏈夌紦瀛樼殑閫夐」锛屽垯鐢ㄧ紦瀛樼殑閫夐」锛屽惁鍒欎娇鐢ㄤ腑闂村€笺€�
	    if (defaults.temp !== null && defaults.temp < defaults.items.length) {
	        var index = defaults.temp;
	        defaults.onChange.call(this, defaults.items[index], index);
	        translate = (defaults.offset - index) * defaults.rowHeight;
	    } else {
	        var _index = getDefaultIndex(defaults.items);
	        defaults.onChange.call(this, defaults.items[_index], _index);
	        translate = getDefaultTranslate(defaults.offset, defaults.rowHeight, defaults.items);
	    }
	    setTranslate($scrollable, translate);

	    var stop = function stop(diff) {
	        translate += diff;

	        // 绉诲姩鍒版渶鎺ヨ繎鐨勯偅涓€琛�
	        translate = Math.round(translate / defaults.rowHeight) * defaults.rowHeight;
	        var max = getMax(defaults.offset, defaults.rowHeight);
	        var min = getMin(defaults.offset, defaults.rowHeight, defaults.items.length);
	        // 涓嶈瓒呰繃鏈€澶у€兼垨鑰呮渶灏忓€�
	        if (translate > max) {
	            translate = max;
	        }
	        if (translate < min) {
	            translate = min;
	        }

	        // 濡傛灉鏄� disabled 鐨勫氨璺宠繃
	        var index = defaults.offset - translate / defaults.rowHeight;
	        while (!!defaults.items[index] && defaults.items[index].disabled) {
	            diff > 0 ? ++index : --index;
	        }
	        translate = (defaults.offset - index) * defaults.rowHeight;
	        setTransition($scrollable, .3);
	        setTranslate($scrollable, translate);

	        // 瑙﹀彂閫夋嫨浜嬩欢
	        defaults.onChange.call(_this, defaults.items[index], index);
	    };

	    /**
	     * 鍥犱负鐜板湪娌℃湁绉婚櫎鍖垮悕鍑芥暟鐨勬柟娉曪紝鎵€浠ュ厛鏆村姏绉婚櫎锛坥ffAll锛夛紝骞朵笖鏀瑰彉$scrollable銆�
	     */
	    $scrollable = (0, _util2.default)(this).offAll().on('touchstart', function (evt) {
	        start = evt.changedTouches[0].pageY;
	        startTime = +new Date();
	    }).on('touchmove', function (evt) {
	        end = evt.changedTouches[0].pageY;
	        var diff = end - start;

	        setTransition($scrollable, 0);
	        setTranslate($scrollable, translate + diff);
	        startTime = +new Date();
	        points.push({ time: startTime, y: end });
	        if (points.length > 40) {
	            points.shift();
	        }

	        evt.preventDefault();
	    }).on('touchend', function (evt) {
	        /**
	         * 鎬濊矾:
	         * 0. touchstart 璁板綍鎸変笅鐨勭偣鍜屾椂闂�
	         * 1. touchmove 绉诲姩鏃惰褰曞墠 40涓粡杩囩殑鐐瑰拰鏃堕棿
	         * 2. touchend 鏉惧紑鎵嬫椂, 璁板綍璇ョ偣鍜屾椂闂�. 濡傛灉鏉惧紑鎵嬫椂鐨勬椂闂�, 璺濈涓婁竴娆� move鏃剁殑鏃堕棿瓒呰繃 100ms, 閭ｄ箞璁や负鍋滄浜�, 涓嶆墽琛屾儻鎬ф粦鍔�
	         *    濡傛灉闂撮殧鏃堕棿鍦� 100ms 鍐�, 鏌ユ壘 100ms 鍐呮渶杩戠殑閭ｄ釜鐐�, 鍜屾澗寮€鎵嬫椂鐨勯偅涓偣, 璁＄畻璺濈鍜屾椂闂村樊, 绠楀嚭閫熷害
	         *    閫熷害涔樹互鎯€ф粦鍔ㄧ殑鏃堕棿, 渚嬪 300ms, 璁＄畻鍑哄簲璇ユ粦鍔ㄧ殑璺濈
	         */
	        var endTime = new Date().getTime();
	        end = evt.changedTouches[0].pageY;
	        var relativeY = windowHeight - defaults.bodyHeight / 2;

	        // 濡傛灉涓婃鏃堕棿璺濈鏉惧紑鎵嬬殑鏃堕棿瓒呰繃 100ms, 鍒欏仠姝簡, 娌℃湁鎯€ф粦鍔�
	        if (endTime - startTime > 100) {
	            //濡傛灉end鍜宻tart鐩稿樊灏忎簬10锛屽垯瑙嗕负
	            if (Math.abs(end - start) > 10) {
	                stop(end - start);
	            } else {
	                stop(relativeY - end);
	            }
	        } else {
	            if (Math.abs(end - start) > 10) {
	                var endPos = points.length - 1;
	                var startPos = endPos;
	                for (var i = endPos; i > 0 && startTime - points[i].time < 100; i--) {
	                    startPos = i;
	                }

	                if (startPos !== endPos) {
	                    var ep = points[endPos];
	                    var sp = points[startPos];
	                    var t = ep.time - sp.time;
	                    var s = ep.y - sp.y;
	                    var v = s / t; // 鍑烘墜鏃剁殑閫熷害
	                    var diff = v * 150 + (end - start); // 婊戣 150ms,杩欓噷鐩存帴褰卞搷鈥滅伒鏁忓害鈥�
	                    stop(diff);
	                } else {
	                    stop(0);
	                }
	            } else {
	                stop(relativeY - end);
	            }
	        }
	    }).find(defaults.scrollable);
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var depthOf = exports.depthOf = function depthOf(object) {
	    var depth = 1;
	    if (object.children && object.children[0]) {
	        depth = depthOf(object.children[0]) + 1;
	    }
	    return depth;
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<div class=\"<%= className %>\"> <div class=weui-mask></div> <div class=weui-picker> <div class=weui-picker__hd> <a href=javascript:; data-action=cancel class=weui-picker__action>鍙栨秷</a> <a href=javascript:; data-action=select class=weui-picker__action id=weui-picker-confirm>纭畾</a> </div> <div class=weui-picker__bd></div> </div> </div> ";

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<div class=weui-picker__group> <div class=weui-picker__mask></div> <div class=weui-picker__indicator></div> <div class=weui-picker__content></div> </div>";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _gallery = __webpack_require__(30);

	var _gallery2 = _interopRequireDefault(_gallery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _sington = void 0;

	/**
	 * gallery 甯﹀垹闄ゆ寜閽殑鍥剧墖棰勮锛屼富瑕佹槸閰嶅悎鍥剧墖涓婁紶浣跨敤
	 * @param {string} url gallery鏄剧ず鐨勫浘鐗囩殑url
	 * @param {object=} options 閰嶇疆椤�
	 * @param {string=} options.className 鑷畾涔夌被鍚�
	 * @param {function=} options.onDelete 鐐瑰嚮鍒犻櫎鍥剧墖鏃剁殑鍥炶皟
	 *
	 * @example
	 * var gallery = weui.gallery(url, {
	 *     className: 'custom-classname',
	 *     onDelete: function(){
	 *         if(confirm('纭畾鍒犻櫎璇ュ浘鐗囷紵')){ console.log('鍒犻櫎'); }
	 *         gallery.hide();
	 *     }
	 * });
	 */
	function gallery(url) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (_sington) return _sington;

	    options = _util2.default.extend({
	        className: '',
	        onDelete: _util2.default.noop
	    }, options);

	    var $gallery = (0, _util2.default)(_util2.default.render(_gallery2.default, _util2.default.extend({
	        url: url
	    }, options)));

	    function hide() {
	        $gallery.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
	            $gallery.remove();
	            _sington = false;
	        });
	    }

	    (0, _util2.default)('body').append($gallery);
	    $gallery.find('.weui-gallery__img').on('click', hide);
	    $gallery.find('.weui-gallery__del').on('click', function () {
	        options.onDelete.call(this, url);
	    });

	    $gallery.show().addClass('weui-animate-fade-in');

	    _sington = $gallery[0];
	    _sington.hide = hide;
	    return _sington;
	}
	exports.default = gallery;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui-gallery <%= className %>\"> <span class=weui-gallery__img style=\"background-image:url(<%= url %>)\"><%= url %></span> <div class=weui-gallery__opr> <a href=javascript: class=weui-gallery__del> <i class=\"weui-icon-delete weui-icon_gallery-delete\"></i> </a> </div> </div> ";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * slider slider婊戝潡锛屽崟浣嶆槸鐧惧垎姣斻€傛敞鎰忥紝鍥犱负闇€瑕佽幏鍙杝lider鐨勯暱搴︼紝鎵€浠ュ繀椤昏鍦╯lider鍙鐨勬儏鍐典笅鏉ヨ皟鐢ㄣ€�
	 * @param {string} selector slider鐨剆elector
	 * @param {object=} options 閰嶇疆椤�
	 * @param {number=} options.step slider鐨剆tep锛屾瘡娆＄Щ鍔ㄧ殑鐧惧垎姣旓紝鍙栧€艰寖鍥� [0-100]
	 * @param {number=} [options.defaultValue=0] slider鐨勯粯璁ょ櫨鍒嗘瘮鍊硷紝鍙栧€艰寖鍥� [0-100]
	 * @param {function=} options.onChange slider鍙戠敓鏀瑰彉鏃惰繑鍥炲搴旂殑鐧惧垎姣旓紝鍙栧€艰寖鍥� [0-100]
	 *
	 * @example
	 * weui.slider('#sliderStep', {
	 *     step: 10,
	 *     defaultValue: 40,
	 *     onChange: function(percent){
	 *         console.log(percent);
	 *     }
	 * });
	 */
	function slider(selector) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var $eles = (0, _util2.default)(selector);
	    options = _util2.default.extend({
	        step: undefined,
	        defaultValue: 0,
	        onChange: _util2.default.noop
	    }, options);

	    if (options.step !== undefined) {
	        options.step = parseFloat(options.step);
	        if (!options.step || options.step < 0) {
	            throw new Error('Slider step must be a positive number.');
	        }
	    }
	    if (options.defaultValue !== undefined && options.defaultValue < 0 || options.defaultValue > 100) {
	        throw new Error('Slider defaultValue must be >= 0 and <= 100.');
	    }

	    $eles.forEach(function (ele) {
	        var $slider = (0, _util2.default)(ele);
	        var $sliderInner = $slider.find('.weui-slider__inner');
	        var $sliderTrack = $slider.find('.weui-slider__track');
	        var $sliderHandler = $slider.find('.weui-slider__handler');

	        var sliderLength = parseInt(_util2.default.getStyle($sliderInner[0], 'width')); // slider鐨勯暱搴�
	        var sliderLeft = $sliderInner[0].offsetLeft; // slider鐩稿浜庨〉闈㈢殑offset
	        var handlerStartPos = 0; // handler璧峰浣嶇疆
	        var handlerStartX = 0; // handler touchstart鐨刋
	        var stepWidth = void 0; // 姣忎釜step鐨勫搴�

	        function getHandlerPos() {
	            var pos = _util2.default.getStyle($sliderHandler[0], 'left');

	            if (/%/.test(pos)) {
	                pos = sliderLength * parseFloat(pos) / 100;
	            } else {
	                pos = parseFloat(pos);
	            }
	            return pos;
	        }
	        function setHandler(distance) {
	            var dist = void 0,
	                // handler鐨勭洰鏍囦綅缃�
	            percent = void 0; // 鎵€鍦ㄤ綅缃殑鐧惧垎姣�

	            if (options.step) {
	                distance = Math.round(distance / stepWidth) * stepWidth;
	            }

	            dist = handlerStartPos + distance;
	            dist = dist < 0 ? 0 : dist > sliderLength ? sliderLength : dist;

	            percent = 100 * dist / sliderLength;

	            $sliderTrack.css({ width: percent + '%' });
	            $sliderHandler.css({ left: percent + '%' });
	            options.onChange.call(ele, percent);
	        }

	        if (options.step) {
	            stepWidth = sliderLength * options.step / 100;
	        }
	        if (options.defaultValue) {
	            setHandler(sliderLength * options.defaultValue / 100);
	        }

	        $slider.on('click', function (evt) {
	            evt.preventDefault();

	            handlerStartPos = getHandlerPos();
	            setHandler(evt.pageX - sliderLeft - handlerStartPos);
	        });
	        $sliderHandler.on('touchstart', function (evt) {
	            handlerStartPos = getHandlerPos();
	            handlerStartX = evt.changedTouches[0].clientX;
	        }).on('touchmove', function (evt) {
	            evt.preventDefault();

	            setHandler(evt.changedTouches[0].clientX - handlerStartX);
	        });
	    });

	    return this;
	}
	exports.default = slider;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
