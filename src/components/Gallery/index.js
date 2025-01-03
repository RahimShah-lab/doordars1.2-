import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function Gallery() {
    useEffect(() => {
        AOS.init({
            duration: 300,
        });
    }, [])
    const images = [
        { src: "/assets/images/ai-landing.avif", alt: "Image 1" },
        { src: "/assets/images/card%2001.avif", alt: "Image 2" },  
        { src: "/assets/images/card-02.png", alt: "Image 3" },
        { src: "/assets/images/card03.png", alt: "Image 4" },
        { src: "/assets/images/card04.png", alt: "Image 5" },
        { src: "/assets/images/card05.avif", alt: "Image 6" },  
        { src: "/assets/images/ai-lounchpad-home.jpeg", alt: "Image 7" },
        { src: "/assets/images/Iot%2001.avif", alt: "Image 8" }, 
        { src: "/assets/images/Iot 03.avif", alt: "Image 9" },  
        { src: "/assets/images/dhtSensor.png", alt: "Image 10" },
        { src: "/assets/images/=an-illustration-showing-children-of-diverse-backgrounds-learning-with-ai-technology-in-a-classroom-setting.avif", alt: "Image 11" },
        { src: "/assets/images/dhtSensor3.png", alt: "Image 12" },
        { src: "/assets/images/lutfullahkakakhel.avif", alt: "Image 13" },
        { src: "/assets/images/front-page-ful-kit.avif", alt: "Image 14" },
        { src: "/assets/images/an-educational-illustration-showcasing-open-source-ai-tools-in-action-within-a-school-environment.avif", alt: "Image 15" },
    ];
    return (
        <div className="container mx-auto py-10 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" data-aos="fade-up">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-2xl transition-shadow duration-300" data-aos="fade-up"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                            <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {image.alt}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
