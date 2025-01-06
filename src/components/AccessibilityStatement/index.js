import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'; // Import AOS styles

function Accessibility() {
    useEffect(() => {
        AOS.init({
            duration: 300,
        });
    }, []);
    return (
        <div className="p-3 py-4 md:py-16 md:px-32">
            {/* Header */}
            <h2 className="text-3xl md:text-5xl font-bold py-3">Accessibility Statement</h2>
            {/* Introduction Paragraph */}
            <p className="text-lg leading-relaxed py-5">
                At doordars-smc.com, we are committed to ensuring that our website is accessible to all users, regardless of their abilities. We strive to create a website experience that is inclusive and user-friendly for everyone.
            </p>
            {/* Accessibility Features Section */}
            <p className="text-lg leading-relaxed pt-5 font-bold">Accessibility Features:</p>
            <p className="text-lg leading-relaxed py-2">
                <span className="font-bold"><span className="font-extrabold text-2xl">.</span> Keyboard Navigation:</span> Users can navigate the site using keyboard shortcuts.
            </p>
            <p className="text-lg leading-relaxed py-2">
                <span className="font-bold"><span className="font-extrabold text-2xl">.</span> Alt Text for Images:</span> All images include descriptive alt text to aid those using screen readers.
            </p>
            <p className="text-lg leading-relaxed py-2" data-aos="fade-up">
                <span className="font-bold"><span className="font-extrabold text-2xl">.</span> Readable Fonts and High Contrast:</span> We use clear, legible fonts and ensure a high-contrast color scheme for improved readability.
            </p>
            <p className="text-lg leading-relaxed py-2" data-aos="fade-up">
                <span className="font-bold"><span className="font-extrabold text-2xl">.</span> Continuous Improvement:</span> We are always looking for ways to enhance the accessibility of our website. If you encounter any barriers or have suggestions on how we can improve, please contact us at [Your Contact Information].
            </p>
            {/* Closing Statement */}
            <p className="text-lg leading-relaxed py-5" data-aos="fade-up">
                We value your feedback and take accessibility concerns seriously to make our site as inclusive as possible.
            </p>
            <p className="text-lg leading-relaxed py-5" data-aos="fade-up">
                Thank you for visiting doordars-smc.com.
            </p>
        </div>
    );
}

export default Accessibility;
