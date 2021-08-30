import React from 'react';
import styled from 'styled-components';

function Navbar(props) {
  return (
    <StyledNav>
      {props.children}
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  top: 10px;
  left: 10vw;
`;

export default Navbar;
