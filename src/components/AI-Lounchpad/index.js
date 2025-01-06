import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'; // Import AOS styles

function Lounchpad() {
    useEffect(() => {
        AOS.init({
            duration: 300,
        });
    }, []);
    const homeImage = process.env.PUBLIC_URL + '/Assets/images/ai-lounchpad-home.jpeg';
    return (
        <div>
            {/* Home Image Section */}
            <div
                className="relative text-center font-bold"
                style={{
                    backgroundImage: `url(${homeImage})`,
                    opacity: 0.8,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h1 className="md:w-[40%] w-full text-center mx-auto py-6 text-2xl md:text-3xl text-white px-4 md:p-10 relative z-10">
                    Artificial Intelligence in Education DoorDars
                </h1>
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen p-4">
                {/* Video 1 */}
                <div className="flex flex-col items-center justify-center text-center p-6 w-full max-w-4xl mx-auto" data-aos="fade-up">
                    <h3 className="text-xl md:text-3xl font-bold py-3">Introduction to AI Launchpad Kit</h3>
                    <div className="w-full">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/fp2f8lNc6dQ"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                </div>
                {/* Video 2 */}
                <div className="flex flex-col items-center justify-center text-center p-6 w-full max-w-4xl mx-auto" data-aos="fade-up">
                    <h3 className="text-xl md:text-3xl font-bold py-3">Installation of Thonny IDE for MicroPython</h3>
                    <div className="w-full">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/tdTM5PrtOOU"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                </div>
                {/* Video 3 */}
                <div className="flex flex-col items-center justify-center text-center p-6 w-full max-w-4xl mx-auto" data-aos="fade-up">
                    <h3 className="text-xl md:text-3xl font-bold py-3">Setting up the Raspberry Pi Pico</h3>
                    <div className="w-full">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/9gGpPbno8NY"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                </div>
                {/* Video 4 */}
                <div className="flex flex-col items-center justify-center text-center p-6 w-full max-w-4xl mx-auto" data-aos="fade-up">
                    <h3 className="text-xl md:text-3xl font-bold py-3">Installing Micropython in RPi Pico and Blinking Onboard LED</h3>
                    <div className="w-full">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/zv3zMUMppf0"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                </div>
                {/* Video 5 */}
                <div className="flex flex-col items-center justify-center text-center p-6 w-full max-w-4xl mx-auto" data-aos="fade-up">
                    <h3 className="text-xl md:text-3xl font-bold py-3">Interfacing the OLED Display with Pico</h3>
                    <div className="w-full">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/-bQvP1TAni4"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lounchpad;
