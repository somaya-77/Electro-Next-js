
import CardShop from "@/components/cards/CardShop";
import Hero from "@/components/cards/Hero";
import PurchasingMethods from "@/components/cards/PurchasingMethods";
import AutoPlay from "@/components/optimized/AutoPlaySlider";
import Entertainment from "@/components/optimized/Entertainment";

import LabTabs from "@/components/optimized/Tap";
import { Button, IconButton, Typography } from "@mui/material";
import { FaChevronRight } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const HomePage = () => {

  return (
    <main className="flex_col gap-15">
      <Hero />
      <div className="md:px-20 flex_col gap-15">
        <CardShop />
        <PurchasingMethods />
        <LabTabs />
      </div>
      <Entertainment />
      <div className="md:px-20 flex_col gap-10 hidden md:block">
        {/* <AutoPlay /> */}
      </div>
    </main>
  )
}

export default HomePage;
