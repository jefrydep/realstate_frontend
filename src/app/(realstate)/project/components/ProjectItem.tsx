"use client";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AreaChart,
  Axis3DIcon,
  Captions,
  LandPlot,
  LineChart,
  LocateFixed,
  LocateIcon,
  Plus,
  Projector,
  Trash,
  User,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Pencil } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CustomInput } from "@/components/ui/customInput/CustomInput";
import { useState } from "react";
import { Form, Formik } from "formik";
interface Props {
  project: Project[];
}

import * as Yup from "yup";
import { Project } from "../interface/Project";
import axios from "axios";
import { useRouter } from "next/navigation";
const validationSchema = Yup.object().shape({
  nameProject: Yup.string()

    .max(50, "Maximo 50 digitos")
    .required("Nombre del proyecto es requerido."),
  location: Yup.string().required("Ubicación es requerido."),
  aream2: Yup.string().required("Area total requerido."),
  Description: Yup.string().optional(),
  status: Yup.string().required("Campo requerido"),
});
const ProjectItem = (project: Project) => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const router = useRouter()
  // const [progress, setProgress] = React.useState(100)

  // React.useEffect(() => {
  //   const timer = setTimeout(() => setProgress(66), 500)
  //   return () => clearTimeout(timer)
  // }, [])
  // console.log(title, description);
  const onUpdate = () => {
    console.log(project);
    console.log("udpated");
  };
  const deleteProject = async (id:string)=>{
   
    await axios.delete(`http://localhost:3000/api/project/${id}`)
    router.refresh()
  }
  return (
    <>
      <Card className="w-full sm:w-[500px] m-2">
        <CardHeader>
          <CardTitle className="text-primary flex justify-between items-center 	 ">
            <span className=" uppercase ">{project.nameProject}</span>{" "}
            {/* <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="p-2">
                  <Pencil size={18} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p> Editar Proyecto</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider> */}
            <Dialog open={isOpenDialog} modal={true}>
              {/* <Button onClick={() => setIsOpenDialog(true)} className="ml-4">
            <Plus />
            </Button> */}
              <div className="flex">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <DialogTrigger asChild>
                        {/* <div>
                  
                  </div> */}

                        <Button
                          onClick={()=> setIsOpenDialog(true) }
                          className="ml-4 p-2"
                        >
                          <Pencil size={18} />
                        </Button>
                      </DialogTrigger>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Editar Proyecto</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <DialogTrigger asChild>
                        {/* <div>
                  
                  </div> */}

                        <Button
                          variant={"destructive"}
                          onClick={()=> deleteProject(project.id)}
                          className="ml-4 p-2"
                        >
                          <Trash size={18} />
                        </Button>
                      </DialogTrigger>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Eliminar Proyecto</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Actualizar Proyecto</DialogTitle>
                  <DialogDescription>
                    este proyecto se actualizará
                  </DialogDescription>
                </DialogHeader>

                <Formik
                  initialValues={{
                    nameProject: project.nameProject,
                    location: project.location,
                    aream2: project.aream2,
                    description: project.description,
                    status: project.status,
                  }}
                  onSubmit={onUpdate}
                  className=""
                  validationSchema={validationSchema}
                >
                  <Form>
                    <CustomInput
                      type="text"
                      name="nameProject"
                      icon={<LandPlot />}
                      label={"Nombre del proyecto"}
                      placeholder="Ingresa el nombre del proyecto."
                    />
                    <CustomInput
                      type="text"
                      name="location"
                      icon={<LocateFixed />}
                      label={"Ubicación"}
                      placeholder="Ingresa la ubicación del proyecto."
                    />
                    <CustomInput
                      type="text"
                      name="aream2"
                      icon={<AreaChart />}
                      label={"Area total"}
                      placeholder="Ingresa el area total del proyecto."
                    />
                    <CustomInput
                      type="text"
                      name="description"
                      icon={<Captions />}
                      label={"Descripción"}
                      placeholder="Puedes ingresar una breve descripción."
                    />
                    <CustomInput
                      type="text"
                      name="status"
                      icon={<LineChart />}
                      label={"Estado del proyecto"}
                      placeholder="Ingresa el estado del proyecto. "
                    />
                    {/* <CustomInput type="text"  name="user"/> */}
                    {/* <CustomInput type="text"  name="password"/> */}
                    {/* <div className="">
              <Button
                disabled={IsLoading}
                type="submit"
                className="w-full mt-7"
              >
                {!IsLoading ? (
                  <span>Iniciar sesión</span>
                ) : (
                  <span>
                    <SyncLoader size={10} color="white" />
                  </span>
                )}      
              </Button>
            </div> */}
                    <DialogFooter className="flex  gap-2">
                      <Button
                        type="reset"
                        variant={"destructive"}
                        onClick={() => setIsOpenDialog(false)}
                      >
                        Cancelar
                      </Button>
                      <Button type="submit">Guardar</Button>
                    </DialogFooter>
                  </Form>
                </Formik>
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
              </DialogContent>
            </Dialog>
          </CardTitle>
          <CardDescription className="">{project.description}</CardDescription>
          <Separator />
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <span className="mr-7">Total de Lotes:</span>
            {/* <b>{totalLots}</b> */}
          </div>
          <div className="flex justify-between">
            <span className="mr-7"> Lotes Disponibles:</span>
            {/* <b>{availableLots}</b> */}
          </div>
          <div className="flex justify-between">
            <span className="mr-7"> Lotes Vendidos:</span>
            {/* <b>{soldLots} </b> */}
          </div>
          <div className="mt-6">
            {/* <Progress value={soldLots} className="w-[100%]" /> */}
          </div>
        </CardContent>
        <Separator />
        <CardFooter className="flex justify-between">
          <Button className="mt-4 w-full">Seleccionar</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProjectItem;
