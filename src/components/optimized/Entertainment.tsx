'use client';
import { productRow } from '@/lib/contacts'
import Image from 'next/image'
import React from 'react'
import ProductCardRow from '../cards/ProductCardRow'
import useResponsive from '@/hook/useResponsive';
const Entertainment = () => {
    const { xs } = useResponsive();
    return xs ? (
        <div className='bg w-full h-[70vh] flex_center'>
            <div className=' flex-1 px-20'>
                <div className='border-b border-light_3 mb-8'>
                    <h2 className='w-fit border-b border-primary py-3 text-2xl'>Television Entertainment</h2>
                </div>

                <div className='grid grid-cols-2 gap-3' >
                    {productRow.map(el => (
                        <ProductCardRow key={el.id}  {...el} />
                    ))}
                </div>
            </div>
        </div>
    ) : (
        <div className='bg w-full lg:h-[80vh] flex items-center grid-2-column gap-16'>
            <div className='flex-1 flex_center'>
                <Image src="/assets/images/da-banner.webp" alt="banner" width={500} height={700} />
            </div>

            <div className=' flex-1 pr-20'>
                <div className='border-b border-light_3 mb-8'>
                    <h2 className='w-fit border-b border-primary py-3 text-2xl'>Television Entertainment</h2>
                </div>

                <div className='grid grid-cols-2 gap-3' >
                    {productRow.map(el => (
                        <ProductCardRow key={el.id}  {...el} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Entertainment
