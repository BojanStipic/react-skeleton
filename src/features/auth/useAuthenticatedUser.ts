import axios, { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { api, ProblemDetail } from "../../services";
import { User } from ".";

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
