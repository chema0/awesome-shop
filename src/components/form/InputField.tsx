import { Input, InputProps, InputPasswordProps } from "@nextui-org/react";
import { TextareaProps } from "@nextui-org/react/types/textarea";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type InputFieldProps = {
  componentType?: "default" | "password" | "textarea";
  error: FieldError | undefined;
  registration: UseFormRegisterReturn<any>;
} & Partial<InputProps | InputPasswordProps | TextareaProps>;

const components = {
  default: Input,
  password: Input.Password,
  textarea: Input.Textarea,
};

const InputField = ({
  error,
  registration,
  status,
  componentType = "default",
  ...props
}: InputFieldProps) => {
  status = error ? "error" : status;

  const Component = components[componentType];

  return <Component {...props} status={status} {...registration} />;
};

export default InputField;
