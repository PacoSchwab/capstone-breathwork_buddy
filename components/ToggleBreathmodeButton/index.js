import useStore from "../useStore";
import { StyledToggleButton } from "../../styles/StyledToggleButton";
import { StyledClickToSwitch } from "../../styles/StyledClickToSwitch";
import { StyledSubHeadline } from "../../styles/StyledSubHeadline";

export default function ToggleBreathmodeButton() {
  const isPowerBreathing = useStore((state) => state.isPowerBreathing);
  const switchIsPowerBreathing = useStore(
    (state) => state.switchIsPowerBreathing
  );
  const isBreathActive = useStore((state) => state.isBreathActive);

  return (
    <StyledToggleButton
      onClick={() => {
        switchIsPowerBreathing();
      }}
      disabled={isBreathActive}
    >
      {!isBreathActive && (
        <StyledClickToSwitch>Click to Switch</StyledClickToSwitch>
      )}
      <StyledSubHeadline>
        {isPowerBreathing ? "Power Breathing" : "Focus Breathing"}
      </StyledSubHeadline>
    </StyledToggleButton>
  );
}
