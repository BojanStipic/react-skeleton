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

export const useLogoutMut = (): UseMutationResult<
  void,
  AxiosError<ProblemDetail>,
  void
> => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const toast = useToast();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: () => api.post("/logout"),
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
