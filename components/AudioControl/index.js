import { StyledVolumeControl } from "../../styles/StyledVolumeControl";
import { StyledMusicButton } from "../../styles/StyledMusicButton";
import useAudio from "../useAudio";
import Image from "next/image";
import { StyledMusicControls } from "../../styles/StyledMusicControls";
import { StyledMusicIcons } from "../../styles/StyledMusicIcons";

export default function AudioControl({
  audio,
  handleIncreaseAudioVolume,
  handleDecreaseAudioVolume,
  breathIntervalDelay,
}) {
  const { playClick } = useAudio({ breathIntervalDelay });
  return (
    <StyledVolumeControl>
      <StyledMusicButton
        aria-label="Increase voice volume"
        onClick={() => {
          handleIncreaseAudioVolume(), playClick();
        }}
        disabled={audio.volume >= 1}
      >
        <StyledMusicIcons src="/images/voice.svg" alt="increase voice volume" />{" "}
        <StyledMusicControls>+</StyledMusicControls>
      </StyledMusicButton>
      <StyledMusicButton
        aria-label="Decrease voice volume"
        onClick={() => {
          handleDecreaseAudioVolume(), playClick();
        }}
        disabled={audio.volume <= 0}
        decrease
      >
        <StyledMusicIcons src="/images/voice.svg" alt="decrease voice volume" />
        <StyledMusicControls>-</StyledMusicControls>
      </StyledMusicButton>
    </StyledVolumeControl>
  );
}
