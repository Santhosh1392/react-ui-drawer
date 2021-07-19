

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

___$insertStyle(".drawer-backdrop {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  background: rgba(0, 0, 0, 0.5);\n  left: 0;\n  z-index: 99999999999999;\n  animation: 0.5s ease-out 0s 1 easeOpacityIn;\n}\n.drawer-backdrop .close-icon {\n  font-size: 36px;\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 0px;\n}\n.drawer-backdrop .drawer-content {\n  position: fixed;\n  height: 100%;\n  background-color: #fff;\n  width: 320px;\n  padding: 15px;\n  box-sizing: border-box;\n}\n.drawer-backdrop .drawer-content.left {\n  left: 0;\n  animation: 0.5s ease-out 0s 1 slideInFromLeft;\n}\n.drawer-backdrop .drawer-content.right {\n  animation: 0.5s ease-out 0s 1 slideInFromRight;\n  right: 0;\n}\n.drawer-backdrop .drawer-content.top {\n  animation: 0.5s ease-out 0s 1 slideInFromTop;\n  top: 0;\n  height: 350px;\n  width: 100%;\n}\n.drawer-backdrop .drawer-content.bottom {\n  animation: 0.5s ease-out 0s 1 slideInFromBottom;\n  bottom: 0;\n  height: 350px;\n  width: 100%;\n}\n\n@keyframes slideInFromLeft {\n  0% {\n    left: -350px;\n  }\n  100% {\n    left: 0;\n  }\n}\n@keyframes slideInFromRight {\n  0% {\n    right: -350px;\n  }\n  100% {\n    right: 0;\n  }\n}\n@keyframes slideInFromTop {\n  0% {\n    top: -350px;\n  }\n  100% {\n    top: 0px;\n  }\n}\n@keyframes slideInFromBottom {\n  0% {\n    bottom: -350px;\n  }\n  100% {\n    bottom: 0px;\n  }\n}\n@keyframes easeOpacityIn {\n  0% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}");

const Drawer = ({children, requestClose, position}) => {
  return (
    React__default['default'].createElement('div', {className: "drawer-backdrop"}, [
      React__default['default'].createElement('div', {className: `drawer-content ${position}`}, [
        React__default['default'].createElement('div', {className: "close-icon", onClick: requestClose}, ["×"]),
        children
      ])
    ])
  )
};

Drawer.defultProps = {
  position: 'left'
};

exports.default = Drawer;
//# sourceMappingURL=index.js.map
