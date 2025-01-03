import { Link } from 'react-router-dom';

function Kit() {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image Section */}
                <div className="col-span-1">
                    <img 
                        src="/assets/images/card066.avif" 
                        alt="card-06" 
                        className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 transform"
                    />
                </div>
                {/* Text Section */}
                <div className="col-span-1">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                        The Garden of Harmony
                    </h2>
                    <h3 className="text-xl md:text-3xl font-semibold text-gray-600">DoorDars e-stories for children</h3>
                    <p className="text-lg md:text-xl text-green-600 font-semibold">Free</p>
                    {/* Add to Bag Button with Link */}
                    <Link to="">
                        <button className="border py-3 px-5 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transform transition duration-300 ease-in-out">
                            Add to Bag
                        </button>
                    </Link>
                    <p className="text-base md:text-lg text-gray-700 mt-4">
                        Discover 'The Garden of Harmony,' an exquisitely illustrated children's e-story inspired by the timeless tales of Hakayat e Saadi. 
                        Step into a captivating, garden-themed world where vibrant visuals and engaging, educational narratives ignite young imaginations. 
                        Ideal for fostering a love for reading and learning, this enchanting story makes a perfect gift for the little ones in your life.
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
