"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

export const Navbar = () => {
  const pathName = usePathname();

  const isActiveRoute = (href: string) => {
    // Caso especial para a Home (rota raiz)
    if (href === "/") {
      return pathName === "/";
    }

    // Para outras rotas, verifica se começa com o href
    const regex = new RegExp(`^${href}($|/)`, "i");
    return regex.test(pathName);
  };

  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className={cn(isActiveRoute(href) && "text-[#FE5933] font-semibold")}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};
