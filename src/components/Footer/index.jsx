import Image from "next/image"
import AnimeVerse from "../../../public/anime-verse.svg"
import Link from "next/link"

const Footer = () => {
    return(
        <div
            className='footer-container'
            style={{
            width: "100%",
            height: "auto",
            display: "flex",
            margin:"auto",
            marginTop: "64px",
            justifyContent: "space-evenly",
            alignItems: "center",
            boxSizing: "border-box",
            padding: "24px",
            borderTop: "1px solid rgba(57, 62, 70, 0.5)"
            }}
        >
            <div className='left-footer' style={{ width: "465px", height: "167px", display: "flex", alignItems: "flex-start", justifyContent: "center", flexDirection: "column"}}>

            {/* Left Side */}
            <Link href="/" className="flex items-center gap-4">
                <Image src={AnimeVerse} alt="..." className="w-10" />
                <h1 className="font-bold text-xl text-color-primary">AnimeVerse</h1>
            </Link>
            <p className="w-500" style={{ width: "465px", height: "112px", margin: "16px 0 0", fontSize: "14px", lineHeight: "22.4px", color: "#FFFFFF" }}>
                AnimeVerse adalah platform hiburan anime yang memudahkan pengguna menemukan dan menonton anime populer. Dengan fitur pencarian yang disesuaikan,
                ulasan pengguna, dan kategori genre, AnimeVerse menawarkan pengalaman menonton yang praktis dan menyenangkan bagi penggemar anime.
            </p>
            </div>
             
             {/* Right Side */}
            <div className="right-footer" style={{ width: "auto", height: "124px", marginBottom: "43px", display: "flex", justifyContent: "center", flexDirection: "row" }}>
            <div className="c-white w-500" style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ margin: "0 0 20px", fontSize: "18px", color: "#FFFFFF" }}>AnimeVerse</p>
                <a href="/about-us" style={{ marginBottom: "16px", fontSize: "14px", color: "#FFFFFF" }}>Tentang kami</a>
                <a href="/register-partnership" style={{ marginBottom: "16px", fontSize: "14px", color: "#FFFFFF" }}>Daftar Mitra</a>
                {/* <a href="/career" style={{ fontSize: "14px", color: "#FFFFFF" }}>Karier</a> */}
            </div>
    
            <div className="c-white w-500" style={{ marginLeft: "40px", display: "flex", flexDirection: "column" }}>
                <p style={{ margin: "0 0 20px", fontSize: "18px", color: "#FFFFFF" }}>Layanan</p>
                <a href="/car-rental" style={{ marginBottom: "16px", fontSize: "14px", color: "#FFFFFF" }}>Sewa Mobil</a>
                <a href="/motor-rental" style={{ fontSize: "14px", color: "#FFFFFF" }}>Sewa Motor</a>
            </div>
    
            <div className="c-white w-500" style={{  marginLeft: "40px", display: "flex", flexDirection: "column" }}>
                <p style={{ margin: "0 0 20px", fontSize: "18px", color: "#FFFFFF" }}>Pusat Bantuan</p>
                <a href="/syarat-dan-ketentuan" style={{ marginBottom: "16px", fontSize: "14px", color: "#FFFFFF"}}>Syarat dan Ketentuan</a>
                <a href="/faq" style={{ marginBottom: "16px", fontSize: "14px", color: "#FFFFFF" }}>FAQ</a>
                <a href="https://api.whatsapp.com/send?phone=6285959619412&text=Halo%20Admin%20AnimeVerse" style={{ fontSize: "14px", color: "#FFFFFF" }}>Hubungi Kami</a>
            </div>
            </div>
        </div>
        
    )
}

export default Footer