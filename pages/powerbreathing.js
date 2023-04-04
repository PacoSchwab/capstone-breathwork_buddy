import CounterSection from "../components/Countersection";

export default function FocusedBreathPage({ timerDelay }) {
  return (
    <>
      <header>
        <h1>Power Breathing</h1>
      </header>
      <CounterSection timerDelay="2000" />
    </>
  );
}
