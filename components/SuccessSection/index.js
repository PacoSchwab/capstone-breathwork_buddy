import { useRouter } from "next/router";
import { StyledButton } from "../../styles/StyledButton";
import { useEffect, useState } from "react";
import useAudio from "../useAudio";
import { StyledInstruction } from "../../styles/StyledInstruction";
import { StyledQuote } from "../../styles/StyledQuote";
import { quotes } from "../../lib/data";

export default function SuccessSection({ breathIntervalDelay }) {
  const router = useRouter();

  const { playGong } = useAudio({ breathIntervalDelay });

  const [randomQuote, setRandomQuote] = useState(null);

  useEffect(() => {
    playGong();
    const filteredQuotes = quotes.filter((quote) => quote.author !== null);
    setRandomQuote(
      filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)]
    );
  }, []);

  return (
    <>
      <StyledInstruction success big>
        flow completed
      </StyledInstruction>
      <StyledButton
        onClick={() => {
          router.push("/");
        }}
      >
        You are great!
      </StyledButton>
      <StyledQuote>
        {`"${randomQuote?.text}"`} <br></br>- {randomQuote?.author}
      </StyledQuote>
    </>
  );
}
