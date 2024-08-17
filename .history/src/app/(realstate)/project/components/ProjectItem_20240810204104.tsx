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
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as Yup from "yup";
import { Project } from "../interface/Project";
import axios from "axios";
import { useRouter } from "next/navigation";
import { updateProject } from "../services/project";
import { useIdProjectStore } from "@/store/idProject/idProject.store";
import { useSession } from "next-auth/react";
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
  const router = useRouter();
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const setIdProject = useIdProjectStore((state) => state.setIdProject);
  const setNameProject = useIdProjectStore((state) => state.setNameProject);
  const { data: session, status } = useSession();
  // const [progress, setProgress] = React.useState(100)

  // React.useEffect(() => {
  //   const timer = setTimeout(() => setProgress(66), 500)
  //   return () => clearTimeout(timer)
  // }, [])
  // console.log(title, description);
  interface valuesUpdate {
    nameProject: string;
    aream2: string;
    description: string;
    location: string;
    status: string;
  }

  const onUpdate = async (
    { nameProject, location, aream2, description, status }: valuesUpdate,
    actions: FormikHelpers<valuesUpdate>
  ) => {
    // Comparar valores actuales con valores originales

    if (
      nameProject !== project.nameProject ||
      location !== project.location ||
      aream2 !== project.aream2 ||
      description !== project.description ||
      status !== project.status
    ) {
      try {
        if (session) {
          return await updateProject(
            { nameProject, location, aream2, description, status },
            project.id,
            session?.user.token
          );
        } 

        console.log(nameProject, aream2, description, status);
        setIsOpenDialog(false);
        router.refresh();
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }
    actions.resetForm();
  };

  const deleteProject = async (id: string) => {
    await axios.delete(`http://localhost:3000/api/project/${id}`);
    router.refresh();
  };
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
                          onClick={() => setIsOpenDialog(true)}
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
                <AlertDialog open={isOpenAlert} onOpenChange={setIsOpenAlert}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant={"destructive"}
                            // onClick={() => deleteProject(project.id)}
                            onClick={() => setIsOpenAlert(true)}
                            className="ml-4 p-2"
                          >
                            <Trash size={18} />
                          </Button>
                        </AlertDialogTrigger>
                        {/* <div>
                  
                  </div> */}
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Eliminar Proyecto</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        {" "}
                        ¿Estás seguro de que deseas eliminar este proyecto?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Esta acción no podrá ser revertida.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <Button
                        onClick={() => setIsOpenAlert(false)}
                        type="button"
                        variant={"destructive"}
                      >
                        Cancelar
                      </Button>

                      <AlertDialogAction
                        onClick={async () => {
                          deleteProject(project.id);
                          setIsOpenDialog(false);
                        }}
                      >
                        Eliminar
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
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
                  {({ values, setFieldValue }) => (
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
                      <Field name="status">
                        {({}) => (
                          <Select
                            onValueChange={(value) => {
                              setFieldValue("status", value);
                            }}
                            value={values.status}
                          >
                            <SelectTrigger className="w-[300px]">
                              <SelectValue placeholder="Seleccione el estado del proyecto">
                                {values.status ||
                                  "Seleccione el estado del proyecto"}
                              </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Estados</SelectLabel>
                                <SelectItem value="Pre Venta">
                                  Pre Venta
                                </SelectItem>
                                <SelectItem value="Post Venta">
                                  Post Venta
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        )}
                      </Field>
                      <ErrorMessage
                        name="status"
                        component="div"
                        className="text-red-400  text-sm"
                      />
                      <DialogFooter className="flex gap-2 mt-4">
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
                  )}
                </Formik>
              </DialogContent>
            </Dialog>
          </CardTitle>
          <CardDescription className="">{project.description}</CardDescription>
          <Separator />
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <span className="mr-7">Total de Lotes:</span>
            <b>{project.totalLots}</b>
          </div>
          <div className="flex justify-between">
            <span className="mr-7"> Lotes Disponibles:</span>
            <b>{project.availableLots}</b>
          </div>
          <div className="flex justify-between">
            <span className="mr-7"> Lotes Vendidos:</span>
            <b>{project.soldLots} </b>
          </div>
          <div className={`flex justify-between    text-white rounded-md px-1`}>
            <span className="mr-7">Estado</span>
            <b
              className={`${
                project.status === "Post Venta"
                  ? "bg-[#7dd3fc]"
                  : "bg-yellow-400"
              } px-2 rounded-xl`}
            >
              {project.status}
            </b>
          </div>
          <div className="mt-6">
            <Progress
              value={(project.soldLots * 100) / project.totalLots}
              className="w-[100%]"
            />
          </div>
        </CardContent>
        <Separator />
        <CardFooter className="flex justify-between">
          <Button
            onClick={() => {
              setIdProject(project.id);
              setNameProject(project.nameProject);
              router.push("/block");
            }}
            className="mt-4 w-full"
          >
            Seleccionar
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProjectItem;
