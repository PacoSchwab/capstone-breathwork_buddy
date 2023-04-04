import CounterSection from "../components/Countersection";

export default function FocusedBreathPage({ timerDelay }) {
  return (
    <>
      <header>
        <h1>Focused Breathing</h1>
      </header>
      <CounterSection timerDelay="3500" />
    </>
  );
}
