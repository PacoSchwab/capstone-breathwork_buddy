import CounterSection from "../components/Countersection";
import { StyledTitle } from "../styles/StyledTitle";

export default function FocusedBreathPage({ breathIntervalDelay }) {
  return (
    <>
      <header>
        <StyledTitle>Breathwork Buddy</StyledTitle>
      </header>
      <CounterSection breathIntervalDelay={breathIntervalDelay} />
    </>
  );
}
