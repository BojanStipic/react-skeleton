import {
  NotFoundRoute,
  RootRoute,
  Route,
  Router,
} from "@tanstack/react-router";

import { App } from "./App";
import { AuthPage, RequireAuth } from "./auth";
import { GlobalLayout, NotFoundPage, UnderConstruction } from "./common";
import { ProfilePage } from "./user";

export const rootRoute = new RootRoute({
  component: App,
});

export const layoutRoute = new Route({
  getParentRoute: () => rootRoute,
  id: "layout",
  component: GlobalLayout,
});

export const indexRoute = new Route({
  getParentRoute: () => layoutRoute,
  path: "/",
  component: UnderConstruction,
});

export const aRoute = new Route({
  getParentRoute: () => layoutRoute,
  path: "link-a",
  component: UnderConstruction,
});

export const bRoute = new Route({
  getParentRoute: () => layoutRoute,
  path: "link-b",
  component: UnderConstruction,
});

export const cRoute = new Route({
  getParentRoute: () => layoutRoute,
  path: "link-c",
  component: UnderConstruction,
});

export const authRoute = new Route({
  getParentRoute: () => layoutRoute,
  path: "auth",
  component: AuthPage,
});

export const profileRoute = new Route({
  getParentRoute: () => layoutRoute,
  path: "profile",
  component: () => (
    <RequireAuth>
      <ProfilePage />
    </RequireAuth>
  ),
});

export const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: NotFoundPage,
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

export const router = new Router({ routeTree, notFoundRoute });

declare module "@tanstack/react-router" {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Register {
    router: typeof router;
  }
}
