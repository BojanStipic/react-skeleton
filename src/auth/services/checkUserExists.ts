import { QueryClient } from "@tanstack/react-query";

import { api } from "../../common";

export type CheckUserExistsArgs = {
  queryClient: QueryClient;
  email: string;
};

export type CheckUserExists = (arg: CheckUserExistsArgs) => Promise<boolean>;

export const checkUserExists: CheckUserExists = ({ queryClient, email }) => {
  return queryClient.fetchQuery({
    queryKey: ["users", email, "exists"],
    queryFn: async () => {
      try {
        await api.head(`/users/${email}`);
        return true;
      } catch {
        return false;
      }
    },
  });
};
