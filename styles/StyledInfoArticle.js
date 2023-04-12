import styled from "styled-components";

export const StyledInfoArticle = styled.article`
  overflow: visible;
  color: #454545;
  margin: 0 1rem;
  height: auto;

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 26px;
    box-shadow: 35px 35px 68px 0px rgba(69, 69, 69, 0.5),
      inset -8px -8px 16px 0px rgba(69, 69, 69, 0.6),
      inset 0px 11px 28px 0px rgb(255, 255, 255);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
`;
