// import { useState } from "react";
// import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [productsDropdown, setProductsDropdown] = useState(false);
//   const [stemDropdown, setStemDropdown] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleLinkClick = () => {
//     setIsMobileMenuOpen(false); // Close the menu when a link is clicked
//   };

//   return (
//     <nav className="bg-[#e2e6f0] text-gray-700 shadow-md z-50 relative">
//       <div className="container mx-auto flex items-center justify-between py-1 px-6">
//         {/* Logo */}
//         <div className="text-2xl font-bold flex items-center space-x-2">
//           <Link to="/" className="hover:opacity-80 transition-opacity duration-200">
//             <img src="/Assets/images/logo.avif" alt="Logo" className="h-10 w-auto" />
//           </Link>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="lg:hidden text-3xl focus:outline-none p-2"
//         >
//           {isMobileMenuOpen ? <FaTimes className="text-gray-700" /> : <FaBars className="text-gray-700" />}
//         </button>

//         {/* Navbar Links (Desktop Version) */}
//         <div className="hidden lg:flex items-center space-x-6">
//           <Link to="/" className="hover:text-black transition-all duration-300">Home</Link>
//           <Link to="/blog" className="hover:text-black transition-all duration-300">Blog</Link>
//           <Link to="/gallery" className="hover:text-black transition-all duration-300">Gallery</Link>

//           {/* Products Dropdown */}
//           <div
//             className="relative group"
//             onMouseEnter={() => setProductsDropdown(true)}
//             onMouseLeave={() => setProductsDropdown(false)}
//           >
//             <button className="hover:text-black transition-all duration-300">Products</button>
//             <div
//               className={`absolute top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg transform transition-transform duration-300 ${
//                 productsDropdown ? "scale-100 opacity-100" : "scale-95 opacity-0"
//               }`}
//             >
//               <Link to="/products/e-book" className="block px-4 py-2 hover:bg-gray-200">E-Book</Link>
//               <Link to="/products/e-kite" className="block px-4 py-2 hover:bg-gray-200">E-Kite</Link>
//               <Link to="/products/e-stories" className="block px-4 py-2 hover:bg-gray-200">E-Stories</Link>
//             </div>
//           </div>

//           {/* STEM Activities Dropdown */}
//           <div
//             className="relative group"
//             onMouseEnter={() => setStemDropdown(true)}
//             onMouseLeave={() => setStemDropdown(false)}
//           >
//             <button className="hover:text-black transition-all duration-300">STEM Activities</button>
//             <div
//               className={`absolute top-full mt-2 w-64 bg-white text-black rounded-md shadow-lg transform transition-transform duration-300 ${
//                 stemDropdown ? "scale-100 opacity-100" : "scale-95 opacity-0"
//               }`}
//             >
//               <Link to="/stem/ai-lounchpad" className="block px-4 py-2 hover:bg-gray-200">AI Launchpad</Link>
//               <Link to="/stem/iot-project" className="block px-4 py-2 hover:bg-gray-200">IoT Project</Link>
//               <Link to="/stem/coding-robotics" className="block px-4 py-2 hover:bg-gray-200">Coding & Robotics</Link>
//             </div>
//           </div>

//           <Link to="/about-us" className="hover:text-black transition-all duration-300">About Us</Link>
//           <Link to="/contact-us" className="hover:text-black transition-all duration-300">Contact Us</Link>

//           {/* Shopping Cart Icon */}
//           <div className="text-gray-700 text-xl cursor-pointer hover:text-black">
//             <FaShoppingCart />
//           </div>
//         </div>

//         {/* Mobile Menu (Only Visible on Small Screens) */}
//         {isMobileMenuOpen && (
//           <div className="absolute top-16 left-0 w-full bg-white text-gray-700 lg:hidden z-50 shadow-md">
//             <Link to="/" className="block px-6 py-3 border-b hover:bg-gray-100" onClick={handleLinkClick}>Home</Link>
//             <Link to="/blog" className="block px-6 py-3 border-b hover:bg-gray-100" onClick={handleLinkClick}>Blog</Link>
//             <Link to="/gallery" className="block px-6 py-3 border-b hover:bg-gray-100" onClick={handleLinkClick}>Gallery</Link>
//             <div className="relative border-b">
//               <button
//                 onClick={() => setProductsDropdown(!productsDropdown)}
//                 className="block w-full text-left px-6 py-3 hover:bg-gray-100"
//               >
//                 Products
//               </button>
//               {productsDropdown && (
//                 <div className="bg-gray-50">
//                   <Link to="/products/e-book" className="block px-6 py-2 hover:bg-gray-200" onClick={handleLinkClick}>E-Book</Link>
//                   <Link to="/products/e-kite" className="block px-6 py-2 hover:bg-gray-200" onClick={handleLinkClick}>E-Kite</Link>
//                   <Link to="/products/e-stories" className="block px-6 py-2 hover:bg-gray-200" onClick={handleLinkClick}>E-Stories</Link>
//                 </div>
//               )}
//             </div>
//             <div className="relative border-b">
//               <button
//                 onClick={() => setStemDropdown(!stemDropdown)}
//                 className="block w-full text-left px-6 py-3 hover:bg-gray-100"
//               >
//                 STEM Activities
//               </button>
//               {stemDropdown && (
//                 <div className="bg-gray-50">
//                   <Link to="/stem/ai-lounchpad" className="block px-6 py-2 hover:bg-gray-200" onClick={handleLinkClick}>AI Launchpad</Link>
//                   <Link to="/stem/iot-project" className="block px-6 py-2 hover:bg-gray-200" onClick={handleLinkClick}>IoT Project</Link>
//                   <Link to="/stem/coding-robotics" className="block px-6 py-2 hover:bg-gray-200" onClick={handleLinkClick}>Coding & Robotics</Link>
//                 </div>
//               )}
//             </div>
//             <Link to="/about-us" className="block px-6 py-3 border-b hover:bg-gray-100" onClick={handleLinkClick}>About Us</Link>
//             <Link to="/contact-us" className="block px-6 py-3 hover:bg-gray-100" onClick={handleLinkClick}>Contact Us</Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;























import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [stemDropdown, setStemDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Close the menu when a link is clicked
  };
  return (
    <nav className="bg-[#f1f1f1] text-gray-700 shadow-sm z-50 relative">
      <div className="container mx-auto flex items-center justify-between py-1 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center space-x-2">
          <Link to="/" className="hover:opacity-80 transition-opacity duration-200">
            <img src={`${process.env.PUBLIC_URL}/assets/images/logo.avif`} alt="Logo" className="h-10 w-auto" />
          </Link>
        </div>
        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-3xl focus:outline-none p-2"
        >
          {isMobileMenuOpen ? (
            <svg
              fill="#000000"
              width="20px"
              height="40px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 455 455"
            >
              <g>
                <polygon points="0,35.354 35.354,0 455,419.646 419.646,455" />
                <polygon points="0,419.646 35.354,455 455,35.354 419.646,0" />
              </g>
            </svg>
          ) : (
            <svg
              fill="#000000"
              width="20px"
              height="40px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 455 455"
            >
              <g>
                <rect y="312.5" width="455" height="50" />
                <rect y="180.5" width="455" height="50" />
                <rect y="50.5" width="455" height="50" />
              </g>
            </svg>
          )}
        </button>
        {/* Navbar Links (Desktop Version) */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link to="/" className="hover:text-black transition-all duration-300">Home</Link>
          <Link to="/blog" className="hover:text-black transition-all duration-300">Blog</Link>
          <Link to="/gallery" className="hover:text-black transition-all duration-300">Gallery</Link>
          {/* Products Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setProductsDropdown(true)}
            onMouseLeave={() => setProductsDropdown(false)}
          >
            <button className="hover:text-black transition-all duration-300">Products</button>
            <div
              className={`absolute top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg transform transition-transform duration-300 ${productsDropdown ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
            >
              <Link to="/products/e-book" className="block px-4 py-2 hover:bg-gray-200">E-Book</Link>
              <Link to="/products/e-kite" className="block px-4 py-2 hover:bg-gray-200">E-Kite</Link>
              <Link to="/products/e-stories" className="block px-4 py-2 hover:bg-gray-200">E-Stories</Link>
            </div>
          </div>
          {/* STEM Activities Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setStemDropdown(true)}
            onMouseLeave={() => setStemDropdown(false)}
          >
            <button className="hover:text-black transition-all duration-300">STEM Activities</button>
            <div
              className={`absolute top-full mt-2 w-64 bg-white text-black rounded-md shadow-lg transform transition-transform duration-300 ${stemDropdown ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
            >
              <Link to="/stem/ai-lounchpad" className="block px-4 py-2 hover:bg-gray-200">AI Launchpad</Link>
              <Link to="/stem/iot-project" className="block px-4 py-2 hover:bg-gray-200">IoT Project</Link>
              <Link to="/stem/coding-robotics" className="block px-4 py-2 hover:bg-gray-200">Coding & Robotics</Link>
            </div>
          </div>
          <Link to="/about-us" className="hover:text-black transition-all duration-300">About Us</Link>
          <Link to="/contact-us" className="hover:text-black transition-all duration-300">Contact Us</Link>
          {/* Shopping Cart Icon */}
          <div className="text-gray-700 text-xl cursor-pointer hover:text-black">
            <svg fill="#000000" version="1.1" id="Capa_1"
              width="20px" height="20px" viewBox="0 0 902.86 902.86"
            >
              <g>
                <g>
                  <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
			 M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"/>
                  <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
			c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
			c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
			C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
			c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
			 M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
			S619.162,694.432,619.162,716.897z"/>
                </g>
              </g>
            </svg>
          </div>
        </div>
        {/* Mobile Menu (Only Visible on Small Screens) */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white text-gray-700 lg:hidden z-50 shadow-md">
            <Link to="/" className="block px-6 py-3 border-b hover:bg-gray-100" onClick={handleLinkClick}>Home</Link>
            <Link to="/blog" className="block px-6 py-3 border-b hover:bg-gray-100" onClick={handleLinkClick}>Blog</Link>
            <Link to="/gallery" className="block px-6 py-3 border-b hover:bg-gray-100" onClick={handleLinkClick}>Gallery</Link>
            <div className="relative border-b">
              <button
                onClick={() => setProductsDropdown(!productsDropdown)}
                className="block w-full text-left px-6 py-3 hover:bg-gray-100"
              >
                Products
              </button>
              {productsDropdown && (
                <div className="bg-gray-50">
                  <Link to="/products/e-book" className="block px-6 py-2 hover:bg-gray-200" onClick={handleLinkClick}>E-Book</Link>
                  <Link to="/products/e-kite" className="block px-6 py-2 hover:bg-gray-200" onClick={handleLinkClick}>E-Kite</Link>
                  <Link to="/products/e-stories" className="block px-6 py-2 hover:bg-gray-200" onClick={handleLinkClick}>E-Stories</Link>
                </div>
              )}
            </div>
            <div className="relative border-b">
              <button
                onClick={() => setStemDropdown(!stemDropdown)}
                className="block w-full text-left px-6 py-3 hover:bg-gray-100"
              >
                STEM Activities
              </button>
              {stemDropdown && (
                <div className="bg-gray-50">
                  <Link to="/stem/ai-lounchpad" className="block px-6 py-2 hover:bg-gray-200" onClick={handleLinkClick}>AI Launchpad</Link>
                  <Link to="/stem/iot-project" className="block px-6 py-2 hover:bg-gray-200" onClick={handleLinkClick}>IoT Project</Link>
                  <Link to="/stem/coding-robotics" className="block px-6 py-2 hover:bg-gray-200" onClick={handleLinkClick}>Coding & Robotics</Link>
                </div>
              )}
            </div>
            <Link to="/about-us" className="block px-6 py-3 border-b hover:bg-gray-100" onClick={handleLinkClick}>About Us</Link>
            <Link to="/contact-us" className="block px-6 py-3 hover:bg-gray-100" onClick={handleLinkClick}>Contact Us</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
