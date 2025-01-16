import { links } from '@/lib/contacts'
import React from 'react'

const FindItFast = () => {
  return (
    <div className='flex-1'>
      <h2 className='headText py-5'>Find It Fast</h2>
      <div className='grid-2-column gap-2'>
        {links.map(item => (
          <p key={item} className='text-gray_text text-sm'>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default FindItFast;
