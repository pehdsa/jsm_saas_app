import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="flex items-center justify-between mx-auto w-full px-14 py-4 bg-white max-sm:px-4">
      <Link href="/">
        <Image src="/images/logo.svg" alt="Logo" width={46} height={44} />
      </Link>
      <div className="flex items-center gap-4">
        <Navbar />
        <Avatar>
          <AvatarFallback>PH</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
