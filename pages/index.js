import { StyledExerciseBackground } from "../styles/StyledExerciseBackground";
import { StyledExerciseButton } from "../styles/StyledExerciseButton";
import { StyledExerciseLinkText } from "../styles/StyledExerciseLinkText";
import { StyledOverviewSection } from "../styles/StyledOverviewSection";
import { StyledExerciseLink } from "../styles/StyledExerciseLink";

export default function HomePage() {
  return (
    <>
      <h1>Breathwork Buddy</h1>
      <StyledOverviewSection>
        <StyledExerciseLink href="/focusedbreathing">
          <StyledExerciseButton>
            <StyledExerciseBackground
              src="/purplesmoke.png"
              alt="Focused Breathing"
            />
            <StyledExerciseLinkText>Focused Breathing</StyledExerciseLinkText>
          </StyledExerciseButton>
        </StyledExerciseLink>

        <StyledExerciseLink href="/triplebreathing" second>
          <StyledExerciseButton>
            <StyledExerciseBackground
              src="/purplesmoke.png"
              alt="4-7-8 Breathing"
            />
            <StyledExerciseLinkText>4-7-8 Breathing</StyledExerciseLinkText>
          </StyledExerciseButton>
        </StyledExerciseLink>

        <StyledExerciseLink href="/powerbreathing">
          <StyledExerciseButton>
            <StyledExerciseBackground
              src="/purplesmoke.png"
              alt="Power Breathing"
            />
            <StyledExerciseLinkText>Power Breathing</StyledExerciseLinkText>
          </StyledExerciseButton>
        </StyledExerciseLink>
      </StyledOverviewSection>
    </>
  );
}
