import { StyledVolumeControl } from "../../styles/StyledVolumeControl";
import { StyledMusicButton } from "../../styles/StyledMusicButton";
import useAudio from "../useAudio";
import { StyledMusicIcons } from "../../styles/StyledMusicIcons";
import { StyledMusicControls } from "../../styles/StyledMusicControls";

export default function MusicControl({
  music,
  handleIncreaseMusicVolume,
  handleDecreaseMusicVolume,
  breathIntervalDelay,
}) {
  const { playClick } = useAudio({ breathIntervalDelay });
  return (
    <StyledVolumeControl>
      <StyledMusicButton
        aria-label="Increase music volume"
        onClick={() => {
          handleIncreaseMusicVolume(), playClick();
        }}
        disabled={music.volume >= 1}
      >
        <StyledMusicIcons
          music
          src="/images/music.svg"
          alt="increase music volume"
        />
        <StyledMusicControls>+</StyledMusicControls>
      </StyledMusicButton>
      <StyledMusicButton
        aria-label="Decrease music volume"
        onClick={() => {
          handleDecreaseMusicVolume(), playClick();
        }}
        disabled={music.volume <= 0}
        decrease
      >
        <StyledMusicIcons
          music
          src="/images/music.svg"
          alt="decrease music volume"
        />
        <StyledMusicControls>-</StyledMusicControls>
      </StyledMusicButton>
    </StyledVolumeControl>
  );
}
