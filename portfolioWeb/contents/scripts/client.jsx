const React = require('react');
const ReactDom = require('react-dom');

const WhoAmI =  require('./whoAmI');

ReactDom.render(<WhoAmI />, document.querySelector('#root'));
