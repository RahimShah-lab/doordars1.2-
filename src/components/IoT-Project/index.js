import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'; // Import AOS styles

function IotProject() {
    useEffect(() => {
        AOS.init({
            duration: 300,
        });
    }, []);
  return (
    <div>
      <div className="bg-[rgb(24,75,68)]">
        <h2 className="text-white text-3xl md:text-6xl font-bold text-center p-3 md:p-6">
          IOT Meets Machine Learning:
        </h2>
        <h4 className="text-[rgb(140,160,167)] text-xl md:text-2xl font-bold text-center p-3 md:p-4">
          DHT Sensor Data Logging for Predictive Analysis
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:p-6 gap-3 mx-auto">
          {/* Card 01 */}
          <div className="col-span-1" data-aos="fade-up">
            <Link to="/details/card-01" className="block">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/Iot 01.avif`}
                alt="Raspberry Pi Pico wired to DHT sensor and SD Card"
                className="w-[100%] h-[280px] object-fill"
              />
              <p className="text-white text-center pt-4">Raspberry Pi Pico wired to DHT</p>
              <p className="text-white text-center p-1">sensor and SD Card for storage.</p>
            </Link>
          </div>
          {/* Card 02 */}
          <div className="col-span-1" data-aos="fade-up">
            <Link to="/details/card-02" className="block">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/Iot 02.avif`}
                alt="Plot of Temperature and Humidity"
                className="w-[100%] h-[280px] object-fill"
              />
              <p className="text-white text-center pt-4">Plot of Temperature and</p>
              <p className="text-white text-center p-1">Humidity against Timestamp</p>
            </Link>
          </div>
        </div>
        <div className="bg-[rgb(24,75,68)] p-2 md:p-6 gap-3 mx-auto">
          {/* Card 03 */}
          <div className="col-span-1" data-aos="fade-up">
            <Link to="/details/card-03" className="block">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/Iot 03.avif`}
                alt="Predicted Temperature plotted against Actual Temperature"
                className="md:w-[50%] w-[100%] mx-auto h-[280px] object-fill"
              />
              <p className="text-white text-center pt-4">
                Example of Predicted Temperature plotted against Actual
              </p>
              <p className="text-white text-center p-1">
                Temperature, after regression analysis.
              </p>
            </Link>
            <Link
              to="/stem/coding-robotics"
              className="flex justify-center hover:underline py-2 hover:text-blue-700 transition-colors duration-300"
            >
              Click here for Code
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-1 md:p-4">
  {/* Video Section */}
  <div className="flex flex-col items-center justify-center text-center p-6 w-full max-w-4xl mx-auto" data-aos="fade-up">
    <h3 className="text-xl md:text-3xl font-bold py-3">
      Raspberry Pi Pico Rings the Healing Bowl
    </h3>
    <div className="w-full">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/E_4TnPioqhY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg shadow-lg w-[100%]"
      ></iframe>
    </div>
  </div>
</div>
    </div>
  );
}

export default IotProject;
