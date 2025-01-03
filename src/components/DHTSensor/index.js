import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function DhtSensor() {
    useEffect(() => {
        AOS.init({
            duration: 300,
        });
    }, []);
    return (
        <div className="p-3 py-4 md:py-16 md:px-56">
            <h2 className="text-lg md:text-3xl font-bold text-center py-3 md:py-6">Transforming Lab Experiments with DHT Sensors into AI-Powered Predictions</h2>
            <p className="text-gray-700 py-2 text-center text-lg">DHT Sensors data processings</p>
            <p className="text-gray-700 py-2 text-center text-lg">Lutfullah kakakhel</p>
            <p className="text-gray-700 py-2 text-center text-lg">11/24/2024 .2 min read</p>
            <div className="col-span-1 py-3">
                <img src="\assets\images\Iot 03.avif" alt="img" className="md:w-[75%] w-[100%] mx-auto h-[280px] object-fill" data-aos="zoom-in"></img>
            </div>
            <h3 className="text-lg md:text-2xl font-bold" data-aos="fade-up">Introduction</h3>
            <p className="text-lg leading-relaxed py-2" data-aos="fade-up">Temperature and humidity are among the first physical quantities students learn to measure in school laboratories. Using DHT sensors, these experiments are often limited to recording environmental data and observing changes under controlled conditions—such as blowing over the sensor. While these are excellent starting points, what if we could go beyond this? What if students could use the same data to train a machine learning model to predict temperature? This blog post will guide you through an innovative project: collecting temperature and humidity data using a Raspberry Pi Pico and SD card, processing it with Python, and applying machine learning to predict temperature based on humidity.</p>
            <h3 className="text-lg text-2xl font-bold" data-aos="fade-up">Project Overview</h3>
            <p className="text-lg leading-relaxed py-2" data-aos="fade-up">The project has three main stages:</p>
            <div data-aos="fade-up">
            <p className="text-lg leading-relaxed px-3"><span className="font-bold">1. Data Collection:</span> Using a DHT22 sensor connected to a Raspberry Pi Pico, we log temperature and humidity data overnight onto an SD card. </p>
            <p className="text-lg leading-relaxed px-3"><span className="font-bold">2. Data Processing: </span>Using Python on a computer, we clean and visualize the collected data. </p>
            <p className="text-lg leading-relaxed px-3"><span className="font-bold">3. Machine Learning:</span> Using Python libraries such as pandas, scikit-learn, and matplotlib, we train a machine learning model to predict temperature based on humidity. </p>
            </div>
            <h3 className="text-lg text-2xl font-bold py-3" data-aos="fade-up">Stage 1: Collecting Data with the Raspberry Pi Pico</h3>
            <h3 className="text-lg text-2xl font-bold" data-aos="fade-up">Components:</h3>
            <div data-aos="fade-up">
            <p className="text-lg leading-relaxed"><span className="font-bold">. </span>Raspberry Pi Pico </p>
            <p className="text-lg leading-relaxed"><span className="font-bold">. </span>DHT22 Sensor </p>
            <p className="text-lg leading-relaxed"><span className="font-bold">. </span>MicroSD Card Module and SD Card</p>
            </div>
            <h3 className="text-lg md:text-2xl font-bold" data-aos="fade-up">Code Explanation:</h3>
            <p className="text-lg leading-relaxed py-2" data-aos="fade-up">The project has three main stages:</p>
            <div data-aos="fade-up">
            <p className="text-lg leading-relaxed px-3"><span className="font-bold">1. Initializing the SD Card:</span>The SD card is connected via SPI. MicroPython's uos and sdcard modules help mount the SD card.</p>
            <p className="text-lg leading-relaxed px-3"><span className="font-bold">2. Reading Data from the DHT Sensor: </span>The DHT22 sensor is connected to a GPIO pin. It provides temperature and humidity readings.</p>
            <p className="text-lg leading-relaxed px-3"><span className="font-bold">3. Writing to the SD Card:</span> Each reading is appended to a CSV file along with a Unix timestamp (seconds since epoch).</p>
            </div>
            <p className="text-lg font-bold" data-aos="fade-up">Sample Code:</p>
            <div className="col-span-1 py-3" data-aos="fade-up">
                <img src="\assets\images\dhtSensor.png" alt="img" className="md:w-[75%] w-[100%] mx-auto h-[280px] object-fill" data-aos="zoom-in"></img>
            </div>
            <h3 className="text-lg md:text-2xl font-bold pt-5" data-aos="fade-up">Stage 2: Processing the Data</h3>
            <p className="text-lg leading-relaxed py-2" data-aos="fade-up">Once the data is logged, the SD card is connected to a computer for processing using Python. Students can visualize how temperature and humidity vary over time.</p>
            <h3 className="text-lg md:text-2xl font-bold" data-aos="fade-up">Steps:</h3>
            <div data-aos="fade-up">
            <p className="text-lg leading-relaxed"><span className="font-bold">1. Loading the Data:</span>Use pandas to read the CSV file.</p>
            <p className="text-lg leading-relaxed"><span className="font-bold">2. Visualizing the Data:</span> Use matplotlib to create plots of temperature and humidity over time. </p>
            </div>
            <p className="text-lg font-bold" data-aos="fade-up">Code Example:</p>
            <div className="col-span-1 py-3">
                <img src="\assets\images\dhtSensor2.png" alt="img" className="md:w-[75%] w-[100%] mx-auto h-[280px] object-fill" data-aos="zoom-in"></img>
            </div>
            <h3 className="text-lg md:text-2xl font-bold pt-5" data-aos="fade-up">Stage 3: Machine Learning</h3>
            <p className="text-lg leading-relaxed py-2" data-aos="fade-up">Here, students use the collected data to predict temperature based on humidity. This transforms a simple lab exercise into an AI application.</p>
            <h3 className="text-lg md:text-2xl font-bold" data-aos="fade-up">Steps:</h3>
            <div data-aos="fade-up">
            <p className="text-lg leading-relaxed"><span className="font-bold">1. Prepare Data:</span> Split the data into training and testing sets. </p>
            <p className="text-lg leading-relaxed"><span className="font-bold">2. Train the Model: </span>Use scikit-learn's LinearRegression to train the model. </p>
            <p className="text-lg leading-relaxed"><span className="font-bold">3. Evaluate:</span> Test the model on unseen</p>
            <p className="text-lg leading-relaxed pb-5"><span className="font-bold">4. </span> data and visualize predictions.</p>
            </div>
            <h3 className="text-lg md:text-2xl font-bold" data-aos="fade-up">Code Example:</h3>
            <div className="col-span-1 py-3">
                <img src="\assets\images\dhtSensor3.png" alt="img" className="md:w-[75%] w-[100%] mx-auto h-[280px] object-fill" data-aos="zoom-in"></img>
            </div>
            <h3 className="text-lg md:text-2xl font-bold pt-5" data-aos="fade-up">Beyond the Basics: Deployment</h3>
            <p className="text-lg leading-relaxed py-2" data-aos="fade-up">The trained model can be saved and deployed on microcontrollers like the Raspberry Pi Pico using frameworks like TensorFlow Lite. This step allows students to explore edge AI, where models make predictions on small devices without needing constant internet connectivity.</p>
            <h3 className="text-lg md:text-2xl font-bold pt-2" data-aos="fade-up">Conclusion</h3>
            <p className="text-lg leading-relaxed py-2" data-aos="fade-up">This project introduces students to modern AI applications by extending traditional sensor experiments. It shows how:</p>
            <div data-aos="fade-up">
            <p className="text-lg leading-relaxed px-3"><span className="font-bold">. </span>Data collection with sensors can be enhanced with AI. </p>
            <p className="text-lg leading-relaxed px-3"><span className="font-bold">. </span>Students can move from observing trends to making predictions. </p>
            <p className="text-lg leading-relaxed px-3"><span className="font-bold">. </span>Skills in Python and machine learning can empower them to solve real-world problems.</p>
            </div>
            <p className="text-lg leading-relaxed" data-aos="fade-up">By leveraging tools like Raspberry Pi Pico and MicroPython, educators can inspire the next generation of data scientists and AI innovators. The journey from collecting DHT data to deploying a machine learning model brings technology and curiosity together in an accessible, engaging way.</p>
        </div>
    )
}

export default DhtSensor