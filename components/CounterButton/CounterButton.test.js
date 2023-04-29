import { render, screen } from "@testing-library/react";
import CounterButton from ".";

test("displays the CounterButton with 'Click and breathe' instruction", () => {
  render(<CounterButton />);
  const button = screen.getByRole("button", { label: "Click and breathe" });
  expect(button).toBeInTheDocument();
});

test("displays the 'Prepare...' instruction when loading", () => {
  render(<CounterButton isLoading={true} />);
  const instruction = screen.getByText("Prepare...");
  expect(instruction).toBeInTheDocument();
});
