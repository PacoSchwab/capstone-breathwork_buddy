import useStore from "../useStore";
import { StyledRoundCounter } from "../../styles/StyledRoundCounter";

export default function FlowCounter() {
  const flowCounter = useStore((state) => state.flowCounter);
  const currentFlowCounter =
    flowCounter < 1 ? "1" : flowCounter < 2 ? "2" : "3";

  return (
    <>
      <StyledRoundCounter>Round {currentFlowCounter}/3</StyledRoundCounter>;
    </>
  );
}
