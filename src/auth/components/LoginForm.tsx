import { Button, Icon, Stack } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaLock } from "react-icons/fa";

import { LoginReq, checkUserExists, useLoginMut } from "..";
import { Form, Input } from "../../common";

const useValidations = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  return {
    email: {
      required: { value: true, message: t("Email address is required.") },
      pattern: {
        value: /.+@.+/,
        message: t("Please enter a valid email address."),
      },
      validate: async (email: string) =>
        (await checkUserExists({ queryClient, email })) ||
        t("Email address does not belong to an account."),
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
  };
};

export const LoginForm: FC = () => {
  const { t } = useTranslation();
  const validations = useValidations();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginReq>();
  const { mutate: login } = useLoginMut();

  const onSubmit: SubmitHandler<LoginReq> = (loginReq) => {
    login(loginReq);
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
      <Button type="submit" isLoading={isSubmitting}>
        {t("Log in")}
      </Button>
    </Stack>
  );
};
