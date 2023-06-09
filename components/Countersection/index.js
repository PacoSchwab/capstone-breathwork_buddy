import Counter from "../Counter";
import useStore from "../useStore";

export default function CounterSection() {
  const isPowerBreathing = useStore((state) => state.isPowerBreathing);

  return (
    <>
      <Counter breathIntervalDelay={isPowerBreathing ? "2000" : "3500"} />
    </>
  );
}
