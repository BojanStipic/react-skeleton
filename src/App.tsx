import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { AuthPage, RequireAuth } from "./auth";
import { useCsrfToken } from "./auth/services/useCsrfToken";
import { GlobalLayout, NotFoundPage, UnderConstruction } from "./common";
import { ProfilePage } from "./user";

export const App: FC = () => {
  useCsrfToken();

  return (
    <GlobalLayout>
      <Routes>
        <Route path="/" element={<UnderConstruction />} />
        <Route path="/link-a" element={<UnderConstruction />} />
        <Route path="/link-b" element={<UnderConstruction />} />
        <Route path="/link-c" element={<UnderConstruction />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </GlobalLayout>
  );
};
