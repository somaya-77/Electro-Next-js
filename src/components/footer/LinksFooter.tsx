import React from 'react'
import { ContactInfo, CustomerCare, FindItFast } from '../optimized';


const LinksFooter = () => {
  return (
    <div className='px-20 flex justify-between'>
      <ContactInfo />
      <FindItFast />
      <CustomerCare />
    </div>
  )
}

export default LinksFooter;
