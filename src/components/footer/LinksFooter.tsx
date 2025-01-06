import React from 'react'
import { ContactInfo, CustomerCare, FindItFast } from '../optimized';


const LinksFooter = () => {
  return (
    <div className='px-20 lg:flex-global-between hidden gap-4'>
      <ContactInfo />
      <FindItFast />
      <CustomerCare />
    </div>
  )
}

export default LinksFooter;
