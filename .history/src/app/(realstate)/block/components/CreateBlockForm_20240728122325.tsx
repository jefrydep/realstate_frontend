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
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
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
import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const validationSchema = Yup.object().shape({
  block: Yup.string()

    .max(10, "Maximo 10 digitos")
    .required("Código de Manzana requerida"),

  description: Yup.string().optional(),
});

interface ValuesBlock {
  block: string;

  description: string;
}
const CreateBlockForm = () => {
  const [statusValue, setStatusValue] = useState<string>("");
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
      setIsOpenDialog(false);
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
    <Dialog open={isOpenDialog} modal={true}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button onClick={() => setIsOpenDialog(true)} className="ml-4">
                <Plus onClick={() => setIsOpenDialog(true)} />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Agregar Proyectos</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
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
                  >
                    <SelectTrigger className="w-[300px]">
                      <SelectValue placeholder="Seleccione el estado del proyecto">
                        {values.status || "Seleccione el estado del proyecto"}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Estados</SelectLabel>
                        <SelectItem value="Pre Venta">Pre Venta</SelectItem>
                        <SelectItem value="Post Venta">Post Venta</SelectItem>
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
                  onClick={() => {
                    setIsOpenDialog(false);
                  }}
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
  );
};

export default CreateBlockForm;
