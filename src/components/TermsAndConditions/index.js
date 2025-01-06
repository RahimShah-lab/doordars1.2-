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
            <h2 className="text-3xl md:text-5xl font-bold py-3">Terms and Conditions</h2>
            <p className="text-lg leading-relaxed py-5">
                Welcome to DoorDars!
            </p>
            <p className="text-lg leading-relaxed py-5">
                These terms and conditions outline the rules and regulations for the use of DoorDars SMC (Private Limited)'s Website, located at <a href="https://www.doordars-smc.com/" className="text-blue-600">https://www.doordars-smc.com</a>.
            </p>
            <p className="text-lg leading-relaxed py-5">
                By accessing this website, we assume you accept these terms and conditions. Do not continue to use DoorDars if you do not agree to take all of the terms and conditions stated on this page.
            </p>
            <p className="text-lg leading-relaxed pt-5 font-bold" data-aos="fade-up">Cookies:</p>
            <p className="text-lg leading-relaxed py-2" data-aos="fade-up">
                The website uses cookies to help personalize your online experience. By accessing DoorDars, you agreed to use the required cookies.
            </p>
            <p className="text-lg leading-relaxed py-2" data-aos="fade-up">
                A cookie is a text file placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.
            </p>
            <p className="text-lg leading-relaxed py-2" data-aos="fade-up">
                We may use cookies to collect, store, and track information for statistical or marketing purposes to operate our website. You can accept or decline optional cookies. Required cookies are necessary for website operation and do not require your consent. By accepting required cookies, you also accept third-party cookies, which may be used via third-party services integrated into our website.
            </p>
            <p className="text-lg leading-relaxed pt-5 font-bold" data-aos="fade-up">License:</p>
            <p className="text-lg leading-relaxed py-2" data-aos="fade-up">
                Unless otherwise stated, DoorDars SMC (Private Limited) and/or its licensors own the intellectual property rights for all material on DoorDars. All intellectual property rights are reserved. You may access this from DoorDars for personal use only, subject to restrictions outlined in these terms and conditions.
            </p>
            <p className="text-lg leading-relaxed py-2" data-aos="fade-up">You must not:</p>
            <ul className="list-disc pl-6" data-aos="fade-up">
                <li className="text-lg leading-relaxed">Copy or republish material from DoorDars</li>
                <li className="text-lg leading-relaxed">Sell, rent, or sub-license material from DoorDars</li>
                <li className="text-lg leading-relaxed">Reproduce, duplicate, or copy material from DoorDars</li>
                <li className="text-lg leading-relaxed">Redistribute content from DoorDars</li>
            </ul>
            <p className="text-lg leading-relaxed py-2" data-aos="fade-up">This Agreement shall begin on the date hereof.</p>
            <p className="text-lg leading-relaxed py-2" data-aos="fade-up">
                Parts of this website allow users to post and exchange opinions and information in certain areas. DoorDars SMC (Private Limited) does not filter, edit, publish, or review comments before they appear on the website. Comments reflect the views of the person posting them, and DoorDars SMC (Private Limited) is not responsible for any comments made on this site.
            </p>
            <p className="text-lg leading-relaxed py-2" data-aos="fade-up">
                DoorDars SMC (Private Limited) reserves the right to monitor all comments and remove any comments that could be considered inappropriate or offensive or that violate these Terms and Conditions.
            </p>
            <p className="text-lg leading-relaxed py-2 font-bold" data-aos="fade-up">You warrant and represent that:</p>
            <ul className="list-disc pl-6" data-aos="fade-up">
                <li className="text-lg leading-relaxed">You are entitled to post the comments on our website and have all necessary licenses and consents to do so;</li>
                <li className="text-lg leading-relaxed">The comments do not infringe on intellectual property rights, including copyright, patent, or trademark;</li>
                <li className="text-lg leading-relaxed">The comments do not contain defamatory, libelous, offensive, or unlawful material;</li>
                <li className="text-lg leading-relaxed">The comments will not be used to solicit business or promote commercial activities or unlawful activity;</li>
            </ul>
            <p className="text-lg leading-relaxed py-2" data-aos="fade-up">
                You hereby grant DoorDars SMC (Private Limited) a non-exclusive license to use, reproduce, edit, and authorize others to use, reproduce, and edit any of your comments in any and all forms, formats, or media.
            </p>
            <p className="text-lg leading-relaxed py-4 font-bold" data-aos="fade-up">Hyperlinking to Our Content:</p>
            <p className="text-lg leading-relaxed py-2" data-aos="fade-up">
                The following organizations may link to our website without prior written approval:
            </p>
            <ul className="list-disc pl-6" data-aos="fade-up">
                <li className="text-lg leading-relaxed">Government agencies</li>
                <li className="text-lg leading-relaxed">Search engines</li>
                <li className="text-lg leading-relaxed">News organizations</li>
                <li className="text-lg leading-relaxed">Online directory distributors</li>
                <li className="text-lg leading-relaxed">Accredited businesses</li>
            </ul>
            <p className="text-lg leading-relaxed py-3" data-aos="fade-up">
                These organizations may link to our home page, publications, or other website information, provided the link is not misleading and does not imply sponsorship or endorsement.
            </p>
            <h3 className="text-lg font-bold pt-5" data-aos="fade-up">Content Liability:</h3>
            <p className="text-lg leading-relaxed py-3" data-aos="fade-up">
                We are not responsible for any content that appears on your website. You agree to protect and defend us against all claims arising from your website. Links should not be interpreted as defamatory, obscene, or criminal.
            </p>
            <h3 className="text-lg font-bold pt-5" data-aos="fade-up">Reservation of Rights:</h3>
            <p className="text-lg leading-relaxed py-3" data-aos="fade-up">
                We reserve the right to request that you remove any links to our website. You agree to immediately remove any link upon request.
            </p>
            <h3 className="text-lg font-bold pt-5" data-aos="fade-up">Removal of Links:</h3>
            <p className="text-lg leading-relaxed py-3" data-aos="fade-up">
                If you find any offensive link on our website, you may contact us at any time. We will consider removing such links but are not obligated to respond.
            </p>
            <h3 className="text-lg font-bold pt-5" data-aos="fade-up">Disclaimer:</h3>
            <p className="text-lg leading-relaxed py-3" data-aos="fade-up">
                To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions related to our website and its use. This includes but is not limited to:
            </p>
            <ul className="list-disc pl-6" data-aos="fade-up">
                <li className="text-lg leading-relaxed">Limiting or excluding liability for death or personal injury;</li>
                <li className="text-lg leading-relaxed">Limiting or excluding liability for fraud or fraudulent misrepresentation;</li>
                <li className="text-lg leading-relaxed">Limiting liabilities not permitted under applicable law;</li>
                <li className="text-lg leading-relaxed">Excluding liabilities that cannot be excluded under applicable law.</li>
            </ul>
            <p className="text-lg leading-relaxed py-3" data-aos="fade-up">
                As long as the website and its services are provided free of charge, we will not be liable for any loss or damage of any nature.
            </p>
        </div>
    );
}

export default Disclaimer;
