import useStore from "../useStore"
import { StyledCountdownButton } from "../../styles/StyledCountdownButton";
import { StyledVolumeControl } from "../../styles/StyledVolumeControl";
import { StyledMusicIcons } from "../../styles/StyledMusicIcons";
import { StyledMusicControls } from "../../styles/StyledMusicControls";

export default function IceBathCountdownSetter() {
const iceBathCountdown = useStore((state) => state.iceBathCountdown);
const increaseIceBathCountdown = useStore((state) => state.increaseIceBathCountdown);
const decreaseIceBathCountdown = useStore((state) => state.decreaseIceBathCountdown);
const iceBathCountIsActive = useStore((state) => state.iceBathCountIsActive);

return (
<>
<StyledVolumeControl>
        <StyledCountdownButton
       aria-label="Increase preparation counter by 1"
       onClick={increaseIceBathCountdown}
       disabled={iceBathCountdown >= 30 || iceBathCountIsActive}
      >
        <StyledMusicIcons
         
          src="/images/countdownicon.svg"
          alt="increase music volume"
        />
        <StyledMusicControls>+</StyledMusicControls>
      </StyledCountdownButton>
      <StyledCountdownButton aria-label="Decrease preparation counter by 1"
      onClick={decreaseIceBathCountdown}
      disabled={iceBathCountdown <= 0}
      >
        <StyledMusicIcons
          src="/images/countdownicon.svg"
          alt="decrease music volume"
        />
        <StyledMusicControls>-</StyledMusicControls>
        </StyledCountdownButton>
</StyledVolumeControl>
    </>
);
}