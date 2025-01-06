import { cardShop } from "@/lib/contacts"
import Image from "next/image"
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const CardShop = () => {
  return (
    <div className="flex-global-between overflow-x-auto space-x-4">
      {cardShop.map((el, i) => (
        <div key={i} className="flex-global-between bg-light_3 p-8 md:p-10 lg:p-5 h-[140px] w-[350px] md:w-[375px] lg:w-[335px] flex-shrink-0">
          <Image src={el.img} alt={el.boldText} width={150} height={150} />

          <div className="flex flex-col justify-start">
            <p className="title">{el.text1}</p>
            <b>{el.boldText}</b>
            <p className="title">{el.text2}</p>

            <Link href="" className="btn_link mt-3 flex items-center gap-2">

              <div className="flex items-center">
                {el.btn ? el.btn : el.percentage ?
                  <div>
                    <div className="flex_center gap-1">
                      <p className="title font-light leading-3">UP<br />TO</p>

                      <p className="title_h text-3xl">{el.percentage}</p>
                      <p className="font-light mb-4">%</p>
                    </div>
                  </div>
                  :
                  <div>
                    <p className="title font-light -mb-2">FORM</p>
                    <div className="flex_center items-start gap-1">
                      <p className="text-2xl">$</p>
                      <p className="title_h text-3xl">{el.price}</p>
                      <p className="mb-4 ">99</p>
                    </div>

                  </div>}

              </div>
              <div className="bg-primary rounded-full size-[18px] flex_center">
                <FaChevronRight color="white" size={14} />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardShop
