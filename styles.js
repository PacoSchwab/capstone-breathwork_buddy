import { createGlobalStyle } from "styled-components";
import localFont from "@next/font/local";

const alkatra = localFont({
  src: "public/fonts/Alkatra-VariableFont_wght.ttf",
});

const dancingScript = localFont({
  src: "public/fonts/DancingScript-VariableFont_wght.ttf",
});

export default createGlobalStyle`
:root {
  --alkatra-family: ${alkatra.style.fontFamily}, serif;
--dancingScript-family: ${dancingScript.style.fontFamily}, serif;

--font-headline1: bold 2rem var(--alkatra-family);
--font-headline2: bold 1.5rem var(--alkatra-family);
--font-tracking: bold 0.8rem var(--alkatra-family);
--font-info-text: normal 1rem var(--alkatra-family);

--font-body1: bold 2rem var(--dancingScript-family);
--font-body2: bold 1.5rem var(--dancingScript-family);
}


  *,
  *::before,
  *::after {
    box-sizing: border-box;

  }
  body {
    margin: 0;
    
    font-family: 'Alkatra', serif;
    background-color: #FFE6C7;
    cursor: url('/images/cursor-s.png'), auto;

    

}
`;
