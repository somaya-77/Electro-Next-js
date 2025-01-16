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
        autoplaySpeed: 2000,
        cssEase: "linear",
    };
    return (
        <div className="slider-container px-10">
            <Slider {...settings}>
                {companies.map((el, i) => (
                    <Image key={i} src={el.img} alt={el.alt} width={100} height={30} className=" cursor-pointer"/>
                ))}
            </Slider>
        </div>
    );
}

export default AutoPlay;
