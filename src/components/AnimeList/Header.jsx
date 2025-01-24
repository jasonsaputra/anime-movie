import Link from "next/link";
import arrowList from "../../../public/arrow-list.svg"
import Image from "next/image"

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4 ">
      <h1 className="font-bold text-xl text-color-primary flex items-center gap-3">
        <Image src={arrowList} alt="..." className="md:w-3 m:w-3 w-3 ml-1" />
        {title}
      </h1>
      {linkHref && linkTitle ?
        <Link href={linkHref} className="md:text-md text-md underline hover:text-color-accent text-color-primary transition-all">
          {linkTitle}
        </Link>
        : null
      }
    </div>
  );
};

export default Header