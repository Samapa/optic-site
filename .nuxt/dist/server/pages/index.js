exports.ids = [2];
exports.modules = Array(24).concat([
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4f57c28c", content, true, context)
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("deee36b6", content, true, context)
};

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_bar_vue_vue_type_style_index_0_id_09ebef2f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_bar_vue_vue_type_style_index_0_id_09ebef2f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_bar_vue_vue_type_style_index_0_id_09ebef2f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_bar_vue_vue_type_style_index_0_id_09ebef2f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_bar_vue_vue_type_style_index_0_id_09ebef2f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media only screen and (max-width:420px){#desktop-nav[data-v-09ebef2f]{display:none}.optic-socials[data-v-09ebef2f]{border-top:1px solid var(--optic-green);flex-direction:row;justify-content:space-around;margin-top:40px}#mobile-nav[data-v-09ebef2f],.optic-socials[data-v-09ebef2f]{display:flex;list-style:none}#mobile-nav[data-v-09ebef2f]{flex-direction:column;position:fixed;background-color:var(--primary);width:100%;height:auto;margin:50px 0;z-index:1;text-transform:uppercase;transition:.6s ease-in}#mobile-nav a[data-v-09ebef2f]{padding:20px 0}.mobile-nav[data-v-09ebef2f]{height:50px;display:flex;justify-content:space-between;background-color:var(--primary);border-bottom:2px solid var(--optic-green);position:fixed;z-index:2;width:100%}.mobile-nav a svg[data-v-09ebef2f]{fill:var(--invert);width:40px;height:100%}.hidden[data-v-09ebef2f]{transform:translateY(-500px);transition:.6s ease-in}}@media only screen and (min-width:421px){#mobile-nav[data-v-09ebef2f],.mobile-nav[data-v-09ebef2f]{display:none}#desktop-nav[data-v-09ebef2f]{position:fixed;z-index:2;width:100%;top:0;border-bottom:1px solid var(--optic-green)}#optic-nav-items[data-v-09ebef2f]{width:100%}.optic-nav[data-v-09ebef2f]{background-color:var(--primary);text-transform:uppercase;font-weight:700}.optic-nav ul[data-v-09ebef2f]{display:flex;justify-content:space-around;list-style:none;width:100%}.optic-nav ul li[data-v-09ebef2f]:hover{cursor:pointer}.optic-logo[data-v-09ebef2f]{display:flex}.optic-logo svg[data-v-09ebef2f]{height:50px;width:50px;fill:var(--invert);transition:.3s ease}.optic-logo svg[data-v-09ebef2f]:hover{transition:.3s ease;fill:var(--optic-green);cursor:pointer}.optic-logo-link[data-v-09ebef2f]{align-self:center}#optic-nav-items ul[data-v-09ebef2f]{justify-content:flex-start;margin-left:25px}#optic-nav-items ul li[data-v-09ebef2f]{width:100px;height:100%}#optic-nav-items ul a[data-v-09ebef2f]{margin-left:25px;padding:40px 0;transition:.5s ease;border-bottom:4px solid transparent}#optic-nav-items ul a[data-v-09ebef2f]:hover{transition:.5s ease;border-bottom:2px solid var(--optic-green)}#optic-nav-link ul[data-v-09ebef2f]{height:100%;display:flex;align-items:center}#optic-nav-link ul a[data-v-09ebef2f]{transition:.3s ease;margin-right:25px}#optic-nav-link ul a[data-v-09ebef2f]:hover{transition:.3s ease;fill:var(--optic-green)}}@media only screen and (min-device-width:768px) and (max-device-width:1024px) and (orientation:portrait){#desktop-nav[data-v-09ebef2f]{display:none}.optic-socials[data-v-09ebef2f]{border-top:1px solid var(--optic-green);flex-direction:row;justify-content:space-around;margin-top:40px}#mobile-nav[data-v-09ebef2f],.optic-socials[data-v-09ebef2f]{display:flex;list-style:none}#mobile-nav[data-v-09ebef2f]{flex-direction:column;position:fixed;background-color:var(--primary);width:100%;height:35vh;margin-top:50px;z-index:1;text-transform:uppercase;transition:.6s ease-in}#mobile-nav a[data-v-09ebef2f]{padding-top:20px}.mobile-nav[data-v-09ebef2f]{height:50px;display:flex;justify-content:space-between;background-color:var(--primary);border-bottom:2px solid var(--optic-green);position:fixed;z-index:2;width:100%}.mobile-nav a svg[data-v-09ebef2f]{fill:var(--invert);width:40px;height:100%;align-self:center}.hidden[data-v-09ebef2f]{transform:translateY(-500px);transition:.6s ease-in}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_862103d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_862103d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_862103d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_862103d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_862103d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".optic-footer[data-v-862103d8]{background-color:var(--primary);border-top:1px solid #f3f3f3;padding-top:25px;padding-bottom:25px;margin-top:35px}.optic-footer .ul[data-v-862103d8]{width:100%;display:flex;justify-content:space-between;flex-direction:row}.optic-footer ul div[data-v-862103d8]:first-child{width:30%}.optic-footer-links[data-v-862103d8]{display:flex;list-style:none;flex-direction:column}.optic-subscribe li[data-v-862103d8]{display:flex;flex-direction:column;width:100%}.optic-footer-links li a[data-v-862103d8]{transition:.3s ease}.optic-footer-links li a[data-v-862103d8]:hover{transition:.3s ease;color:var(--optic-green)}@media only screen and (max-width:1024px){.optic-footer .ul[data-v-862103d8]{flex-direction:column;text-align:center}.optic-footer ul div[data-v-862103d8]:first-child{width:auto;margin-bottom:15px}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/menu-bar.vue?vue&type=template&id=09ebef2f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div id=\"desktop-nav\" class=\"optic-nav\" data-v-09ebef2f>","</div>",[_vm._ssrNode("<ul class=\"optic-container\" data-v-09ebef2f>","</ul>",[_vm._ssrNode("<a href=\"/optic-livesite/\" class=\"optic-logo-link\" data-v-09ebef2f>","</a>",[_vm._ssrNode("<div class=\"optic-logo\" data-v-09ebef2f>","</div>",[_vm._ssrNode("<svg xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" version=\"1.1\" id=\"optic-logo\" xml:space=\"preserve\" width=\"510\" height=\"335\" viewBox=\"0 0 510 335\" sodipodi:docname=\"Optic_Gaming.svg\" inkscape:version=\"0.92.0 r15299\" data-v-09ebef2f>","</svg>",[_c('metadata',{attrs:{"id":"metadata8"}},[_c('rdf:RDF',[_c('cc:Work',{attrs:{"rdf:about":""}},[_c('dc:format',[_vm._v("image/svg+xml")]),_c('dc:type',{attrs:{"rdf:resource":"http://purl.org/dc/dcmitype/StillImage"}}),_c('dc:title')],1)],1)],1),_vm._ssrNode(" <defs id=\"defs6\" data-v-09ebef2f></defs> "),_c('sodipodi:namedview',{attrs:{"pagecolor":"#ffffff","bordercolor":"#666666","borderopacity":"1","objecttolerance":"10","gridtolerance":"10","guidetolerance":"10","inkscape:pageopacity":"0","inkscape:pageshadow":"2","inkscape:window-width":"1920","inkscape:window-height":"1018","id":"namedview4","showgrid":"false","fit-margin-top":"5","fit-margin-left":"5","fit-margin-bottom":"5","fit-margin-right":"5","inkscape:zoom":"0.295","inkscape:cx":"205.21467","inkscape:cy":"135.13335","inkscape:window-x":"1358","inkscape:window-y":"-8","inkscape:window-maximized":"1","inkscape:current-layer":"g10"}}),_vm._ssrNode(" <g id=\"g10\" inkscape:groupmode=\"layer\" inkscape:label=\"ink_ext_XXXXXX\" transform=\"matrix(1.3333333,0,0,-1.3333333,-194.78533,599.86664)\" data-v-09ebef2f><g id=\"g12\" transform=\"matrix(0.12486598,0,0,0.12483995,-37.258936,-50.276067)\" data-v-09ebef2f><path d=\"m 4027.49,3516.5 c -18.52,-116.06 -44.69,-221.43 -78.18,-316.67 h 552.3 v 316.67 h -474.12\" id=\"path14\" inkscape:connector-curvature=\"0\" style=\"\\n                      fill: #87cf3a;\\n                      fill-opacity: 1;\\n                      fill-rule: nonzero;\\n                      stroke: none;\\n                    \" data-v-09ebef2f></path> <path d=\"M 4087.03,2340.67 H 2368.91 c 0,46.52 3.33,91.08 9.55,133.75 17.83,122.39 59.67,228.95 116.63,319.93 170.71,272.67 477.06,405.48 679.13,405.48 h 340.28 c 53.51,89.71 92.2,195.01 109.17,316.67 h -506.12 c -444.61,0 -841.45,-236.6 -1040.46,-722.42 -39.59,-96.65 -71.32,-203.18 -94.07,-319.66 -26.64,-136.44 -40.99,-286.47 -40.99,-450.42 h 2558.75 v 852.5 h -413.75 v -535.83\" id=\"path16\" inkscape:connector-curvature=\"0\" style=\"\\n                      fill: #87cf3a;\\n                      fill-opacity: 1;\\n                      fill-rule: nonzero;\\n                      stroke: none;\\n                    \" data-v-09ebef2f></path> <path d=\"m 2650.08,3976.5 c -569.14,0 -1151.69,-488.11 -1151.69,-1502.08 0,0 172.52,0 484.63,0 22.75,116.48 54.48,223.01 94.07,319.66 -99.22,-0.42 -151.22,-0.96 -151.22,-0.96 0,583.69 474.01,864.68 767.42,864.68 h 940.01 c 0,-49.37 -3.37,-96.42 -9.63,-141.3 -16.97,-121.66 -55.66,-226.96 -109.17,-316.67 -166.17,-278.58 -475.06,-406.71 -719.41,-406.71 -109.69,0.64 -209.76,1.02 -300,1.23 -56.96,-90.98 -98.8,-197.54 -116.63,-319.93 137.03,0 288.29,0 452.67,0 553.65,0 939.97,218.6 1118.18,725.41 33.49,95.24 59.66,200.61 78.18,316.67 22.02,138.03 33.29,291.08 33.29,460 h -1410.7\" id=\"path18\" inkscape:connector-curvature=\"0\" style=\"\\n                      fill: #111212;\\n                      fill-opacity: 1;\\n                      fill-rule: nonzero;\\n                      stroke: none;\\n                    \" data-v-09ebef2f></path></g></g>")],2)])]),_vm._ssrNode(" <div id=\"optic-nav-items\" data-v-09ebef2f><ul data-v-09ebef2f><a href=\"/optic-livesite/players\" data-v-09ebef2f><li data-v-09ebef2f>Players</li></a> <a href=\"/optic-livesite/teamsummertime\" data-v-09ebef2f><li data-v-09ebef2f>team summertime</li></a> <a href=\"/optic-livesite/partners\" data-v-09ebef2f><li data-v-09ebef2f>Partners</li></a> <a href=\"/optic-livesite/contact\" data-v-09ebef2f><li data-v-09ebef2f>Contact</li></a> <a href=\"/optic-livesite/message\" data-v-09ebef2f><li data-v-09ebef2f>#GreenWall</li></a></ul></div> <div id=\"optic-nav-link\" data-v-09ebef2f><ul data-v-09ebef2f><a target=\"_blank\" href=\"https://twitter.com/OpTic\" data-v-09ebef2f><li id=\"optic-twitter\" data-v-09ebef2f><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" data-v-09ebef2f><path d=\"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z\" data-v-09ebef2f></path></svg></li></a> <a target=\"_blank\" href=\"https://www.youtube.com/channel/UCVhkzoReyB25jpFEeXjh3kQ\" data-v-09ebef2f><li id=\"optic-youtube\" data-v-09ebef2f><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" data-v-09ebef2f><path d=\"M4.652 0h1.44l.988 3.702.916-3.702h1.454l-1.665 5.505v3.757h-1.431v-3.757l-1.702-5.505zm6.594 2.373c-1.119 0-1.861.74-1.861 1.835v3.349c0 1.204.629 1.831 1.861 1.831 1.022 0 1.826-.683 1.826-1.831v-3.349c0-1.069-.797-1.835-1.826-1.835zm.531 5.127c0 .372-.19.646-.532.646-.351 0-.554-.287-.554-.646v-3.179c0-.374.172-.651.529-.651.39 0 .557.269.557.651v3.179zm4.729-5.07v5.186c-.155.194-.5.512-.747.512-.271 0-.338-.186-.338-.46v-5.238h-1.27v5.71c0 .675.206 1.22.887 1.22.384 0 .918-.2 1.468-.853v.754h1.27v-6.831h-1.27zm2.203 13.858c-.448 0-.541.315-.541.763v.659h1.069v-.66c.001-.44-.092-.762-.528-.762zm-4.703.04c-.084.043-.167.109-.25.198v4.055c.099.106.194.182.287.229.197.1.485.107.619-.067.07-.092.105-.241.105-.449v-3.359c0-.22-.043-.386-.129-.5-.147-.193-.42-.214-.632-.107zm4.827-5.195c-2.604-.177-11.066-.177-13.666 0-2.814.192-3.146 1.892-3.167 6.367.021 4.467.35 6.175 3.167 6.367 2.6.177 11.062.177 13.666 0 2.814-.192 3.146-1.893 3.167-6.367-.021-4.467-.35-6.175-3.167-6.367zm-12.324 10.686h-1.363v-7.54h-1.41v-1.28h4.182v1.28h-1.41v7.54zm4.846 0h-1.21v-.718c-.223.265-.455.467-.696.605-.652.374-1.547.365-1.547-.955v-5.438h1.209v4.988c0 .262.063.438.322.438.236 0 .564-.303.711-.487v-4.939h1.21v6.506zm4.657-1.348c0 .805-.301 1.431-1.106 1.431-.443 0-.812-.162-1.149-.583v.5h-1.221v-8.82h1.221v2.84c.273-.333.644-.608 1.076-.608.886 0 1.18.749 1.18 1.631v3.609zm4.471-1.752h-2.314v1.228c0 .488.042.91.528.91.511 0 .541-.344.541-.91v-.452h1.245v.489c0 1.253-.538 2.013-1.813 2.013-1.155 0-1.746-.842-1.746-2.013v-2.921c0-1.129.746-1.914 1.837-1.914 1.161 0 1.721.738 1.721 1.914v1.656z\" data-v-09ebef2f></path></svg></li></a> <a target=\"_blank\" href=\"https://www.instagram.com/opticgaming/?hl=en\" data-v-09ebef2f><li id=\"optic-insta\" data-v-09ebef2f><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" data-v-09ebef2f><path d=\"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z\" data-v-09ebef2f></path></svg></li></a> <a target=\"_blank\" href=\"https://www.reddit.com/r/OpTicGaming/\" data-v-09ebef2f><li id=\"optic-reddit\" data-v-09ebef2f><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" data-v-09ebef2f><path d=\"M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z\" data-v-09ebef2f></path></svg></li></a></ul></div>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mobile-nav optic-container\" data-v-09ebef2f>","</div>",[_vm._ssrNode("<a href=\"/optic-livesite/\" data-v-09ebef2f>","</a>",[_vm._ssrNode("<svg xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" version=\"1.1\" id=\"optic-logo\" xml:space=\"preserve\" width=\"510\" height=\"335\" viewBox=\"0 0 510 335\" sodipodi:docname=\"Optic_Gaming.svg\" inkscape:version=\"0.92.0 r15299\" data-v-09ebef2f>","</svg>",[_c('metadata',{attrs:{"id":"metadata8"}},[_c('rdf:RDF',[_c('cc:Work',{attrs:{"rdf:about":""}},[_c('dc:format',[_vm._v("image/svg+xml")]),_c('dc:type',{attrs:{"rdf:resource":"http://purl.org/dc/dcmitype/StillImage"}}),_c('dc:title')],1)],1)],1),_vm._ssrNode(" <defs id=\"defs6\" data-v-09ebef2f></defs> "),_c('sodipodi:namedview',{attrs:{"pagecolor":"#ffffff","bordercolor":"#666666","borderopacity":"1","objecttolerance":"10","gridtolerance":"10","guidetolerance":"10","inkscape:pageopacity":"0","inkscape:pageshadow":"2","inkscape:window-width":"1920","inkscape:window-height":"1018","id":"namedview4","showgrid":"false","fit-margin-top":"5","fit-margin-left":"5","fit-margin-bottom":"5","fit-margin-right":"5","inkscape:zoom":"0.295","inkscape:cx":"205.21467","inkscape:cy":"135.13335","inkscape:window-x":"1358","inkscape:window-y":"-8","inkscape:window-maximized":"1","inkscape:current-layer":"g10"}}),_vm._ssrNode(" <g id=\"g10\" inkscape:groupmode=\"layer\" inkscape:label=\"ink_ext_XXXXXX\" transform=\"matrix(1.3333333,0,0,-1.3333333,-194.78533,599.86664)\" data-v-09ebef2f><g id=\"g12\" transform=\"matrix(0.12486598,0,0,0.12483995,-37.258936,-50.276067)\" data-v-09ebef2f><path d=\"m 4027.49,3516.5 c -18.52,-116.06 -44.69,-221.43 -78.18,-316.67 h 552.3 v 316.67 h -474.12\" id=\"path14\" inkscape:connector-curvature=\"0\" style=\"\\n                      fill: #87cf3a;\\n                      fill-opacity: 1;\\n                      fill-rule: nonzero;\\n                      stroke: none;\\n                    \" data-v-09ebef2f></path> <path d=\"M 4087.03,2340.67 H 2368.91 c 0,46.52 3.33,91.08 9.55,133.75 17.83,122.39 59.67,228.95 116.63,319.93 170.71,272.67 477.06,405.48 679.13,405.48 h 340.28 c 53.51,89.71 92.2,195.01 109.17,316.67 h -506.12 c -444.61,0 -841.45,-236.6 -1040.46,-722.42 -39.59,-96.65 -71.32,-203.18 -94.07,-319.66 -26.64,-136.44 -40.99,-286.47 -40.99,-450.42 h 2558.75 v 852.5 h -413.75 v -535.83\" id=\"path16\" inkscape:connector-curvature=\"0\" style=\"\\n                      fill: #87cf3a;\\n                      fill-opacity: 1;\\n                      fill-rule: nonzero;\\n                      stroke: none;\\n                    \" data-v-09ebef2f></path> <path d=\"m 2650.08,3976.5 c -569.14,0 -1151.69,-488.11 -1151.69,-1502.08 0,0 172.52,0 484.63,0 22.75,116.48 54.48,223.01 94.07,319.66 -99.22,-0.42 -151.22,-0.96 -151.22,-0.96 0,583.69 474.01,864.68 767.42,864.68 h 940.01 c 0,-49.37 -3.37,-96.42 -9.63,-141.3 -16.97,-121.66 -55.66,-226.96 -109.17,-316.67 -166.17,-278.58 -475.06,-406.71 -719.41,-406.71 -109.69,0.64 -209.76,1.02 -300,1.23 -56.96,-90.98 -98.8,-197.54 -116.63,-319.93 137.03,0 288.29,0 452.67,0 553.65,0 939.97,218.6 1118.18,725.41 33.49,95.24 59.66,200.61 78.18,316.67 22.02,138.03 33.29,291.08 33.29,460 h -1410.7\" id=\"path18\" inkscape:connector-curvature=\"0\" style=\"\\n                      fill: #111212;\\n                      fill-opacity: 1;\\n                      fill-rule: nonzero;\\n                      stroke: none;\\n                    \" data-v-09ebef2f></path></g></g>")],2)]),_vm._ssrNode(" <a data-v-09ebef2f><svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" xml:space=\"preserve\" data-v-09ebef2f><path d=\"M4.5,11.3h15c0.3,0,0.5,0.2,0.5,0.5v0.5c0,0.3-0.2,0.5-0.5,0.5h-15c-0.3,0-0.5-0.2-0.5-0.5v-0.5\n\tC4,11.5,4.2,11.3,4.5,11.3z\" class=\"st0\" data-v-09ebef2f></path> <path d=\"M4.5,6h15C19.8,6,20,6.2,20,6.5V7c0,0.3-0.2,0.5-0.5,0.5h-15C4.2,7.5,4,7.3,4,7V6.5C4,6.2,4.2,6,4.5,6z\" class=\"st0\" data-v-09ebef2f></path> <path d=\"M4.5,16.5h15c0.3,0,0.5,0.2,0.5,0.5v0.5c0,0.3-0.2,0.5-0.5,0.5h-15C4.2,18,4,17.8,4,17.5V17\n\tC4,16.7,4.2,16.5,4.5,16.5z\" class=\"st0\" data-v-09ebef2f></path></svg></a>")],2),_vm._ssrNode(" <ul id=\"mobile-nav\""+(_vm._ssrClass("optic-container",{ hidden: _vm.active }))+" data-v-09ebef2f><a href=\"/optic-livesite/players\" data-v-09ebef2f><li data-v-09ebef2f>Players</li></a> <a href=\"/optic-livesite/teamsummertime\" data-v-09ebef2f><li data-v-09ebef2f>team summertime</li></a> <a href=\"/optic-livesite/partners\" data-v-09ebef2f><li data-v-09ebef2f>Partners</li></a> <a href=\"/optic-livesite/contact\" data-v-09ebef2f><li data-v-09ebef2f>Contact</li></a> <a href=\"/optic-livesite/message\" data-v-09ebef2f><li data-v-09ebef2f>#GreenWall</li></a> <li data-v-09ebef2f><ul class=\"optic-socials\" data-v-09ebef2f><a target=\"_blank\" href=\"https://twitter.com/OpTic\" data-v-09ebef2f><li id=\"optic-twitter\" data-v-09ebef2f><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" data-v-09ebef2f><path d=\"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z\" data-v-09ebef2f></path></svg></li></a> <a target=\"_blank\" href=\"https://www.youtube.com/channel/UCVhkzoReyB25jpFEeXjh3kQ\" data-v-09ebef2f><li id=\"optic-youtube\" data-v-09ebef2f><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" data-v-09ebef2f><path d=\"M4.652 0h1.44l.988 3.702.916-3.702h1.454l-1.665 5.505v3.757h-1.431v-3.757l-1.702-5.505zm6.594 2.373c-1.119 0-1.861.74-1.861 1.835v3.349c0 1.204.629 1.831 1.861 1.831 1.022 0 1.826-.683 1.826-1.831v-3.349c0-1.069-.797-1.835-1.826-1.835zm.531 5.127c0 .372-.19.646-.532.646-.351 0-.554-.287-.554-.646v-3.179c0-.374.172-.651.529-.651.39 0 .557.269.557.651v3.179zm4.729-5.07v5.186c-.155.194-.5.512-.747.512-.271 0-.338-.186-.338-.46v-5.238h-1.27v5.71c0 .675.206 1.22.887 1.22.384 0 .918-.2 1.468-.853v.754h1.27v-6.831h-1.27zm2.203 13.858c-.448 0-.541.315-.541.763v.659h1.069v-.66c.001-.44-.092-.762-.528-.762zm-4.703.04c-.084.043-.167.109-.25.198v4.055c.099.106.194.182.287.229.197.1.485.107.619-.067.07-.092.105-.241.105-.449v-3.359c0-.22-.043-.386-.129-.5-.147-.193-.42-.214-.632-.107zm4.827-5.195c-2.604-.177-11.066-.177-13.666 0-2.814.192-3.146 1.892-3.167 6.367.021 4.467.35 6.175 3.167 6.367 2.6.177 11.062.177 13.666 0 2.814-.192 3.146-1.893 3.167-6.367-.021-4.467-.35-6.175-3.167-6.367zm-12.324 10.686h-1.363v-7.54h-1.41v-1.28h4.182v1.28h-1.41v7.54zm4.846 0h-1.21v-.718c-.223.265-.455.467-.696.605-.652.374-1.547.365-1.547-.955v-5.438h1.209v4.988c0 .262.063.438.322.438.236 0 .564-.303.711-.487v-4.939h1.21v6.506zm4.657-1.348c0 .805-.301 1.431-1.106 1.431-.443 0-.812-.162-1.149-.583v.5h-1.221v-8.82h1.221v2.84c.273-.333.644-.608 1.076-.608.886 0 1.18.749 1.18 1.631v3.609zm4.471-1.752h-2.314v1.228c0 .488.042.91.528.91.511 0 .541-.344.541-.91v-.452h1.245v.489c0 1.253-.538 2.013-1.813 2.013-1.155 0-1.746-.842-1.746-2.013v-2.921c0-1.129.746-1.914 1.837-1.914 1.161 0 1.721.738 1.721 1.914v1.656z\" data-v-09ebef2f></path></svg></li></a> <a target=\"_blank\" href=\"https://www.instagram.com/opticgaming/?hl=en\" data-v-09ebef2f><li id=\"optic-insta\" data-v-09ebef2f><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" data-v-09ebef2f><path d=\"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z\" data-v-09ebef2f></path></svg></li></a> <a target=\"_blank\" href=\"https://www.reddit.com/r/OpTicGaming/\" data-v-09ebef2f><li id=\"optic-reddit\" data-v-09ebef2f><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" data-v-09ebef2f><path d=\"M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z\" data-v-09ebef2f></path></svg></li></a></ul></li></ul>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/menu-bar.vue?vue&type=template&id=09ebef2f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/menu-bar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var menu_barvue_type_script_lang_js_ = ({
  data() {
    return {
      active: true
    };
  }

});
// CONCATENATED MODULE: ./components/menu-bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_menu_barvue_type_script_lang_js_ = (menu_barvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/menu-bar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(28)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_menu_barvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "09ebef2f",
  "51b9f3ee"
  
)

/* harmony default export */ var menu_bar = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer.vue?vue&type=template&id=862103d8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"optic-footer"},[_vm._ssrNode("<ul class=\"ul optic-container flex\" data-v-862103d8><div data-v-862103d8><ul class=\"optic-subscribe\" data-v-862103d8><li data-v-862103d8><p data-v-862103d8>Subscribe to the #GreenWall</p> <input type=\"email\" data-v-862103d8> <a href=\"#\" class=\"optic-btn\" data-v-862103d8>Become a Member</a></li></ul></div> <div data-v-862103d8><ul class=\"optic-footer-links\" data-v-862103d8><li data-v-862103d8><a href=\"https://opticgaming.tv/\" target=\"_blank\" data-v-862103d8>Shop</a></li> <li data-v-862103d8><a href=\"/optic-livesite/players\" data-v-862103d8>The Team</a></li> <li data-v-862103d8><a href=\"/optic-livesite/teamsummertime\" data-v-862103d8>Team Summertime</a></li> <li data-v-862103d8><a href=\"/optic-livesite/partners\" data-v-862103d8>Partners</a></li> <li data-v-862103d8><a href=\"http://www.nrg.gg/\" target=\"_blank\" data-v-862103d8>NRG</a></li> <li data-v-862103d8><a href=\"/optic-livesite/contact\" data-v-862103d8>Contact Us</a></li> <li data-v-862103d8><a href=\"/optic-livesite/contact\" data-v-862103d8>Privacy Policy</a></li></ul></div></ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/footer.vue?vue&type=template&id=862103d8&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/footer.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(30)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "862103d8",
  "f1e2cfb8"
  
)

/* harmony default export */ var footer = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("425bc5ce", content, true, context)
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5b10c84e", content, true, context)
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2eb9ce58", content, true, context)
};

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/players.vue?vue&type=template&id=55b5ad67&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"backgroundf3 flex"},[_vm._ssrNode("<h3 class=\"optic-title\" data-v-55b5ad67>The Players</h3> <div class=\"optic-players\" data-v-55b5ad67>"+(_vm._ssrList((_vm.players),function(item,index){return ("<a"+(_vm._ssrAttr("href",_vm.players[index].url))+" class=\"optic-player-card\" data-v-55b5ad67><div class=\"player-content\" data-v-55b5ad67><img"+(_vm._ssrAttr("src",_vm.players[index].img))+" data-v-55b5ad67> <div class=\"player-info\" data-v-55b5ad67><h3 data-v-55b5ad67>"+_vm._ssrEscape(_vm._s(_vm.players[index].ign))+"</h3> <p class=\"name\" data-v-55b5ad67>"+_vm._ssrEscape(_vm._s(_vm.players[index].name))+"</p></div></div></a>")}))+"</div> <a href=\"/optic-livesite/players\" class=\"optic-btn\" data-v-55b5ad67>View Our Roster</a>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/players.vue?vue&type=template&id=55b5ad67&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/players.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var playersvue_type_script_lang_js_ = ({
  data() {
    return {
      players: [{
        ign: "Scump",
        name: "Seth Amber",
        img: "/optic-livesite/players/scump.png",
        url: ""
      }, {
        ign: "Formal",
        name: "Mathhew Piper",
        img: "/optic-livesite/players/formal.png",
        url: ""
      }, {
        ign: "Dashy",
        name: "Brandon Otell",
        img: "/optic-livesite/players/dashy.png",
        url: ""
      }, {
        ign: "Envoy",
        name: "Dylan Hannon",
        img: "/optic-livesite/players/envoy.png",
        url: ""
      }, {
        ign: "General",
        name: "Jordan General",
        img: "/optic-livesite/players/general.png",
        url: ""
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/players.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_playersvue_type_script_lang_js_ = (playersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/players.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(44)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_playersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "55b5ad67",
  "3e2a83f9"
  
)

/* harmony default export */ var players = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_players_vue_vue_type_style_index_0_id_55b5ad67_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_players_vue_vue_type_style_index_0_id_55b5ad67_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_players_vue_vue_type_style_index_0_id_55b5ad67_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_players_vue_vue_type_style_index_0_id_55b5ad67_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_players_vue_vue_type_style_index_0_id_55b5ad67_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".optic-players[data-v-55b5ad67]{display:flex;flex-wrap:wrap;justify-content:space-evenly}.optic-player-card[data-v-55b5ad67]{display:flex;width:35%;background-color:var(--primary);border-right:2px solid var(--optic-green);margin:15px;transition:.3s ease}.optic-player-card:hover h3[data-v-55b5ad67]{color:var(--optic-green);transition:.3s ease}.optic-player-card[data-v-55b5ad67]:hover{cursor:pointer}.optic-player-card .name[data-v-55b5ad67]{text-transform:capitalize}.optic-player-card img[data-v-55b5ad67]{height:150px}.optic-btn[data-v-55b5ad67]{width:25%;align-self:center;margin:15px 15px 25px}.player-content[data-v-55b5ad67]{display:flex;flex-direction:row;width:100%}.player-info[data-v-55b5ad67]{display:flex;width:100%;flex-direction:column;margin-left:35px;align-self:center}@media only screen and (max-width:1024px){.optic-players[data-v-55b5ad67]{flex-direction:column}.optic-player-card[data-v-55b5ad67]{width:auto}.optic-btn[data-v-55b5ad67]{width:60%}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shop_tiles_vue_vue_type_style_index_0_id_63201b73_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shop_tiles_vue_vue_type_style_index_0_id_63201b73_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shop_tiles_vue_vue_type_style_index_0_id_63201b73_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shop_tiles_vue_vue_type_style_index_0_id_63201b73_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shop_tiles_vue_vue_type_style_index_0_id_63201b73_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".shop-tiles-container[data-v-63201b73]{display:flex;justify-content:space-between;flex:1;flex-wrap:wrap}.shop-tile-40[data-v-63201b73]{width:45%}.optic-anoucement[data-v-63201b73]{background-color:var(--invert)}.optic-anoucement ul[data-v-63201b73]{display:flex;list-style:none;justify-content:space-evenly;align-items:center;height:30px}img[data-v-63201b73]{width:100%}.optic-anoucement ul li h3[data-v-63201b73]{font-size:10px}.shop-tile[data-v-63201b73]{display:flex;flex-direction:column;margin-bottom:40px}.shop-tile p[data-v-63201b73],a[data-v-63201b73],img[data-v-63201b73]{padding:10px 0}@media only screen and (max-width:1024px){.shop-tile p[data-v-63201b73],a[data-v-63201b73],img[data-v-63201b73]{padding:10px 0;width:100%}.shop-tile-40[data-v-63201b73]{width:100%}.optic-anoucement[data-v-63201b73]{text-align:center}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teamsummertime_vue_vue_type_style_index_0_id_14de1bf8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teamsummertime_vue_vue_type_style_index_0_id_14de1bf8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teamsummertime_vue_vue_type_style_index_0_id_14de1bf8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teamsummertime_vue_vue_type_style_index_0_id_14de1bf8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teamsummertime_vue_vue_type_style_index_0_id_14de1bf8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".optic-socials[data-v-14de1bf8]{list-style:none;flex-direction:row;justify-content:end;margin-top:30px}.optic-socials a[data-v-14de1bf8]{transition:.3s ease;margin-right:15px}.optic-socials a[data-v-14de1bf8]:hover{transition:.3s ease;fill:var(--tst-blue)}.tst-btn[data-v-14de1bf8]{text-align:center;width:25%;align-self:center;font-size:16px;font-weight:700;text-transform:uppercase;background-color:var(--invert);color:var(--primary);transition:.3s ease;padding:5px;margin:5px 15px 25px}.tst-btn[data-v-14de1bf8]:hover{background-color:var(--tst-blue);transition:.3s ease}.optic-tst[data-v-14de1bf8]{display:flex;flex-wrap:wrap;justify-content:space-evenly}.optic-tst-card[data-v-14de1bf8]{display:flex;width:35%;background-color:var(--primary);border-right:2px solid var(--tst-blue);margin:15px;transition:.3s ease}.optic-tst-card:hover h3[data-v-14de1bf8]{color:var(--tst-blue);transition:.3s ease}.optic-tst-card .name[data-v-14de1bf8]{text-transform:capitalize}.optic-tst-card img[data-v-14de1bf8]{height:150px}.optic-btn[data-v-14de1bf8]{width:25%;align-self:center;margin:15px 15px 25px}.tst-content[data-v-14de1bf8]{flex-direction:row}.tst-content[data-v-14de1bf8],.tst-info[data-v-14de1bf8]{display:flex;width:100%}.tst-info[data-v-14de1bf8]{flex-direction:column;margin-left:35px;align-self:center}@media only screen and (max-width:1024px){.optic-tst[data-v-14de1bf8]{flex-direction:column}.optic-tst-card[data-v-14de1bf8]{width:auto}.tst-btn[data-v-14de1bf8]{width:60%}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shop-tiles.vue?vue&type=template&id=63201b73&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"optic-anoucement\" data-v-63201b73><ul class=\"optic-container\" data-v-63201b73><li data-v-63201b73><h3 class=\"invert-font\" data-v-63201b73>\n          THIS IS A PRE-ORDER. ORDERS WILL SHIP ON DECEMBER 1ST.\n        </h3></li></ul></div> <div class=\"optic-container\" data-v-63201b73><h3 class=\"optic-title\" data-v-63201b73>Shop</h3> <div class=\"shop-tiles-container\" data-v-63201b73>"+(_vm._ssrList((_vm.shopItem),function(item,index){return ("<div class=\"shop-tile-40\" data-v-63201b73><div class=\"shop-tile\" data-v-63201b73><h3 data-v-63201b73>"+_vm._ssrEscape(_vm._s(_vm.shopItem[index].title))+"</h3> <p data-v-63201b73>"+_vm._ssrEscape(_vm._s(_vm.shopItem[index].desc))+"</p> <img"+(_vm._ssrAttr("src",_vm.shopItem[index].img))+(_vm._ssrAttr("alt",_vm.shopItem[index].alt))+" data-v-63201b73> <a"+(_vm._ssrAttr("href",_vm.shopItem[index].link))+" target=\"_blank\" class=\"optic-btn\" data-v-63201b73>View Item</a></div></div>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/shop-tiles.vue?vue&type=template&id=63201b73&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shop-tiles.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var shop_tilesvue_type_script_lang_js_ = ({
  data() {
    return {
      shopItem: [{
        title: "OpTic Hoodie",
        desc: "This is a pre-order. Orders will ship on DECEMBER 1st.",
        img: "/optic-livesite/shop/optic-hoodie.jpg",
        alt: "OpTic Founders Hoodie",
        link: "https://opticgaming.tv/products/optic-founders-hoodie"
      }, {
        title: "OpTic Basic Tee",
        desc: "This is a pre-order. Orders will ship on DECEMBER 1st.",
        img: "/optic-livesite/shop/optic-tee.jpg",
        alt: "OpTic Founders Tee",
        link: "https://opticgaming.tv/products/optic-founders-tee"
      }, {
        title: "OpTic Snap Back",
        desc: "This is a pre-order. Orders will ship on DECEMBER 1st.",
        img: "/optic-livesite/shop/optic-hat.jpg",
        alt: "OpTic Founders Hat",
        link: "https://opticgaming.tv/products/optic-founders-hat"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/shop-tiles.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_shop_tilesvue_type_script_lang_js_ = (shop_tilesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/shop-tiles.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(46)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_shop_tilesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "63201b73",
  "65f27b12"
  
)

/* harmony default export */ var shop_tiles = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/teamsummertime.vue?vue&type=template&id=14de1bf8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"backgroundf3 flex"},[_vm._ssrNode("<h3 class=\"optic-title\" data-v-14de1bf8>Meet team summertime</h3> <div class=\"optic-tst\" data-v-14de1bf8>"+(_vm._ssrList((_vm.tst),function(item,index){return ("<div class=\"optic-tst-card\" data-v-14de1bf8><div class=\"tst-content\" data-v-14de1bf8><img"+(_vm._ssrAttr("src",_vm.tst[index].img))+" data-v-14de1bf8> <div class=\"tst-info\" data-v-14de1bf8><h3 data-v-14de1bf8>"+_vm._ssrEscape(_vm._s(_vm.tst[index].ign))+"</h3> <p class=\"name\" data-v-14de1bf8>"+_vm._ssrEscape(_vm._s(_vm.tst[index].name))+"</p> <ul class=\"optic-socials flex\" data-v-14de1bf8><a"+(_vm._ssrAttr("href",_vm.tst[index].twitter))+" target=\"_blank\" data-v-14de1bf8><li data-v-14de1bf8><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" data-v-14de1bf8><path d=\"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z\" data-v-14de1bf8></path></svg></li></a> <a"+(_vm._ssrAttr("href",_vm.tst[index].insta))+" target=\"_blank\" data-v-14de1bf8><li data-v-14de1bf8><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" data-v-14de1bf8><path d=\"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z\" data-v-14de1bf8></path></svg></li></a></ul></div></div></div>")}))+"</div> <a href=\"/optic-livesite/teamsummertime\" class=\"tst-btn\" data-v-14de1bf8>Meet TST</a>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/teamsummertime.vue?vue&type=template&id=14de1bf8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/teamsummertime.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var teamsummertimevue_type_script_lang_js_ = ({
  data() {
    return {
      tst: [{
        ign: "Hitch",
        name: "Davis Edwards",
        img: "/optic-livesite/tst/hitch.webp",
        twitter: "https://twitter.com/hitchariide",
        insta: "https://www.instagram.com/hitchariide/"
      }, {
        ign: "Blake",
        name: "Blake Cissel",
        img: "/optic-livesite/tst/blake.jpg",
        twitter: "https://twitter.com/blakecissel",
        insta: "https://www.instagram.com/blakecissel/"
      }, {
        ign: "Jorge",
        name: "Jorge Estrada",
        img: "/optic-livesite/tst/jorge.jpeg",
        twitter: "https://twitter.com/JorgeSummertime",
        insta: "https://www.instagram.com/JorgeSummertime/"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/teamsummertime.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_teamsummertimevue_type_script_lang_js_ = (teamsummertimevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/teamsummertime.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(48)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_teamsummertimevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "14de1bf8",
  "784ac7a2"
  
)

/* harmony default export */ var teamsummertime = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0c2ee7e2", content, true, context)
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f3c0e370", content, true, context)
};

/***/ }),
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_title_bar_vue_vue_type_style_index_0_id_3e599ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_title_bar_vue_vue_type_style_index_0_id_3e599ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_title_bar_vue_vue_type_style_index_0_id_3e599ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_title_bar_vue_vue_type_style_index_0_id_3e599ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_title_bar_vue_vue_type_style_index_0_id_3e599ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media only screen and (max-width:420px){.slide-container[data-v-3e599ab2]{display:flex;width:100%;flex-direction:column;align-items:baseline;color:var(--primary);position:absolute;align-self:center;bottom:40px}.slide-container a[data-v-3e599ab2]{color:var(--primary);text-transform:uppercase;font-weight:700;background-color:var(--optic-green);padding:5px 25px;margin:10px 0;border:0 solid;text-decoration:none;transition:.5s ease}.slide-container a[data-v-3e599ab2]:hover{color:var(--optic-green);background-color:var(--primary);transition:.5s ease}.slide-container h2[data-v-3e599ab2],.slide-container h3[data-v-3e599ab2]{color:var(--primary)}.slide-container h3[data-v-3e599ab2]{text-transform:uppercase}.slider>img[data-v-3e599ab2]{height:500px;width:100%;position:absolute;z-index:-1;-o-object-fit:cover;object-fit:cover;filter:brightness(.5)}.wrapper[data-v-3e599ab2]{display:flex;margin-top:50px;width:100%;align-self:center}.wrapper div[data-v-3e599ab2]{width:100%;margin:0 7px;align-self:flex-end;transition:.2s ease;box-shadow:inset 0 2px var(--primary);padding-top:15px;transition:all .2s ease}.wrapper div.selected[data-v-3e599ab2]{box-shadow:inset 0 4px var(--optic-green);transition:all .2s ease}.wrapper p[data-v-3e599ab2]{font-size:0}.slider[data-v-3e599ab2]{position:relative;width:100%;height:500px}.fade[data-v-3e599ab2]{-webkit-animation:fade-data-v-3e599ab2 2s ease;animation:fade-data-v-3e599ab2 2s ease}@-webkit-keyframes fade-data-v-3e599ab2{0%{opacity:0}to{opacity:1%}}@keyframes fade-data-v-3e599ab2{0%{opacity:0}to{opacity:1%}}}@media only screen and (min-width:421px){.wrapper[data-v-3e599ab2]{display:flex;margin-top:50px}.wrapper div[data-v-3e599ab2]{margin-right:15px;width:250px;height:75px;overflow:hidden;align-self:flex-end;transition:.2s ease;color:var(--primary);box-shadow:inset 0 2px var(--primary);padding-top:15px;transition:all .2s ease}.wrapper div.selected[data-v-3e599ab2]{box-shadow:inset 0 4px var(--optic-green);transition:all .2s ease}.wrapper div[data-v-3e599ab2]:hover{cursor:pointer;transform:translateY(4px);transition:.2s ease}.slide-container[data-v-3e599ab2]{display:flex;flex-direction:column;align-items:baseline;width:1000px;align-self:center}.slider>img[data-v-3e599ab2]{position:absolute;top:0;left:0;filter:brightness(.5);height:800px;width:100%;-o-object-fit:cover;object-fit:cover;z-index:-1}.slider>img[data-v-3e599ab2]:before{background:linear-gradient(90deg,transparent,#000);content:\"\"}.slide-container a[data-v-3e599ab2]{color:var(--primary);text-transform:uppercase;font-weight:700;background-color:var(--optic-green);padding:10px 50px;margin:10px 0;border:0 solid;text-decoration:none;transition:.5s ease}.slide-container a[data-v-3e599ab2]:hover{color:var(--invert);background-color:var(--primary);transition:.5s ease}.slide-container h2[data-v-3e599ab2],.slide-container h3[data-v-3e599ab2]{color:var(--primary)}.slide-container h3[data-v-3e599ab2]{text-transform:uppercase}.slider[data-v-3e599ab2]{position:relative;width:100%;height:800px;display:flex}.fade[data-v-3e599ab2]{-webkit-animation:fade-data-v-3e599ab2 0s ease;animation:fade-data-v-3e599ab2 0s ease}@-webkit-keyframes fade-data-v-3e599ab2{0%{opacity:0}to{opacity:1%}}@keyframes fade-data-v-3e599ab2{0%{opacity:0}to{opacity:1%}}}@media only screen and (min-device-width:768px) and (max-device-width:1024px) and (orientation:portrait){.slide-container[data-v-3e599ab2]{display:flex;width:100%;flex-direction:column;align-items:baseline;color:var(--primary);position:absolute;align-self:center;bottom:40px}.slide-container a[data-v-3e599ab2]{color:var(--primary);text-transform:uppercase;font-weight:700;background-color:var(--optic-green);padding:5px 25px;margin:10px 0;border:0 solid;text-decoration:none;transition:.5s ease}.slide-container a[data-v-3e599ab2]:hover{color:var(--optic-green);background-color:var(--primary);transition:.5s ease}.slide-container h2[data-v-3e599ab2],.slide-container h3[data-v-3e599ab2]{color:var(--primary)}.slide-container h3[data-v-3e599ab2]{text-transform:uppercase}.slider>img[data-v-3e599ab2]{height:500px;width:100%;position:absolute;z-index:-1;-o-object-fit:cover;object-fit:cover;filter:brightness(.5)}.wrapper[data-v-3e599ab2]{display:flex;margin-top:50px;width:100%;align-self:center}.wrapper div[data-v-3e599ab2]{width:100%;margin:0 7px;align-self:flex-end;transition:.2s ease;box-shadow:inset 0 2px var(--primary);padding-top:15px;transition:all .2s ease}.wrapper div.selected[data-v-3e599ab2]{box-shadow:inset 0 4px var(--optic-green);transition:all .2s ease}.wrapper p[data-v-3e599ab2]{font-size:0}.slider[data-v-3e599ab2]{position:relative;width:100%;height:500px}.fade[data-v-3e599ab2]{-webkit-animation:fade-data-v-3e599ab2 2s ease;animation:fade-data-v-3e599ab2 2s ease}@-webkit-keyframes fade-data-v-3e599ab2{0%{opacity:0}to{opacity:1%}}@keyframes fade-data-v-3e599ab2{0%{opacity:0}to{opacity:1%}}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feature_video_vue_vue_type_style_index_0_id_41b41c11_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feature_video_vue_vue_type_style_index_0_id_41b41c11_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feature_video_vue_vue_type_style_index_0_id_41b41c11_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feature_video_vue_vue_type_style_index_0_id_41b41c11_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feature_video_vue_vue_type_style_index_0_id_41b41c11_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".video-container[data-v-41b41c11]{width:100%;height:640px;display:flex}.video-container video[data-v-41b41c11]{width:100%;-o-object-fit:cover;object-fit:cover}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=b9ff81b2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('menubar'),_vm._ssrNode(" "),_c('titlebar'),_vm._ssrNode(" "),_c('shop'),_vm._ssrNode(" "),_c('players'),_vm._ssrNode(" "),_c('feature'),_vm._ssrNode(" "),_c('tst'),_vm._ssrNode(" "),_c('sitefooter')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=b9ff81b2&scoped=true&

// EXTERNAL MODULE: ./components/menu-bar.vue + 4 modules
var menu_bar = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/title-bar.vue?vue&type=template&id=3e599ab2&scoped=true&
var title_barvue_type_template_id_3e599ab2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"slider\" data-v-3e599ab2><img"+(_vm._ssrAttr("src",_vm.banner[_vm.currentSlide].image))+" class=\"fade\" data-v-3e599ab2> <div class=\"slide-container optic-container\" data-v-3e599ab2><h3 data-v-3e599ab2>"+_vm._ssrEscape(_vm._s(_vm.banner[_vm.currentSlide].category))+"</h3> <h2 data-v-3e599ab2>"+_vm._ssrEscape(_vm._s(_vm.banner[_vm.currentSlide].title))+"</h2> <a"+(_vm._ssrAttr("href",_vm.banner[_vm.currentSlide].url))+" target=\"_blank\" data-v-3e599ab2>"+_vm._ssrEscape(_vm._s(_vm.banner[_vm.currentSlide].btntext))+"</a> <div class=\"wrapper\" data-v-3e599ab2>"+(_vm._ssrList((_vm.banner),function(item,index){return ("<div"+(_vm._ssrClass(null,{selected: _vm.currentSlide == index}))+" data-v-3e599ab2><p class=\"invert-font\" data-v-3e599ab2>"+_vm._ssrEscape(_vm._s(item.description))+"</p></div>")}))+"</div></div></div> <div class=\"break\" data-v-3e599ab2></div>")])}
var title_barvue_type_template_id_3e599ab2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/title-bar.vue?vue&type=template&id=3e599ab2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/title-bar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var title_barvue_type_script_lang_js_ = ({
  data() {
    return {
      currentSlide: 0,
      banner: [{
        category: "call of duty",
        title: "Optic Chicago",
        image: "/optic-livesite/heros/slide_1_2808x.jpg",
        description: "OpTic Gaming return to the Call Of Duty World League. Welcome, OpTic Chicago!",
        url: "/optic-livesite/players",
        btntext: 'Meet The Team'
      }, {
        category: "team summertime",
        title: "Join OpTic",
        image: "/optic-livesite/banners/tst.jpg",
        description: "OpTic Hitch returns home, and bring OpTic Blake & OpTic Jorge with him. Welcome Team Summertime to the #GreenWall",
        url: "/optic-livesite/teamsummertime",
        btntext: 'View Their Profiles'
      }, {
        category: "Merch",
        title: "Founders Edition",
        image: "/optic-livesite/heros/slide_3_2808x.jpg",
        description: "Shop now for the 2020 OpTic Founders merchandise. Welcome back to the #GreenWall",
        url: "https://opticgaming.tv/",
        btntext: 'Shop Now'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/title-bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_title_barvue_type_script_lang_js_ = (title_barvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/title-bar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(70)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_title_barvue_type_script_lang_js_,
  title_barvue_type_template_id_3e599ab2_scoped_true_render,
  title_barvue_type_template_id_3e599ab2_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "3e599ab2",
  "7982e3a5"
  
)

/* harmony default export */ var title_bar = (component.exports);
// EXTERNAL MODULE: ./components/shop-tiles.vue + 4 modules
var shop_tiles = __webpack_require__(50);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/feature-video.vue?vue&type=template&id=41b41c11&scoped=true&
var feature_videovue_type_template_id_41b41c11_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mobile-hidden"},[_vm._ssrNode("<div class=\"video-container\" data-v-41b41c11><video src=\"/optic-livesite/video/feature.mp4\" autoplay=\"autoplay\" muted=\"muted\" data-v-41b41c11></video></div>")])}
var feature_videovue_type_template_id_41b41c11_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/feature-video.vue?vue&type=template&id=41b41c11&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/feature-video.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var feature_videovue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/feature-video.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_feature_videovue_type_script_lang_js_ = (feature_videovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/feature-video.vue



function feature_video_injectStyles (context) {
  
  var style0 = __webpack_require__(72)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var feature_video_component = Object(componentNormalizer["a" /* default */])(
  components_feature_videovue_type_script_lang_js_,
  feature_videovue_type_template_id_41b41c11_scoped_true_render,
  feature_videovue_type_template_id_41b41c11_scoped_true_staticRenderFns,
  false,
  feature_video_injectStyles,
  "41b41c11",
  "6e746ceb"
  
)

/* harmony default export */ var feature_video = (feature_video_component.exports);
// EXTERNAL MODULE: ./components/footer.vue + 2 modules
var footer = __webpack_require__(33);

// EXTERNAL MODULE: ./components/players.vue + 4 modules
var players = __webpack_require__(43);

// EXTERNAL MODULE: ./components/teamsummertime.vue + 4 modules
var teamsummertime = __webpack_require__(51);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    menubar: menu_bar["a" /* default */],
    shop: shop_tiles["a" /* default */],
    feature: feature_video,
    players: players["default"],
    sitefooter: footer["a" /* default */],
    tst: teamsummertime["a" /* default */],
    titlebar: title_bar
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue



function pages_injectStyles (context) {
  
  
}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  pages_injectStyles,
  "b9ff81b2",
  "048544b7"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/* nuxt-component-imports */
installComponents(pages_component, {Players: __webpack_require__(43).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map