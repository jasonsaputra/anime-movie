"use client"

import Image from "next/image"
import AnimeVerse from "../../../public/anime-verse.svg"
import Link from "next/link"
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {

    const [hoveredIcon, setHoveredIcon] = useState(null);

    const socialMedia = [
        { href: "https://instagram.com", icon: FaInstagram, name: "Instagram" },
        { href: "https://facebook.com", icon: FaFacebook, name: "Facebook" },
        { href: "https://tiktok.com", icon: FaTiktok, name: "Tiktok" },
        { href: "https://youtube.com", icon: FaYoutube, name: "YouTube" }
    ];

    return(
        <>
            <div className="w-full h-auto flex lg:flex-row md:flex-row flex-col mx-auto mt-16 justify-between items-center box-border px-20 py-6 border-t border-color-secondary/50 gap-12">
                <div className="flex flex-col items-start justify-center">
                    <Link href="/" className="flex items-center gap-4">
                        <Image src={AnimeVerse} alt="..." className="w-10" />
                        <h1 className="font-bold text-xl text-color-primary">AnimeVerse</h1>
                    </Link>
                    <p className="w-full max-w-[465px] mt-4 text-sm text-color-primary text-justify line-clamp-10">
                        AnimeVerse adalah platform hiburan anime yang memudahkan pengguna menemukan dan menonton anime populer. Dengan fitur pencarian yang disesuaikan,
                        ulasan pengguna, dan kategori genre, AnimeVerse menawarkan pengalaman menonton yang praktis dan menyenangkan bagi penggemar anime.
                    </p>
                </div>
                
                <div className="flex justify-between text-sm text-color-primary gap-8">
                    <div className="flex flex-col lg:items-start md:items-start sm:items-center">
                        <p className="mb-5 lg:text-md md:text-md text-sm font-medium">AnimeVerse</p>
                        <Link href="/about-us" className="mb-4">About us</Link>
                        <Link href="/register-partnership" className="mb-4">Daftar Mitra</Link>
                        <Link href="/career">Karier</Link>
                    </div>
            
                    <div className="flex flex-col lg:items-start md:items-start sm:items-center">
                        <p className="mb-5 lg:text-md md:text-md text-sm font-medium">Layanan</p>
                        <Link href="/car-rental"  className="mb-4">Sewa Mobil</Link>
                        <Link href="/motor-rental">Sewa Motor</Link>
                    </div>
            
                    <div className=" flex flex-col lg:items-start md:items-start sm:items-center">
                        <p  className="mb-5 lg:text-md md:text-md text-sm font-medium">Legal</p>
                        <Link href="/syarat-dan-ketentuan" className="mb-4">Terms of Services</Link>
                        <Link href="/faq" className="mb-4">FAQ</Link>
                        <Link href="https://api.whatsapp.com/send?phone=6285959619412&text=Halo%20Admin%20AnimeVerse">Privacy Policy</Link>
                    </div>
                </div>
            </div>

            {/* Social Media */}
            <div className="w-full h-auto flex lg:flex-row md:flex-row flex-col mx-auto justify-between items-center box-border px-20 py-4 text-sm gap-6">
                <div className="flex justify-center items-center lg:flex-row md:flex-row flex-col text-color-disabled gap-6">
                    <p>Copyright @ 2025</p>
                    <p>Privacy & Legal</p>
                    <p>Ad Choices</p>
                    <p>Accessibility</p>
                    <p>Manage Cookies</p>
                </div>
                <div className="flex flex-row gap-4">
                    {socialMedia.map(({ href, icon: Icon, name }, index) => (
                        <Link href={href} key={index} className="flex items-center justify-center w-12 h-12 rounded-full transition-all"
                            style={{ backgroundColor: hoveredIcon === name ? "white" : "var(--secondary)", color: hoveredIcon === name ? "black" : "var(--primary)" }}
                            onMouseEnter={() => setHoveredIcon(name)}
                            onMouseLeave={() => setHoveredIcon(null)}>
                            <Icon size={20} style={{ color: hoveredIcon === name ? "black" : "white" }}/>
                        </Link>
                    ))}
                </div>
            </div>
        </>
        
        
    )
}

export default Footer