import Link from "next/link";
import CounterSection from "../components/Countersection";

export default function HomePage() {
  return (
    <>
      <Link href={"./focusedbreathing"}>
        <h2>link to focused breathing</h2>
      </Link>
      <Link href={"./powerbreathing"}>
        <h2>link to power breathing</h2>
      </Link>
      <Link href={"./triplebreathing"}>
        <h2>link to 4-7-8 breathing</h2>
      </Link>
    </>
  );
}
