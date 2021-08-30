import React from 'react';
import styled from 'styled-components';

// Components
import sprites from '../../styles/sprites.svg';


function Home(props) {
  return (
    <StyledHome>
      <SVGKnot $gridLoc={[2, 1]}><use href={`${sprites}#flower`} /></SVGKnot>
      <SVGKnot $gridLoc={[2, 2]}><use href={`${sprites}#hexagon`} /></SVGKnot>
      <SVGKnot $gridLoc={[2, 3]}><use href={`${sprites}#eightPointStar`} /></SVGKnot>
      <TextBox $gridLoc={[1, 1]} $rightAlign>
        <h2>Islamiska mönster</h2>
        <p>Islamisk konst undviker ofta avbilningar av personer för att hindra avgudadyrkan/idolatri. Till följd av detta har en matematiskt präglad konst vuxit fram där man smyckat byggnader med komplexa geometriska mönster.</p>
      </TextBox>
      <TextBox $gridLoc={[3, 2]}>
        <h2>Hankin</h2>
        <p>Ernest Hanbury Hankin var en engelsk bakteriolog (och typ diverseforskare) som fattade tycke för konstformen under hans tid i indien. Under tidigt 1900-tal publicerar han "The drawing of Geometric Patterns in Saracenic art" där han beskriver ett tillvägagångssätt för att skapa mönstren.</p>
      </TextBox>
      <TextBox $gridLoc={[1, 3]} $rightAlign>
        <h2>Kaplan</h2>
        <p>Lite mindre än 100 år senare skriver datavetaren Craig S. Kaplan ett antal artiklar om datorskapade geometriska mönster. 2005 publiceras kioskvältaren "Islamic star patterns from polygons in contact" där han mer algoritmiskt använder Hankins tillvägagångssätt för att bygga islamiska mönster.</p>
      </TextBox>
    </StyledHome>
  )
}

const StyledHome = styled.div`
  /*background: #FF456250;*/
  width: 90%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 200px 1fr;
  grid-template-rows: repeat(3, 1fr);
  /*border: 1px solid black;*/
  grid-gap: 20px;
  /*align-items: center;*/
`;

const SVGKnot = styled.svg`
  /*border: 1px solid black;*/
  width: 200px;
  fill: ${(props) => props.theme.firstColor};
  grid-column: ${(props) => props.$gridLoc[0]};
  grid-row: ${(props) => props.$gridLoc[1]};
`;

const TextBox = styled.div`
  ${(props) => props.$rightAlign && 'text-align: right;'}
  /*border: 1px solid black;*/
  grid-column: ${(props) => props.$gridLoc[0]};
  grid-row: ${(props) => props.$gridLoc[1]};
`

export default Home;