import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function NavLink(props) {
  const { name, offset, to } = props;
  return (
    <StyledNavLink $offset={offset} to={to}>
      {name}
    </StyledNavLink>
  );
}

const StyledNavLink = styled(Link)`
  /*Position and Display*/
  height: 60px;
  width: 160px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-left: -10px;

  background: ${(props) => props.theme.firstColor};

  /*Font*/
  color: ${(props) => props.theme.thirdColor};
  font-size: large;
  font-weight: bold;
  text-decoration: none;

  ${(props) => (props.$offset ? 'margin-top: 50px' : '')};
  clip-path: polygon(
    0 15px,
    15px 0,
    145px 0,
    100% 15px,
    100% 45px,
    145px 100%,
    15px 100%,
    0 45px
  );
`

export default NavLink;

// Gammal
// const StyledNavLink = styled(Link)`
//   height: 60px;
//   width: 160px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-evenly;
//   background: ${(props) => props.theme.firstColor};
//   color: ${(props) => props.theme.thirdColor};
//   font-size: large;
//   font-weight: bold;
//   background-size: 200% 100%;
//   margin-left: -10px;
//   text-decoration: none;
//   ${(props) => (props.$offset ? 'margin-top: 50px' : '')};
//   transition: background-position 275ms ease;
//   &:hover {
//     background-position: 50% 0;
//   }
//   clip-path: polygon(
//     0 15px,
//     15px 0,
//     145px 0,
//     100% 15px,
//     100% 45px,
//     145px 100%,
//     15px 100%,
//     0 45px
//   );
// `
