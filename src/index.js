import React from 'react';
import reactDOM from 'react-dom';

import App from './App';
import './styles.css';
import {ContextProvider} from './SocketContext';

reactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>  
, document.getElementById('root'));