import { IoLocationOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GoPerson } from "react-icons/go";
import { GrLike } from "react-icons/gr";
import { TfiReload } from "react-icons/tfi";
import { MdOutlinePayment } from "react-icons/md";


import { FaFacebook, FaWhatsapp, FaPinterest, FaLinkedin, FaInstagram, FaYoutube, FaWifi } from "react-icons/fa";

export const linksHeader = [
    { title: "Store Locator", Icon: IoLocationOutline, path: '' },
    { title: "Track Your Order", Icon: LiaShippingFastSolid, path: '' },
    { title: "Shop", Icon: HiOutlineShoppingBag, path: '' },
    { title: "My Account", Icon: GoPerson, path: '' },
];


export const links = [
    "Laptops & Computers",
    "Cameras & Photography",
    "Smart Phones & Tablets",
    "Video Games & Consoles",
    "TV & Audio",
    "Gadgets",
    "Waterproof Headphones",
    "About",
    "Contact",
    "Wishlist",
    "Compare",
    "FAQ",
    "Store Directory",
];

export const customerCare = [
    "My Account",
    "Track your Order",
    "Customer Service",
    "Returns/Exchange",
    "FAQs",
    "Product Support",
];

export const menu = [
    { title: "Value of the day", to: '' },
    { title: "Top 100 Offers", to: '' },
    { title: "New Arrivals", to: '' },
    {
        title: "Computers & Accessories", child: [
            { title: "Computers & Accessories", to: '' },
            { title: "All Computers & Accessories", to: '' },
            { title: "Laptops, Desktops & Monitors", to: '' },
            { title: "Printers & Ink", to: '' },
            { title: "Networking & Internet Devices", to: '' },
            { title: "Computer Accessories", to: '' },
            { title: "Software", to: '' },
        ]
    },
    {
        title: "Cameras, Audio & Video", child: [
            { title: "Cameras & Photography", to: '' },
            { title: "Lenses", to: '' },
            { title: "Camera Accessories", to: '' },
            { title: "Security & Surveillance", to: '' },
            { title: "Binoculars & Telescopes", to: '' },
            { title: "Camcorders", to: '' },
            { title: "Audio & Video", to: '' },
            { title: "All Audio & Video", to: '' },
            { title: "Headphones & Speakers", to: '' },
        ]
    },
    {
        title: "Mobiles & Tablets", child: [
            { title: "All Mobile Phones", to: '' },
            { title: "Smartphones", to: '' },
            { title: "Refurbished Mobiles", to: '' },
            { title: "All Mobile Accessories", to: '' },
            { title: "Cases & Covers", to: '' },
            { title: "All Tablets", to: '' },
            { title: "Tablet Accessories", to: '' },
        ]
    },
    {
        title: "Movies & TV Shows", child: [
            { title: "All Movies & TV Shows", to: '' },
            { title: "All English", to: '' },
            { title: "All Hindi", to: '' },
            {
                title: "Video Games", child: [
                    { title: "PC Games", to: '' },
                    { title: "Consoles", to: '' },
                    { title: "Accessories", to: '' },

                ]
            },
            {
                title: "Music", child: [
                    { title: "All Music", to: '' },
                    { title: "Indian Classical", to: '' },
                    { title: "Musical Instruments", to: '' },

                ]
            },
        ]
    },
    {
        title: "Audio & Video", child: [
            { title: "All Audio & Video", to: '' },
            { title: "Televisions", to: '' },
            { title: "Headphones", to: '' },
            { title: "Speakers", to: '' },
            { title: "Audio & Video Accessories", to: '' },
            {
                title: "Music", child: [
                    { title: "Televisions", to: '' },
                    { title: "Headphones", to: '' },
                ]
            },
        ]
    },
    {
        title: "Watch & Eye wear", child: [
            { title: "All Watches", to: '' },
            { title: "Men's Watches", to: '' },
            { title: "Women's Watches", to: '' },
            { title: "Premium Watches", to: '' },
            { title: "Deals on Watches", to: '' },
            {
                title: "Eye wear", child: [
                    { title: "Men's Sunglasses", to: '' },
                ]
            },
        ]
    },
    {
        title: "Car, Motorbike & Industrial", child: [
            { title: "Car & Motorbike", to: '' },
            { title: "All Cars & Bikes", to: '' },
            { title: "Car & Bike Care", to: '' },
            { title: "Lubricants", to: '' },
            {
                title: "Shop for Bike", child: [
                    { title: "Helmets & Gloves", to: '' },
                    { title: "Lubricants", to: '' },
                ]
            },
            {
                title: "Industrial Supplies", child: [
                    { title: "All Industrial Supplies", to: '' },
                    { title: "Lab & Scientific", to: '' }
                ]
            },
        ]
    },
    {
        title: "Accessories", child: [
            { title: "Cases", to: '' },
            { title: "Chargers", to: '' },
            { title: "Headphone Accessories", to: '' },
            { title: "Headphone Cases", to: '' },
            { title: "Headphone", to: '' },
            { title: "Computer Accessories", to: '' },
            { title: "Laptop Accessories", to: '' },
        ]
    },
]

export const browseCategories = [
    { name: 'Uncategorized', count: 0 },
    {
        name: 'Accessories', count: 10, collections: [
            { name: 'Chargers', count: 1 },
            { name: 'Headphone Accessories', count: 1 },
            { name: 'Headphone Cases', count: 3 },
            { name: 'Headphones', count: 3 },
            { name: 'Penknives', count: 2 },
            { name: 'Power Banks', count: 2 },
        ]
    },
    { name: 'Bluetooth Speakers', count: 7 },
    {
        name: 'Cameras & Photography', count: 5, collections: [
            { name: 'Cameras', count: 5 },
        ]
    },
    {
        name: 'Computer Components', count: 1, collections: [
            { name: 'Computer Cases', count: 1 },
        ]
    },
    {
        name: 'Gadgets', count: 3, collections: [
            { name: 'Smartwatches', count: 2 },
            { name: 'Wearables', count: 1 },
        ]
    },
    { name: 'Headphones', count: 7 },
    {
        name: 'Home Entertainment', count: 1, collections: [
            { name: 'TVs', count: 1 },
        ]
    },
    { name: 'Home Theatre', count: 7 },
    {
        name: 'Laptops & Computers', count: 12, collections: [
            { name: 'Accessories', count: 2 },
            { name: 'All in One', count: 1 },
            { name: 'Gaming', count: 1 },
            { name: 'Laptops', count: 5 },
            { name: 'Mac Computers', count: 2 },
            { name: 'Peripherals', count: 1 },
            { name: 'Servers', count: 1 },
            { name: 'Ultrabooks', count: 2 },
        ]
    },
    {
        name: 'Printers & Ink', count: 1, collections: [
            { name: 'Printers', count: 1 },
        ]
    },

    {
        name: 'Smart Phones & Tablets', count: 25, collections: [
            { name: 'Smartphones', count: 21 },
            { name: 'Tablets', count: 4 },
        ]
    },
    { name: 'Speakers', count: 7 },
    { name: 'Stereo', count: 7 },
    {
        name: 'TV & Audio', count: 1, collections: [
            { name: 'Audio Speakers', count: 1 },
        ]
    },
    {
        name: 'Video Games & Consoles', count: 3, collections: [
            { name: 'Game Consoles', count: 3 },
        ]
    },
]

export const cardShop = [
    { img: '/assets/cameras-resized.webp', text1: 'CATCH HOTTEST', boldText: 'DEALS', text2: 'IN CAMERAS', btn: 'Shop now' },

    { img: '/assets/desktop.webp', text1: 'THE NEW ', boldText: '360 DESKTOP', price: "749" },

    { img: '/assets/laptop.webp', text1: 'TABLETS, SMARTPHONES', boldText: 'AND MORE', percentage: "70" },

    { img: '/assets/360-camers.webp', text1: 'THE NEW ', boldText: '360 CAMERAS', percentage: "70" },
]

export const companies = [
    { img: '/assets/images/airdnd.webp', alt: "airbnb" },
    { img: '/assets/images/coinbuild.webp', alt: "codebuild" },
    { img: '/assets/images/dirrbble.webp', alt: "airbnb" },
    { img: '/assets/images/instagriom.webp', alt: "airbnb" },
    { img: '/assets/images/neetflix.webp', alt: "airbnb" },
    { img: '/assets/images/pincorest.webp', alt: "airbnb" },
]

export const Purchasing = [
    { Icon: LiaShippingFastSolid, title: "Free Delivery", subtitle: "from $50" },
    { Icon: GrLike, title: "99% Positive", subtitle: "Feedbacks" },
    { Icon: TfiReload, title: "365 days", subtitle: "for free return" },
    { Icon: MdOutlinePayment, title: "Payment", subtitle: "Secure System" },
    { Icon: TfiReload, title: "Only Best", subtitle: "Brands" },
]

export const productRow = [
    { id: 1, categories: ["Audio Speakers"], title: "Wireless Audio System Multiroom 360", img: "/assets/images/WirelessSound.png", price: "2,299.00" },
    { id: 2, categories: ["Accessories", "Headphones"], title: "Tablet White EliteBook Revolve 810 G2", img: "/assets/images/head.png", price: "1,300.00" },
    { id: 3, categories: ["Laptops", "Laptops"], title: "Purple Solo 2 Wireless", img: "/assets/images/apptablet.png", price: "248.00" },
    { id: 4, categories: ["Accessories", "Headphones"], title: "Tablet White EliteBook Revolve 810 G2", img: "/assets/images/Ultrabooks.png", oldPrice: "2,299.00", price: "2,100.00" },
]
export const products = [
    { id: 1, categories: ["Audio Speakers"], title: "Wireless Audio System Multiroom 360", img: "/assets/images/WirelessSound.png", price: "2,299.00" },
    { id: 2, categories: ["Accessories", "Headphones"], title: "Tablet White EliteBook Revolve 810 G2", img: "/assets/images/head.png", price: "1,300.00" },
    { id: 3, categories: ["Laptops", "Laptops"], title: "Purple Solo 2 Wireless", img: "/assets/images/apptablet.png", price: "248.00" },
    { id: 4, categories: ["Accessories", "Headphones"], title: "Tablet White EliteBook Revolve 810 G2", img: "/assets/images/Ultrabooks.png", oldPrice: "2,299.00", price: "2,100.00" },
    { id: 5, categories: ["Smart Phones & Tablets"], title: "Purple Solo 2 Wireless", img: "/assets/images/uniheadphone.png", price: "248.00" },
    { id: 6, categories: ["Cameras"], title: "Smartphone 6S 32GB LTE", img: "/assets/images/GoldPhone.png", price: "2,100.00" },
    { id: 7, categories: ["Cameras"], title: "Purple NX Mini F1 aparat SMART NX", img: "/assets/images/camera2.png", price: "559.00" },
    { id: 8, categories: ["Accessories", "Headphones"], title: "Tablet White EliteBook Revolve 810 G2", img: "/assets/images/Ultrabooks.png", oldPrice: "2,299.00", price: "2,100.00" },
    { id: 9, categories: ["Smart Phones & Tablets"], title: "Purple Solo 2 Wireless", img: "/assets/images/uniheadphone.png", price: "248.00" },
    { id: 10, categories: ["Cameras"], title: "Smartphone 6S 32GB LTE", img: "/assets/images/GoldPhone.png", price: "2,100.00" },
    { id: 11, categories: ["Cameras"], title: "Purple NX Mini F1 aparat SMART NX", img: "/assets/images/camera2.png", price: "559.00" },
]
export const footerIcons = [
    { Icon: FaFacebook, hoverClass: "hover:fill-blue" },
    { Icon: FaWhatsapp, hoverClass: "hover:fill-green-500" },
    { Icon: FaPinterest, hoverClass: "hover:fill-[#dc3545]" },
    { Icon: FaLinkedin, hoverClass: "hover:fill-[#0062bd]" },
    { Icon: FaInstagram, hoverClass: "hover:fill-orange-500" },
    { Icon: FaYoutube, hoverClass: "hover:fill-[#dc3545]" },
    { Icon: FaWifi, hoverClass: "hover:fill-orange-500" },
]

export const mobFooterIcons = [
    { Icon: FaFacebook, hoverClass: "fill-blue" },
    { Icon: FaWhatsapp, hoverClass: "fill-green-500" },
    { Icon: FaPinterest, hoverClass: "fill-[#dc3545]" },
    { Icon: FaLinkedin, hoverClass: "fill-[#0062bd]" },
    { Icon: FaInstagram, hoverClass: "fill-orange-500" },
    { Icon: FaYoutube, hoverClass: "fill-[#dc3545]" },
    { Icon: FaWifi, hoverClass: "fill-orange-500" },
]

export const linksHeaderPages = [
    {
        title: "Home", links: [
            // {
            //     category: "Home Pages",
            //     items: [
            //         "Home v1", "Home v2", "Home v3", "Home v3.1", "Home v4", "Home v5",
            //         "Home v6", "Home v7", "Home v8", "Home v9", "Home v10", "Home v11",
            //         "Home v12", "Home v13", "Home v14", "Home v15", "Home v16", "Home v17"
            //     ]
            // },
            {
                category: "Shop Pages",
                items: [
                    "Shop Grid", "Shop Grid Extended", "Shop List View", "Shop List View Small",
                    "Shop Left Sidebar", "Shop Full width", "Shop Right Sidebar"
                ]
            },
            {
                category: "Product Categories",
                items: [
                    "4 Column Sidebar", "5 Column Sidebar", "6 Column Full width", "7 Columns Full width"
                ]
            },
            {
                category: "Static Pages",
                items: [
                    "About", "Contact v1", "Contact v2", "FAQ", "Store Directory",
                    "Terms and Conditions", "404"
                ]
            },
            {
                category: "Mobile Home Pages",
                items: ["Home v1", "Home v2"]
            },
            {
                category: "Single Product Pages",
                items: [
                    "Single Product Extended", "Single Product Fullwidth", "Single Product Sidebar"
                ]
            },
            {
                category: "WooCommerce Pages",
                items: [
                    "Shop", "Cart", "Checkout", "My Account", "Track your Order", "Compare"
                ]
            },
            {
                category: "Blog Pages",
                items: [
                    "Blog v1", "Blog v3", "Blog v2", "Blog Full Width", "Single Blog Post"
                ]
            },
            {
                category: "Shop Columns",
                items: [
                    "7 Columns Full width", "6 Columns Full width", "5 Columns Sidebar",
                    "4 Columns Sidebar", "3 Columns Sidebar"
                ]
            },
            // {
            //     category: "Vendor Demo",
            //     items: [] 
            // }
        ]
    },
    {
        title: "TV & Audio", links: [
            // {
            //     category: "Home Pages",
            //     items: [
            //         "Home v1", "Home v2", "Home v3", "Home v3.1", "Home v4", "Home v5",
            //         "Home v6", "Home v7", "Home v8", "Home v9", "Home v10", "Home v11",
            //         "Home v12", "Home v13", "Home v14", "Home v15", "Home v16", "Home v17"
            //     ]
            // },
            {
                category: "Shop Pages",
                items: [
                    "Shop Grid", "Shop Grid Extended", "Shop List View", "Shop List View Small",
                    "Shop Left Sidebar", "Shop Full width", "Shop Right Sidebar"
                ]
            },
            {
                category: "Product Categories",
                items: [
                    "4 Column Sidebar", "5 Column Sidebar", "6 Column Full width", "7 Columns Full width"
                ]
            },
            {
                category: "Static Pages",
                items: [
                    "About", "Contact v1", "Contact v2", "FAQ", "Store Directory",
                    "Terms and Conditions", "404"
                ]
            },
            {
                category: "Mobile Home Pages",
                items: ["Home v1", "Home v2"]
            },
            {
                category: "Single Product Pages",
                items: [
                    "Single Product Extended", "Single Product Fullwidth", "Single Product Sidebar"
                ]
            },
            {
                category: "WooCommerce Pages",
                items: [
                    "Shop", "Cart", "Checkout", "My Account", "Track your Order", "Compare"
                ]
            },
            {
                category: "Blog Pages",
                items: [
                    "Blog v1", "Blog v3", "Blog v2", "Blog Full Width", "Single Blog Post"
                ]
            },
            {
                category: "Shop Columns",
                items: [
                    "7 Columns Full width", "6 Columns Full width", "5 Columns Sidebar",
                    "4 Columns Sidebar", "3 Columns Sidebar"
                ]
            },
            // {
            //     category: "Vendor Demo",
            //     items: [] 
            // }
        ]
    }
    ,{
        title: "Smart Phones", links: [
            // {
            //     category: "Home Pages",
            //     items: [
            //         "Home v1", "Home v2", "Home v3", "Home v3.1", "Home v4", "Home v5",
            //         "Home v6", "Home v7", "Home v8", "Home v9", "Home v10", "Home v11",
            //         "Home v12", "Home v13", "Home v14", "Home v15", "Home v16", "Home v17"
            //     ]
            // },
            {
                category: "Shop Pages",
                items: [
                    "Shop Grid", "Shop Grid Extended", "Shop List View", "Shop List View Small",
                    "Shop Left Sidebar", "Shop Full width", "Shop Right Sidebar"
                ]
            },
            {
                category: "Product Categories",
                items: [
                    "4 Column Sidebar", "5 Column Sidebar", "6 Column Full width", "7 Columns Full width"
                ]
            },
            {
                category: "Static Pages",
                items: [
                    "About", "Contact v1", "Contact v2", "FAQ", "Store Directory",
                    "Terms and Conditions", "404"
                ]
            },
            {
                category: "Mobile Home Pages",
                items: ["Home v1", "Home v2"]
            },
            {
                category: "Single Product Pages",
                items: [
                    "Single Product Extended", "Single Product Fullwidth", "Single Product Sidebar"
                ]
            },
            {
                category: "WooCommerce Pages",
                items: [
                    "Shop", "Cart", "Checkout", "My Account", "Track your Order", "Compare"
                ]
            },
            {
                category: "Blog Pages",
                items: [
                    "Blog v1", "Blog v3", "Blog v2", "Blog Full Width", "Single Blog Post"
                ]
            },
            {
                category: "Shop Columns",
                items: [
                    "7 Columns Full width", "6 Columns Full width", "5 Columns Sidebar",
                    "4 Columns Sidebar", "3 Columns Sidebar"
                ]
            },
            // {
            //     category: "Vendor Demo",
            //     items: [] 
            // }
        ]
    },
    {
        title: "Laptops & Desktops", links: [
            {
                category: "Shop Pages",
                items: [
                    "Shop Grid", "Shop Grid Extended", "Shop List View", "Shop List View Small",
                    "Shop Left Sidebar", "Shop Full width", "Shop Right Sidebar"
                ]
            },
            {
                category: "Product Categories",
                items: [
                    "4 Column Sidebar", "5 Column Sidebar", "6 Column Full width", "7 Columns Full width"
                ]
            },
            {
                category: "Static Pages",
                items: [
                    "About", "Contact v1", "Contact v2", "FAQ", "Store Directory",
                    "Terms and Conditions", "404"
                ]
            },
            {
                category: "WooCommerce Pages",
                items: [
                    "Shop", "Cart", "Checkout", "My Account", "Track your Order", "Compare"
                ]
            },
            {
                category: "Blog Pages",
                items: [
                    "Blog v1", "Blog v3", "Blog v2", "Blog Full Width", "Single Blog Post"
                ]
            },
            {
                category: "Shop Columns",
                items: [
                    "7 Columns Full width", "6 Columns Full width", "5 Columns Sidebar",
                    "4 Columns Sidebar", "3 Columns Sidebar"
                ]
            },
        ]
    },
    {
        title: "Gadgets", links: [
            {
                category: "Shop Pages",
                items: [
                    "Shop Grid", "Shop Grid Extended", "Shop List View", "Shop List View Small",
                    "Shop Left Sidebar", "Shop Full width", "Shop Right Sidebar"
                ]
            },
            {
                category: "Product Categories",
                items: [
                    "4 Column Sidebar", "5 Column Sidebar", "6 Column Full width", "7 Columns Full width"
                ]
            },
            {
                category: "Static Pages",
                items: [
                    "About", "Contact v1", "Contact v2", "FAQ", "Store Directory",
                    "Terms and Conditions", "404"
                ]
            },
            {
                category: "WooCommerce Pages",
                items: [
                    "Shop", "Cart", "Checkout", "My Account", "Track your Order", "Compare"
                ]
            }
        ]
    },
    {
        title: "GPS & Car", links: [
            {
                category: "Shop Pages",
                items: [
                    "Shop Grid", "Shop Grid Extended", "Shop List View", "Shop List View Small",
                    "Shop Left Sidebar", "Shop Full width", "Shop Right Sidebar"
                ]
            },
            {
                category: "Product Categories",
                items: [
                    "4 Column Sidebar", "5 Column Sidebar", "6 Column Full width", "7 Columns Full width"
                ]
            },
            {
                category: "Static Pages",
                items: [
                    "About", "Contact v1", "Contact v2", "FAQ", "Store Directory",
                    "Terms and Conditions", "404"
                ]
            },
            {
                category: "WooCommerce Pages",
                items: [
                    "Shop", "Cart", "Checkout", "My Account", "Track your Order", "Compare"
                ]
            }
        ]
    },
    {
        title: "Cameras & Accessories", links: [
            {
                category: "Shop Pages",
                items: [
                    "Shop Grid", "Shop Grid Extended", "Shop List View", "Shop List View Small",
                    "Shop Left Sidebar", "Shop Full width", "Shop Right Sidebar"
                ]
            },
            {
                category: "Product Categories",
                items: [
                    "4 Column Sidebar", "5 Column Sidebar", "6 Column Full width", "7 Columns Full width"
                ]
            },
            {
                category: "Static Pages",
                items: [
                    "About", "Contact v1", "Contact v2", "FAQ", "Store Directory",
                    "Terms and Conditions", "404"
                ]
            },
            {
                category: "WooCommerce Pages",
                items: [
                    "Shop", "Cart", "Checkout", "My Account", "Track your Order", "Compare"
                ]
            }
        ]
    },
    {
        title: "Movies & Games", links: [
            {
                category: "Shop Pages",
                items: [
                    "Shop Grid", "Shop Grid Extended", "Shop List View", "Shop List View Small",
                    "Shop Left Sidebar", "Shop Full width", "Shop Right Sidebar"
                ]
            },
            {
                category: "Product Categories",
                items: [
                    "4 Column Sidebar", "5 Column Sidebar", "6 Column Full width", "7 Columns Full width"
                ]
            },
            {
                category: "Static Pages",
                items: [
                    "About", "Contact v1", "Contact v2", "FAQ", "Store Directory",
                    "Terms and Conditions", "404"
                ]
            },
            {
                category: "WooCommerce Pages",
                items: [
                    "Shop", "Cart", "Checkout", "My Account", "Track your Order", "Compare"
                ]
            }
        ]
    }
]


							
