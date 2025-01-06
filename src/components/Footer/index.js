import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[rgb(203,209,218)] text-gray-700 py-6">
      <div className="container mx-auto px-4">
        {/* Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:underline">Terms and Conditions</Link>
            <Link to="/accessibilityStatement" className="hover:underline">Accessibility Statement</Link>
            <Link to="/cookiePolicy" className="hover:underline">Cookie Policy</Link>
            <Link to="/disclaimer" className="hover:underline">Disclaimer</Link>
          </div>
          {/* Social Media Icons Section */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              {/* Facebook SVG as image */}
              <img src={`${process.env.PUBLIC_URL}/assets/images/icons8-facebook-logo.svg`} alt="Facebook" width="24" height="24" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B923369262562&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              {/* WhatsApp SVG as image */}
              <img src={`${process.env.PUBLIC_URL}/assets/images/icons8-whatsapp.svg`} alt="WhatsApp" width="24" height="24" />
            </a>
            <a
              href="https://www.youtube.com/lutfullahkakakhel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400"
            >
              {/* YouTube SVG as image */}
              <img src={`${process.env.PUBLIC_URL}/assets/images/icons8-youtube.svg`} alt="YouTube" width="24" height="24" />
            </a>
          </div>
        </div>
        {/* Copyright Section */}
      </div>
    </footer>
  );
};

export default Footer;
