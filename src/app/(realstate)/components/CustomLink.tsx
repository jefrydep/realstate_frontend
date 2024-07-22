"use client";
import Link from "next/link";

import { Book, Grid2X2, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
const links = [
  { name: "proyectos", href: "/project", icon: <Book /> },
  { name: "admin", href: "/admin", icon: <Home /> },
  // // { name: "proyectos", href: "project",icon:<Home /> },
  // { name: "lotes", href: "/home", icon: <Grid2X2 /> },
];

const CustomLink = () => {
  const pathName = usePathname();

  return (
    <>
    
      {links.map((link: any) => (
        <li key={link.href}>
    
            <Link
              href={link.href}
              className={`${
                pathName === link.href ? " bg-primary   dark:bg-secondary text-primary-foreground  dark:text-primary" : "  "
              } text-base capitalize   font-normal rounded-lg flex items-center hover:bg-primary hover:text-primary-foreground  p-2 dark:hover:bg-secondary  dark:hover:text-primary group`}
            >
              <span>{link.icon}</span>
              <span className="ml-3">{link.name}</span>
            </Link>
         
        </li>
      ))}{" "}
    </>
  );
};

export default CustomLink;
