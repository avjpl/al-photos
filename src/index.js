import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';

const history = createBrowserHistory();
// import * as Sentry from '@sentry/react';

import App from './App';
import ErrorBoundary from './components/ErrorBoundary';

import '../web/css/index.css';

// Sentry.init({ dsn: 'https://53948a656f7845f1b5194a2ae5de2d7f@o414894.ingest.sentry.io/5305168' });

render(
  <Router history={history}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Router>,
  document.getElementById('main')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const App = require('./App').default;

    render(
      <Router history={history}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Router>,
      document.getElementById('main')
    );
  });
}
