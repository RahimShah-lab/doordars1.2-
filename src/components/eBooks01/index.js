// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const EBooks = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const products = [
//         {
//             id: 1,
//             image: '/assets/images/card01.avif',
//             title: 'E-Book 1',
//             price: '$25.00',
//             originalPrice: '$30.00',
//             link: 'https://example.com/ebook1',
//         },
//         {
//             id: 2,
//             image: '/assets/images/card-02.png',
//             title: 'E-Book 2',
//             price: '$20.00',
//             originalPrice: '$28.00',
//             link: 'https://example.com/ebook2',
//         },
//         {
//             id: 3,
//             image: '/assets/images/card03.png',
//             title: 'E-Book 3',
//             price: '$15.00',
//             originalPrice: '$22.00',
//             link: 'https://example.com/ebook3',
//         },
//         {
//             id: 4,
//             image: '/assets/images/card04.png',
//             title: 'E-Book 4',
//             price: '$18.00',
//             originalPrice: '$24.00',
//             link: 'https://example.com/ebook4',
//         }
//     ];

//     return (
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
//             {/* Left Column */}
//             <div className="col-span-1 flex flex-col space-y-6 bg-white text-justify">
//                 {/* Hamburger Menu for Small Screens */}
//                 <div className="md:hidden">
//                     <button
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                         className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
//                     >
//                         <svg
//                             className="w-6 h-6"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d={
//                                     isMenuOpen
//                                         ? 'M6 18L18 6M6 6l12 12'
//                                         : 'M4 6h16M4 12h16m-7 6h7'
//                                 }
//                             />
//                         </svg>
//                     </button>
//                 </div>

//                 {/* Menu List */}
//                 <div
//                     className={`${
//                         isMenuOpen ? 'block' : 'hidden'
//                     } md:block space-y-6 transition-all duration-300 ease-in-out`}
//                 >
//                     <h4 className="text-xl font-bold">Browsed By:</h4>
//                     <ul className="list-none space-y-3 leading-relaxed md:border-r-2 border-gray-500">
//                         <Link to="/doordars/src/pages/all-products.js">
//                             <li className="hover:bg-gray-50 p-2 rounded transition-all duration-200 ease-in-out">
//                                 All Products
//                             </li>
//                         </Link>
//                         <Link to="/doordars/src/pages/e-book.js">
//                             <li className="hover:bg-gray-50 p-2 rounded transition-all duration-200 ease-in-out">
//                                 E-Books
//                             </li>
//                         </Link>
//                         <Link to="/ekites">
//                             <li className="hover:bg-gray-50 p-2 rounded transition-all duration-200 ease-in-out">
//                                 E-Kites
//                             </li>
//                         </Link>
//                         <Link to="/estories">
//                             <li className="hover:bg-gray-50 p-2 rounded transition-all duration-200 ease-in-out">
//                                 E-Stories
//                             </li>
//                         </Link>
//                     </ul>
//                 </div>
//             </div>

//             {/* Products Section */}
//             <div className="col-span-3 bg-white text-justify">
//                 <h3 className="text-2xl font-bold py-6">All Products:</h3>
//                 {/* Cards Section */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-3">
//                     {/* Card */}
//                     {products.map((product) => (
//                         <div
//                             key={product.id}
//                             className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
//                         >
//                             <a
//                                 href={product.link}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 {/* Product Image */}
//                                 <div className="relative">
//                                     <img
//                                         src={product.image}
//                                         alt={product.title}
//                                         className="w-full h-48 object-cover"
//                                     />
//                                     <span className="absolute top-2 right-2 bg-gray-600 text-white text-xs font-semibold px-2 py-1 rounded">
//                                         New Arrival
//                                     </span>
//                                 </div>

//                                 {/* Product Details */}
//                                 <div className="p-4">
//                                     {/* Title */}
//                                     <h3 className="text-lg font-semibold text-gray-800">
//                                         {product.title}
//                                     </h3>

//                                     {/* Price */}
//                                     <div className="flex items-center mt-2">
//                                         <span className="text-xl font-bold text-green-600">
//                                             {product.price}
//                                         </span>
//                                         <span className="ml-2 text-sm text-gray-500 line-through">
//                                             {product.originalPrice}
//                                         </span>
//                                     </div>
//                                 </div>
//                             </a>
//                             {/* Button */}
//                             <button
//                                 className="w-full mt-4 py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
//                             >
//                                 Add to Bag
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EBooks;
