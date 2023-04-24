import CounterSection from "../components/Countersection";
import { StyledTitle } from "../styles/StyledTitle";

export default function BreathFlowsPage({ breathIntervalDelay }) {
  return (
    <>
      <header>
        <StyledTitle>Breathwork Buddy</StyledTitle>
      </header>
      <CounterSection breathIntervalDelay={breathIntervalDelay} />
    </>
  );
}
