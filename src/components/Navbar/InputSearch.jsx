"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {

    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value.trim()

        if(!keyword || keyword.trim() == "") return
        
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }
    };

    return (
        <div className="flex justify-center relative ">
            <input
                placeholder="Search anime..."
                className="flex p-2 w-full text-sm min-w-[50px] rounded"
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <button className="absolute top-2 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}

export default InputSearch