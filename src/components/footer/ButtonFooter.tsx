import Image from 'next/image'
import React from 'react'

const ButtonFooter = () => {
  return (
    <div className='px-20 py-1 bg-light_3 flex-global-between'>
      <div className='text-gray_text'>© <span className='title text-lg font-bold'>Electro</span> - All Rights Reserved</div>

      <Image src="/assets/f/payment-icon1.webp" alt="payment" width={400} height={100}/>
    </div>
  )
}

export default ButtonFooter;
