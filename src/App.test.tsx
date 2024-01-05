import { expect, test } from "vitest";

import { GlobalLayout } from "./common";
import { render, screen } from "./tests/test-utils";

test("renders app", async () => {
  render(<GlobalLayout />);

  expect(await screen.findByText("React Skeleton")).toBeInTheDocument();
});
