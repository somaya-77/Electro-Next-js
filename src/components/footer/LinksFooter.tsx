import React from 'react'
import { ContactInfo, CustomerCare, FindItFast } from '../optimized';


const LinksFooter = () => {
  return (
    <div className='px-10 xl:px-20 items-start flex-between gap-4'>
      <ContactInfo />
      <FindItFast />
      <CustomerCare />
    </div>
  )
}

export default LinksFooter;
