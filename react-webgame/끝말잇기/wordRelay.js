const React = require('react');
const {Component} =React;

class WordRelay extends Component{
    state = {
        word: '첫단어',
        value: '',
        result:'',
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.word[this.state.word.length -1] === this.state.value[0]){
            this.setState((prevState)=>{
                return{
                    word: prevState.word + ' ==> ' + this.state.value,
                    value:'',
                    result:'가능',
                }
            });
            this.input.focus();
        }else {
            this.setState({
                result: '불가능',
                value: '',
            });
            this.input.focus();
        }
    };

    onChangeInput = (e)=>{
        this.setState({value : e.currentTarget.value });
    };

    input;

    onRefInput = (c)=>{
        this.input = c;
    };


    render(){
        return ( 
            <>
            <div>{this.state.word}</div>
            <form onSubmit={this.onSubmitForm}>
            <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
            <button>다음단어</button>
            </form>
            <div>{this.state.result} </div>
            </>
        );
    }
}

module.exports = WordRelay;
