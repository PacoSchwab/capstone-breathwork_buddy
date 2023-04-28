import { StyledAboutContainer } from "../../styles/StyledAboutContainer";
import { StyledInfoHeadline } from "../../styles/StyledInfoHeadline";
import { StyledInfoText } from "../../styles/StyledInfoText";
import Image from "next/image";
import Link from "next/link";

export default function AboutMeSection() {
  return (
    <>
      <section>
        <StyledInfoHeadline>Developed by Paco Schwab</StyledInfoHeadline>
        <StyledInfoText>
          {" "}
          Do you like my app? Virtually buy me a cup of tea. Thank you!
        </StyledInfoText>
        <StyledAboutContainer>
          <Link
            href="https://paypal.me/pacoschwab?country.x=DE&locale.x=de_DE"
            target="_blank"
          >
            <Image
              src="/images/tea.png"
              height={35}
              width={35}
              alt="tea logo"
            />
          </Link>
          <Link href="https://github.com/PacoSchwab" target="_blank">
            <Image
              src="/images/github.svg"
              height={35}
              width={35}
              alt="github logo"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/paco-schwab-9603a3268/"
            target="_blank"
          >
            <Image
              src="/images/linkedin.svg"
              height={35}
              width={35}
              alt="linkedin logo"
            />
          </Link>
          <Link href="https://www.instagram.com/paco_schwab/" target="_blank">
            <Image
              src="/images/instagram.svg"
              height={35}
              width={35}
              alt="instagram logo"
            />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=671011502"
            target="_blank"
          >
            <Image
              src="/images/facebook.svg"
              height={35}
              width={35}
              alt="facebook logo"
            />
          </Link>
        </StyledAboutContainer>
      </section>
    </>
  );
}
