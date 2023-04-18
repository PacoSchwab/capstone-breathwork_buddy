import CounterSection from "../components/Countersection";
import { StyledTitle } from "../styles/StyledTitle";

export default function FocusedBreathPage({ breathIntervalDelay }) {
  return (
    <>
      <header>
        <StyledTitle>Focused Breathing</StyledTitle>
      </header>
      <CounterSection breathIntervalDelay="3500" />
    </>
  );
}
