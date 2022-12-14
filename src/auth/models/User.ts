export type User = {
  email: string;
  name?: string;
  lastName?: string;
  role: "USER" | "ADMIN";
};
