import { ModeToggle } from "@/components/togle-mode/ModeToggle";

import { getServerSession } from "next-auth";
import CustomDropDown from "./CustomDropDown";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const Navbar = async () => {
  const dataUser = await getServerSession();

  console.log(dataUser);
  return (
    <nav className="bg-primary-foreground border-b border-gray-200 fixed z-30 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between  ">
          <div className="flex items-center justify-start">
            <a
              href="#"
              className="text-xl font-bold flex items-center lg:ml-2.5"
            >
              {/* Logo */}

              <span className="self-center whitespace-nowrap ml-2">
                {" "}
                Inmobiliaria Palomino
              </span>
            </a>
          </div>
          <div className="flex items-center ">
            {/* User Avatar */}
            <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger  >
                <ModeToggle />
                </TooltipTrigger>
                <TooltipContent  >
                  <p>Cambiar Tema</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            </div>
            {/* <h5 className="mr-2">{dataUser?.user.name}</h5> */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <CustomDropDown />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Perfil y Configuración</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
