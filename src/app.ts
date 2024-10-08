// Import React and ReactDOM
import React from 'react';
import { createRoot } from 'react-dom/client';


// Import tailwind styles
import './scss/main.scss';

// Import App Component
import { MyApp } from './components';
import appConfig from '../app-config.json';

if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig;
}

// Mount React App
const root = createRoot(document.getElementById('app')!);
root.render(React.createElement(MyApp));