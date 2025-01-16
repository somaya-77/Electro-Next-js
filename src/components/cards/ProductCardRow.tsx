import Image from 'next/image';
import React from 'react'
import { BiCartDownload } from "react-icons/bi";

interface props {
    categories: string[];
    title: string;
    img: string;
    price: string;
}
const ProductCardRow = ({ categories, title, img, price }: props) => {
    return (
        <div className='flex-shrink-0 lg:w-[320px] flex_col gap-2 p-2 lg:p-5 cursor-pointer hover:shadow-xl group bg-white '>

            <div className='relative flex gap-2'>
                <div className='max-h-[140px] flex-center'>
                    <Image src={img} alt={title} width={160} height={160} />
                </div>

                <div className='flex_col'>
                    <div className='flex items-center'>
                        {categories.map((category, i) => (
                            <div key={i}>
                                {i > 0 && <span className='text-gray_dark'>,</span>}
                                <p  className='title text-xs text-gray_dark cursor-pointer hover:text-text_dark'>{category}</p>
                            </div>
                        ))}

                    </div>
                    <div className='h-[45px]'>
                        <h3 className='text-blue text-sm md:text-[15px] w-[80%] overflow-hidden line-clamp-2'>{title}</h3>
                    </div>

                    <div className='flex-between mt-2'>
                        <p className='lg:text-xl text-text_dark'>${price}</p>

                        <div className="bg-light_1 rounded-full flex-center size-9 cursor-pointer transition hover:bg-primary group-hover:bg-primary">
                            <BiCartDownload color='white' size={24} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <ControlCard row />
            </div> */}
        </div>
    )
}

export default ProductCardRow;
