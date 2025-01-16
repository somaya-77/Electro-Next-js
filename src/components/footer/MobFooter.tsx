import { footerIcons, mobFooterIcons } from '@/lib/contacts';
import React from 'react'

const MobFooter = () => {
    return (
        <div className='col-center gap-6 w-full mt-8 lg:hidden'>

            {/* accordion */}



            {/* social icons */}
            <div className='flex gap-6'>
                {mobFooterIcons.map((icon, i) => {
                    const { Icon, hoverClass } = icon;

                    return (
                        <Icon
                            key={i}
                            className={` text-2xl cursor-pointer ${hoverClass} ${i === footerIcons.length - 1 ? 'rotate-45' : ''}`}
                        />
                    )
                })}
            </div>
            {/* dark footer */}
            <div className='bg-text_dark w-full col-center py-6'>
                <div className="flex-global-between">
                    <h1 className="title_h text-white"><b>electro<span className='text-primary'>.</span></b></h1>
                </div>
                <div className='col-center mt-5'>
                    <p className='title mb-2 text-white'>Got Questions ? Call us 24/7!</p>
                    <p className='text-white text-lg tracking-wide'>(800) 8001-8588, <p className='ml-2'> (0600) 874 548</p></p>
                </div>
            </div>
        </div>
    )
}

export default MobFooter
