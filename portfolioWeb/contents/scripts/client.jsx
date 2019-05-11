const React = require('react');
const ReactDOM = require('react-dom');
const { hot } = require('react-hot-loader/root');

const WhoAmI =  require('./whoAmI');

const Hot = hot(WhoAmI);

ReactDOM.render(<Hot />, document.querySelector('#root'));
