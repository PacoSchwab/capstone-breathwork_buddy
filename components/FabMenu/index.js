import { StyledFabWrapper } from "../../styles/StyledFabWrapper";
import { StyledFabButton } from "../../styles/StyledFabButton";
import { StyledFabUl } from "../../styles/StyledFabUl";
import { StyledFabLi } from "../../styles/StyledFabLi";
import { StyledFabImage } from "../../styles/StyledFabImage";
import { StyledPathButton } from "../../styles/StyledPathButton";
import useStore from "../useStore";
import Image from "next/image";
import Link from "next/link";

export default function FabMenu() {
  const isMenuOpen = useStore((state) => state.isMenuOpen);
  const switchIsMenuOpen = useStore((state) => state.switchIsMenuOpen);

  const handleLeadHome = () => {
    window.location.reload();
    window.location.href = "/";
  };

  const handleLeadTracking = () => {
    window.location.reload();
    window.location.href = "/tracking";
  };

  const handleLeadInfo = () => {
    window.location.reload();
    window.location.href = "/info";
  };

  return (
    <StyledFabWrapper>
      <StyledFabButton
        onClick={() => {
          switchIsMenuOpen();
        }}
      >
        <StyledFabImage src="/images/purplesmokePlus.png" alt="menu button" />
      </StyledFabButton>
      {isMenuOpen && (
        <StyledFabUl>
          <Link href="/">
            <StyledFabLi>
              <StyledPathButton
                src="/images/lungs.svg"
                alt="breathing exercises"
                onClick={() => {
                  handleLeadHome();
                }}
              />
            </StyledFabLi>
          </Link>
          <Link href="/tracking">
            <StyledFabLi>
              <StyledPathButton
                src="/images/stopwatch.svg"
                alt="tracking"
                onClick={() => {
                  handleLeadTracking();
                }}
              />
            </StyledFabLi>
          </Link>
          <Link href="/info">
            <StyledFabLi>
              <StyledPathButton
                src="/images/info.svg"
                alt="information"
                onClick={() => {
                  handleLeadInfo();
                }}
              />
            </StyledFabLi>
          </Link>
        </StyledFabUl>
      )}
    </StyledFabWrapper>
  );
}
