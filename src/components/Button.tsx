import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  const buttonStyle: React.CSSProperties = {
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
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
  };

  const hoverStyle: React.CSSProperties = {
    transform: "translateY(-2px) scale(1.05)",
    boxShadow: "0 12px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <>
      <style>
        {`
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
        `}
      </style>
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          ...buttonStyle,
          ...(isHovered ? hoverStyle : {}),
          animation: isHovered ? "rainbow 1.5s ease-in-out infinite, pulse 2s infinite" : "rainbow 3s ease-in-out infinite",
        }}
      >
        <span style={{
          position: "relative",
          zIndex: 1,
        }}>
          {children}
        </span>
      </button>
    </>
  );
};