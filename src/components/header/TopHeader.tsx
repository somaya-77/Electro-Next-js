import { linksHeader } from "@/lib/contacts";
import Link from "next/link";


const TopHeader = () => {
    return (
         <div className="lg:px-10 xl:20px py-3 flex justify-between border-b border-light_1"> 
            <p className="title">Welcome to Worldwide Electronics Store</p>

            <div className="flex gap-4">
                <div className="flex gap-4">
                    {linksHeader?.map((item, i) => {
                        const {path, Icon, title } = item;

                        return (
                            <Link
                                href={path}
                                key={i}
                                className={`title flex items-center gap-2 pr-4 border-gray_text ${i === linksHeader.length - 1 ? '' : 'border-r-2'}`}>
                                <Icon className="gray_icon"/>
                                <span>{title}</span>
                            </Link>
                        )
                    }

                    )}
                </div>
            </div>
        </div>
    )
}

export default TopHeader;
