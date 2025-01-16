import { Purchasing } from "@/lib/contacts"


const PurchasingMethods = () => {
    return (
        <div className="flex items-center overflow-x-auto border rounded-lg border-light_2 py-2">
            {Purchasing.map((el, i) => {
                const { Icon, title, subtitle } = el;
                return(
                    <div key={i} 
                    className="flex-center w-[271px] flex-shrink-0 gap-6 py-3 border-r border-light_2 last:border-r-0">
                        <Icon color="#fed700" size={30}/>
                        <div className="text-center">
                            <p className="headText text-lg">{title}</p>
                            <p className="title font-normal mt-1">{subtitle}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PurchasingMethods
