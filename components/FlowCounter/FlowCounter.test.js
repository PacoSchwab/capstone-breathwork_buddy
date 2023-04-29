import { render, screen } from "@testing-library/react";
import useStore from "../useStore";
import FlowCounter from ".";

jest.mock("../useStore");

test("displays the correct flow round", () => {
  useStore.mockReturnValueOnce(0.5);
  render(<FlowCounter />);
  expect(screen.getByText("Round 1/3")).toBeInTheDocument();

  useStore.mockReturnValueOnce(1.5);
  render(<FlowCounter />);
  expect(screen.getByText("Round 2/3")).toBeInTheDocument();

  useStore.mockReturnValueOnce(2.5);
  render(<FlowCounter />);
  expect(screen.getByText("Round 3/3")).toBeInTheDocument();
});
