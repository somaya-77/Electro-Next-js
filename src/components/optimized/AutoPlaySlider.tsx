'use client';

import { companies } from "@/lib/contacts";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

function AutoPlay() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {companies.map((el, i) => (

                    <img key={i} src={el.img} alt={el.alt}  className="px-10 cursor-pointer"/>
                ))}
               
            </Slider>
        </div>
    );
}

export default AutoPlay;
