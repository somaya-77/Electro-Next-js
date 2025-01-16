import { cardShop } from "@/lib/contacts"
import Image from "next/image"
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const CardShop = () => {
  return (
    <section className="flex-between overflow-x-auto space-x-4 my-[30px]">
      {cardShop.map((el, i) => (
        <div key={i} className="flex-between gap-2 bg-light_3 px-8 py-10 h-[150px] w-[340px] md:w-[375px] lg:w-[325px] flex-shrink-0">
          <Image src={el.img} alt={el.boldText} width={120} height={100} />

          <div className="flex flex-1 flex-col justify-start ">
            <p className="text-gray_text text-nowrap">{el.text1}</p>
            <b className="text-gray_text">{el.boldText}</b>
            <p className="text-gray_text">{el.text2}</p>

            <Link href="" className="btn_link mt-3 flex items-center gap-2">

              <div className="flex items-center">
                {el.btn ? el.btn : el.percentage ?
                  <div>
                    <div className="flex-center gap-1">
                      <p className="text-gray_text font-light leading-3">UP<br />TO</p>

                      <p className="title_h text-2xl">{el.percentage}</p>
                      <p className="font-light mb-4">%</p>
                    </div>
                  </div>
                  :
                  <div>
                    <p className="title font-light -mb-2">FORM</p>
                    <div className="flex-center items-start gap-1">
                      <p className="text-2xl">$</p>
                      <p className="title_h text-2xl">{el.price}</p>
                      <p className="mb-4 ">99</p>
                    </div>

                  </div>}

              </div>
              <div className="bg-primary rounded-full size-[18px] flex-center">
                <FaChevronRight color="white" size={14} />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </section>
  )
}

export default CardShop;
