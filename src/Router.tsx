import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import { App } from "./App";
import { AuthPage, RequireAuth } from "./auth";
import { GlobalLayout, NotFoundPage, UnderConstruction } from "./common";
import { ProfilePage } from "./user";

export const rootRoute = createRootRoute({
  component: App,
  notFoundComponent: NotFoundPage,
});

export const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "layout",
  component: GlobalLayout,
});

export const indexRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/",
  component: UnderConstruction,
});

export const aRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "link-a",
  component: UnderConstruction,
});

export const bRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "link-b",
  component: UnderConstruction,
});

export const cRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "link-c",
  component: UnderConstruction,
});

export const authRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "auth",
  component: AuthPage,
});

export const profileRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "profile",
  component: () => (
    <RequireAuth>
      <ProfilePage />
    </RequireAuth>
  ),
});

export const routeTree = rootRoute.addChildren([
  layoutRoute.addChildren([
    indexRoute,
    aRoute,
    bRoute,
    cRoute,
    authRoute,
    profileRoute,
  ]),
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Register {
    router: typeof router;
  }
}
