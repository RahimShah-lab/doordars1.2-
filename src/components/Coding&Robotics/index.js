import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'; // Import AOS styles

function Robotics() {
    useEffect(() => {
        AOS.init({
            duration: 300,
        });
    }, []);
    return (
      <div className="p-4 md:px-20 md:py-10 bg-gray-50 text-gray-900">
        {/* Page Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800">
          Coding and Robotics
        </h2>
        {/* Introduction Section */}
        <div className="py-8">
          <h3 className="text-xl md:text-3xl font-bold text-center">
            Empowering Young Minds Through Coding and Robotics
          </h3>
          <p className="text-lg text-justify leading-relaxed mt-4 md:w-3/4 mx-auto">
            At Doordars-SMC, we believe in unlocking the potential of young innovators through engaging, hands-on Coding and Robotics activities. Tailored for children aged 10-16, our programs introduce primary and secondary school students to the exciting world of STEM/STEAM education. With a focus on creativity, problem-solving, and real-world applications, we aim to inspire the next generation of engineers, programmers, and thinkers.
          </p>
        </div>
        {/* Why Coding and Robotics Section */}
        <div className="py-8 bg-white rounded-lg shadow-md" data-aos="fade-up">
          <h3 className="text-2xl md:text-4xl font-bold text-center text-gray-700">
            Why Coding and Robotics?
          </h3>
          <ul className="mt-6 space-y-4 text-lg">
            <li className="flex items-start">
              <span className="text-blue-500 mr-3">✔</span>
              <span><strong>Enhance Problem-Solving Skills:</strong> Students learn to break down complex problems and develop solutions using logical reasoning.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3">✔</span>
              <span><strong>Build Creativity:</strong> Coding and robotics provide a platform for young minds to innovate and create.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3">✔</span>
              <span><strong>Real-World Applications:</strong> Hands-on activities connect theoretical concepts to practical scenarios, preparing students for future technological challenges.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3">✔</span>
              <span><strong>21st-Century Skills:</strong> Empower children with skills like programming, engineering, and teamwork that are vital in the modern world.</span>
            </li>
          </ul>
        </div>
        {/* What We Offer Section */}
        <div className="py-8">
          <h3 className="text-2xl md:text-4xl font-bold text-center text-gray-700" data-aos="fade-up">
            What We Offer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition" data-aos="fade-up">
              <h4 className="text-xl font-semibold">Robotics Projects</h4>
              <p className="mt-2">Build and program robots to perform tasks, from navigating mazes to completing challenges.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition" data-aos="fade-up">
              <h4 className="text-xl font-semibold">Coding for All Levels</h4>
              <p className="mt-2">Start with block-based programming like Scratch and progress to Python and Arduino IDE.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition" data-aos="fade-up">
              <h4 className="text-xl font-semibold">Sensor Integration</h4>
              <p className="mt-2">Learn to use sensors like ultrasonic, infrared, and temperature sensors in innovative projects.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition" data-aos="fade-up">
              <h4 className="text-xl font-semibold">AI and Machine Learning Basics</h4>
              <p className="mt-2">An introduction to artificial intelligence concepts through real-world projects.</p>
            </div>
          </div>
        </div>
        {/* Call-to-Action Section */}
        <div className="py-8 text-center" data-aos="fade-up">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-700">
            Join Us!
          </h3>
          <p className="mt-4 text-lg">
            Discover the endless possibilities of coding and robotics with Doordars-SMC! Whether you’re a beginner or an enthusiast, we have a program for you.
          </p>
          <a
            href="/contact-us"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    );
  }
  
  export default Robotics;
  