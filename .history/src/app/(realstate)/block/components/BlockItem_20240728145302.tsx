"use client";
import { Button } from "@/components/ui/button";
import { Block } from "../interfaces/block";
import { LandPlot, LocateFixed, Pencil } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Form, Formik } from "formik";
import { useState } from "react";
import { CustomInput } from "@/components/ui/customInput/CustomInput";
interface BlockItemProps {
  block: Block;
}
import * as Yup from "yup";
const validationSchema = Yup.object().shape({
    block: Yup.string()
  
      .max(10, "Maximo 10 digitos")
      .required("Código de Manzana requerida"),
  
    description: Yup.string().optional(),
  });export default function BlockItem({ block }: BlockItemProps) {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const updateBlock = () => {
    console.log(block);
  };
  return (
    <>
      <Dialog open={isOpenDialog} modal={true}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <Button
                  onClick={() => setIsOpenDialog(true)}
                  className="ml-4 p-2"
                >
                  <Pencil size={18} />
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
              description: block.description,
              block: block.block,
            }}
            onSubmit={updateBlock}
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
    </>
  );
}
