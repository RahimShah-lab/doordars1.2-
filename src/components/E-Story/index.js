import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EBooks = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const products = [
        {
            id: 6,
            image: `${process.env.PUBLIC_URL}/assets/images/card066.avif`,
            title: 'AI Launchpad Kit',
            price: '$19.00',
            originalPrice: '$27.00',
            link: '/ai-lounchpadKit',
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
            {/* Sidebar */}
            <div className="col-span-1 flex flex-col space-y-6 bg-white text-justify">
                            {/* Hamburger Menu for Small Screens */}
                            <div className="md:hidden">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                                        />
                                    </svg>
                                </button>
                            </div>
                            {/* Menu List */}
                            <div
                                className={`${
                                    isMenuOpen ? 'block' : 'hidden'
                                } md:block space-y-6 transition-all duration-300 ease-in-out`}
                            >
                                <h4 className="text-xl font-bold">Browsed By:</h4>
                                <ul className="list-none space-y-3 leading-relaxed md:border-r-2 border-gray-300">
                                    <Link to="/products/e-book">
                                        <li className="hover:bg-gray-50 p-2 rounded transition-all duration-200 ease-in-out">
                                            All Products
                                        </li>
                                    </Link>
                                    <Link to="/products/e-book">
                                        <li className="hover:bg-gray-50 p-2 rounded transition-all duration-200 ease-in-out">
                                            E-Books
                                        </li>
                                    </Link>
                                    <Link to="/products/e-kite">
                                        <li className="hover:bg-gray-50 p-2 rounded transition-all duration-200 ease-in-out">
                                            E-Kites
                                        </li>
                                    </Link>
                                    <Link to="/products/e-stories">
                                        <li className="hover:bg-gray-50 p-2 rounded transition-all duration-200 ease-in-out">
                                            E-Stories
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>

            {/* Products Section */}
            <div className="col-span-3">
                <h3 className="text-2xl font-bold mb-6"> E-Stories:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
                        >
                            <Link to={product.link}>
                                {/* Product Image */}
                                <div className="relative">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-60 object-cover"
                                    />
                                    <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                        New Arrival
                                    </span>
                                </div>
                                {/* Product Details */}
                                <div className="p-4">
                                    <h4 className="text-lg font-semibold text-gray-800 truncate">
                                        {product.title}
                                    </h4>
                                    <div className="flex items-center mt-2">
                                        <span className="text-xl font-bold text-green-600">
                                            {product.price}
                                        </span>
                                        <span className="ml-2 text-sm text-gray-500 line-through">
                                            {product.originalPrice}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                            {/* Add to Bag Button */}
                            <button
                                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                            >
                                Add to Bag
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EBooks;
