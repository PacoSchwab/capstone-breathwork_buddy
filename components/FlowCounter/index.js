import useStore from "../useStore";
import { StyledRoundCounter } from "../../styles/StyledRoundCounter";

export default function FlowCounter() {
  const flowCounter = useStore((state) => state.flowCounter);

  return (
    <>
      {flowCounter < 1 ? (
        <StyledRoundCounter>Round 1/3</StyledRoundCounter>
      ) : flowCounter < 2 ? (
        <StyledRoundCounter>Round 2/3</StyledRoundCounter>
      ) : (
        <StyledRoundCounter>Round 3/3</StyledRoundCounter>
      )}
    </>
  );
}
