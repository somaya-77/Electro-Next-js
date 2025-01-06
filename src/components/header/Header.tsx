'use client'
import Navbar from './Navbar'
import TopHeader from './TopHeader'
import useResponsive from '@/hook/useResponsive';
import MobHeader from './MobHeader';
import SubHeader from './SubHeader';

const Header = () => {
    const { xs } = useResponsive();
    return xs ?
        <MobHeader />
        :
        (<div className='flex flex-col gap-6 bg-primary'>
            <TopHeader />
            <Navbar />
            <SubHeader />
            
        </div>)

}

export default Header
