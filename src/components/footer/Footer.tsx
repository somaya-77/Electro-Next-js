import React from 'react'
import ButtonFooter from './ButtonFooter'
import LinksFooter from './LinksFooter';

const Footer = () => {
  console.log("done")
  return (
    <div className='py-20 flex flex-col gap-12'>
      <LinksFooter />
      <ButtonFooter />
    </div>
  )
}

export default Footer;
