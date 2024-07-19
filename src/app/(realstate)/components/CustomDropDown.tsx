"use client";
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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { LogOut, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const CustomDropDown = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const { data: session } = useSession();
  console.log(session);
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        {/* <div className="bg-accent ml-2 cursor-pointer  text-white p-2 rounded-full w-12 h-12 flex items-center justify-center ">
          JP
        </div> */}
        <Avatar className="cursor-pointer mr-2 ml-4">
          {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
          <AvatarFallback className="dark:bg-white  ">
            <span className="dark:text-black font-bold">
              JP
            </span>
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ">
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span className="mr-2">
              <User />
            </span>
            Perfil
            {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        {/* <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator /> */}

        {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
        <div>
          <AlertDialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
            <DropdownMenuItem
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpenDialog(true);
              }}
              // onClick={async () => {
              //   setIsOpenDialog(true);
              //   // if (isOpenDialog) {
              //   //   await signOut({});
              //   // }
              // }}
            >
              <span className="mr-2">
                <LogOut />
              </span>
              Cerrar sesión
            </DropdownMenuItem>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  {" "}
                  ¿Estás seguro de que deseas cerrar sesión?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Esta acción no podrá ser revertida.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setIsOpenDialog(false)}>
                  Cancelar
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={async () => {
                    await signOut();
                    setIsOpenDialog(false);
                  }}
                >
                  Continuar
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomDropDown;
