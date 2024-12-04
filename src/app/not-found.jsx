"use client"

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
    return (
      <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
        <div className="flex justify-center items-center text-center gap-4 flex-col">
          <FileSearch size={96} className="text-color-accent" />
          <h3 className="text-color-accent text-2xl font-bold">404 - Not Found</h3>
          <p className="text-color-primary">The movie you're looking for doesn't exist.</p>
          <Link href="/" className="text-color-primary hover:text-color-accent transition-all underline">Kembali</Link>
        </div>
       
      </div>
    );
  };
  
  export default Page
  