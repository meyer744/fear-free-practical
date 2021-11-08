this.wc=this.wc||{},this.wc.wcBlocksRegistry=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=162)}({0:function(e,t){e.exports=window.wp.element},12:function(e,t,n){var o=n(20),r=n(21),a=n(18),i=n(22);e.exports=function(e,t){return o(e)||r(e,t)||a(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},162:function(e,t,n){"use strict";n.r(t),n.d(t,"registerPaymentMethod",(function(){return P})),n.d(t,"registerExpressPaymentMethod",(function(){return M})),n.d(t,"registerPaymentMethodExtensionCallbacks",(function(){return j})),n.d(t,"__experimentalDeRegisterPaymentMethod",(function(){return E})),n.d(t,"__experimentalDeRegisterExpressPaymentMethod",(function(){return T})),n.d(t,"getPaymentMethods",(function(){return _})),n.d(t,"getExpressPaymentMethods",(function(){return S})),n.d(t,"getRegisteredBlockComponents",(function(){return R})),n.d(t,"getRegisteredInnerBlocks",(function(){return D})),n.d(t,"registerBlockComponent",(function(){return q})),n.d(t,"registerInnerBlock",(function(){return N}));var o=n(12),r=n.n(o),a=n(9),i=n.n(a),s=n(23),u=n.n(s),c=n(28),p=n.n(c),l=n(2),f=n.n(l),d=n(0),m=function(e,t){if(null!==e&&!Object(d.isValidElement)(e))throw new TypeError("The ".concat(t," property for the payment method must be a React element or null."))},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=t.reduce((function(t,n){return e.hasOwnProperty(n)||t.push(n),t}),[]);if(n.length>0){var o="The payment method configuration object is missing the following properties:";throw new TypeError(o+n.join(", "))}},h=function(e,t){return function(n){return(n.paymentRequirements||[]).every((function(e){return t.includes(e)}))&&e(n)}},b={},v=b,g=function(){return null},w=function(){function e(t){var n,o,r,a;u()(this,e),e.assertValidConfig(t),this.name=t.name,this.label=t.label,this.placeOrderButtonLabel=t.placeOrderButtonLabel,this.ariaLabel=t.ariaLabel,this.content=t.content,this.savedTokenComponent=t.savedTokenComponent,this.icons=t.icons,this.edit=t.edit,this.paymentMethodId=t.paymentMethodId||this.name,this.supports={showSavedCards:(null==t||null===(n=t.supports)||void 0===n?void 0:n.showSavedCards)||(null==t||null===(o=t.supports)||void 0===o?void 0:o.savePaymentInfo)||!1,showSaveOption:(null==t||null===(r=t.supports)||void 0===r?void 0:r.showSaveOption)||!1,features:(null==t||null===(a=t.supports)||void 0===a?void 0:a.features)||["products"]},this.canMakePaymentFromConfig=t.canMakePayment}return p()(e,[{key:"canMakePayment",get:function(){var e,t,n,o=this,a=h(this.canMakePaymentFromConfig,this.supports.features);return Object.values(v).some((function(e){return o.name in e}))?(e=a,t=v,n=this.name,function(o){var a=e(o);if(a){var i={};Object.entries(t).forEach((function(e){var t=r()(e,2),o=t[0],a=t[1];"function"==typeof a[n]&&(i[o]=a[n])})),a=Object.keys(i).every((function(e){try{return i[e](o)}catch(t){return console.error("Error when executing callback for ".concat(n," in ").concat(e),t),!0}}))}return a}):a}}]),e}();f()(w,"assertValidConfig",(function(e){var t,n,o,r,a,s,u;if(e.savedTokenComponent=e.savedTokenComponent||Object(d.createElement)(g,null),y(e,["name","label","ariaLabel","content","edit","canMakePayment"]),"string"!=typeof e.name)throw new Error("The name property for the payment method must be a string");if(void 0!==e.icons&&!Array.isArray(e.icons)&&null!==e.icons)throw new Error("The icons property for the payment method must be an array or null.");if("string"!=typeof e.paymentMethodId&&void 0!==e.paymentMethodId)throw new Error("The paymentMethodId property for the payment method must be a string or undefined (in which case it will be the value of the name property).");if("string"!=typeof e.placeOrderButtonLabel&&void 0!==e.placeOrderButtonLabel)throw new TypeError("The placeOrderButtonLabel property for the payment method must be a string");if(function(e,t){if(null!==e&&!Object(d.isValidElement)(e)&&"string"!=typeof e)throw new TypeError("The ".concat("label"," property for the payment method must be a React element, a string, or null."))}(e.label),m(e.content,"content"),m(e.edit,"edit"),m(e.savedTokenComponent,"savedTokenComponent"),"string"!=typeof e.ariaLabel)throw new TypeError("The ariaLabel property for the payment method must be a string");if("function"!=typeof e.canMakePayment)throw new TypeError("The canMakePayment property for the payment method must be a function.");if(void 0!==(null===(t=e.supports)||void 0===t?void 0:t.showSavedCards)&&"boolean"!=typeof(null===(n=e.supports)||void 0===n?void 0:n.showSavedCards))throw new TypeError("If the payment method includes the `supports.showSavedCards` property, it must be a boolean");if(void 0!==(null===(o=e.supports)||void 0===o?void 0:o.savePaymentInfo)&&i()("Passing savePaymentInfo when registering a payment method.",{alternative:"Pass showSavedCards and showSaveOption",plugin:"woocommerce-gutenberg-products-block",link:"https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/3686"}),void 0!==(null===(r=e.supports)||void 0===r?void 0:r.features)&&!Array.isArray(null===(a=e.supports)||void 0===a?void 0:a.features))throw new Error("The features property for the payment method must be an array or undefined.");if(void 0!==(null===(s=e.supports)||void 0===s?void 0:s.showSaveOption)&&"boolean"!=typeof(null===(u=e.supports)||void 0===u?void 0:u.showSaveOption))throw new TypeError("If the payment method includes the `supports.showSaveOption` property, it must be a boolean")}));var x=function e(t){var n;u()(this,e),e.assertValidConfig(t),this.name=t.name,this.content=t.content,this.edit=t.edit,this.paymentMethodId=t.paymentMethodId||this.name,this.supports={features:(null==t||null===(n=t.supports)||void 0===n?void 0:n.features)||["products"]},this.canMakePayment=h(t.canMakePayment,this.supports.features)};f()(x,"assertValidConfig",(function(e){var t,n;if(y(e,["name","content","edit"]),"string"!=typeof e.name)throw new TypeError("The name property for the express payment method must be a string");if("string"!=typeof e.paymentMethodId&&void 0!==e.paymentMethodId)throw new Error("The paymentMethodId property for the payment method must be a string or undefined (in which case it will be the value of the name property).");if(void 0!==(null===(t=e.supports)||void 0===t?void 0:t.features)&&!Array.isArray(null===(n=e.supports)||void 0===n?void 0:n.features))throw new Error("The features property for the payment method must be an array or undefined.");if(m(e.content,"content"),m(e.edit,"edit"),"function"!=typeof e.canMakePayment)throw new TypeError("The canMakePayment property for the express payment method must be a function.")}));var O={},k={},P=function(e){var t;"function"==typeof e?(t=e(w),i()("Passing a callback to registerPaymentMethod()",{alternative:"a config options object",plugin:"woocommerce-gutenberg-products-block",link:"https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/3404"})):t=new w(e),t instanceof w&&(O[t.name]=t)},M=function(e){var t;"function"==typeof e?(t=e(x),i()("Passing a callback to registerExpressPaymentMethod()",{alternative:"a config options object",plugin:"woocommerce-gutenberg-products-block",link:"https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/3404"})):t=new x(e),t instanceof x&&(k[t.name]=t)},j=function(e,t){b[e]?console.error("The namespace provided to registerPaymentMethodExtensionCallbacks must be unique. Callbacks have already been registered for the ".concat(e," namespace.")):(b[e]={},Object.entries(t).forEach((function(t){var n=r()(t,2),o=n[0],a=n[1];"function"==typeof a?b[e][o]=a:console.error("All callbacks provided to registerPaymentMethodExtensionCallbacks must be functions. The callback for the ".concat(o," payment method in the ").concat(e," namespace was not a function."))})))},E=function(e){delete O[e]},T=function(e){delete k[e]},_=function(){return O},S=function(){return k},C=n(5),I=n.n(C),B={};function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e){return L(L({},"object"===I()(B[e])&&Object.keys(B[e]).length>0?B[e]:{}),B.any)}function D(e){return i()("getRegisteredInnerBlocks",{version:"2.8.0",alternative:"getRegisteredBlockComponents",plugin:"WooCommerce Blocks"}),R(e)}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function q(e){e.context||(e.context="any"),F(e,"context","string"),F(e,"blockName","string"),z(e,"component");var t=e.context,n=e.blockName,o=e.component;B[t]||(B[t]={}),B[t][n]=o}var z=function(e,t){if(e[t]){if("function"==typeof e[t])return;if(e[t].$$typeof&&e[t].$$typeof===Symbol.for("react.lazy"))return}throw new Error("Incorrect value for the ".concat(t," argument when registering a block component. Component must be a valid React Element or Lazy callback."))},F=function(e,t,n){var o=I()(e[t]);if(o!==n)throw new Error("Incorrect value for the ".concat(t," argument when registering a block component. It was a ").concat(o,", but must be a ").concat(n,"."))};function N(e){i()("registerInnerBlock",{version:"2.8.0",alternative:"registerBlockComponent",plugin:"WooCommerce Blocks",hint:'"main" has been replaced with "context" and is now optional.'}),F(e,"main","string"),q($($({},e),{},{context:e.main}))}},18:function(e,t,n){var o=n(19);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},19:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o},e.exports.default=e.exports,e.exports.__esModule=!0},2:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},20:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},21:function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,a=[],_n=!0,i=!1;try{for(n=n.call(e);!(_n=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);_n=!0);}catch(e){i=!0,r=e}finally{try{_n||null==n.return||n.return()}finally{if(i)throw r}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},22:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},23:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},28:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e},e.exports.default=e.exports,e.exports.__esModule=!0},5:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},9:function(e,t){e.exports=window.wp.deprecated}});