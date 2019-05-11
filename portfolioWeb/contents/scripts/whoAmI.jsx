const React = require('react');
const { Component } = React;

class WhoAmI extends Component{
  state = {
    title:'PortfolioWeb',
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
  
  Texts = [
    {text: 'Hi! I am gentacle.'},
    {text: 'do you have something to eat?'},
    {text: 'nope?'},
    {text: 'XD'},
  ];

  render(){
    return(
      <>
      <button onClick={this.handleClick}>{this.state.buttonText}</button>
      <h1>{this.state.title}</h1>
      <div>
        {this.Texts.map((v,i)=>{
          return(
            <li key={i}>{v.text}</li>
          )
        })}
      </div>
      </>
    )

  };
}

module.exports = WhoAmI;