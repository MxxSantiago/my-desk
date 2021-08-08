import React from 'react';
import ReactDOM from 'react-dom';
import { MainApp } from './components/MainApp';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
    <MainApp/>,
    document.getElementById('root')
);

serviceWorkerRegistration.register();
