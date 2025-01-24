import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const manrope = Manrope({
  subsets: ["latin"], 
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Anime Movie 38",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} bg-color-black antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
