import { useToast } from "@chakra-ui/react";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";

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
      void navigate({ to: "/" });
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
