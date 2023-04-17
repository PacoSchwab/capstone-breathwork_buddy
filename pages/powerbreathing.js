import CounterSection from "../components/Countersection";

export default function PowerBreathPage({ breathIntervalDelay }) {
  return (
    <>
      <header>
        <h1>Power Breathing</h1>
      </header>
      <CounterSection breathIntervalDelay="2000" />
    </>
  );
}
