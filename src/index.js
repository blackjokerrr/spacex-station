import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import Reload from './components/Reload'

const App = lazy(() => import('./App'))

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback = {<Reload />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
    