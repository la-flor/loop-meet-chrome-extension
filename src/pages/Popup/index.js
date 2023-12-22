import React from 'react';
import { createRoot } from 'react-dom/client';
import Popup from './Popup';
import './index.css';
var container = document.getElementById('app-container');
var root = createRoot(container);
root.render(React.createElement(Popup, null));
