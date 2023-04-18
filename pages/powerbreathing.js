import CounterSection from "../components/Countersection";
import { StyledTitle } from "../styles/StyledTitle";

export default function PowerBreathPage({ breathIntervalDelay }) {
  return (
    <>
      <header>
        <StyledTitle>Power Breathing</StyledTitle>
      </header>
      <CounterSection breathIntervalDelay="2000" />
    </>
  );
}
