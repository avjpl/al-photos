import React from 'react';

import { renderRoutes } from 'react-router-config';

import { routes } from './routes/syncRoutes';

const App = () => (
  <main>
    {renderRoutes(routes)}
  </main>
);

export default App;
