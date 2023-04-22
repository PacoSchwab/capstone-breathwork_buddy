import styled from "styled-components";

export const StyledInputField = styled.input`
  padding: 5px;
  font-size: 16px;
  border-width: 1px;
  border-color: #454545;
  background-color: #ffe6c7;
  color: #000000;
  border-style: outset;
  border-radius: 10px;
  font-size: 0.6rem;
  box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
  transition: all 0.2s ease-in-out;
  width: 10%;
  margin: 0.1rem 0.2rem;
  &:hover {
    cursor: url("/images/cursor-blur-s.png"), auto;
  }
`;
