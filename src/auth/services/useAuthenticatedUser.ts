import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

import { User } from "..";
import { ProblemDetail, api } from "../../common";

export const useAuthenticatedUser = (): UseQueryResult<
  User | null,
  AxiosError<ProblemDetail>
> => {
  return useQuery({
    queryKey: ["users", "self"],
    queryFn: async () => {
      try {
        const response = await api.get<User>("/users/self");
        return response.data;
      } catch (error) {
        if (
          axios.isAxiosError<ProblemDetail>(error) &&
          error.response?.status === 401
        ) {
          return null;
        }
        throw error;
      }
    },
    staleTime: Infinity,
    cacheTime: Infinity,
  });
};
