import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'; // Import AOS styles

function OwnaiLaunchpadKit() {
    useEffect(() => {
        AOS.init({
            duration: 300,
        });
    }, [])
    return (
        <div className="p-3 py-4 md:py-16 md:px-56">
            <h2 className="text-xl md:text-4xl font-bold text-center py-3 md:py-6">Build Your Own AI Launchpad Kit: Empowering Innovation and Learning</h2>
            <p className="text-gray-700 py-2 text-center text-lg">Build Your Own Kits</p>
            <p className="text-gray-700 py-2 text-center text-lg">Electronic Kits</p>
            <p className="text-gray-700 py-2 text-center text-lg">Lutfullah kakakhel</p>
            <p className="text-gray-700 py-2 text-center text-lg">11/24/2024 .3 min read</p>
            <div className="col-span-1 py-3">
    <img 
        src={`${process.env.PUBLIC_URL}/assets/images/Iot 01.avif`} 
        alt="img" 
        className="md:w-[90%] w-[100%] mx-auto h-[280px] object-fill" 
        data-aos="zoom-in"
    />
</div>

            <p className="py-2 text-lg" data-aos="fade-up">Here’s an expanded version of the article with additional sections, FAQs, and pricing details in PKR.</p>
            <h3 className="text-lg py-3 md:py-6 font-bold md:text-2xl" data-aos="fade-up">Build Your Own AI Launchpad Kit: Empowering Innovation and Learning</h3>
            <p className="text-lg" data-aos="fade-up">Welcome to the world of hands-on AI and STEM exploration! Our <span className="font-bold">AI Launchpad Kit</span> is designed to make learning artificial intelligence, IoT, and robotics accessible, engaging, and impactful. Whether you prefer purchasing a complete kit or assembling your own using components from the market, we provide everything you need to get started: detailed manuals, step-by-step guides, and instructional videos—all available on our website.</p>
            <h3 className="text-lg font-bold md:text-2xl py-3 md:py-6" data-aos="fade-up">Option 1: Assemble Your Own AI Launchpad Kit</h3>
            <p className="text-lg" data-aos="fade-up">For DIY enthusiasts, here’s a <span className="font-bold">bare minimum component list</span> to help you create your AI Launchpad Kit. These items are affordable and easily available in local electronics markets or online stores.</p>
            <h3 className="text-lg py-3 md:py-5 md:text-2xl font-bold" data-aos="fade-up">Bare Minimum Component List</h3>
            <div data-aos="fade-up">
            <h4 className="text-lg py-2 font-bold md:text-2xl">Component Estimated Cost (PKR)</h4>
            <p className="text-lg leading-relaxed"><span className="font-bold">. </span>Raspberry Pi Pico or Microcontroller 2,000 – 2,500</p>
            <p className="text-lg leading-relaxed"><span className="font-bold">. </span>Breadboard 300 – 500 </p>
            <p className="text-lg leading-relaxed"><span className="font-bold">. </span>Jumper Wires (set) 200 – 300 </p>
            <p className="text-lg leading-relaxed"><span className="font-bold">. </span>LEDs (assorted) 100 – 200 </p>
            <p className="text-lg leading-relaxed"><span className="font-bold">. </span>Resistors (assorted) 50 – 100 </p>
            <p className="text-lg leading-relaxed"><span className="font-bold">. </span>Push Buttons 50 – 100 </p>
            <p className="text-lg leading-relaxed"><span className="font-bold">. </span>Ultrasonic Sensor (HC-SR04) 600 – 800 </p>
            <p className="text-lg leading-relaxed"><span className="font-bold">. </span>PIR Motion Sensor 350 – 500 </p>
            <p className="text-lg leading-relaxed"><span className="font-bold">. </span>Buzzer 100 – 200 Power Supply Module 500 – 700 Micro USB Cable 300 – 500</p>
            <p className="text-lg leading-relaxed"><span className="font-bold">. </span>LDR 200 - 300</p>
            <p className="text-lg leading-relaxed"><span className="font-bold">Total Cost (Approx.)</span>PKR 5,000 – 7,500</p>
            <p className="text-lg leading-relaxed">With just these components, you can build projects like smart lights, motion sensors, and IoT devices.</p>
            </div>
            <h2 className="text-lg font-bold md:text-2xl py-3 md:py-6" data-aos="fade-up">Option 2: Purchase the Complete AI Launchpad Kit</h2>
            <p className="text-lg" data-aos="fade-up">For those seeking convenience and advanced capabilities, the Complete AI Launchpad Kit is a ready-to-use package. It includes all the bare minimum components plus additional tools for advanced AI, IoT, and robotics projects.</p>
            <h3 className="text-lg py-3 md:py-5 md:text-2xl font-bold" data-aos="fade-up">Full Kit Component List</h3>
            <div data-aos="fade-up">
            <h4 className="text-lg py-2 font-bold md:text-2xl">Additional Components Estimated Cost (PKR) </h4>
            <p className="text-lg leading-relaxed"><span className="font-bold">. </span>ESP32-CAM Module 1,500 – 2,000 </p>
            <p className="text-lg leading-relaxed"><span className="font-bold">. </span>Servo Motors (set of 2) 800 – 1,200 </p>
            <p className="text-lg leading-relaxed"><span className="font-bold">. </span>Motor Driver Module (L298N) 600 – 900  </p>
            <p className="text-lg leading-relaxed"><span className="font-bold">. </span>OLED Display 800 – 1,200  </p>
            <p className="text-lg leading-relaxed"><span className="font-bold">. </span>Temperature & Humidity Sensor (DHT) 400 – 600 </p>
            <p className="text-lg leading-relaxed"><span className="font-bold">. </span>Temperature & Humidity Sensor (DHT) 400 – 600 </p>
            <p className="text-lg leading-relaxed"><span className="font-bold">. </span>IR Receiver Module 300 – 400</p>
            <p className="text-lg leading-relaxed"><span className="font-bold">Complete Kit Price:</span>PKR 12,000 – 15,000</p>
            </div>
            <div data-aos="fade-up">
            <p className="text-lg py-2">With the full kit, you can build advanced projects like:</p>
            <p className="text-lg leading-relaxed px-3"><span className="font-bold">. </span>Object detection using the ESP32-CAM.</p>
            <p className="text-lg leading-relaxed px-3"><span className="font-bold">. </span>Smart home automation systems.</p>
            <p className="text-lg leading-relaxed px-3"><span className="font-bold">. </span>Robotic arms and cars.</p>
            <p className="text-lg leading-relaxed px-3"><span className="font-bold">. </span>Environmental monitoring stations.</p>
            </div>
            <h3 className="text-lg py-2 md:py-3 md:text-2xl font-bold" data-aos="fade-up">FAQS</h3>
            <h3 className="text-lg py-2 md:py-3 md:text-2xl font-bold" data-aos="fade-up">1. What if I’m new to AI and coding?</h3>
            <p className="text-lg leading-relaxed pb-3" data-aos="fade-up">No worries! Our website offers detailed manuals, beginner-friendly guides, and video tutorials to help you get started, even if you have no prior experience.</p>
            <h3 className="text-lg py-2 md:py-3 md:text-2xl font-bold" data-aos="fade-up">2. Can I buy individual components from your website?</h3>
            <p className="text-lg leading-relaxed pb-3" data-aos="fade-up">Currently, we don’t sell individual components, but our platform guides you on how to source them locally or online.</p>
            <h3 className="text-gl py-2 md:py-3 md:text-2xl font-bold" data-aos="fade-up">3. What kind of projects can I build?</h3>
            <p className="text-lg leading-relaxed pb-3" data-aos="fade-up">With the AI Launchpad Kit, you can create projects like:</p>
            <div data-aos="fade-up">
            <p className="text-lg leading-relaxed px-3"><span className="font-bold">. </span>AI-powered object detection.</p>
            <p className="text-lg leading-relaxed px-3"><span className="font-bold">. </span>Smart IoT devices (e.g., automated lights or alarms).</p>
            <p className="text-lg leading-relaxed px-3"><span className="font-bold">. </span>Basic robots like robotic arms or cars.</p>
            <p className="text-lg leading-relaxed px-3"><span className="font-bold">. </span>Environmental monitoring systems (e.g., temperature, humidity).</p>
            </div>
            <h3 className="text-lg py-2 md:py-3 md:text-2xl font-bold" data-aos="fade-up">4. Is this kit suitable for schools or STEM clubs?</h3>
            <p className="text-lg leading-relaxed pb-3" data-aos="fade-up">Absolutely! The kit is ideal for educators, STEM clubs, and workshops. We also offer bulk discounts for educational institutions.</p>
            <h3 className="text-lg py-2 md:py-3 md:text-2xl font-bold" data-aos="fade-up">5. Are the resources free?</h3>
            <p className="text-lg leading-relaxed pb-3" data-aos="fade-up">Yes! All manuals, guides, and video tutorials are freely available on our website for registered users.</p>

            <h3 className="text-lg py-2 md:py-3 md:text-2xl font-bold" data-aos="fade-up">6. Can I upgrade my kit later?</h3>
            <p className="text-lg leading-relaxed pb-3" data-aos="fade-up">Yes, you can start with the basic components and add advanced items like the ESP32-CAM or servo motors later.</p>
            <h3 className="text-lg py-2 md:py-3 md:text-2xl font-bold" data-aos="fade-up">Pricing Details</h3>
            <div data-aos="fade-up">
            <p className="text-lg leading-relaxed px-3"><span className="font-bold">Kit Option Price (PKR) </span>Bare Minimum DIY Kit (assembled by you) Approx. PKR 5,000 – 7,500 Complete AI Launchpad Kit PKR 12,000 – 15,000</p>
            <p className="text-lg leading-relaxed">Note: Prices may vary slightly based on market rates and availability.</p>
            </div>
            <h3 className="text-lg py-2 md:py-3 md:text-2xl font-bold" data-aos="fade-up">Why Choose Our Platform?</h3>
            <div data-aos="fade-up">
            <p className="text-lg leading-relaxed"><span className="font-bold">. Flexible Options: </span>Assemble your own kit or purchase the complete version.</p>
            <p className="text-lg leading-relaxed"><span className="font-bold">. Expert Guidance: </span>Free manuals, tutorials, and project ideas.  </p>
            <p className="text-lg leading-relaxed"><span className="font-bold">. Hands-on Learning:</span> Ideal for students, educators, and hobbyists.</p>
            <p className="text-lg leading-relaxed"><span className="font-bold">. Community Support:</span> Access to forums and expert assistance. </p>
                </div> 
                <p className="text-lg leading-relaxed font-bold" data-aos="fade-up">Start your journey today and unleash the power of AI and STEM learning with the AI Launchpad Kit! </p>
        </div>
    )
}
export default OwnaiLaunchpadKit