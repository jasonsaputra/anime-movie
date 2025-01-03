import Link from "next/link"
import InputSearch from "./InputSearch"
import UserActionButton from "./UserActionButton"
import Image from "next/image"
import AnimeVerse from "../../../public/anime-verse.svg"

const Navbar = () => {
    return(
        <header className="bg-color-black">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 md:gap-2 gap-4">
                
                <div className="flex md:flex-row flex-col gap-4">
                    <Link href="/" className="flex items-center gap-4">
                        <Image src={AnimeVerse} alt="..." width={48} />
                        <h1 className="font-bold text-2xl text-color-primary">AnimeVerse</h1>
                    </Link>
                    <InputSearch />
                    <div className="flex flex-row gap-4 justify-between md:mx-2 sm:mx-0 mx-0">
                        <Link href="/" className="flex items-center text-color-primary">Home</Link>
                        <Link href="/populer" className="flex items-center text-color-primary">Populer</Link>
                        <Link href="/news" className="flex items-center text-color-primary">News</Link>
                    </div>
                </div>
                <UserActionButton />  
            </div>
        </header>
    )
}

export default Navbar