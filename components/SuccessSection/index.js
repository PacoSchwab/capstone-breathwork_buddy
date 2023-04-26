import { useRouter } from "next/router";
import { StyledButton } from "../../styles/StyledButton";
import { useEffect, useState } from "react";
import useAudio from "../useAudio";
import { StyledInstruction } from "../../styles/StyledInstruction";
import { StyledQuote } from "../../styles/StyledQuote";
import useSWR from "swr";

export default function SuccessSection({ breathIntervalDelay }) {
  const [displayQuote, setDisplayQuote] = useState([]);
  const fetcher = async (url) => {
    const res = await fetch(url);

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      // Attach extra info to the error object.
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  };
  const { data, error, isLoading } = useSWR(
    "https://type.fit/api/quotes",
    fetcher
  );

  const router = useRouter();

  const { playGong } = useAudio({ breathIntervalDelay });

  useEffect(() => {
    playGong();
  }, []);

  console.log("data", data);

  const randomQuote =
    data && data.length > 0 && data[Math.floor(Math.random() * data.length)];

  useEffect(() => {
    if (randomQuote) {
      setDisplayQuote(randomQuote);
    }
  }, [randomQuote]);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

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
        {randomQuote.text} - {randomQuote.author}
      </StyledQuote>
    </>
  );
}
