"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PopUp;
var _react = _interopRequireWildcard(require("react"));
require("./PopUp.scss");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function PopUp(props) {
  //   si trigger est vrai c'est qu'on a submit le formulaire alors on affiche la popup et lorqu'on enleve la popup avec la croix elle se reinitialise automatiquement a false 
  //  et attend le prochain submit pour s'afficher  
  return props.trigger ? /*#__PURE__*/_react.default.createElement("div", {
    className: "popup-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "popup-bg"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "popup-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => props.setTrigger(false),
    className: "div-img-cross"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "img-cross",
    src: "./signe-de-la-croix.png"
  })), /*#__PURE__*/_react.default.createElement("h2", null, "Employee Created"))) : "";
}