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
                breakpoint: 1224, // الشاشات الكبيرة
                settings: {
                    slidesToShow: 4, // عرض 4 عناصر
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024, // الشاشات الكبيرة
                settings: {
                    slidesToShow: 3, // عرض 3 عناصر
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 850, // الشاشات المتوسطة
                settings: {
                    slidesToShow: 2, // عرض 2 عناصر
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600, // الشاشات الصغيرة
                settings: {
                    slidesToShow: 2, // عرض 2 عناصر
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480, // للموبايل
                settings: {
                    slidesToShow: 1, // عرض 1 عنصر
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="slider-container">
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
