"use client";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/ui/customInput/CustomInput";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { LockKeyhole, User } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
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

import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  documentNumber: Yup.string()
    .min(8, "Minimo 8 digitos")
    .max(8, "Maximo 8 digitos")
    .required("Dni es requerido"),
  password: Yup.string().required("Contraseña es requerida"),
});
interface valuesLogin {
  documentNumber: string;

  password: string;
  idCorporation: string;
}
export const LoginForm = () => {
  const router = useRouter();
  const { toast } = useToast();

  const [IsLoading, setIsLoading] = useState(false);

  const onLogin = async (
    { documentNumber, idCorporation, password }: valuesLogin,
    actions: FormikHelpers<valuesLogin>
  ) => {
    console.log(documentNumber, password, idCorporation);
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        documentNumber,
        idCorporation,
        password,
        redirect: false,
      });
      console.log(res);

      if (res?.error) {
        console.log("Error de autenticación es:", res.error);

        setIsLoading(false);
        toast({
          variant: "destructive",
          title: "¡Credenciales Incorrectas!",
          description: "Vuelva a ingresar sus credenciales",
          content: "Vuelva a ingresar sus contraseñas",
        });
        // Swal.fire({
        //   confirmButtonColor: "#01DFD7",
        //   icon: "error",
        //   title: "Acceso no autorizado",
        //   text: "Credenciales incorrectas",
        // });

        setTimeout(() => {
          //   seterror("");
          actions.resetForm();
        }, 2000);
      } else if (res?.ok) {
        router.push("/project");

        // setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
    actions.resetForm();
  };

  return (
    <div className="   px-3 py-2  ">
      <div className="pt-6 space-y-2   lg:w-[40rem] m-auto  mt-5 ">
        <div className="text-center">
          <h3 className="text-lg font-bold mb-4">¡Bienvenidos!</h3>
          <h4>
            <b>Inicio de sesión</b>
          </h4>
        </div>

        <Formik
          initialValues={{
            documentNumber: "",
            password: "",
            idCorporation: "1994palomino",
          }}
          onSubmit={onLogin}
          className=""
          validationSchema={validationSchema}
        >
          <Form>
            <CustomInput
              type="text"
              name="documentNumber"
              icon={<User />}
              label={"Usuario"}
              placeholder="Ingresa tu Dni"
            />
            <CustomInput
              type="password"
              name="password"
              icon={<LockKeyhole />}
              label={"contraseña"}
              placeholder="Ingresa tu contraseña"
            />
            
            {/* <CustomInput type="text"  name="user"/> */}
            {/* <CustomInput type="text"  name="password"/> */}
            <div className="">
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
            </div>
          </Form>
        </Formik>
      </div>

      <Toaster />
    </div>
  );
};
