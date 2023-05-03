import styled from "styled-components";

export const StyledMusicIcons = styled.img`
  padding-left: 6%;
  padding-right: 0;
  margin-right: 0;
  width: ${({ music }) => (music ? "30px" : "35px")};
  height: ${({ music }) => (music ? "30px" : "35px")};
`;
