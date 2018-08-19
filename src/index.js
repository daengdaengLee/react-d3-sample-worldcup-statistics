import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import MainPage from './components/5-pages/main-page';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  ${reset}
  html, body {
    height: 100%;
  }
  #root {
    height: 100%;
  }
`;

ReactDOM.render(<MainPage />, document.getElementById('root'));
registerServiceWorker();
