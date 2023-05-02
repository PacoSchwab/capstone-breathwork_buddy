import { StyledVolumeControl } from "../../styles/StyledVolumeControl";
import { StyledMusicButton } from "../../styles/StyledMusicButton";
/* import useAudio from "../useAudio"; */

export default function AudioControl({
  audio,
  handleIncreaseAudioVolume,
  handleDecreaseAudioVolume,
  breathIntervalDelay,
}) {
 /*  const { playClick } = useAudio({ breathIntervalDelay }); */
  return (
    <StyledVolumeControl>
      <StyledMusicButton
        aria-label="Increase voice volume"
        onClick={() => {
          handleIncreaseAudioVolume(), /* playClick(); */
        }}
        disabled={audio.volume >= 1}
      >
        Voice +
      </StyledMusicButton>
      <StyledMusicButton
        aria-label="Decrease voice volume"
        onClick={() => {
          handleDecreaseAudioVolume(), /* playClick(); */
        }}
        disabled={audio.volume <= 0}
        decrease
      >
        Voice -
      </StyledMusicButton>
    </StyledVolumeControl>
  );
}
