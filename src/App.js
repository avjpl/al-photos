// import '@babel/polyfill';
import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { routes } from './routes/syncRoutes';

import Menu from './components/Menu';

const App = () => (
  <Router>
    <>
      <header>
        <nav>
          <Menu>
            <Menu.LogoItem />
            <Menu.TextItem text={'Homes'} />
            <Menu.TextItem text={'Blog'} />
            <Menu.TextItem text={'About'} />
            <Menu.TextItem text={'Contact'} />
            <Menu.HambergerItem />
          </Menu>
        </nav>
      </header>

      <main>
        {renderRoutes(routes)}
      </main>
    </>
  </Router>
);

export default App;
