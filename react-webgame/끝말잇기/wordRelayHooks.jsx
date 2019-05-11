const React = require('react');
const {useState, useRef} =React;

const WordRelay = ()=>{
    const [word, setWord] = useState('첫단어');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if ((value.length>1) && (word[word.length -1] === value[0])){
            setWord((prevState)=>{
                return(prevState + ' ==> ' + value)
            });
            setValue('');
            setResult('가능');
            inputRef.current.focus();
        }else {
            setValue('');
            setResult('불가능');
            inputRef.current.focus();
        }
    };

    const onChangeInput = (e)=>{
        setValue(e.currentTarget.value);
    };

    
    return ( 
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
            <input ref={inputRef} value={value} onChange={onChangeInput} />
            <button>다음단어</button>
            </form>
            <div>{result} </div>
        </>
    );   
}

module.exports = WordRelay;