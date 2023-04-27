import { StyledVolumeControl } from "../../styles/StyledVolumeControl";
import { StyledMusicButton } from "../../styles/StyledMusicButton";
import useAudio from "../useAudio";

export default function MusicControl({
  music,
  handleIncreaseMusicVolume,
  handleDecreaseMusicVolume,
  breathIntervalDelay,
}) {
  const { playClick } = useAudio({ breathIntervalDelay });
  return (
    <>
      <StyledVolumeControl>
        <StyledMusicButton
          aria-label="Increase music volume"
          onClick={() => {
            handleIncreaseMusicVolume(), playClick();
          }}
          disabled={music.volume >= 1}
        >
          Music +
        </StyledMusicButton>
        <StyledMusicButton
          aria-label="Decrease music volume"
          onClick={() => {
            handleDecreaseMusicVolume(), playClick();
          }}
          disabled={music.volume <= 0}
          decrease
        >
          Music -
        </StyledMusicButton>
      </StyledVolumeControl>
    </>
  );
}
