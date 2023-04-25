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

  return (
    <StyledFabWrapper>
      <StyledFabButton onClick={() => switchIsMenuOpen()}>
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
              />
            </StyledFabLi>
          </Link>
        </StyledFabUl>
      )}
    </StyledFabWrapper>
  );
}
