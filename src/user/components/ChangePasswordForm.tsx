import { Box, Button, Divider, Heading, Icon, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FaLock } from "react-icons/fa";

import { ChangePasswordReq, useChangePasswordMut } from "..";
import { Form, Input } from "../../common";

const useValidations = () => {
  const { t } = useTranslation();

  return {
    oldPassword: {
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
    newPassword: {
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

export const ChangePasswordForm = () => {
  const { t } = useTranslation();
  const validations = useValidations();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ChangePasswordReq>();
  const { mutate: changePassword } = useChangePasswordMut();

  const onSubmit: SubmitHandler<ChangePasswordReq> = (changePasswordReq) => {
    changePassword(changePasswordReq);
  };

  return (
    <Box>
      <Heading>{t("Change your password")}:</Heading>
      <Divider my="4" />
      <Stack
        spacing="4"
        as={Form}
        onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}
      >
        <Input
          type="password"
          label={t("Old password")}
          isRequired
          {...register("oldPassword", validations.oldPassword)}
          errors={errors}
          leftElement={<Icon as={FaLock} />}
        />
        <Input
          type="password"
          label={t("New password")}
          isRequired
          {...register("newPassword", validations.newPassword)}
          errors={errors}
          leftElement={<Icon as={FaLock} />}
        />
        <Box>
          <Button type="submit" isLoading={isSubmitting}>
            {t("Change")}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
