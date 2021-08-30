import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

function BaseSVG(props) {
  const { showCircle, shapeData } = props;
  const themeContext = useContext(ThemeContext);
  return (
    <PatternSVG viewBox="-150 -150 300 300" xmlns="http://www.w3.org/2000/svg">
      <polygon fill="none" stroke={themeContext.firstColor} points={shapeData.outline.join(' ')} />
      {shapeData.dots.map(([x, y]) => <circle key={`${x},${y}`} cx={x} cy={y} r="2"/>)}
      {showCircle && <circle fill="none" stroke={themeContext.fourthColor} cx="0" cy="0" r="150" />}
    </PatternSVG>
  );
}

const PatternSVG = styled.svg`
  /*border: 1px solid black;*/
  width: 300px;
`;

export default BaseSVG;
