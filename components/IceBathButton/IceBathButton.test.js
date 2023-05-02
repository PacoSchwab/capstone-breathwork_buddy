import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IceBathButton from ".";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

test("Button text changes when clicked", () => {
  render(<IceBathButton />);
  const buttonElement = screen.getByRole("button");

  userEvent.click(buttonElement);

  expect(buttonElement).toHaveTextContent(/10/i);
});
