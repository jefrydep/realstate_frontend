import Link from "next/link";
import { FaHouse } from "react-icons/fa6";
import CustomLink from "./components/CustomLink";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
 

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SidebarMenu from "./components/SidebarMenu";
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
export default function realStateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminPanelLayout>
      {/* <div>
        <Navbar />
      </div>
      <div className="flex bg-red-400  overflow-hidden bg-primary-foreground pt-16">
        <SidebarMenu />

        <div
          className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
          id="sidebarBackdrop"
        ></div>
        <div
          id="main-content"
          className="h-full w-full bg-primary-foreground relative overflow-y-auto lg:ml-64"
        >
          <main>
            <div className="">
              <div className="w-full min-h-[calc(100vh-230px)]">
                <div className="  bg-white  dark:bg-primary-foreground  shadow rounded-lg p-4 sm:p-6 xl:p-8">
                  {children}
                </div>
              </div>
            </div>
          </main>
          
        </div>
      </div> */}
      {children}
    </AdminPanelLayout>
  );
}
