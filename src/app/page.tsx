
import CardShop from "@/components/cards/CardShop";
import Hero from "@/components/cards/Hero";
import PurchasingMethods from "@/components/cards/PurchasingMethods";
import Banner from "@/components/optimized/Banner";
import Entertainment from "@/components/optimized/Entertainment";
import RecentlyProducts from "@/components/optimized/RecentlyProducts";
import LabTabs from "@/components/optimized/Tap";


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
        <Banner />
        <RecentlyProducts />
      </div>
    </main>
  )
}

export default HomePage;
