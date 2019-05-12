const React = require('react');
const { Component } = React;

class WhoAmI extends Component{
  state = {
    title:'PortfolioWeb',
    buttonText:'click',
    buttonCheck:true,
    todos:[],
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
    {text: 'The main language is java and reactJS.'},
    {text: 'It\'s so cool that it works as it was created.'},
    {text: 'Being a full stack developer. Please support me!'},
  ];

  render(){
    return(
      <>
      <div className="whoami">

      <h1>{this.state.title}</h1>
      <div>
        {this.Texts.map((v,i)=>{
          return(
            <li key={i}>{v.text}</li>
          )
        })}
      </div>
      <button onClick={this.handleClick}>{this.state.buttonText}</button>
      </div>
      </>
    )

  };
}

module.exports = WhoAmI;