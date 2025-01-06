
import Link from 'next/link'
import { LiaShoppingBagSolid } from "react-icons/lia";
import { BiGitCompare } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
// import InputButton from '../form/InputButton';
// import DrawerMenu from '../optimized/DrawerMenu';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between px-20'>
            {/* logo */}
            <h1 className="title_h text-3xl"><b>electro</b></h1>
            <div className=" flex items-center gap-4 w-[55%]">
                {/* <DrawerMenu />
                <div className="w-full">
                    <InputButton />
                </div> */}
            </div>

            <div className='flex items-center gap-8 pr-2'>
                <Link href="" >
                    <BiGitCompare color='#48525b' size={30} className='rotate-90' />
                </Link>

                <Link href="">
                    <FaRegHeart color='#48525b' size={30} />
                </Link>

                <Link href="">
                    <GoPerson color='#48525b' size={30} />
                </Link>
                <Link href="" className='flex items-center gap-2 relative'>
                    <span className='absolute bg-black text-white size-5 rounded-full text-sm left-3 -bottom-1 flex items-center justify-center'>0</span>
                    <LiaShoppingBagSolid color='#48525b' size={35} />
                    <p className='title text-xl font-bold'>$0.00</p>
                </Link>
            </div>

        </nav>
    )
}

export default Navbar
