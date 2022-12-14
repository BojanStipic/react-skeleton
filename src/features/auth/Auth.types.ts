export type User = {
  email: string;
  name?: string;
  lastName?: string;
  role: "USER" | "ADMIN";
};

export type LoginReq = {
  email: string;
  password: string;
};

export type RegisterReq = {
  email: string;
  password: string;
  name?: string;
  lastName?: string;
};
