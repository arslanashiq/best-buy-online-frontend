import React from "react";
import backgroundImg from "../assets/background.png";

function BackgroundImage({ children }) {
  return (
    <div
      style={{
        background: `url(${backgroundImg}) no-repeat center center/cover`,
        minHeight: "100vh",
        height: "100%",
        width: "100vw",
      }}
    >
      {children}
    </div>
  );
}

export default BackgroundImage;
