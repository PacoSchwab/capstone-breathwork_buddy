import { StyledFabWrapper } from "../../styles/StyledFabWrapper";
import { StyledFabButton } from "../../styles/StyledFabButton";
import { StyledFabUl } from "../../styles/StyledFabUl";
import { StyledFabLi } from "../../styles/StyledFabLi";
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
        <Image
          src="/images/purplesmokePlus.png"
          height={80}
          width={80}
          alt="menu button"
        />
      </StyledFabButton>
      {isMenuOpen && (
        <StyledFabUl>
          <Link href="/">
            <StyledFabLi>
              <Image
                src="/images/lungs.svg"
                height={45}
                width={45}
                alt="breathing exercises"
                onClick={() => {
                  handleLeadHome();
                }}
              />
            </StyledFabLi>
          </Link>
          <Link href="/tracking">
            <StyledFabLi>
              <Image
                src="/images/stopwatch.svg"
                height={45}
                width={45}
                alt="tracking"
                onClick={() => {
                  handleLeadTracking();
                }}
              />
            </StyledFabLi>
          </Link>
          <Link href="/info">
            <StyledFabLi>
              <Image
                src="/images/info.svg"
                height={45}
                width={45}
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
