import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import {GlobalColors, GlobalSize} from './styles/settings/index';

ReactDOM.render(
    <Fragment>
        <GlobalColors />
        <GlobalSize />
        <App />
    </Fragment>,
    document.getElementById("root")
);

