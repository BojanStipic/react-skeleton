import { Button, Icon, Stack } from "@chakra-ui/react";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaLock } from "react-icons/fa";

import {
  LoginReq,
  useEmailValidation,
  useLoginMut,
  usePasswordValidation,
  useUserExistsValidation,
} from "..";
import { Form, Input } from "../../common";

export const LoginForm: FC = () => {
  const { t } = useTranslation();
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
        {...register("email", {
          ...useEmailValidation(),
          ...useUserExistsValidation(),
        })}
        errors={errors}
        leftElement={<Icon as={FaEnvelope} />}
      />
      <Input
        type="password"
        label={t("Password")}
        isRequired
        {...register("password", usePasswordValidation())}
        errors={errors}
        leftElement={<Icon as={FaLock} />}
      />
      <Button type="submit" isLoading={isSubmitting}>
        {t("Log in")}
      </Button>
    </Stack>
  );
};
