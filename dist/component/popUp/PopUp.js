"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PopUp;
var _react = _interopRequireDefault(require("react"));
require("./PopUp.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function PopUp(props) {
  return props.trigger ? /*#__PURE__*/_react.default.createElement("div", {
    className: "popup-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      opacity: props.opcityMainBg,
      backgroundColor: props.mainBgColor
    },
    className: "popup-bg"
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: props.bgColorContainerModal
    },
    className: "popup-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => props.setTrigger(false),
    style: {
      backgroundColor: props.bgColorCross
    },
    className: "div-img-cross"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "cross-popup",
    src: "./cross.png"
  })), /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      color: props.fontColor
    }
  }, props.message))) : "";
}