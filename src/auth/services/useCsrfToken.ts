import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api, ProblemDetail } from "../../common";

export const useCsrfToken = (): UseQueryResult<
  undefined,
  AxiosError<ProblemDetail>
> => {
  return useQuery({
    queryKey: ["csrf"],
    queryFn: () => api.get("/csrf"),
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
