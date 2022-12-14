import { AxiosError } from "axios";
import { useToast } from "@chakra-ui/react";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { api, ProblemDetail } from "../../common";
import { LoginReq } from "..";

export const useLoginMut = (): UseMutationResult<
  void,
  AxiosError<ProblemDetail>,
  LoginReq
> => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const toast = useToast();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: (loginReq) => api.post("/login", loginReq),
    onSuccess: () => {
      void queryClient.invalidateQueries();
      navigate("/");
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
