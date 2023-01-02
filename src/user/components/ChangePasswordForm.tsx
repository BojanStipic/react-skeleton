import { Box, Button, Divider, Heading, Icon, Stack } from "@chakra-ui/react";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FaLock } from "react-icons/fa";

import { ChangePasswordReq, useChangePasswordMut } from "..";
import { usePasswordValidation } from "../../auth";
import { Form, Input } from "../../common";

export const ChangePasswordForm: FC = () => {
  const { t } = useTranslation();
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
          {...register("oldPassword", usePasswordValidation())}
          errors={errors}
          leftElement={<Icon as={FaLock} />}
        />
        <Input
          type="password"
          label={t("New password")}
          isRequired
          {...register("newPassword", usePasswordValidation())}
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
