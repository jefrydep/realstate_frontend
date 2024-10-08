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
import { createBlock } from "../services/block";
import { useIdProjectStore } from "@/store/idProject/idProject.store";
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
  const projectId = useIdProjectStore((state) => state.idProject);
  const setBlockAdded = useIdProjectStore((state) => state.setBlockAdded);
  
 
  

  const onLogin = async (
    { description, block }: ValuesBlock,
    actions: FormikHelpers<ValuesBlock>
  ) => {
    console.log(block, description);
    try {
      const createNewBlock = await createBlock({
        block,
        description,
        projectId,
      });
      if (createNewBlock.status === 201) {
        setBlockAdded(true);
      } else {
        setBlockAdded(false);
      }

      //   router.refresh();
      setIsOpenDialog(false);
      console.log(createNewBlock);
    } catch (error) {
      console.log(error);
    }

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
            <p>Agregar Manzana</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Crear Manzana</DialogTitle>
          <DialogDescription>
            Ingresa los datos de la manzana que se va a crear.
          </DialogDescription>
        </DialogHeader>

        <Formik
          initialValues={{
            description: "",
            block: "",
          }}
          onSubmit={onLogin}
          validationSchema={validationSchema}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <CustomInput
                type="text"
                name="block"
                icon={<LandPlot />}
                label={"Manzana"}
                placeholder="MANZANA-A"
              />
              <CustomInput
                type="text"
                name="description"
                icon={<LocateFixed />}
                label={"Descripción"}
                placeholder="Descripción"
              />

              {/* <Field name="status">
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
              /> */}
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
