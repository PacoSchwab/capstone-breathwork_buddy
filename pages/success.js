import { useRouter } from "next/router";
import { StyledButton } from "../styles/StyledButton";
import { StyledRoundCounter } from "../styles/StyledRoundCounter";
import { useEffect } from "react";
import { useState } from "react";
import useAudio from "../components/useAudio";
import useClearTimer from "../components/useClearTimer";

export default function SuccessPage({ breathIntervalDelay }) {
  const router = useRouter();

  const { playGong } = useAudio({ breathIntervalDelay });
  const [isGongActive, setIsGongActive] = useState(true);

  useClearTimer(
    resetIceBathCount,
    switchIceBathCountIsActive,
    resetIceBathCountdown,
    switchIceBathCountdownIsActive,
    iceBathIntervalId,
    iceBathCountdownIntervalId
  );

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
