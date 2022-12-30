import { ChakraComponent, chakra } from "@chakra-ui/react";
import { FC } from "react";

export type FormProps = ChakraComponent<"form">;

export const Form: FC<FormProps> = (props) => {
  return <chakra.form noValidate {...props} />;
};
