import { IoLocationOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GoPerson } from "react-icons/go";


import { FaFacebook, FaWhatsapp, FaPinterest, FaLinkedin, FaInstagram, FaYoutube, FaWifi } from "react-icons/fa";


import { LiaShoppingBagSolid } from "react-icons/lia";


export const linksHeader = [
    { title: "Store Locator", Icon: IoLocationOutline, path: '' },
    { title: "Track Your Order", Icon: LiaShippingFastSolid, path: '' },
    { title: "Shop", Icon: HiOutlineShoppingBag, path: '' },
    { title: "My Account", Icon: GoPerson, path: '' },
];

export const footerIcons = [
    {Icon: FaFacebook, hoverClass: "hover:fill-blue"},
    {Icon: FaWhatsapp, hoverClass: "hover:fill-green-500"},
    {Icon: FaPinterest, hoverClass: "hover:fill-[#dc3545"},
    {Icon: FaLinkedin, hoverClass: "hover:fill-[#0062bd]"},
    {Icon: FaInstagram, hoverClass: "hover:fill-orange-500"},
    {Icon: FaYoutube, hoverClass: "hover:fill-[#dc3545"},
    {Icon: FaWifi, hoverClass: "hover:fill-orange-500"},
]

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

