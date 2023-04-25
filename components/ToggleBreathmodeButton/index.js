import useStore from "../useStore";
import { StyledToggleButton } from "../../styles/StyledToggleButton";
import { StyledClickToSwitch } from "../../styles/StyledClickToSwitch";

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
      {isPowerBreathing ? "Power Breathing" : "Focused Breathing"}
    </StyledToggleButton>
  );
}