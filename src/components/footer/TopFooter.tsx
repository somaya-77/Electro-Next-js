import { BsSend } from "react-icons/bs";
import InputButton from "../form/InputButton";

export default function TopFooter() {
  return (
    <div className='px-20 py-5 lg:flex-global-between hidden gap-4 bg-primary'>
      <div className="flex items-center gap-10 text-text_dark">

        <div className="flex items-center gap-4">
          <BsSend size={30}/>
          <p>Sign up to Newsletter</p>
        </div>

        <div>
          <p>...and receive <b> $20 coupon for first shopping</b></p>
        </div>
      </div>

      <div className="w-[45%]">
        <InputButton />
      </div>
    </div>
  )
}
