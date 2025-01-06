import React, { useEffect, useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'; // Import AOS styles

function PrivacyPolicy() {
    useEffect(() => {
        AOS.init({
            duration: 300,
        });
    }, []);
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col justify-center px-6 py-8 md:py-16 md:px-32">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 py-4">
          Privacy Policy for Doordars-SMC
        </h2>
        <p className="text-lg text-center text-gray-600 py-3">
          <span className="font-semibold">Effective Date:</span> 11/11/2024
        </p>
        {/* Content Section */}
        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-gray-700">
            At <span className="font-semibold text-gray-900">Doordars-SMC</span>, accessible from{" "}
            <a href="https://www.doordars-smc.com/" className="text-blue-500 hover:underline transition-all duration-300 ease-in-out">
              https://doordars-smc.com
            </a>, the privacy of our visitors is one of our main priorities. This Privacy Policy document outlines the types of information we collect and how we use it.
          </p>
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 py-4">Privacy Policy</h3>
          <p className="text-lg leading-relaxed text-gray-700" data-aos="fade-up">
            This Privacy Policy explains how we collect, use, and protect your information when you visit our website,{" "}
            <a href="https://doordars-smc.com/" className="text-blue-500 hover:underline transition-all duration-300 ease-in-out">
              doordars-smc.com
            </a>.
          </p>
          {/* Accordion-style Sections */}
          <section>
            <div
              className="cursor-pointer flex justify-between items-center py-4 px-5 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm transition-all duration-300 ease-in-out"
              data-aos="fade-up"
              onClick={() => toggleSection(1)}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">1. Data Collection and Use</h3>
              <span className="text-lg text-gray-500 transition-all duration-300 ease-in-out">
                {activeSection === 1 ? "-" : "+"}
              </span>
            </div>
            {activeSection === 1 && (
              <p className="text-lg leading-relaxed text-gray-700 py-3 px-5 transition-all duration-300 ease-in-out opacity-100">
                We collect non-personal information such as browser type, device, and location to enhance user experience. Personal information (if provided) is used only for specific purposes, like responding to inquiries.
              </p>
            )}
          </section>
          <section>
            <div
              className="cursor-pointer flex justify-between items-center py-4 px-5 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm transition-all duration-300 ease-in-out"
              data-aos="fade-up"
              onClick={() => toggleSection(2)}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">2. Google AdSense and Cookies</h3>
              <span className="text-lg text-gray-500 transition-all duration-300 ease-in-out">
                {activeSection === 2 ? "-" : "+"}
              </span>
            </div>
            {activeSection === 2 && (
              <p className="text-lg leading-relaxed text-gray-700 py-3 px-5 transition-all duration-300 ease-in-out opacity-100">
                We use Google AdSense to display advertisements. AdSense may use cookies to serve personalized ads based on your browsing history. Users can manage ad preferences or opt out of personalized ads through Google’s Ads Settings.
              </p>
            )}
          </section>
          <section>
            <div
              className="cursor-pointer flex justify-between items-center py-4 px-5 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm transition-all duration-300 ease-in-out"
              data-aos="fade-up"
              onClick={() => toggleSection(3)}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">3. Third-Party Services</h3>
              <span className="text-lg text-gray-500 transition-all duration-300 ease-in-out">
                {activeSection === 3 ? "-" : "+"}
              </span>
            </div>
            {activeSection === 3 && (
              <p className="text-lg leading-relaxed text-gray-700 py-3 px-5 transition-all duration-300 ease-in-out opacity-100">
                Our site may link to third-party websites or services. We are not responsible for their content or privacy practices.
              </p>
            )}
          </section>
          <section>
            <div
              className="cursor-pointer flex justify-between items-center py-4 px-5 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm transition-all duration-300 ease-in-out"
              data-aos="fade-up"
              onClick={() => toggleSection(4)}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">4. User Rights</h3>
              <span className="text-lg text-gray-500 transition-all duration-300 ease-in-out">
                {activeSection === 4 ? "-" : "+"}
              </span>
            </div>
            {activeSection === 4 && (
              <p className="text-lg leading-relaxed text-gray-700 py-3 px-5 transition-all duration-300 ease-in-out opacity-100">
                You can request access, modification, or deletion of your data at any time.{" "}
                <a href="https://doordars-smc.com/" className="text-blue-500 hover:underline transition-all duration-300 ease-in-out">
                  doordars-smc.com
                </a>.
              </p>
            )}
          </section>
          <section>
            <div
              className="cursor-pointer flex justify-between items-center py-4 px-5 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm transition-all duration-300 ease-in-out"
              data-aos="fade-up"
              onClick={() => toggleSection(5)}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">5. Policy Updates</h3>
              <span className="text-lg text-gray-500 transition-all duration-300 ease-in-out">
                {activeSection === 5 ? "-" : "+"}
              </span>
            </div>
            {activeSection === 5 && (
              <p className="text-lg leading-relaxed text-gray-700 py-3 px-5 transition-all duration-300 ease-in-out opacity-100">
                This policy may be updated periodically; changes will be posted here.
              </p>
            )}
          </section>
          <section>
            <div
              className="cursor-pointer flex justify-between items-center py-4 px-5 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm transition-all duration-300 ease-in-out"
              data-aos="fade-up"
              onClick={() => toggleSection(6)}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">6. Contact Us</h3>
              <span className="text-lg text-gray-500 transition-all duration-300 ease-in-out">
                {activeSection === 6 ? "-" : "+"}
              </span>
            </div>
            {activeSection === 6 && (
              <div className="py-3 px-5 text-lg leading-relaxed text-gray-700 space-y-2">
                <p>If you have any questions or concerns about our Privacy Policy, please contact us:</p>
                <ul className="list-inside list-disc">
                  <li>
                    <a href="/contact-us" className="text-blue-500 hover:underline transition-all duration-300 ease-in-out">- Click Here</a>
                  </li>
                  <li>- Email: contact@doordars-smc.com</li>
                  <li>- Address: TechMeenar, Block D, B-17, Islamabad.</li>
                </ul>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
