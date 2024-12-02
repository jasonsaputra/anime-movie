import Link from "next/link"

const Navbar = () => {
    return(
        <header className="bg-indigo-500">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
                <Link href="/" className="font-bold text-white text-2xl">Anime List 38</Link>
                <input placeholder="Search anime..." className="p-1"/>
            </div>
        </header>
    )
}

export default Navbar