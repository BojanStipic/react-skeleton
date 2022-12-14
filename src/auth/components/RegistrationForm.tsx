import { Button, Icon, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaLock } from "react-icons/fa";

import { RegisterReq, useRegisterMut } from "..";
import { Form, Input } from "../../common";

const useValidations = () => {
  const { t } = useTranslation();

  return {
    email: {
      required: { value: true, message: t("Email address is required.") },
      pattern: {
        value: /.+@.+/,
        message: t("Please enter a valid email address."),
      },
    },
    password: {
      required: { value: true, message: t("Password is required.") },
      minLength: {
        value: 8,
        message: t("Password must be at least 8 characters long."),
      },
      pattern: {
        value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+/,
        message: t("Password must contain letters and numbers."),
      },
    },
    name: {
      pattern: {
        value: /\p{L}*/u,
        message: t("Please enter a valid name."),
      },
    },
    lastName: {
      pattern: {
        value: /\p{L}*/u,
        message: t("Please enter a valid last name."),
      },
    },
  };
};

export const RegistrationForm = () => {
  const { t } = useTranslation();
  const validations = useValidations();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterReq>();
  const { mutate: userRegister } = useRegisterMut();

  const onSubmit: SubmitHandler<RegisterReq> = (registerReq) => {
    userRegister(registerReq);
  };

  return (
    <Stack
      spacing="4"
      as={Form}
      onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}
    >
      <Input
        type="email"
        label={t("Email address")}
        isRequired
        {...register("email", { ...validations.email })}
        errors={errors}
        leftElement={<Icon as={FaEnvelope} />}
      />
      <Input
        type="password"
        label={t("Password")}
        isRequired
        {...register("password", { ...validations.password })}
        errors={errors}
        leftElement={<Icon as={FaLock} />}
      />
      <Input
        label={t("Name")}
        {...register("name", { ...validations.name })}
        errors={errors}
      />
      <Input
        label={t("Last name")}
        {...register("lastName", { ...validations.lastName })}
        errors={errors}
      />
      <Button type="submit" isLoading={isSubmitting}>
        {t("Register")}
      </Button>
    </Stack>
  );
};
