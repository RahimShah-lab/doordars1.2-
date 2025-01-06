import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'; // Import AOS styles

function Contact() {
    useEffect(() => {
        AOS.init({
            duration: 300,
        });
    }, []);
    return (
        <div>
            <div className="px-12 md:px-60 py-4 md:py-10 md:w-[90%]">
                <h2 className="text-3xl md:text-6xl font-bold pb-6 hover:text-blue-700 duration-300 transition-colors">Contact Us</h2>
                <p className="leading-normal text-lg pb-8">Feel free to contact us with any questions or concerns. You can use the form below or email us directly. We appreciate your interest and look forward to hearing from you.</p>
                <form className="">
                    <div className="flex flex-col pb-6">
                        <label>Name</label>
                        <input placeholder="Your Name" className="border bg-[rgb(216,222,232)] py-3 px-5"></input>
                    </div>
                    <div className="flex flex-col pb-6">
                        <label>Last Name</label>
                        <input placeholder="Your Last Name" className="border bg-[rgb(216,222,232)] py-3 px-5"></input>
                    </div>
                    <div className="flex flex-col pb-6">
                        <label>Your email*</label>
                        <input placeholder="Your email address" className="border bg-[rgb(216,222,232)] py-3 px-5"></input>
                    </div>
                    <div className="flex flex-col pb-6">
                        <label>Message*</label>
                        <input placeholder="Enter your message" className="border bg-[rgb(216,222,232)] py-3 px-5"></input>
                    </div>
                    <div className="text-center py-3 md:py-6">
                        <button className="px-8 py-3 text-lg font-semibold bg-gray-600 text-white rounded-lg transition-all duration-300 transform hover:bg-gray-700">
                            Submit
                        </button>
                    </div>
                </form>
                <div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="px-3 md:py-6 md:px-20" data-aos="fade-up">
                    <h4 className="font-bold text-xl pb-4">Visit us at:</h4>
                    <p className="text-lg leading-normal">Pages N' Bytes</p>
                    <p className="text-lg leading-normal">TechMeenar, Commercial 68, LG-02, Street 90,</p>
                    <p className="text-lg leading-normal">Block D, MPCHS, B-17, Islamabad.</p>
                    <p className="text-lg">e-mail: contact@doordars-smc.com</p>
                    <p className="text-lg">Call or WhatsApp at: +9233692562</p>
                </div>
                {/* Map Section */}
                <div className="px-3 md:px-20 py-6" data-aos="fade-up">
                    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md">
                        <iframe
                            title="Google Maps location of Pages N' Bytes"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53122.78489063888!2d72.811666!3d33.678557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa30021daa511%3A0x40b8ccc8e89f3abc!2sTech%20Meenar!5e0!3m2!1sen!2sus!4v1733949267223!5m2!1sen!2sus"
                            className="absolute inset-0 w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
