import { expect, test } from "vitest";

import { App } from "./App";
import { render, screen } from "./tests/test-utils";

test("renders app", () => {
  render(<App />);

  expect(screen.getByText("React Skeleton")).toBeInTheDocument();
});
