import { StyledSpan } from "../../styles/StyledSpan";
import { StyledButton } from "../../styles/StyledButton";
import { StyledInstruction } from "../../styles/StyledInstruction";
import { StyledInstruction2 } from "../../styles/StyledInstruction2";
import useStore from "../useStore";
import useLoading from "../useLoading";

export default function CounterButton({
  handleBreathClick,
  handleRetentionCounterClick,
  displayTime,
}) {
  const breathCount = useStore((state) => state.breathCount);
  const isBreathActive = useStore((state) => state.isBreathActive);
  const showRetentionCounter = useStore((state) => state.showRetentionCounter);
  const isRetentionFinished = useStore((state) => state.isRetentionFinished);
  const breathHoldCountdown = useStore((state) => state.breathHoldCountdown);
  const isLoading = useStore((state) => state.isLoading);
  const switchIsLoading = useStore((state) => state.switchIsLoading);

  useLoading(switchIsLoading);

  return (
    <>
      {showRetentionCounter ? (
        <StyledButton onClick={handleRetentionCounterClick} retention>
          <StyledInstruction>Hold breath</StyledInstruction> {displayTime}
        </StyledButton>
      ) : isRetentionFinished ? (
        <StyledButton isRetentionFinished>
          <StyledInstruction2>Hold breath</StyledInstruction2>{" "}
          {breathHoldCountdown}
        </StyledButton>
      ) : (
        <StyledButton
          isActive={isBreathActive}
          onClick={!isLoading ? handleBreathClick : null}
          disabled={isBreathActive || isLoading}
        >
          {isLoading ? (
            "Prepare..."
          ) : isBreathActive ? (
            <StyledSpan firstCounter>
              <StyledInstruction>Breathe</StyledInstruction> {breathCount}
            </StyledSpan>
          ) : breathCount === 40 ? (
            ""
          ) : (
            "Click and breathe"
          )}
        </StyledButton>
      )}
    </>
  );
}
