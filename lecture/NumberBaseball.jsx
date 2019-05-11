import React,{Component} from 'react';
import Try from './Try'


function getNumbers(){
//별개의 숫자 4개 출력

};

class NumberBaseball extends Component{
  state={
    result: '',
    value: '',
    answer: getNumbers(),
    tries:[],
  };
  
  onSubmitForm = ()=>{

  };

  onChangeInput = ()=>{

  };

  fruits = [
    {fruit:"사과",taste:"맛있다"},
    {fruit:"바나나",taste:"맛있다"},
    {fruit:"오렌지",taste:"맛있다"},
    {fruit:"감",taste:"맛있다"},
    {fruit:"사과",taste:"맛있다"},
  ];


  render(){
    console.log(this.fruits)
    return(
      <>
        <h1> {this.state.result} </h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div> 시도:{this.state.tries.length} </div>
        <ul>
          {this.fruits.map((item,index)=>{
            return(
              <Try key={item.fruit + item.taste + index } item={item} index={index} />
            );
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;