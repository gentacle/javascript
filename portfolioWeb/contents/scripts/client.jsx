import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import WhoAmI from './whoAmI';

const Hot = hot(WhoAmI);

ReactDOM.render(<Hot />, document.querySelector('#root'));
