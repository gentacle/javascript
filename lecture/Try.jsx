import React,{Component} from 'react';

class Try extends Component{
    render(){
        const key = this.props.key;
        const item = this.props.item;
        const index = this.props.index;
        return(
            <li key={key}>
            <b>{item.fruit}</b> - {item.taste} - {index}
            <div>content1</div>
            <div>content2</div>
            <div>content3</div>
            <div>content5</div>
            </li>
        )
    }

}

export default Try;