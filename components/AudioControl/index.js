import { StyledVolumeControl } from "../../styles/StyledVolumeControl";
import { StyledMusicButton } from "../../styles/StyledMusicButton";

export default function AudioControl({
  audio,
  handleIncreaseAudioVolume,
  handleDecreaseAudioVolume,
}) {
  return (
    <StyledVolumeControl>
      <StyledMusicButton
        aria-label="Increase voice volume"
        onClick={handleIncreaseAudioVolume}
        disabled={audio.volume >= 1}
      >
        Voice +
      </StyledMusicButton>
      <StyledMusicButton
        aria-label="Decrease voice volume"
        onClick={handleDecreaseAudioVolume}
        disabled={audio.volume <= 0}
        decrease
      >
        Voice -
      </StyledMusicButton>
    </StyledVolumeControl>
  );
}
