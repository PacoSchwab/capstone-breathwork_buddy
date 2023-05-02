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
  const isPowerBreathing = useStore((state) => state.isPowerBreathing);

  useLoading(switchIsLoading, 4000);

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
          isPowerBreathing={isPowerBreathing}
        >
          {isLoading ? (
            <StyledInstruction big>Prepare...</StyledInstruction>
          ) : isBreathActive ? (
            <StyledSpan>
              <StyledInstruction>Breathe</StyledInstruction> {breathCount}
            </StyledSpan>
          ) : breathCount === 40 ? (
            ""
          ) : (
            <StyledInstruction big>Click and breathe</StyledInstruction>
          )}
        </StyledButton>
      )}
    </>
  );
}
