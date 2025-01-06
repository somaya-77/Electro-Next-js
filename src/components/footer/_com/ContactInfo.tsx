import { footerIcons } from '@/lib/contacts';
import React from 'react'
import { LuHeadset } from "react-icons/lu";

const ContactInfo = () => {
  return (
    <div className='flex-1 flex flex-col gap-4'>
      <div className="flex-global-between">
        <h1 className="title_h"><b>electro<span className='text-primary'>.</span></b></h1>
      </div>
      <div className='flex items-center gap-4'>
        
        <div>
          <LuHeadset className='font-bold text-7xl text-primary' />
        </div>
        <div>
          <p className='title mb-2'>Got Questions ? Call us 24/7!</p>
          <p className='text-text_dark text-xl tracking-wide'>(800) 8001-8588, (0600) 874 548</p>
        </div>
      </div>

      <div>
        <h5 className='headText'>Contact Info</h5>
        <p className='title text-md mt-2'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
      </div>

      {/* social icons */}
      <div className='flex gap-6'>
        {footerIcons.map((icon, i) => {
          const { Icon, hoverClass } = icon;

          return (
            <Icon
              key={i}
              className={`fill-light_2 text-2xl cursor-pointer transition-colors delay-75 ${hoverClass} ${i === footerIcons.length - 1 ? 'rotate-45' : ''}`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ContactInfo
