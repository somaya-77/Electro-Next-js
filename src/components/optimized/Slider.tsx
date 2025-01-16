'use client';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import { products } from "@/lib/contacts";
import ProductCard from "../cards/ProductCard";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Slide = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1224, 
                settings: {
                    slidesToShow: 4, 
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 3, 
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 850, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600, 
                settings: {
                    slidesToShow: 2, 
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="slider-container overflow-hidden">
            <Slider {...settings}>
                {products.map(el => (
                    <div key={el.id} className="h-[410px]">
                        <ProductCard   {...el} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Slide;
