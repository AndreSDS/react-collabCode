import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import GlobalColors from './styles/settings/colors';

ReactDOM.render(
    <Fragment>
        <GlobalColors />
        <App />
    </Fragment>,
    document.getElementById("root")
);

