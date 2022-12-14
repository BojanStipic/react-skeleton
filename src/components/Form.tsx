import { chakra, ChakraComponent } from "@chakra-ui/react";

export type FormProps = ChakraComponent<"form">;

export const Form = (props: FormProps) => {
  return <chakra.form noValidate {...props} />;
};
