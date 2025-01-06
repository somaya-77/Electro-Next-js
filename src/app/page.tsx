'use client'
import CardShop from "@/components/cards/CardShop";
import ProductCard from "@/components/cards/ProductCard";
import ProductCardRow from "@/components/cards/ProductCardRow";
import PurchasingMethods from "@/components/cards/PurchasingMethods";
import AutoPlay from "@/components/optimized/AutoPlaySlider";
import Entertainment from "@/components/optimized/Entertainment";
import Slide from "@/components/optimized/Slider";
import LabTabs from "@/components/optimized/Tap";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/contacts";
import Image from "next/image";
import useResponsive from '@/hook/useResponsive';

const HomePage = () => {
  const { xs } = useResponsive();
  return (
    <div className="flex_col gap-10">
      {xs ?
       <div className="flex items-center justify-center bg w-full h-[63vh]">
         <div className="px-20 flex flex-col gap-5 text-center">
          <h3 className="title_h font-thin">THE NEW STANDARD</h3>
          <p className="title_h text-blue text-xl">UNDER FAVORABLE SMARTWATCHES</p>
          <p className="title_h ">$ <span>749</span></p>
          <Button>Start Buying</Button>
        </div>
       </div>
        :
        <div className="bg w-full h-[63vh] flex-global-between px-40 overflow-hidden">
          <div className="flex-1 px-20 flex flex-col gap-5">
            <h3 className="title_h font-thin">THE NEW <br />STANDARD</h3>
            <p className="title_h text-blue text-xl">UNDER FAVORABLE SMARTWATCHES</p>
            <p className="title_h ">$ <span>749</span></p>
            <div><Button>Start Buying</Button></div>

          </div>
          <div className="flex-1">
            <Image src="/assets/images/Smartwatchess.png" alt="watch" width={700} height={1000} />
          </div>
        </div>}
      <div className="md:px-20 flex_col gap-10">
        <CardShop />
        <PurchasingMethods />
        <LabTabs />
      </div>
      <Entertainment />
      <div className="md:px-20 flex_col gap-10 hidden md:block">
        <AutoPlay />
      </div>
    </div>
  )
}

export default HomePage;
