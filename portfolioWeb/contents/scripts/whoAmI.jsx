const React = require('react');
const { Component } = React;

class WhoAmI extends Component{
  state = {
    buttonText:'click',
    buttonCheck:true,
  };

  handleClick = (e)=>{
    e.preventDefault();
    if(this.state.buttonCheck === true){
      this.setState({
        buttonText:'clicked',
        buttonCheck:false,
      })
    }else{
      this.setState({
        buttonText:'click',
        buttonCheck:true,
      })
    };
    console.log('clicked')
  };
  
  WhoAmI = [{
    text1: 'Hi! I am gentacle.',
    text2: 'do you have something to eat?',
    text3: 'nope?',
    text4: 'XD',
  }]

  render(){
    return(
      <>
      <button onClick={this.handleClick}>{this.state.buttonText}</button>
      <h1>{this.state.text}</h1>
      <div></div>
      </>
    )

  };
}

module.exports = WhoAmI;