import {  IoSearchOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { GoPerson } from "react-icons/go";
import DrawerMenu from "../optimized/DrawerMenu";

const MobHeader = () => {
  return (
    <div className="flex-between bg-primary py-3 px-5 lg:hidden">
      <div className="flex-between gap-5">
        <DrawerMenu />
        <h1 className="title_h text-2xl"><b>electro</b></h1>
      </div>

      <div className="flex items-center gap-4">
        <IoSearchOutline size={24} color="#333e48" />
        <GoPerson size={24} color="#333e48" />
        <LiaShoppingBagSolid size={24} color="#333e48" />
      </div>
    </div>
  )
}

export default MobHeader
