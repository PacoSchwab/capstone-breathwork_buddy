import { StyledButton } from "../../styles/StyledButton";
import useStore from "../useStore";
import useLocalStore from "../useLocalStore";
import { useRouter } from "next/router";
import { StyledInstruction } from "../../styles/StyledInstruction";
import { StyledSpan } from "../../styles/StyledSpan";

export default function IceBathButton({ displayTime }) {
  const resetIceBathCount = useStore((state) => state.resetIceBathCount);
  const switchIceBathCountIsActive = useStore(
    (state) => state.switchIceBathCountIsActive
  );
  const iceBathCountIsActive = useStore((state) => state.iceBathCountIsActive);
  const iceBathCount = useStore((state) => state.iceBathCount);
  const router = useRouter();
  const addStoredIceBathTime = useLocalStore(
    (state) => state.addStoredIceBathTime
  );
  const switchIceBathCountdownIsActive = useStore(
    (state) => state.switchIceBathCountdownIsActive
  );
  const iceBathCountdown = useStore((state) => state.iceBathCountdown);
  const iceBathIntervalId = useStore((state) => state.iceBathIntervalId);
  const resetIceBathCountdown = useStore(
    (state) => state.resetIceBathCountdown
  );

  function handleIceBathCounterClick() {
    if (iceBathCountIsActive) {
      resetIceBathCount();
      resetIceBathCountdown();
      addStoredIceBathTime(iceBathCount);
      switchIceBathCountIsActive(false);
      clearInterval(iceBathIntervalId);
      router.push("/success");
    } else {
      switchIceBathCountdownIsActive(true);
    }
  }
  return (
    <>
      <StyledButton iceBath onClick={handleIceBathCounterClick}>
        {iceBathCount === 0 ? (
          <StyledSpan>
            <StyledInstruction>Get in</StyledInstruction> {iceBathCountdown}
          </StyledSpan>
        ) : (
          displayTime
        )}
      </StyledButton>
    </>
  );
}
