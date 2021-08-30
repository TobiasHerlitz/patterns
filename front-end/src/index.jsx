import React from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Style
import StyleWrapper from './styles/StyleWrapper';

// Components
import Navbar from './components/nav/Navbar';
import NavLink from './components/nav/NavLink';
import ContentSwitch from './components/ContentSwitch';
import Home from './components/routes/Home';
import Editor from './components/routes/editor/Editor';

function Index() {
  return (
    <StyleWrapper>
      <Router>
        <Navbar>
          <NavLink to="/" name="HEM" />
          <NavLink to="/hankinmetoden" offset name="EDITOR" />
        </Navbar>
        <ContentSwitch>
          <Route path="/hankinmetoden" component={Editor} />
          <Route path="/" component={Home} />
        </ContentSwitch>
      </Router>
    </StyleWrapper>
  );
}

reactDOM.render(<Index />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
