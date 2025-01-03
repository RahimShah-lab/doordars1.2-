import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function About() {
    useEffect(() => {
        AOS.init({
            duration: 300,
        });
    }, []);
  return (
    <div className="px-3 md:px-16">
      <h2 className="text-6xl font-bold py-6 md:py-16 hover:text-blue-700 duration-300 transition-colors">About Us</h2>
      <p className="text-lg pb-4">
        Welcome to DoorDars-SMC, your gateway to engaging educational content
        designed to inspire curiosity, creativity, and innovation. We are a Team
        of Scientists and Engineers, led by{" "}
        <span className="font-bold">Prof. Dr. Lutfullah Kakakhel.</span> Our
        mission is to empower learners of all ages through accessible, interactive,
        and enriching resources. We have our own school under the name of{" "}
        <a className="underline" href="https://doordars.edu.pk/">
          "Doordars International School"
        </a>{" "}
        where all the STEM activities are incubated and tested.
      </p>
      <p className="text-lg pb-10" data-aos="fade-up">
        <span className="font-bold">Our Vision</span> We believe in nurturing a
        generation that is well-versed in the fields of science, technology,
        engineering, and mathematics (STEM). By blending traditional learning
        with modern advancements, we aim to create a vibrant educational ecosystem
        where knowledge meets application.
      </p>
      <h4 className="text-xl font-bold" data-aos="fade-up">What We Offer</h4>
      <p className="leading-normal px-3 text-lg py-3" data-aos="fade-up">
        <span className="font-bold">. STEM Education:</span> Explore comprehensive
        STEM resources tailored for learners, educators, and enthusiasts. From
        foundational concepts to hands-on projects, our platform bridges the gap
        between theory and practice.
      </p>
      <p className="leading-normal px-3 text-lg py-3" data-aos="fade-up">
        <span className="font-bold">. E-Stories and E-Books:</span> Dive into our
        library of captivating e-stories and e-books that make learning fun and
        interactive. Whether it’s for classroom use or personal growth, our
        digital publications cater to different learning levels and styles.
      </p>
      <p className="leading-normal px-3 text-lg py-3" data-aos="fade-up">
        <span className="font-bold">. AI Launchpad Kit:</span> Unlock the
        potential of artificial intelligence with our specially curated AI
        Launchpad Kit. Perfect for hobbyists, educators, and aspiring developers,
        the kit is designed to guide users through the essentials of AI, with
        practical applications in mind.
      </p>
      <p className="leading-normal px-3 text-lg pb-10 pt-3" data-aos="fade-up">
        <span className="font-bold">. Educational Content:</span> We are committed
        to providing resources that enhance learning experiences across various
        subjects. Our content is crafted to engage, inform, and motivate learners
        through innovative teaching methods.
      </p>
      <h3 className="text-xl font-bold" data-aos="fade-up">Why Choose Us?</h3>
      <p className="leading-normal px-3 text-lg py-3" data-aos="fade-up">
        <span className="font-bold">. Innovative Learning Tools:</span> With
        cutting-edge content like our AI Launchpad Kit, we offer an immersive way
        to learn, experiment, and succeed in today’s tech-driven world.
      </p>
      <p className="leading-normal px-3 text-lg py-3" data-aos="fade-up">
        <span className="font-bold">. Comprehensive Resources:</span> From
        STEM-focused activities to literary content, we cover a wide range of
        educational topics that encourage holistic development.
      </p>
      <p className="leading-normal px-3 text-lg pb-8 pt-3" data-aos="fade-up">
        <span className="font-bold">. Commitment to Quality:</span> We take pride
        in developing high-quality educational materials that are both informative
        and enjoyable.
      </p>
      <p className="text-lg px-3 leading-normal" data-aos="fade-up">
        Join us in our journey to make learning an inspiring and transformative
        experience.
      </p>
      <p className="text-lg px-3 leading-normal pb-8" data-aos="fade-up">
        DoorDars is where education, creativity, and technology come together to
        build a brighter future.
      </p>
      {/* Contact details */}
      <div className="cards-container grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8 py-10" data-aos="fade-up">
        <div className="md:col-span-2" data-aos="fade-up">
          <p className="text-lg">Location:</p>
          <p className="text-lg">Pages N Bytes </p>
          <p className="text-lg">TechMeenar, Commercial 68, LG-02, </p>
          <p className="text-lg">Street 90, Block D, MPCHS, B-17, Islamabad </p>
          <p className="text-lg">44000, Pakistan.</p>
          <p className="text-lg">Email: contact@doordars-smc.com</p>
          <p className="text-lg">Call & Whatsapp: +923369262562</p>
        </div>
        <div>
          <img
            src="/assets/images/lutfullahkakakhel.avif"
            alt="User"
            className="object-cover w-[80%] h-[180px] mx-auto"
            data-aos="fade-up"
          />
          <p className="text-lg pt-4 text-gray-600 text-center">Lutfullah Kakakhel</p>
        </div>
      </div>
      <div className="md:w-[40%] mx-auto" data-aos="fade-up">
        <h3 className="text-center text-xl py-3 md:py-8">Drop Us a line here:</h3>
        <form className="">
          <div className="flex flex-col pb-6">
            <label>Name</label>
            <input
              placeholder="Your Name"
              className="border bg-gray-200 py-3 px-5"
            ></input>
          </div>
          <div className="flex flex-col pb-6">
            <label>Last Name</label>
            <input
              placeholder="Your Last Name"
              className="border bg-gray-200 py-3 px-5"
            ></input>
          </div>
          <div className="flex flex-col pb-6">
            <label>Your email*</label>
            <input
              placeholder="Your email address"
              className="border bg-gray-200 py-3 px-5"
            ></input>
          </div>
          <div className="flex flex-col pb-6">
            <label>Message*</label>
            <input
              placeholder="Enter your message"
              className="border bg-gray-200 py-3 px-5"
            ></input>
          </div>
          <div className="text-center py-3 md:py-6">
            <button className="px-6 py-3 text-sm font-semibold bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default About;
