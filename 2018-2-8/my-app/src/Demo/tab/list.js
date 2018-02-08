import React,{Component} from 'react';
class List extends Component {
    constructor(){
        super();
    }
    down = () => {
        let {changeCheck,id,stion} = this.props;
        changeCheck(stion,id);
    }
    render(){
        let {txt,check} = this.props;

        let cName = check?'item-li active':'item-li';
        return (
            <li 
                className={cName}
                onMouseDown = {this.down}
            >
                <a href="javascript:;">
                    <span className="point"></span>
                    <span className="text">{txt}</span>
                </a>
            </li>
        )
    }
}
export default List;
