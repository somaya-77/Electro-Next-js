import Image from 'next/image';
import React from 'react'
import { BiCartDownload } from "react-icons/bi";
import ControlCard from './ControlCard';

interface props {
    categories: string[];
    title: string;
    img: string;
    price: string;
}

const ProductCard = ({ categories, title, img, price }: props) => {
    return (
    
            <div className='flex-shrink-0 flex-1 flex_col gap-2 p-5 border-r border-light_2 cursor-pointer hover:shadow-xl group'>

                <div className='flex items-center'>
                    {categories.map((category, i) => (
                        <>
                            {i > 0 && <span className=' text-gray_dark'>,</span>}
                            <p key={i} className='title text-xs text-gray_dark cursor-pointer hover:text-text_dark'>{category}</p>
                        </>
                    ))}
                </div>
                {/* title */}
                <div className='h-[45px]'>
                    <h3 className='text-blue text-sm md:text-[15px] w-[80%]'>{title}</h3>
                </div>

                <div className='max-h-[200px] flex-center'>
                    <Image src={img} alt={title} width={200} height={300} />
                </div>

                <div className='flex-between'>
                    <p className='text-xl lg:text-xl text-text_dark'>${price}</p>

                    <div className="bg-light_1 rounded-full flex-center size-9 cursor-pointer transition hover:bg-primary group-hover:bg-primary">
                        <BiCartDownload color='white' size={24} />
                    </div>
                </div>

                <ControlCard />
            </div>
    )
}

export default ProductCard;
