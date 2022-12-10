import { test, expect } from "vitest";
import { render, screen } from "./tests/test-utils";

import { App } from "./App";

test("renders app", () => {
  render(<App />);

  expect(screen.getByText("React Skeleton")).toBeInTheDocument();
});
