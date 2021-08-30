import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React from 'react';

const theme = {
  firstColor: '#2B4162',  // Indigo dye
  secondColor: '#385F71',  // Deep Space Sparkle
  thirdColor: '#F5F0F6',  // Magnolia
  fourthColor: '#D7B377',  // Burlywood
  fifthColor: '#8F754F',  // French Bistre
  gradientColor: 'linear-gradient(36deg, rgba(172,155,131,0.3113446062018558) 28%, rgba(143,117,79,1) 100%)',
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${theme.thirdColor};
  }

  h2 {
    margin: 0;
    color: ${theme.firstColor};
    font-family: 'Montserrat', sans-serif;
  }

  p {
    margin: 0;
    font-family: 'Hina Mincho', serif;
    color: ${theme.firstColor};
  }

  a {
    font-family: 'Montserrat', sans-serif;
  }

  label {
    font-family: 'Montserrat', sans-serif;
    color: ${theme.firstColor};
  }
`

function StyleWrapper(props) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {props.children}
      </ThemeProvider>
    </>
  )
}

export default StyleWrapper;