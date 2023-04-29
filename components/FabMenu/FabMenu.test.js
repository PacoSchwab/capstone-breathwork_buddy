import { render, screen } from "@testing-library/react";
import FabMenu from ".";

test("displays the FabMenu", () => {
  render(<FabMenu />);
  expect(
    screen.getByRole("button", { name: /menu button/i })
  ).toBeInTheDocument();
});
