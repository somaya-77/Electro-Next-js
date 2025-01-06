'use client'
import React from 'react'
import ButtonFooter from './ButtonFooter'
import LinksFooter from './LinksFooter';
import TopFooter from './TopFooter';
import MobFooter from './MobFooter';
import useResponsive from '@/hook/useResponsive';

const Footer = () => {
  const { xs } = useResponsive();
  return xs ? (
    <div>
      <MobFooter />
    </div>
  ) : (
    <div className='flex flex-col gap-12 my-10'>
      <TopFooter />
      <LinksFooter />
      <ButtonFooter />
    </div>
  )
}

export default Footer;
