import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <section className="flex-between space-x-4 my-[30px]">
      <Link href="/shop" className="">
        <Image src="/assets/images/two-banner-1.jpg" alt="banner" width={700} height={130} />
      </Link>
      <Link href="/shop" className="">
        <Image src="/assets/images/two-banner-2.jpg" alt="banner" width={700} height={130} />
      </Link>
    </section>
  )
}

export default Banner;
