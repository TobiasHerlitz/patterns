import React from 'react';
import styled from 'styled-components';
import { SwitchTransition, Transition } from 'react-transition-group';
import { Switch, useLocation } from 'react-router-dom';

function ContentSwitch(props) {
  const location = useLocation();
  return (
    <SwitchTransition>
      <Transition key={location.pathname} timeout={200}>
        {(state) => (
          <StyledContentSwitch state={state}>
            <Switch location={location}>
              {props.children}
            </Switch>
          </StyledContentSwitch>
        )}
      </Transition>
    </SwitchTransition>

  );
}

const transitionStyles = {
  entering: 0,
  entered: 1,
  exiting: 1,
  exited: 0,
};

const StyledContentSwitch = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 200ms ease-in-out;
  opacity: ${(props) => transitionStyles[props.state]}
`;

export default ContentSwitch;
