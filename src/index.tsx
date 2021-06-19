import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WrappedApp from './WrappedApp';

import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>,
  document.getElementById('root')
);

