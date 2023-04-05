import CounterSection from "../components/Countersection";

export default function FocusedBreathPage({ breathIntervalDelay }) {
  return (
    <>
      <header>
        <h1>Focused Breathing</h1>
      </header>
      <CounterSection breathIntervalDelay="3500" />
    </>
  );
}
