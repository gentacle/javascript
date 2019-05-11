import React,{Component} from 'react';
import Try from './Try'


function getNumbers(){//별개의 숫자 4개 출력
  const candidate = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for(let i = 0;i<4;i +=1){
    const chosen = candidate.splice(Math.floor(Math.random() * (9-i)), 1)[0];
    array.push(chosen);
  }
  return array;

};

class NumberBaseball extends Component{
  state={
    result: '',
    value: '',
    answer: getNumbers(),
    tries:[],
  };
  
  onSubmitForm = (e)=>{
    e.preventDefault();
    if(this.state.value === this.state.answer.join('')){

    }


    
  };

  onChangeInput = (e)=>{
    console.log(this)
    this.setState({
      value: e.target.value,
    });
  };

  fruits = [
    {fruit:"사과",taste:"맛있다"},
    {fruit:"바나나",taste:"맛있다"},
    {fruit:"오렌지",taste:"맛있다"},
    {fruit:"감",taste:"맛있다"},
    {fruit:"사과",taste:"맛있다"},
  ];


  render(){
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