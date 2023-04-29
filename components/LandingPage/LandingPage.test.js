import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LandingPage from ".";

test("renders all exercise links", () => {
  render(<LandingPage />);

  const breathFlowsLink = screen.getByText("Breath Flows");
  expect(breathFlowsLink).toBeInTheDocument();

  const tripleBreathingLink = screen.getByText("4-7-8 Breathing");
  expect(tripleBreathingLink).toBeInTheDocument();

  const iceBathingLink = screen.getByText("Ice Bathing");
  expect(iceBathingLink).toBeInTheDocument();
});
