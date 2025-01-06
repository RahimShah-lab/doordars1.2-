import React, { useState } from "react";

function WhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="fixed bottom-8 right-8 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center p-4 rounded-full shadow-2xl transition-all duration-300 transform ${
          isHovered ? "bg-green-700 scale-110 shadow-lg" : "bg-green-500 scale-60"
        }`}
        aria-label="Chat with us on WhatsApp"
      >
        <img
          src= {`${process.env.PUBLIC_URL}/assets/images/icons8-whatsapp.svg`}
          alt="WhatsApp Icon"
          className="w-10 h-10"
        />
      </a>
      {/* Tooltip */}
      {isHovered && (
        <div
          className="absolute top-16 right-1/2 transform translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded-lg shadow-lg opacity-90 transition-opacity duration-300"
          style={{ whiteSpace: "nowrap" }}
        >
          Chat with us on WhatsApp
        </div>
      )}
    </div>
  );
}

export default WhatsApp;
