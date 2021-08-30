import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

function Showcase(props) {
  const { outline } = props;
  const themeContext = useContext(ThemeContext);

  return (
    <StyledShowcase>
      <TesselateSVG viewBox="0 0 600 600">
        <defs>
          <pattern
            id="myPattern"
            viewBox="-150 -150 300 300"
            width="10%"
            height="10%"
            fill="none"
            stroke={themeContext.firstColor}
            strokeWidth="10"
          >
            <polygon points={outline} />
          </pattern>
        </defs>
        <circle cx="300" cy="300" r="300" fill="url(#myPattern)" stroke={themeContext.firstColor} />
      </TesselateSVG>
    </StyledShowcase>
  );
}

const StyledShowcase = styled.div`
  border-top: 2px dotted ${(props) => props.theme.firstColor};
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TesselateSVG = styled.svg`
  width: 400px;
  /*border: 1px solid black;*/
`;

export default Showcase;
