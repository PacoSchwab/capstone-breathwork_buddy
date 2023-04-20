import IceBathCounterSection from "../components/IceBathCounterSection";
import { StyledTitle } from "../styles/StyledTitle";

export default function IceBathPage() {
  return (
    <>
      <header>
        <StyledTitle>Ice Bath Counter</StyledTitle>
      </header>
      <IceBathCounterSection />
    </>
  );
}
