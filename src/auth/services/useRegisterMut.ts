import { useToast } from "@chakra-ui/react";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";

import { RegisterReq, User } from "..";
import { ProblemDetail, api } from "../../common";

export const useRegisterMut = (): UseMutationResult<
  User,
  AxiosError<ProblemDetail>,
  RegisterReq
> => {
  const toast = useToast();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: (registerReq) => api.post("/users", registerReq),
    onSuccess: () => {
      toast({
        title: t("Registered successfully"),
        description: t("You have successfully registered a new account"),
        status: "success",
        position: "top",
        isClosable: true,
      });
    },
    onError: () => {
      toast({
        title: t("There was an error"),
        description: t("Something went wrong. Please try again."),
        status: "error",
        position: "top",
        isClosable: true,
      });
    },
  });
};
