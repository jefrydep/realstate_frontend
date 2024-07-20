"use client";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/ui/customInput/CustomInput";
import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
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
import * as Yup from "yup";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DialogClose, DialogPortal } from "@radix-ui/react-dialog";
import { Form, Formik, FormikHelpers } from "formik";
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
  User,
} from "lucide-react";
import { useState } from "react";
import { Description } from "@radix-ui/react-toast";
import { createProject } from "../services/project";
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
interface valuesLogin {
  nameProject: string;

  location: string;
  aream2: string;
  description: string;
  status: string;
}
const CreateProjectForm = () => {
  const router = useRouter();
 

  const onLogin = async (
    { nameProject, location, aream2, description, status }: valuesLogin,
    actions: FormikHelpers<valuesLogin>
  ) => {
    console.log(nameProject, location, aream2, description, status);
    try {
      const createNewProject = await createProject({
        nameProject,
        aream2,
        description,
        location,
        status,
      });
      router.refresh();
      setIsOpenDialog(false)
      console.log(createNewProject);
    } catch (error) {
      console.log(error);
    }
    // setIsLoading(true);
    // try {
    //   const res = await signIn("credentials", {
    //     documentNumber,
    //     idCorporation,
    //     password,
    //     redirect: false,
    //   });
    //   console.log(res);

    //   if (res?.error) {
    //     console.log("Error de autenticación es:", res.error);

    //     setIsLoading(false);
    //     toast({
    //       variant: "destructive",
    //       title: "¡Credenciales Incorrectas!",
    //       description: "Vuelva a ingresar sus credenciales",
    //       content: "Vuelva a ingresar sus contraseñas",
    //     });
    //     // Swal.fire({
    //     //   confirmButtonColor: "#01DFD7",
    //     //   icon: "error",
    //     //   title: "Acceso no autorizado",
    //     //   text: "Credenciales incorrectas",
    //     // });

    //     setTimeout(() => {
    //       //   seterror("");
    //       actions.resetForm();
    //     }, 2000);
    //   } else if (res?.ok) {
    //     router.push("/project");

    //     // setIsLoading(false);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    actions.resetForm();
  };
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
            <DialogTitle>Crear Proyecto</DialogTitle>
            <DialogDescription>
              Ingresa los datos del proyecto que se va a crear.
            </DialogDescription>
          </DialogHeader>

          <Formik
            initialValues={{
              nameProject: "",
              location: "",
              aream2: "",
              description: "",
              status: "",
            }}
            onSubmit={onLogin}
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
    </div>
  );
};

export default CreateProjectForm;
