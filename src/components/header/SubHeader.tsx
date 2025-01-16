import { linksHeaderPages } from '@/lib/contacts'
import Link from 'next/link';
import { FaChevronDown } from "react-icons/fa";


const SubHeader = () => {
  return (
    <div className='border-t border-gray_text relative bg-primary'>
      <div className='flex items-center px-6 xl:px-9'>
        {linksHeaderPages.map((el, i) => (
          <div key={i} className="group">
            <div className='flex items-center gap-[4px] p-3 cursor-pointer hover:bg-bg_hover border-r border-gray_text group group-last:border-r-0'>
              <p className='text-[10px] xl:text-sm title text-nowrap'>{el.title}</p>
              <FaChevronDown size={12} color='#48525b'/>
            </div>

            <div className='absolute bg-white z-100 w-[calc(100%-160px)] px-5 py-10 left-0 mx-20 top-11 shadow-md rounded-b-lg gap-8 hidden group-hover:flex'>
              {el.links.map((link, j) => (
                <div className='' key={j} >
                  <div className='pb-4'>
                    <Link href="" className=' font-bold hover:underline underline-offset-4 text-gray_text transition duration-300 ease-in-out '>
                      {link.category}</Link>
                  </div>


                  <div className='flex flex-col gap-2'>
                    {link.items.map((item, x) => (
                      <Link href="" key={x} className='text-sm hover:underline underline-offset-4 text-gray_text transition duration-300 ease-in-out'>{item}</Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubHeader
