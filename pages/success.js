import { useRouter } from "next/router";
import { StyledButton } from "../styles/StyledButton";
import { StyledRoundCounter } from "../styles/StyledRoundCounter";
import { useEffect } from "react";
import { useState } from "react";
import useAudio from "../components/useAudio";
import useStore from "../components/useStore";

export default function SuccessPage({ breathIntervalDelay }) {
  const resetIceBathCountdown = useStore(
    (state) => state.resetIceBathCountdown
  );
  const switchIceBathCountdownIsActive = useStore(
    (state) => state.switchIceBathCountdownIsActive
  );
  const iceBathCountdownIntervalId = useStore(
    (state) => state.iceBathCountdownIntervalId
  );
  const resetIceBathCount = useStore((state) => state.resetIceBathCount);
  const switchIceBathCountIsActive = useStore(
    (state) => state.switchIceBathCountIsActive
  );
  const iceBathIntervalId = useStore((state) => state.iceBathIntervalId);

  const router = useRouter();

  const { playGong } = useAudio({ breathIntervalDelay });
  const [isGongActive, setIsGongActive] = useState(true);

  useEffect(() => {
    if (isGongActive) {
      playGong();
    }
  }, [isGongActive]);

  useEffect(() => {
    setIsGongActive(true);
  }, []);

  return (
    <>
      <header>
        <h1>Flow completed</h1>
      </header>
      <StyledButton
        onClick={() => {
          router.push("/");
        }}
      >
        You are great!
      </StyledButton>
      <StyledRoundCounter>Quote of the day</StyledRoundCounter>
    </>
  );
}
