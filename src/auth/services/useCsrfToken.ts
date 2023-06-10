import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ProblemDetail, api } from "../../common";

export const useCsrfToken = (): UseQueryResult<
  undefined,
  AxiosError<ProblemDetail>
> => {
  return useQuery({
    queryKey: ["csrf"],
    queryFn: () => api.get("/csrf"),
    staleTime: Infinity,
    cacheTime: Infinity,
  });
};
