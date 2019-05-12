import React,{PureComponent} from 'react';

class Test extends PureComponent{
  state={
    counter:0,
    string:'hello',
    number:1,
    boolean:true,
    object:{a:'b',c:'d'},
    array:[4,1,2],
  };

  //or use {PureComponent}
  // shouldComponentUpdate(nextProps, nextState, nextContext){
  //   if(this.state.counter !== nextState.counter){
  //     return true;
  //   }
  //   return false;
  // }


  onClick = ()=>{
    console.log('클릭함');
    this.setState({
      object: {...this.state.object, asd:!(this.state.boolean)},
      boolean: !this.state.boolean,
    });
  };

  //직접삽입 금지. 리액트가 인식을 못함.
  // onClick = ()=>{
  //   console.log('클릭함');
  //   const array = this.state.array;
  //   array.push(1)
  //   this.setState({
  //     array: array,
  //   });
  //   console.log(array)
  // };

  render(){
    console.log('렌더링', this.state);
    return(
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    )
  }
}

export default Test;