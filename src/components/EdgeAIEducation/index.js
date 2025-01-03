import { Link } from 'react-router-dom';

function Kit() {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image Section */}
                <div className="col-span-1">
                    <img 
                        src="/assets/images/card 01.avif" 
                        alt="card-06" 
                        className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 transform"
                    />
                </div>
                {/* Text Section */}
                <div className="col-span-1 space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                    Edge AI Education in Schools
                    </h2>
                    <h3 className="text-xl md:text-3xl font-semibold text-gray-600">Practical Microcontroller Projects for Future Innovators</h3>
                    {/* Price */}
                    <div className="flex items-center my-2 py-2">
                                        <span className="text-xl font-bold text-green-600">Rs: 700.00</span>
                                        <span className="ml-2 text-sm text-gray-500 line-through">Rs: 1000.00</span>
                                    </div>
                    {/* Add to Bag Button with Link */}
                    <Link to="">
                        <button className="border py-3 px-5 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transform transition duration-300 ease-in-out">
                            Add to Bag
                        </button>
                    </Link>
                    <p className="text-base md:text-lg text-gray-700 mt-4">
                    Unlock the potential of Edge AI in education with our groundbreaking guide, 'Edge AI Education in Schools.' This comprehensive manual walks you through the integration of Edge AI technology into educational curriculums, featuring hands-on microcontroller projects designed to inspire and equip the next generation of innovators. Perfect for educators, students, and tech enthusiasts, this book provides the essential skills and knowledge required to make AI accessible and exciting. Available in a sleek, compact paperback format, ensuring convenience and durability for everyday use. Elevate your teaching and learning experience with this essential resource!
                    </p>
                </div>
            </div>
            {/* Second Section with Background Color */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 bg-[rgb(226,230,240)] p-6 rounded-lg shadow-lg">
                {/* Text Section */}
                <div className="col-span-1">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                        STEM Meets AI
                    </h2>
                    <p className="text-xl md:text-2xl py-5 text-green-600 font-semibold">Engaging Activities for Young Innovators | eBook</p>
                    {/* Add to Bag Button with Link */}
                    <Link to="">
                        <button className="border py-3 px-5 md:mt-5 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transform transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Add to Bag
                        </button>
                    </Link>
                </div>
                {/* Image Section */}
                <div className="col-span-1">
                    <img 
                        src="/assets/images/card03.png" 
                        alt="card-06" 
                        className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 transform"
                    />
                </div>
            </div>
        </div>
    );
}

export default Kit;
