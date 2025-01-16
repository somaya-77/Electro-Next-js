
import Navbar from './Navbar'
import TopHeader from './TopHeader'
import MobHeader from './MobHeader';
import SubHeader from './SubHeader';

const Header = () => {
    return (
        <>
            <MobHeader />
            <div className='flex-col hidden lg:flex'>
                <TopHeader />
                <Navbar />
                <SubHeader />
            </div>
        </>
    )

}

export default Header
