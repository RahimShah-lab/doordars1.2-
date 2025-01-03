import { Link } from 'react-router-dom';

function Kit() {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image Section */}
                <div className="col-span-1">
                    <img
                        src="/assets/images/card-02.png"
                        alt="card-06"
                        className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 transform"
                    />
                </div>
                {/* Text Section */}
                <div className="col-span-1 space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                        The AI Classroom Revolution: Transforming Education for the Future
                    </h2>
                    <h3 className="text-xl md:text-3xl font-semibold text-gray-600">A modern approach to educational innovation
                    </h3>
                    {/* Price */}
                    <div className="flex items-center my-2">
                        <span className="text-xl font-bold text-green-600">Rs: 500.00</span>
                        <span className="ml-2 text-sm text-gray-500 line-through">Rs: 300.00</span>
                    </div>
                    {/* Add to Bag Button with Link */}
                    <Link to="">
                        <button className="border py-3 px-5 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transform transition duration-300 ease-in-out">
                            Add to Bag
                        </button>
                    </Link>
                    <p className="text-base md:text-lg text-gray-700 mt-4">Discover the future of education with 'The AI Classroom Revolution: Transforming Education for the Future.' This captivating book delves into the profound impact of artificial intelligence on modern classrooms, providing invaluable insights for educators and tech enthusiasts alike. Learn how AI is reimagining teaching methods and shaping the educational landscape for generations to come. This essential read is available in a sleek, hardcover format, measuring 7 x 10 inches. Don't miss your chance to be at the forefront of educational innovation.
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
