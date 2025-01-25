import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export type InputProps = Omit<ChakraInputProps, "isInvalid"> &
  ReturnType<UseFormRegister<FieldValues>> & {
    label: string;
    hint?: string;
    errors: FieldErrors;
    leftAddon?: ReactNode;
    rightAddon?: ReactNode;
    leftElement?: ReactNode;
    rightElement?: ReactNode;
  };

export const Input: FC<InputProps> = ({
  name,
  label,
  hint,
  errors,
  isRequired,
  isDisabled,
  isReadOnly,
  leftAddon,
  rightAddon,
  leftElement,
  rightElement,
  ref,
  ...rest
}) => {
  return (
    <FormControl
      isInvalid={!!errors[name]}
      isRequired={isRequired}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
    >
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        {leftAddon ? <InputLeftAddon>{leftAddon}</InputLeftAddon> : null}
        {leftElement ? (
          <InputLeftElement pointerEvents="none">
            {leftElement}
          </InputLeftElement>
        ) : null}
        <ChakraInput {...rest} name={name} ref={ref} />
        {rightElement ? (
          <InputRightElement pointerEvents="none">
            {rightElement}
          </InputRightElement>
        ) : null}
        {rightAddon ? <InputRightAddon>{rightAddon}</InputRightAddon> : null}
      </InputGroup>
      {errors[name]?.message ? (
        <FormErrorMessage>{errors[name].message as string}</FormErrorMessage>
      ) : hint ? (
        <FormHelperText>{hint}</FormHelperText>
      ) : null}
    </FormControl>
  );
};
