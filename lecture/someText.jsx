import React,{ useState } from 'react';

const [titleCount, setTitleCount] = useState(true);

const componentDidMount = ()=>{
  if(titleCount){
    document.title = "111111111111";
    setTitleCount(false);
  }else{
    document.title = "222222222222";
    setTitleCount(true);
  }
}