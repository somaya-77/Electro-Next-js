'use client';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import { products } from "@/lib/contacts";
import Image from "next/image";
import { useState } from "react";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const RecentlyProducts = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 0,
        adaptiveHeight: true,
        pauseOnHover: true,
        beforeChange: (oldIndex: number, newIndex: number) => {
            setCurrentSlide(newIndex);
        },
        customPaging: (i: number) => (
            <div
                style={{
                    width: i === currentSlide ? "18px" : "7px",
                    height: "7px",
                    background: i === currentSlide ? "#fed700" : "#48525b80",
                    borderRadius: i === currentSlide ? "30%" : "50%",
                }}
            />
        ),
        responsive: [
            {
                breakpoint: 1024, // للشاشات الكبيرة (أكبر من 1024px)
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                },
            },
            {
                breakpoint: 850, 
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                },
            },
            {
                breakpoint: 600, 
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };
    return (
        <div>
            <div className='border-b border-light_3 mb-8'>
                <h2 className='text-text_dark w-fit border-b border-primary py-3 text-lg lg:text-2xl'>Your Recently Viewed Products </h2>
            </div>

            <div className="slider-container overflow-hidden">
                <Slider {...settings}>
                    {products.map(el => (
                        <div key={el.id} className=" ">
                            <Image src={el.img} alt={el.title} width={300} height={300} className="border-r p-5 border-light_3  hover:shadow-md"/>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default RecentlyProducts
