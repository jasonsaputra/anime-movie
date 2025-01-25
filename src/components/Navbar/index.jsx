import Link from "next/link"
import InputSearch from "./InputSearch"
import UserActionButton from "./UserActionButton"
import Image from "next/image"
import AnimeVerse from "../../../public/anime-verse.svg"

const Navbar = () => {
    return(
        <header className="bg-color-black">
            <div className="flex flex-row md:items-center p-4 md:gap-2 gap-4 w-full ">
                
                <div className="flex flex-row gap-4 w-full">

                    {/* Logo and Input Search */}
                    <Link href="/" className="flex items-center gap-4">
                        <Image src={AnimeVerse} alt="..." className="w-10" />
                        <h1 className="font-bold text-xl text-color-primary">AnimeVerse</h1>
                    </Link>
                    
                    {/* Input Search */}
                    <div className="flex-grow items-center md:order-none order-2 my-auto">
                        <InputSearch />
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-row gap-4 justify-between md:mx-2 mx-0">
                        <Link href="/" className="items-center text-color-primary md:inline-flex sm:hidden hidden">Home</Link>
                        <Link href="/populer" className="items-center text-color-primary md:inline-flex sm:hidden hidden">Populer</Link>
                        <Link href="/news" className="items-center text-color-primary md:inline-flex sm:hidden hidden">News</Link>
                        <Link href="/upcoming" className="items-center text-color-primary md:inline-flex sm:hidden hidden">Upcoming</Link>
                        {/* https://api.jikan.moe/v4/seasons/upcoming */}
                    </div>
                </div>
                {/* User Action */}
                <UserActionButton />
            </div>
        </header>
    )
}

export default Navbar