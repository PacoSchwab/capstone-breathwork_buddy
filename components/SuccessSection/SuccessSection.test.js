import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SuccessSection from "../SuccessSection";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("renders SuccessSection component", () => {
  render(<SuccessSection breathIntervalDelay={2000} />);

  const successMessage = screen.getByText(/flow completed/i);
  expect(successMessage).toBeInTheDocument();

  const button = screen.getByRole("button");
  userEvent.click(button);

  expect(window.location.pathname).toBe("/");
});
