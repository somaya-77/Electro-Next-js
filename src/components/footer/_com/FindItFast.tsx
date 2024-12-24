import { links } from '@/utils/contacts'
import React from 'react'

const FindItFast = () => {
  return (
    <div className='flex-1'>
        <h2 className='headText py-5'>Find It Fast</h2>
      {links.map(item => (
        <div key={item} className='flex flex-col flex-wrap '>
            <p  className='text-gray_text'>{item}</p>
        </div>
      ))}
    </div>
  )
}

export default FindItFast
