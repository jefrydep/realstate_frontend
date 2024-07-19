"use client";
import { Label } from "../label";
import { Input } from "../input";
import { User } from "lucide-react";
import { ErrorMessage, Field } from "formik";

interface Props {
  icon: React.ReactNode;
  label: string;
  type: string;
  placeholder: string;
  name: string;
}

export const CustomInput = ({
  label,
  icon,
  placeholder,
  name,
  type,
}: Props) => {
  return (
    <div className=" mb-4 ">
      <Label className="  "  >
        {label}
      </Label>
      <div className="relative mt-2">
        <Field
          type={type}
          as={Input}
          name={name}
          placeholder={placeholder}
          className="pl-9   "
        />
        <span className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
          {icon}
        </span>
        
        {/* <Input/> */}
      </div>
      <ErrorMessage
          name={name}
          component="div"
          className="text-red-400  text-sm"
        />
    </div>
  );
};
