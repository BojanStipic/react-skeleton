import { useToast } from "@chakra-ui/react";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";

import { ChangePasswordReq } from "..";
import { User } from "../../auth";
import { ProblemDetail, api } from "../../common";

export const useChangePasswordMut = (): UseMutationResult<
  User,
  AxiosError<ProblemDetail>,
  ChangePasswordReq
> => {
  const toast = useToast();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: (changePasswordReq) =>
      api.put("/users/self/password", changePasswordReq),
    onSuccess: () => {
      toast({
        title: t("Password changed successfully"),
        description: t("You have successfully changed your account password"),
        status: "success",
        position: "top",
        isClosable: true,
      });
    },
    onError: () => {
      toast({
        title: t("Change password error"),
        description: t("Something went wrong. Please try again"),
        status: "error",
        position: "top",
        isClosable: true,
      });
    },
  });
};
