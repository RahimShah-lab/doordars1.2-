import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'; // Import AOS styles

function CookiePolicy() {
    useEffect(() => {
        AOS.init({
            duration: 300,
        });
    }, []);
    return (
        <div className="p-3 py-4 md:py-16 md:px-32">
            {/* Header */}
            <h2 className="text-3xl md:text-5xl font-bold py-3">Cookie Policy</h2>
            {/* Introduction Paragraph */}
            <p className="text-lg leading-relaxed py-5">
                At doordars-smc.com, we use cookies to enhance your experience and improve the functionality of our website. Cookies are small text files that are placed on your device when you visit our site. They help us remember your preferences, provide relevant content, and analyze site traffic to optimize our services.
            </p>
            {/* Types of Cookies Section */}
            <p className="text-lg leading-relaxed pt-5 font-bold">Types of Cookies We Use:</p>
            <p className="text-lg leading-relaxed py-2">
                <span className="font-bold"><span className="font-extrabold text-2xl">.</span> Essential Cookies:</span> These cookies are necessary for the website to function and cannot be switched off in our systems.
            </p>
            <p className="text-lg leading-relaxed py-2" data-aos="fade-up">
                <span className="font-bold"><span className="font-extrabold text-2xl">.</span> Performance Cookies:</span> These cookies collect information about how visitors use a website, such as which pages visitors go to most often.
            </p>
            <p className="text-lg leading-relaxed py-2" data-aos="fade-up">
                <span className="font-bold"><span className="font-extrabold text-2xl">.</span> Functional Cookies:</span> These cookies allow the website to remember choices you make to provide more personalized features.
            </p>
            <p className="text-lg leading-relaxed py-2" data-aos="fade-up">
                <span className="font-bold"><span className="font-extrabold text-2xl">.</span> Targeting Cookies:</span> These cookies may be set through our site by our advertising partners to build a profile of your interests.
            </p>
            <p className="text-lg leading-relaxed py-2" data-aos="fade-up">
                <span className="font-bold"><span className="font-extrabold text-2xl">.</span> Managing Cookies:</span> You can manage your cookie preferences by adjusting your browser settings to refuse or accept cookies. Please note that disabling cookies may affect the functionality of certain parts of the website.
            </p>
            {/* Closing Statement */}
            <p className="text-lg leading-relaxed py-5" data-aos="fade-up">
                For more information on cookies and how they work, please contact us.
            </p>
        </div>
    );
}

export default CookiePolicy;
