import { StyledButton } from "../components/Counter";
import { useRouter } from "next/router";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <>
      <header>
        <h1>Flow completed</h1>
      </header>
      <StyledButton
        onClick={() => {
          router.push("/");
        }}
      >
        You are great!
      </StyledButton>
    </>
  );
}
