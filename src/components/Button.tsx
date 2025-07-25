import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        background: "black",
        color: "white",
        border: "none",
        borderRadius: "8px",
      }}
    >
      {children}
    </button>
  );
};