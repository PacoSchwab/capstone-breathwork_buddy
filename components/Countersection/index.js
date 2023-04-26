import Counter from "../Counter";
import useStore from "../useStore";

export default function CounterSection() {
  const isPowerBreathing = useStore((state) => state.isPowerBreathing);

  return (
    <>
      <Counter breathIntervalDelay={isPowerBreathing ? "100" : "3500"} />
    </>
  );
}
