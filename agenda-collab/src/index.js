import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Reset from "./styles/generic";
import Global from "./styles/settings";
import Base from './styles/base';

<<<<<<< HEAD
import {GlobalColors, GlobalSize} from './styles/settings/index';

ReactDOM.render(
    <Fragment>
        <GlobalColors />
        <GlobalSize />
=======
import App from './App';

ReactDOM.render(
    <Fragment>
        <Global.Colors />
        <Global.Size />
        <Reset />
        <Base />
>>>>>>> a82ac93fc5716996bb4c5985ebde21d0e6f796ff
        <App />
    </Fragment>,
    document.getElementById("root")
);

