import { BiGitCompare } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa6";

interface props {
  row?: boolean;
}
const ControlCard = ({ row }: props) => {
  return (
    <>
      {row ? (<div className="hidden group-hover:flex justify-end pt-4 space-x-4 w-full">


        <div className="flex-center w-[60%] gap-3 cursor-pointer border-t border-light_1 pt-3">
          <BiGitCompare size={22} className="rotate-90 text-gray_dark hover:text-text_dark" />
          <p className='title text-xs text-gray_dark cursor-pointer hover:text-text_dark'>Compare</p>
        </div>
      </div>) 
      : 
      (<div className="hidden group-hover:flex items-center justify-between pt-4 space-x-4 w-full border-t border-light_1 px-2">

        <div className="flex-center gap-3 cursor-pointer">
          <FaRegHeart color="#333e48" size={22} className='' />
          <p className='title text-xs text-gray_dark cursor-pointer hover:text-text_dark'>Wishlist</p>
        </div>
        <div className="flex-center gap-3 cursor-pointer">
          <BiGitCompare size={22} className="rotate-90 text-gray_dark hover:text-text_dark" />
          <p className='title text-xs text-gray_dark cursor-pointer hover:text-text_dark'>Compare</p>
        </div>
      </div>)}
    </>

  )
}

export default ControlCard;
