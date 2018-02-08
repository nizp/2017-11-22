import React,{Component} from 'react';
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cTxt:['从小到大','从大到小']
        }
    }
    click = () => {
        let {id,activeFn,num} = this.props;
        if(id == 0){
            num = num?0:1;
        }
       
        activeFn(id,num);
       
    }
    render() { 
        let {txt,id,active,num} = this.props;
        let {cTxt} = this.state;

        console.log(num)
        if(id == 0){
            txt = cTxt[num]
        }

        return ( 
            <span 
                className={id==active?'active':''}
                onClick={this.click}
            >{txt}</span> 
        )
    }
}
export default Nav;