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
    const {result, value, tries, answer} = this.state;
    e.preventDefault();
    if(value === answer.join('')){
      this.setState((prevState)=>{
        return{
          result: `홈런! ${answer.join('')}을 맞췄습니다!`,
          tries:[...prevState.tries, {try: value, result: '홈런!'}],
        }
      });
      alert('홈런!');
      this.setState({
        value: '',
        answer: getNumbers(),
        tries:[],
      });
    }else{ //틀린경우 -> 스트라이크 볼 카운트(10회까지)
      const answerArray = value.split('').map( (v)=>parseInt(v) );
      let strike = 0;
      let ball = 0;
      if(tries.length >=9){ //10번이상 틀림
        this.setState({
          result:`10번 틀려서 실패! 답은 ${answer.join('')}`,
        });
        alert('리겜');
        this.setState({
          value: '',
          answer: getNumbers(),
          tries:[],
        });
        this.inputRef.current.focus();

      }else{
        for(let i = 0; i<4; i += 1){
          if(answerArray[i] === answer[i]){
            strike += 1;
          }else if(answer.includes(answerArray[i])){
            ball +=1;
          }
        }
        this.setState((prevState)=>{
          return{
            tries: [ ...prevState.tries, {try:value, result:`${strike} 스트라이크, ${ball} 볼`}],
            value: '',
          };
        });
        this.inputRef.current.focus();
      }
    }
  };

  onChangeInput = (e)=>{
    this.setState({
      value: e.target.value,
    });
  };


  render(){
    const {result, value, tries} = this.state;
    return(
      <>
        <h1> {result} </h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={value} onChange={this.onChangeInput} />
        </form>
        <div> 시도:{tries.length} </div>
        <ul>
          {tries.map((item,index)=>{
            return(
              <Try key={`${index + 1}차 시도 : `} tryInfo={item} />
            );
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;