function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* {[The file is published on the basis of YetiForce Public License 3.0 that can be found in the following directory: licenses/LicenseEN.txt or yetiforce.com]} */

/* script */
import getters from "/src/store/getters.js";
import LeftMenu from "/src/modules/Core/modules/Menu/components/LeftMenu.js";
import YfHeader from "/src/modules/Core/components/YfHeader.js";
import YfFooter from "/src/modules/Core/components/YfFooter.js";
var __vue_script__ = {
  name: 'Basic',
  components: {
    LeftMenu: LeftMenu,
    YfHeader: YfHeader,
    YfFooter: YfFooter
  },
  data: function data() {
    return {
      leftDrawerOpen: false,
      miniState: this.$q.platform.is.desktop,
      menuEvents: true
    };
  },
  computed: _objectSpread({}, Vuex.mapGetters({
    isLoggedIn: getters.Core.Users.isLoggedIn
  })),
  methods: {
    openURL: function openURL() {
      this.route.openURL;
    }
  }
  /* template */

};

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('q-layout', {
    attrs: {
      "view": "hHh lpR fFf"
    }
  }, [_vm.isLoggedIn ? [_c('yf-header', [_c('template', {
    slot: "left"
  }, [_c('q-btn', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.$q.platform.is.desktop,
      expression: "!$q.platform.is.desktop"
    }],
    attrs: {
      "dense": "",
      "flat": "",
      "round": "",
      "icon": "mdi-menu"
    },
    on: {
      "click": function click($event) {
        _vm.leftDrawerOpen = !_vm.leftDrawerOpen;
      }
    }
  })], 1)], 2), _vm._v(" "), _c('q-drawer', {
    attrs: {
      "content-class": "bg-blue-grey-10 text-white",
      "mini": _vm.miniState ? _vm.miniState : false,
      "width": 200,
      "breakpoint": 500,
      "show-if-above": _vm.miniState
    },
    on: {
      "mouseover": function mouseover($event) {
        _vm.miniState = false && _vm.menuEvents;
      },
      "mouseout": function mouseout($event) {
        _vm.miniState = true && _vm.menuEvents;
      }
    },
    model: {
      value: _vm.leftDrawerOpen,
      callback: function callback($$v) {
        _vm.leftDrawerOpen = $$v;
      },
      expression: "leftDrawerOpen"
    }
  }, [_c('q-scroll-area', {
    staticClass: "menuItemsContainer",
    staticStyle: {
      "height": "calc(100% - 56px)"
    }
  }, [_c('left-menu')], 1), _vm._v(" "), _c('q-separator', {
    attrs: {
      "dark": ""
    }
  }), _vm._v(" "), _c('q-item', {
    staticClass: "fixed-bottom"
  }, [_c('q-item-section'), _vm._v(" "), _c('q-item-section', {
    staticClass: "justify-end"
  }, [_c('q-toggle', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.$q.platform.is.desktop,
      expression: "$q.platform.is.desktop"
    }],
    staticClass: "col-shrink",
    attrs: {
      "true-value": false,
      "false-value": true,
      "icon": "mdi-pin"
    },
    model: {
      value: _vm.menuEvents,
      callback: function callback($$v) {
        _vm.menuEvents = $$v;
      },
      expression: "menuEvents"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('yf-footer')] : _vm._e(), _vm._v(" "), _c('q-page-container', [_c('router-view')], 1)], 2)], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-7d59d90f_0", {
    source: ".src-layouts-menuItemsContainer-9xG3{height:calc(100% - 56px)}",
    map: undefined,
    media: undefined
  });
  Object.defineProperty(this, "$style", {
    value: {
      "menuItemsContainer": "src-layouts-menuItemsContainer-9xG3"
    }
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* component normalizer */

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

  component.__file = "Basic.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  if (true) {
    var hook;

    if (false) {
      // In SSR.
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      component._ssrRegister = hook;
    } else if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        var originalRender = component.render;

        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */


function __vue_create_injector__() {
  var head = document.head || document.getElementsByTagName('head')[0];
  var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = {
      ids: [],
      parts: [],
      element: undefined
    });

    if (!style.ids.includes(id)) {
      var code = css.source;
      var index = style.ids.length;
      style.ids.push(id);

      if (true && css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        var el = style.element = document.createElement('style');
        el.type = 'text/css';
        if (css.media) el.setAttribute('media', css.media);

        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */


export default __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, __vue_create_injector__, undefined);