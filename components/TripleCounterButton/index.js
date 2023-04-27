import { StyledButton } from "../../styles/StyledButton";
import { StyledSpan } from "../../styles/StyledSpan";
import { StyledInstruction2 } from "../../styles/StyledInstruction2";
import useStore from "../useStore";
import useLoading from "../useLoading";

export default function TripleCounterButton({
  stopTripleCounter,
  stopTripleCounterMusic,
  playTripleCounter,
  playTripleCounterMusic,
}) {
  const tripleCounterOne = useStore((state) => state.tripleCounterOne);
  const tripleCounterTwo = useStore((state) => state.tripleCounterTwo);
  const tripleCounterThree = useStore((state) => state.tripleCounterThree);
  const isTripleCounterOneActive = useStore(
    (state) => state.isTripleCounterOneActive
  );
  const isTripleCounterTwoActive = useStore(
    (state) => state.isTripleCounterTwoActive
  );
  const isTripleCounterThreeActive = useStore(
    (state) => state.isTripleCounterThreeActive
  );
  const switchIsTripleCounterOneActive = useStore(
    (state) => state.switchIsTripleCounterOneActive
  );
  const isLoading = useStore((state) => state.isLoading);
  const switchIsLoading = useStore((state) => state.switchIsLoading);

  useLoading(switchIsLoading);

  const handleLeadSuccess = () => {
    window.location.reload();
    window.location.href = "/success";
  };

  function handleStopTripleCounter() {
    if (!isLoading) {
      isTripleCounterOneActive ||
      isTripleCounterTwoActive ||
      isTripleCounterThreeActive
        ? (stopTripleCounter(), stopTripleCounterMusic(), handleLeadSuccess())
        : (switchIsTripleCounterOneActive(true),
          playTripleCounterMusic(),
          playTripleCounter());
    }
  }

  return (
    <>
      <StyledButton onClick={handleStopTripleCounter}>
        {isLoading
          ? "Prepare..."
          : (isTripleCounterThreeActive && (
              <StyledSpan>
                <StyledInstruction2>Exhale</StyledInstruction2>
                {tripleCounterThree}
              </StyledSpan>
            )) ||
            (isTripleCounterTwoActive && (
              <StyledSpan>
                <StyledInstruction2>Hold breath</StyledInstruction2>
                {tripleCounterTwo}
              </StyledSpan>
            )) ||
            (isTripleCounterOneActive && (
              <StyledSpan>
                <StyledInstruction2>Inhale</StyledInstruction2>
                {tripleCounterOne}
              </StyledSpan>
            )) ||
            "Click and breathe"}
      </StyledButton>
    </>
  );
}
