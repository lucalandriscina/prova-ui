"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button
});
module.exports = __toCommonJS(index_exports);

// src/components/Button.tsx
var import_react = __toESM(require("react"));
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({ children, onClick }) => {
  const buttonStyle = {
    position: "relative",
    padding: "16px 32px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "white",
    border: "none",
    borderRadius: "50px",
    background: "linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)",
    backgroundSize: "400% 400%",
    cursor: "pointer",
    overflow: "hidden",
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
    transition: "all 0.3s ease",
    animation: "rainbow 3s ease-in-out infinite",
    textTransform: "uppercase",
    letterSpacing: "1px"
  };
  const hoverStyle = {
    transform: "translateY(-2px) scale(1.05)",
    boxShadow: "0 12px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)"
  };
  const [isHovered, setIsHovered] = import_react.default.useState(false);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
          @keyframes rainbow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes pulse {
            0% { box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 0 0 rgba(255,255,255,0.7); }
            70% { box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 0 10px rgba(255,255,255,0); }
            100% { box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 0 0 rgba(255,255,255,0); }
          }
        ` }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        onClick,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        style: {
          ...buttonStyle,
          ...isHovered ? hoverStyle : {},
          animation: isHovered ? "rainbow 1.5s ease-in-out infinite, pulse 2s infinite" : "rainbow 3s ease-in-out infinite"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
          position: "relative",
          zIndex: 1
        }, children })
      }
    )
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
