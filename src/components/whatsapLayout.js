import React from "react";
import WhatsApp from "./whatsap/index"; // Path to your WhatsApp component

function Layout({ children }) {
  return (
    <div className="relative">
      {children}
      <WhatsApp />
    </div>
  );
}

export default Layout;
