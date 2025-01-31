import Image from "next/image"
import AnimeVerse from "../../../public/anime-verse.svg"
import Link from "next/link"

const Footer = () => {
    return(
        <>
            <div className="w-full h-auto flex mx-auto mt-16 justify-evenly items-center box-border p-6 border-t border-color-secondary/50 gap-12">
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
                
                <div className="flex justify-between flex-row text-sm text-color-primary gap-8">
                    <div className="flex flex-col">
                        <p className="mb-5 text-lg">AnimeVerse</p>
                        <a href="/about-us" className="mb-4">About us</a>
                        <a href="/register-partnership" className="mb-4">Daftar Mitra</a>
                        <a href="/career">Karier</a>
                    </div>
            
                    <div className="flex flex-col text-sm text-color-primary">
                        <p className="mb-5 text-lg">Layanan</p>
                        <a href="/car-rental"  className="mb-4">Sewa Mobil</a>
                        <a href="/motor-rental">Sewa Motor</a>
                    </div>
            
                    <div className=" flex flex-col text-sm text-color-primary">
                        <p  className="mb-5 text-lg">Pusat Bantuan</p>
                        <a href="/syarat-dan-ketentuan" className="mb-4">Syarat dan Ketentuan</a>
                        <a href="/faq" className="mb-4">FAQ</a>
                        <a href="https://api.whatsapp.com/send?phone=6285959619412&text=Halo%20Admin%20AnimeVerse">Hubungi Kami</a>
                    </div>
                </div>
            </div>

            {/* Social Media */}
            <div>
                bottom
            </div>
        </>
        
        
    )
}

export default Footer