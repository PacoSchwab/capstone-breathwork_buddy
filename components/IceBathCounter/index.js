import useStore from "../useStore";
import useLocalStore from "../useLocalStore";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useAudio from "../useAudio";
import useClearTimer from "../useClearTimer";
import { StyledCounterSection } from "../../styles/StyledCounterSection";
import IceBathButton from "../IceBathButton";
import useTimeFormatter from "../useTimeFormatter";
import { StyledRoundContainer } from "../../styles/StyledRoundContainer";
import { StyledSubHeadline } from "../../styles/StyledSubHeadline";
import { StyledCountdownButton } from "../../styles/StyledCountdownButton";
import { StyledVolumeControl } from "../../styles/StyledVolumeControl";
import { StyledMusicIcons } from "../../styles/StyledMusicIcons";
import { StyledMusicControls } from "../../styles/StyledMusicControls";

export default function IceBathCounter({ breathIntervalDelay }) {
  const iceBathCount = useStore((state) => state.iceBathCount);
  const increaseIceBathCount = useStore((state) => state.increaseIceBathCount);
  const addStoredIceBathTime = useLocalStore(
    (state) => state.addStoredIceBathTime
  );
  const resetIceBathCount = useStore((state) => state.resetIceBathCount);
  const iceBathCountIsActive = useStore((state) => state.iceBathCountIsActive);
  const switchIceBathCountIsActive = useStore(
    (state) => state.switchIceBathCountIsActive
  );
  const iceBathIntervalId = useStore((state) => state.iceBathIntervalId);
  const addIceBathIntervalId = useStore((state) => state.addIceBathIntervalId);
  const { playGong } = useAudio({ breathIntervalDelay });
  const router = useRouter();
  const { displayTime } = useTimeFormatter(iceBathCount);
  const iceBathCountdown = useStore((state) => state.iceBathCountdown);
  const iceBathCountdownIsActive = useStore(
    (state) => state.iceBathCountdownIsActive
  );
  const addIceBathCountdownIntervalId = useStore(
    (state) => state.addIceBathCountdownIntervalId
  );
  const iceBathCountdownIntervalId = useStore(
    (state) => state.iceBathCountdownIntervalId
  );
  const decreaseIceBathCountdown = useStore(
    (state) => state.decreaseIceBathCountdown
  );
  const switchIceBathCountdownIsActive = useStore(
    (state) => state.switchIceBathCountdownIsActive
  );
  const resetIceBathCountdown = useStore(
    (state) => state.resetIceBathCountdown
  );

  useClearTimer(
    resetIceBathCount,
    switchIceBathCountIsActive,
    resetIceBathCountdown,
    switchIceBathCountdownIsActive,
    iceBathIntervalId,
    iceBathCountdownIntervalId
  );

  useEffect(() => {
    let iceBathInterval;
    let iceBathCountdownInterval;
    if (iceBathCountdownIsActive) {
      iceBathInterval = setInterval(() => {
        if (iceBathCountdown === 0) {
          switchIceBathCountdownIsActive(false);
          switchIceBathCountIsActive(true);
          playGong();

          const iceBathInterval = setInterval(() => {
            increaseIceBathCount();
          }, 1000);

          addIceBathIntervalId(iceBathInterval);
        } else {
          return decreaseIceBathCountdown();
        }
      }, 1000);
      addIceBathCountdownIntervalId(iceBathCountdownInterval);

      return () => {
        clearInterval(iceBathCountdownInterval);
        clearInterval(iceBathInterval);
      };
    }
  }, [
    iceBathCountIsActive,
    iceBathCountdownIsActive,
    iceBathCountdown,
    iceBathCount,
  ]);

  return (
    <>
      <StyledCounterSection>
        <IceBathButton
          playGong={playGong}
          displayTime={displayTime}
          addStoredIceBathTime={addStoredIceBathTime}
          iceBathCountIsActive={iceBathCountIsActive}
          switchIceBathCountIsActive={switchIceBathCountIsActive}
          router={router}
        />
      </StyledCounterSection>
      <StyledRoundContainer iceBathing>
        <StyledSubHeadline>Ice Bathing</StyledSubHeadline>
        <StyledVolumeControl>
        <StyledCountdownButton
       /*  aria-label="Increase music volume"
        onClick={() => {
          handleIncreaseMusicVolume(), playClick();
        }}
        disabled={music.volume >= 1} */
      >
        <StyledMusicIcons
         
          src="/images/countdownicon.svg"
          alt="increase music volume"
        />
        <StyledMusicControls>+</StyledMusicControls>
      </StyledCountdownButton>
      <StyledCountdownButton
    /*     aria-label="Decrease music volume"
        onClick={() => {
          handleDecreaseMusicVolume(), playClick();
        }}
        disabled={music.volume <= 0}
        decrease */
      >
        <StyledMusicIcons
          
          src="/images/countdownicon.svg"
          alt="decrease music volume"
        />
        <StyledMusicControls>-</StyledMusicControls>
        </StyledCountdownButton>
</StyledVolumeControl>
      </StyledRoundContainer>
    </>
  );
}
