'use client'
import Link from "next/link";

import { Book, Grid2X2, Home } from "lucide-react";
import { usePathname } from "next/navigation";
const links = [
  { name: "admin", href: "/admin", icon: <Home /> },
  { name: "proyectos", href: "/project", icon: <Book /> },
  // // { name: "proyectos", href: "project",icon:<Home /> },
  // { name: "lotes", href: "/home", icon: <Grid2X2 /> },
];

const CustomLink = () => {

    const pathName =  usePathname()
    console.log(pathName)
  return (
    <>
      {links.map((link: any) => (
        <li key={link.href} >
          <Link
            href={link.href}
            className={`${pathName === link.href?'bg-blue-50':'' } text-base capitalize text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-blue-50 group`  }
         
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
