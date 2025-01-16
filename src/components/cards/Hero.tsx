'use client'

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const slides = [
    {
        background: "/assets/images/background.webp",
        image: "/assets/images/Sounddevice.webp",
        title: "TIMEPIECES THAT",
        bold: "MAKE A STATEMENT",
        description: "SHOP TO WHAT YOU LOVE",
        buttonText: "Start Buying",
        offer: "40% OFF", // UP TO
    },
    {
        background: "/assets/images/HomeV3ProductBackground.webp",
        image: "/assets/images/Smartwatchess.png",
        title: "THE NEW ",
        bold: "STANDARD",
        description: "UNDER FAVORABLE SMARTWATCHES",
        buttonText: "Start Buying",
        price: "700",
    },
    {
        background: "/assets/images/background.webp",
        image: "/assets/images/Smartphones.webp",
        title: "TIMEPIECES THAT",
        bold: "MAKE A STATEMENT",
        description: "SHOP TO WHAT YOU LOVE",
        buttonText: "Start Buying",
        offer: "40% OFF", // UP TO
    },
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        cssEase: "linear",
        centerMode: false,
        adaptiveHeight: true,
        pauseOnHover: true,
        beforeChange: (oldIndex: number, newIndex: number) => {
            setCurrentSlide(newIndex);
        },
        customPaging: (i: number) => (
            <div
                style={{
                    width: i === currentSlide ? "25px" : "10px",
                    height: "10px",
                    background: i === currentSlide ? "#fed700" : "#48525b80",
                    borderRadius: i === currentSlide ? "30%" : "50%",
                    marginTop: "-30px",
                }}
            />
        ),
    };

    return (
        <div className="slider-container overflow-hidden">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="">
                        <div
                            className="flex-start h-[65vh] bg-cover bg-center overflow-hidden px-10 md:px-28 xl:px-48 gap-4"
                            style={{ backgroundImage: `url(${slide.background})` }}
                        >
                            {currentSlide === index && (
                                <>
                                    <motion.div
                                        className="flex flex-col gap-4 flex-1"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 2, delay: 0.5 }}
                                    >
                                        <motion.div

                                            initial={{ skewY: 15 }}
                                            animate={{ skewY: 0 }}
                                            transition={{ duration: 2, delay: 0.7 }}
                                        >
                                            <h3 className="text-text_dark text-5xl font-extralight">
                                                {slide.title}
                                                <br />
                                                {slide.bold}
                                            </h3>
                                        </motion.div>
                                        <p className="font-bold text-blue text-xl">{slide.description}</p>
                                        <p className="text-black text-4xl font-semibold tracking-tighter">
                                            {slide.offer ? <span>UP TO {slide.offer}</span> : <span>$ {slide.price}<sup>99</sup></span>}
                                        </p>
                                        <div className="mt-3">
                                            <Button className="text-text_dark w-[250px] hover:bg-h_primary">{slide.buttonText}</Button>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="hidden md:flex flex-1"
                                        initial={{ opacity: 0, transform: "translateX(100%)" }}
                                        animate={{ opacity: 1, transform: "translateX(0)" }}
                                        transition={{ duration: 1, delay: 0.7 }}
                                    >
                                        <Image
                                            src={slide.image}
                                            alt={slide.title}
                                            width={700}
                                            height={1400}
                                        />
                                    </motion.div>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Hero;
