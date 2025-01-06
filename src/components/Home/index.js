import React, { useEffect } from "react";
import 'aos/dist/aos.css'; // This should import the AOS CSS correctly
import AOS from 'aos'; // This imports the AOS functionality

function Home() {
    useEffect(() => {
        AOS.init({
            duration: 300,
        });
    }, []);
    return (
        <>
           {/* Main Banner Section */}
<div className="relative bg-cover bg-center text-center font-bold py-16" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home-image.jpg)` }}>
    <div className="absolute inset-0 bg-black opacity-55"></div> {/* Overlay */}
    <h1 className="md:w-[35%] mx-auto text-2xl md:text-3xl text-white px-4 md:p-10 relative z-10">
        Artificial Intelligence in Education DoorDars
    </h1>
</div>
            {/* Welcome Section */}
            <div className=" md:py-10 py-8">
                <h2
                    className="text-black text-3xl md:text-4xl font-semibold text-center px-6 md:px-12 pb-6"
                    data-aos="fade-up"
                >
                    Welcome to DoorDars-SMC: Empowering Education with AI and Hands-On Learning!
                </h2>
                <p
                    className="px-6 md:px-16 text-lg md:text-xl pb-6 md:pb-10 text-center"
                    data-aos="fade-up"
                >
                    Dive into a world where education meets innovation. We are dedicated to enhancing learning in schools
                    through the power of AI and hands-on experiments. Explore a wealth of resources and activities designed
                    to inspire curiosity and creativity:
                </p>
                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 mb-8">
                    {[
                        {
                            title: "AI for Education",
                            description: "Discover how cutting-edge AI techniques transform classrooms into interactive and personalized learning environments.",
                            image: `${process.env.PUBLIC_URL}/assets/images/ai-children-classroom.avif`,
                        },
                        
                        {
                            title: "Hands-On STEM Projects",
                            description:
                                "Engage with practical experiments using Raspberry Pi Pico, ESP32, and IoT technology to bring STEM concepts to life.",
                                image: `${process.env.PUBLIC_URL}/assets/images/dht-predicted.avif`,
                        },
                        {
                            title: "Digital Learning Resources",
                            description:
                                "Access a rich collection of e-books and children’s stories that make learning fun and interactive.",
                            image: `${process.env.PUBLIC_URL}/assets/images/ai-landing.avif`,
                        },
                        {
                            title: "AI Launchpad Kits",
                            description:
                                "Take learning further with our exclusive AI Launchpad kits, tailored for budding innovators.",
                            image: `${process.env.PUBLIC_URL}/assets/images/front-page-ful-kit.avif`,
                        },
                        {
                            title: "Inspiring Blog",
                            description:
                                "Stay updated with insights, tutorials, and ideas to foster STEM education and creativity.",
                            image: `${process.env.PUBLIC_URL}/assets/images/ai-lounchpad-home.jpeg`,
                        },
                    ].map((card, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                            data-aos="fade-up"
                        >
                            {/* Image Section */}
                            <div className="w-full h-64 overflow-hidden relative">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-60"
                                />
                            </div>
                            {/* Hover Effect: Text with Rotation */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center opacity-0 rotate-45 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500 ease-in-out">
                                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                                <p className="text-sm text-gray-200">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p
                    className="font-bold text-xl px-6 md:px-12 pt-6 text-center"
                    data-aos="fade-up"
                >
                    Join us in shaping the next generation of thinkers and creators!
                </p>
            </div>
            {/* AI Launchpad Section */}
            <div className="py-16 bg-[#f1f1f1]" data-aos="fade-up">
                <h2 className="text-center text-4xl font-bold">AI Launchpad</h2>
                <h3 className="text-center text-3xl font-semibold py-8">Our Unique Initiative</h3>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/ai-lounchpad-home.jpeg`}
                    alt="AI Launchpad"
                    className="object-cover w-[90%] md:w-[30%] h-[250px] mx-auto rounded-xl shadow-lg"
                    data-aos="zoom-in"
                />
                <p className="text-lg leading-normal py-6 px-4 md:px-16" data-aos="fade-up">
                    <span className="font-semibold">AI Launchpad Kit</span> is a hands-on kit designed to introduce children (ages
                    10-16) to the exciting world of artificial intelligence, coding, and electronics. Through a series of fun and
                    practical projects, kids learn how to build smart devices using the Raspberry Pi Pico and various sensors.
                </p>
                <p className="text-lg leading-normal py-6 px-4 md:px-16" data-aos="fade-up">
                    The AI Launchpad empowers young learners to explore real-world applications in health, agriculture, climate
                    change, and home automation, creating a strong foundation in AI and STEM skills.
                </p>
                <p className="text-lg leading-normal py-6 px-4 md:px-16" data-aos="fade-up">
                    With the AI Launchpad, children will work on fascinating projects like heart rate monitoring systems for health
                    analysis, soil moisture sensors for agriculture, and smart home devices for energy efficiency and automation.
                    Each project is designed to be both educational and enjoyable, allowing kids to collect data and build AI models.
                </p>
                <p className="text-lg leading-normal py-6 px-4 md:px-16" data-aos="fade-up">
                    Parents can rest assured that all the necessary guides, manuals, and video tutorials are downloadable from the
                    website, making it easy to follow along. In case of any questions or help needed, buyers can join a dedicated
                    WhatsApp group for support. Additionally, the AI Launchpad community offers a monthly newsletter filled with
                    tips, project ideas, and the latest developments in the field of AI.
                </p>
                <p
                    className="text-lg leading-normal py-6 px-4 md:px-16 font-bold"
                    data-aos="fade-up"
                >
                    Assemble your Own or Buy Complete Kit.
                </p>
                {/* Buttons Section */}
                <div className="flex gap-6 justify-center py-8" data-aos="fade-up">
                    <a
                        href="/buildOwnKits"
                        className="px-6 py-3 text-sm font-semibold bg-blue-600 text-white rounded-xl transition-all duration-300 transform hover:bg-blue-700 hover:translate-y-[-2px]"
                    >
                        Build Your Own Kit
                    </a>
                    <a
                        href="/products/e-book"
                        className="px-6 py-3 text-sm font-semibold bg-green-600 text-white rounded-xl transition-all duration-300 transform hover:bg-green-700 hover:translate-y-[-2px]"
                    >
                        Place an Order
                    </a>
                </div>
            </div>
        </>
    );
}

export default Home;
