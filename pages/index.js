import Link from "next/link";
import CounterSection from "../components/Countersection";

export default function HomePage() {
  return (
    <>
      <Link href={"./focusedbreathing"}>
        <h2>to focused breathing</h2>
      </Link>
    </>
  );
}
