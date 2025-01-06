import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'; // Import AOS styles

function Disclaimer() {
    useEffect(() => {
        AOS.init({
            duration: 300,
        });
    }, []);
    return (
        <div className="p-3 py-4 md:py-16 md:px-32">
            <h2 className="text-3xl md:text-5xl font-bold  py-3">Disclaimer</h2>
            <p className="text-lg leading-relaxed py-5 ">
                The content provided on doordars-smc.com is for informational and
                educational purposes only. While we strive to ensure the information is
                accurate and up-to-date, we make no representations or warranties of any
                kind, express or implied, about the completeness, accuracy, reliability,
                suitability, or availability with respect to the website or the
                information, products, services, or related graphics contained on the
                website for any purpose. Any reliance you place on such information is
                therefore strictly at your own risk.
            </p>
            <p className="text-lg leading-relaxed py-5" data-aos="fade-up">
                doordars-smc.com may include links to third-party websites. These links
                are provided for your convenience to provide further information. We
                have no control over the nature, content, and availability of those
                sites and do not endorse the views expressed within them. The inclusion
                of any links does not necessarily imply a recommendation or endorsement
                of the views expressed within them.
            </p>
            <p className="text-lg leading-relaxed py-5" data-aos="fade-up">
                By using this website, you agree that doordars-smc.com and its owners
                will not be liable for any loss or damage, including without limitation,
                indirect or consequential loss or damage, or any loss or damage
                whatsoever arising from loss of data or profits arising out of, or in
                connection with, the use of this website.
            </p>
        </div>
    );
}

export default Disclaimer;
