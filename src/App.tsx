import { Route, Routes } from "react-router-dom";

import { GlobalLayout, NotFoundPage, UnderConstruction } from "./components";
import { AuthPage, RequireAuth } from "./features/auth";

export const App = () => {
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
              <UnderConstruction />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </GlobalLayout>
  );
};
