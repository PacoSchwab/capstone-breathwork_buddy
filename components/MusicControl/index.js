import { StyledVolumeControl } from "../../styles/StyledVolumeControl";
import { StyledMusicButton } from "../../styles/StyledMusicButton";

export default function MusicControl({
  music,
  handleIncreaseMusicVolume,
  handleDecreaseMusicVolume,
}) {
  return (
    <>
      <StyledVolumeControl>
        <StyledMusicButton
          onClick={handleIncreaseMusicVolume}
          disabled={music.volume >= 1}
        >
          Music +
        </StyledMusicButton>
        <StyledMusicButton
          onClick={handleDecreaseMusicVolume}
          disabled={music.volume <= 0}
          decrease
        >
          Music -
        </StyledMusicButton>
      </StyledVolumeControl>
    </>
  );
}
