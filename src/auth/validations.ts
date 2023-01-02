import { useQueryClient } from "@tanstack/react-query";
import { RegisterOptions } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { checkUserExists } from ".";

export const useEmailValidation = (): RegisterOptions => {
  const { t } = useTranslation();

  return {
    required: { value: true, message: t("Email address is required.") },
    pattern: {
      value: /.+@.+/,
      message: t("Please enter a valid email address."),
    },
  };
};

export const useUserExistsValidation = (): RegisterOptions => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  return {
    validate: async (email: string) =>
      (await checkUserExists({ queryClient, email })) ||
      t("Email address does not belong to an account."),
  };
};

export const useUserUniqueValidation = (): RegisterOptions => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  return {
    validate: async (email: string) =>
      !(await checkUserExists({ queryClient, email })) ||
      t("An account with this email address already exists."),
  };
};

export const usePasswordValidation = (): RegisterOptions => {
  const { t } = useTranslation();

  return {
    required: { value: true, message: t("Password is required.") },
    minLength: {
      value: 8,
      message: t("Password must be at least 8 characters long."),
    },
    pattern: {
      value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+/,
      message: t("Password must contain letters and numbers."),
    },
  };
};

export const useNameValidation = (): RegisterOptions => {
  const { t } = useTranslation();

  return {
    pattern: { value: /\p{L}*/u, message: t("Please enter a valid name.") },
  };
};

export const useLastNameValidation = (): RegisterOptions => {
  const { t } = useTranslation();

  return {
    pattern: {
      value: /\p{L}*/u,
      message: t("Please enter a valid last name."),
    },
  };
};
