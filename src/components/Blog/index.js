import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function Blog() {
    useEffect(() => {
        AOS.init({
            duration: 300,
        });
    }, []);
    return (
        <div className="bg-gray-50">
            {/* Blog Header */}
            <div className="relative bg-cover bg-no-repeat bg-center text-center font-bold py-12" style={{ backgroundImage: 'url(/assets/images/Blog-image.jpg)' }}>
    <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
    <h1 className="md:w-[35%] mx-auto text-4xl md:text-6xl text-white px-4 md:p-10 relative z-10">
        Blog
    </h1>
</div>
            {/* Blog Introduction */}
            <div className="px-6 md:px-20 py-10 space-y-6">
                <h3 className="text-3xl md:text-5xl font-bold">
                    Welcome to the Future of Learning: Your AI-Powered STEM Discovery Hub!
                </h3>
                <p className="text-lg leading-relaxed">
                    Dive into an exciting world of innovation and creativity where{' '}
                    <span className="font-bold">education meets cutting-edge technology.</span>{' '}
                    Our blog is your gateway to empowering young minds and fostering a
                    passion for learning through{' '}
                    <span className="font-bold">AI, STEM, and hands-on exploration.</span>
                </p>
            </div>
            {/* AI Launchpad Section */}
            <div className="bg-white shadow-lg rounded-lg mx-6 md:mx-20 p-6 md:p-10 space-y-6" data-aos="fade-up">
                <h3 className="text-2xl md:text-4xl font-bold">
                    Explore the AI Launchpad Kit
                </h3>
                <p className="text-lg leading-relaxed">
                    At the core of our mission is the{' '}
                    <span className="font-bold">AI Launchpad Kit</span>—a revolutionary
                    toolkit designed to make learning engaging, interactive, and impactful.
                </p>
                <ul className="list-disc pl-6 text-lg space-y-2">
                    <li>Build AI-powered smart gadgets like face-recognition systems.</li>
                    <li>Design IoT-based home automation solutions.</li>
                    <li>Create and program robots with real-time sensor interactions.</li>
                    <li>Develop AI models for everyday problem-solving.</li>
                    <li>Craft digital stories using AI tools.</li>
                </ul>
            </div>
            {/* What Else You'll Find Section */}
            <div className="px-6 md:px-20 py-10 space-y-6" data-aos="fade-up">
                <h3 className="text-2xl md:text-4xl font-bold">What Else You’ll Find Here</h3>
                <ul className="list-disc pl-6 text-lg space-y-4">
                    <li>
                        <span className="font-bold">Step-by-step STEM project guides</span>{' '}
                        with easy-to-follow instructions.
                    </li>
                    <li>
                        <span className="font-bold">Hands-on activities</span> that make
                        coding, robotics, and AI fun.
                    </li>
                    <li>
                        <span className="font-bold">Creative educational content</span>{' '}
                        like digital e-stories and challenges.
                    </li>
                    <li>
                        <span className="font-bold">Teacher and parent resources</span> for
                        everyday learning.
                    </li>
                    <li>
                        Insightful articles on the latest trends in STEM education.
                    </li>
                </ul>
            </div>
            {/* Join the Movement Section */}
            <div className="bg-blue-100 px-6 md:px-20 py-10 text-center rounded-lg mx-6 md:mx-20 space-y-4" data-aos="fade-up">
                <h3 className="text-3xl font-bold">Join the Movement</h3>
                <p className="text-lg">
                    Whether you’re a teacher, parent, or young innovator, this is your hub
                    for exploring the limitless possibilities of technology.
                </p>
                <p className="font-bold text-lg">
                    Start your journey today and turn curiosity into creation!
                </p>
            </div>
            {/* Blog Cards Section */}
            <div className="px-6 md:px-20 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
                {/* Card 1 */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300" data-aos="fade-up">
                    <Link to="/ownaiLaunchpadKit">
                        <img
                            src="/assets/images/front-page-ful-kit.avif"
                            alt="AI Kit"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h4 className="text-lg text-gray-600">Electronic Kit</h4>
                            <h3 className="text-xl font-bold">
                                Build Your Own AI Launchpad Kit
                            </h3>
                            <p className="text-gray-500">Lutfullah Kakakhel</p>
                            <p className="text-sm text-gray-500">11/24/2024 · 3 min read</p>
                        </div>
                    </Link>
                </div>
                {/* Card 2 */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300" data-aos="fade-up">
                    <Link to="/dhtSensor">
                        <img
                            src="/assets/images/dht-predicted.avif"
                            alt="DHT Sensors"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">
                                Transforming Lab Experiments with DHT Sensors
                            </h3>
                            <p className="text-gray-500">Lutfullah Kakakhel</p>
                            <p className="text-sm text-gray-500">11/24/2024 · 2 min read</p>
                        </div>
                    </Link>
                </div>
                {/* Card 03 */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300" data-aos="fade-up">
                    <Link to="/aiChildrenEducation">
                        <img
                            src="/assets/images/=an-illustration-showing-children-of-diverse-backgrounds-learning-with-ai-technology-in-a-classroom-setting.avif"
                            alt="Children Learning"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">
                                The Role of AI in Revolutionizing Children's Education
                            </h3>
                            <p className="text-gray-500">Generated</p>
                            <p className="text-sm text-gray-500">11/24/2024 · 2 min read</p>
                        </div>
                    </Link>
                </div>
                {/* card 04 */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300" data-aos="fade-up">
                    <Link to="/aiToolTransferming">
                        <img
                            src="/assets/images/an-educational-illustration-showcasing-open-source-ai-tools-in-action-within-a-school-environment.avif"
                            alt="Open Source Tools"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">
                                Open Source AI Tools Transforming Education
                            </h3>
                            <p className="text-gray-500">Generated</p>
                            <p className="text-sm text-gray-500">11/24/2024 · 2 min read</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Blog;
