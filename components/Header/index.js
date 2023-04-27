import { StyledHeader } from "../../styles/StyledHeader";
import { StyledHomeLink } from "../../styles/StyledHomeLink";

export default function Header() {
  return (
    <header>
      <StyledHomeLink href="/">
        <StyledHeader>Breathwork Buddy</StyledHeader>
      </StyledHomeLink>
    </header>
  );
}
