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
        <div className='flex-shrink-0 lg:w-[320px] flex_col gap-2 px-2 py-4 cursor-pointer hover:shadow-xl group bg-white '>

            <div className='relative flex gap-2 h-full'>
                <div className='banner flex-center p-3 md:p-0'>
                    <Image src={img} alt={title} width={90} height={90} />
                </div>

                <div className='flex_col flex-1 justify-between h-full'>
                    <div className='flex flex-col'>
                        <div className='flex items-center'>
                            {categories.map((category, i) => (
                                <>
                                    {i > 0 && <span className=' text-light_1'>,</span>}
                                    <p key={i} className='title text-[0.6rem] text-light_1 cursor-pointer hover:text-text_dark'>{category}</p>
                                </>
                            ))}
                        </div>
                            <h3 className='text-dark_blue text-xs md:text-[0.9rem] font-semibold line-clamp-2'>{title}</h3>
                    </div>

                    <div className='flex-between'>
                        <p className='text-text_dark'>${price}</p>

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
