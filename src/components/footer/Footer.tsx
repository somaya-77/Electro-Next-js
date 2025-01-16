'use client'
import React from 'react'
import ButtonFooter from './ButtonFooter'
import LinksFooter from './LinksFooter';
import TopFooter from './TopFooter';
import MobFooter from './MobFooter';


const Footer = () => {

  return (
    <>
      <div className='hidden lg:flex flex-col gap-12 my-10'>
        <TopFooter />
        <LinksFooter />
        <ButtonFooter />
      </div>
      <MobFooter />
    </>
  )
}

export default Footer;
