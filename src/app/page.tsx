
import CardShop from "@/components/cards/CardShop";
import CompHome from "@/components/cards/CompHome";
import PurchasingMethods from "@/components/cards/PurchasingMethods";
import AutoPlay from "@/components/optimized/AutoPlaySlider";
import Entertainment from "@/components/optimized/Entertainment";

import LabTabs from "@/components/optimized/Tap";


const HomePage = () => {
  
  return (
    <div className="flex_col gap-10">
      <CompHome />
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
