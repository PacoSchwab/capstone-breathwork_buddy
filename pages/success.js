import { useRouter } from "next/router";
import { StyledButton } from "../styles/StyledButton";

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
