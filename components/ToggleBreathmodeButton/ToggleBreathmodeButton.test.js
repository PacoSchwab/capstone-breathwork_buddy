import { render, screen } from "@testing-library/react";
import ToggleBreathmodeButton from ".";

test("button is rendered and initial text is Focused Breathing", () => {
  render(<ToggleBreathmodeButton />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();

  expect(screen.getByTestId("breath-mode-text")).toHaveTextContent(
    "Focus Breathing"
  );
});
