import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './app/containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title="Awesome Title" />, document.getElementById('root'));
registerServiceWorker();
