// src/components/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({ children, onClick }) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick,
      style: {
        padding: "10px 20px",
        background: "black",
        color: "white",
        border: "none",
        borderRadius: "8px"
      },
      children
    }
  );
};
export {
  Button
};
