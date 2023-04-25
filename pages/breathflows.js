import CounterSection from "../components/Countersection";
import { StyledHeader } from "../styles/StyledHeader";

export default function BreathFlowsPage({ breathIntervalDelay }) {
  return (
    <>
      <CounterSection breathIntervalDelay={breathIntervalDelay} />
    </>
  );
}
