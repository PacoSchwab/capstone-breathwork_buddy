import { StyledExerciseBackground } from "../../styles/StyledExerciseBackground";
import { StyledExerciseButton } from "../../styles/StyledExerciseButton";
import { StyledExerciseLink } from "../../styles/StyledExerciseLink";
import { StyledExerciseLinkText } from "../../styles/StyledExerciseLinkText";
import { StyledOverviewSection } from "../../styles/StyledOverviewSection";

export default function LandingPage() {
  return (
    <StyledOverviewSection>
      <StyledExerciseLink href="/breathflows">
        <StyledExerciseButton>
          <StyledExerciseBackground
            src="/images/purplesmoke.png"
            alt="Breath Flows"
          />
          <StyledExerciseLinkText>Breath Flows</StyledExerciseLinkText>
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

      <StyledExerciseLink href="/icebathing">
        <StyledExerciseButton>
          <StyledExerciseBackground
            src="/images/purplesmoke.png"
            alt="Ice Bathing"
          />
          <StyledExerciseLinkText>Ice Bathing</StyledExerciseLinkText>
        </StyledExerciseButton>
      </StyledExerciseLink>
    </StyledOverviewSection>
  );
}
