import { StyledVolumeControl } from "../../styles/StyledVolumeControl";
import { StyledMusicButton } from "../../styles/StyledMusicButton";

export default function AudioControl({
  audio,
  handleIncreaseAudioVolume,
  handleDecreaseAudioVolume,
}) {
  return (
    <>
      <StyledVolumeControl>
        <StyledMusicButton
          onClick={handleIncreaseAudioVolume}
          disabled={audio.volume >= 1}
        >
          Voice +
        </StyledMusicButton>
        <StyledMusicButton
          onClick={handleDecreaseAudioVolume}
          disabled={audio.volume <= 0}
          decrease
        >
          Voice -
        </StyledMusicButton>
      </StyledVolumeControl>
    </>
  );
}
