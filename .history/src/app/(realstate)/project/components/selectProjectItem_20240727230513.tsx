import { cn } from "@/lib/utils";
import { PanelsTopLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function selectProjectItem(sidebar:boolean) {
  return (
    <Link href="/Project" className="flex items-center gap-2">
      <PanelsTopLeft className="w-6 h-6 mr-1" />
      <h1
        className={cn(
          "font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300",
          sidebar?.isOpen === false
            ? "-translate-x-96 opacity-0 hidden"
            : "translate-x-0 opacity-100"
        )}
      >
        Brand
      </h1>
    </Link>
  );
}
