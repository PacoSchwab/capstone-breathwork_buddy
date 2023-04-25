import { useRouter } from "next/router";
import { StyledButton } from "../../styles/StyledButton";
import { StyledRoundCounter } from "../../styles/StyledRoundCounter";
import { useEffect, useState } from "react";
import useAudio from "../useAudio";
import useStore from "../useStore";
import { StyledInstruction } from "../../styles/StyledInstruction";
import { StyledQuote } from "../../styles/StyledQuote";

export default function SuccessSection({ breathIntervalDelay }) {
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
      <StyledInstruction success big>
        flow completed
      </StyledInstruction>
      <StyledButton
        onClick={() => {
          router.push("/");
        }}
      >
        You are great!
      </StyledButton>
      <StyledQuote>Quote of the day</StyledQuote>
    </>
  );
}
