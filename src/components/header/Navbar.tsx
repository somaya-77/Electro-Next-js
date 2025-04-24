
import Link from 'next/link'
import { LiaShoppingBagSolid } from "react-icons/lia";
import { BiGitCompare } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { IconButton } from '@mui/material';
import DrawerMenu from '../optimized/DrawerMenu';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between py-6 lg:px-10 xl:20px'>
            {/* logo */}
            <h1 className="title_h text-3xl"><b>electro<span className='text-primary'>.</span></b></h1>
            <div className=" flex items-center gap-4 w-[55%]">
                <DrawerMenu />
                <div className="w-full">

                    <div></div>
                </div>
            </div>

            <div className='flex items-center gap-5 pr-2'>
                <Link href="" >
                    <IconButton>
                        <BiGitCompare color='#48525b' size={24} className='rotate-90' />
                    </IconButton>
                </Link>

                <Link href="">
                    <IconButton>
                        <FaRegHeart color='#48525b' size={24} />
                    </IconButton>
                </Link>

                <Link href="/account">
                    <IconButton>
                        <GoPerson color='#48525b' size={24} />
                    </IconButton>
                </Link>


                <Link href="/cart" className='flex items-center gap-2 relative'>
                    <span className='absolute bg-black text-white  z-10 py-1 px-2 rounded-full text-sm left-5 -bottom-1 flex items-center justify-center'>0</span>
                    <IconButton>
                        <LiaShoppingBagSolid color='#48525b' size={28} />
                    </IconButton>
                    <p className='title text-xl font-bold'>$0.00</p>
                </Link>
            </div>

        </nav>
    )
}

export default Navbar;
