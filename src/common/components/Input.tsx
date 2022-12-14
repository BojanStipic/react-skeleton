import { forwardRef, ReactNode } from "react";
import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormErrorMessage,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputLeftElement,
  InputRightElement,
  FormHelperText,
} from "@chakra-ui/react";
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

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
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
      ...rest
    },
    ref
  ) => {
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
          <FormErrorMessage>{errors[name]?.message as string}</FormErrorMessage>
        ) : hint ? (
          <FormHelperText>{hint}</FormHelperText>
        ) : null}
      </FormControl>
    );
  }
);

Input.displayName = "Input";
