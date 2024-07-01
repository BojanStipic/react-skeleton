import { Button, Icon, Stack } from "@chakra-ui/react";
import { FC } from "react";
import { RegisterOptions, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaLock } from "react-icons/fa";

import {
  RegisterReq,
  useEmailValidation,
  useLastNameValidation,
  useNameValidation,
  usePasswordValidation,
  useRegisterMut,
  useUserUniqueValidation,
} from "..";
import { Form, Input } from "../../common";

export const RegistrationForm: FC = () => {
  const { t } = useTranslation();
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
        {...register("email", {
          ...useEmailValidation(),
          ...useUserUniqueValidation(),
        } as RegisterOptions<RegisterReq, "email">)}
        errors={errors}
        leftElement={<Icon as={FaEnvelope} />}
      />
      <Input
        type="password"
        label={t("Password")}
        isRequired
        {...register(
          "password",
          usePasswordValidation() as RegisterOptions<RegisterReq, "password">,
        )}
        errors={errors}
        leftElement={<Icon as={FaLock} />}
      />
      <Input
        label={t("Name")}
        {...register(
          "name",
          useNameValidation() as RegisterOptions<RegisterReq, "name">,
        )}
        errors={errors}
      />
      <Input
        label={t("Last name")}
        {...register(
          "lastName",
          useLastNameValidation() as RegisterOptions<RegisterReq, "lastName">,
        )}
        errors={errors}
      />
      <Button type="submit" isLoading={isSubmitting}>
        {t("Register")}
      </Button>
    </Stack>
  );
};
