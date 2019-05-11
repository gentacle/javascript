const React = require('react');
const { Component } = React;

class WhoAmI extends Component{
  state = {
    text: 'Hi. i am gentacle. :D',
  };

  render(){
    return(
      <h1>{this.state.text} </h1>
    )

  };
}

module.exports = WhoAmI;