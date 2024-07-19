"use client";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/ui/customInput/CustomInput";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DialogClose, DialogPortal } from "@radix-ui/react-dialog";
import { Plus, User } from "lucide-react";
import { useState } from "react";

const CreateProjectForm = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  return (
    <div>
      <Dialog open={isOpenDialog} modal={true}>
        
        <DialogTrigger asChild>
          <Button onClick={() => setIsOpenDialog(true)} className="ml-4">
            <Plus />
          </Button>

          {/* <TooltipProvider>
            <Tooltip>
            <TooltipTrigger>
            <Button className="ml-4">
            <Plus />
            </Button>
            </TooltipTrigger>
            <TooltipContent>
            <p>Agregar Proyectos</p>
            </TooltipContent>
            </Tooltip>
            </TooltipProvider> */}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogPortal>
                sds
            </DialogPortal>
            <DialogTitle  >
              Edit profile
            </DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div>
{/*             
          <CustomInput
              type="text"
              name="documentNumber"
              icon={<User />}
              label={"Usuario"}
              placeholder="Ingresa tu Dni"
            /> */}
            <Input className="mb-96" placeholder="sdfds"/>
            
          </div>
          {/* <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div> */}
          <DialogFooter className="flex ">
            <Button type="reset" onClick={() => setIsOpenDialog(false)}>
              Cancelar
            </Button>
            <Button>Guardar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateProjectForm;
