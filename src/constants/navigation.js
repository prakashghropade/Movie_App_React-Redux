import { FaHome } from "react-icons/fa";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";


export const  navigation = [
    {
        lable: "TV Shows",
        href: "tv",
        icon: <PiTelevisionFill />
    },

    {
        lable: "Movies",
        href: "movie",
        icon: <BiSolidMoviePlay />

    }
]

export const MobileNavigation = [
    {
        lable: "Home",
        href: "/",
        icon: <FaHome />

    },

    ...navigation,

    {
        lable: "Serarch",
        href: "/search",
        icon: <IoSearch/>
    }
   

]