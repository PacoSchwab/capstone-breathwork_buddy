import { StyledExerciseBackground } from "../styles/StyledExerciseBackground";
import { StyledExerciseButton } from "../styles/StyledExerciseButton";
import { StyledExerciseLinkText } from "../styles/StyledExerciseLinkText";
import { StyledOverviewSection } from "../styles/StyledOverviewSection";
import { StyledExerciseLink } from "../styles/StyledExerciseLink";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Breathwork Buddy</h1>
      <StyledOverviewSection>
        <StyledExerciseLink href="/focusedbreathing">
          <StyledExerciseButton>
            <StyledExerciseBackground
              src="/images/purplesmoke.png"
              alt="Focused Breathing"
            />
            <StyledExerciseLinkText>Focused Breathing</StyledExerciseLinkText>
          </StyledExerciseButton>
        </StyledExerciseLink>

        <StyledExerciseLink href="/triplebreathing" second>
          <StyledExerciseButton>
            <StyledExerciseBackground
              src="/images/purplesmoke.png"
              alt="4-7-8 Breathing"
            />
            <StyledExerciseLinkText>4-7-8 Breathing</StyledExerciseLinkText>
          </StyledExerciseButton>
        </StyledExerciseLink>

        <StyledExerciseLink href="/powerbreathing">
          <StyledExerciseButton>
            <StyledExerciseBackground
              src="/images/purplesmoke.png"
              alt="Power Breathing"
            />
            <StyledExerciseLinkText>Power Breathing</StyledExerciseLinkText>
          </StyledExerciseButton>
        </StyledExerciseLink>
      </StyledOverviewSection>
      <Link href="/info" style={{ fontSize: "2rem" }}>
        Infopage
      </Link>
      <Link href="/tracking" style={{ fontSize: "2rem" }}>
        Tracking
      </Link>
      <Link href="/icebath" style={{ fontSize: "2rem" }}>
        Ice Bath Counter
      </Link>
    </>
  );
}
