import { customerCare } from '@/lib/contacts'
import React from 'react'

const CustomerCare = () => {
  return (
    <div>
      <h2 className='headText py-5'>Customer Care</h2>
      <div className='flex_col'>
        {customerCare.map(item => (
          <p key={item} className='text-gray_text text-sm'>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default CustomerCare
