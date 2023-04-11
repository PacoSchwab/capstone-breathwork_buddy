import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    
    font-family: serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",;
    background-color: #FFE6C7;
    cursor: url('/images/cursor-s.png'), auto;
}
`;
