import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

function BaseSVG(props) {
  const { showCircle, shapeData } = props;
  const themeContext = useContext(ThemeContext);
  return (
    <PatternSVG viewBox="-150 -150 300 300" xmlns="http://www.w3.org/2000/svg">
      {showCircle && <circle fill="none" stroke={themeContext.fourthColor} cx="0" cy="0" r="150"/>}
      <polygon fill="none" stroke={themeContext.firstColor} points={shapeData.outline.join(' ')} />
      {shapeData.dots.map(([x, y]) => <circle key={`${x},${y}`} cx={x} cy={y} r="2"/>)}
    </PatternSVG>
  )
}

const PatternSVG = styled.svg`
  /*border: 1px solid black;*/
  width: 300px;
`

export default BaseSVG;













// const coords = {
//   hexagon: {
//     outer: [[-150, 0], [-75, 129.9], [75, 129.9], [150, 0], [75, -129.9], [-75, -129.9]],
//     lineOrigins: [[-112.5, -65], [0, -129.9], [112.5, -65], [112.5, 65], [0, 129.9], [-112.5, 65]],
//   },
//   octagon: {
//     outer: [[-150, 0], [-105, -105], [0, -150], [150, 0], [0, 150]],
//     lineOrigins: null
//   }
// };