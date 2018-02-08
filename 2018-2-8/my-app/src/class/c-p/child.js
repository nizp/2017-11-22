import React from 'react'
class Child extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            txt:this.props.txt
        }
    }

    click = () => {
        let {cNum,id} = this.props;
        let num = this.state.txt;
        num ++;
        cNum(id,num);
        this.setState({ txt: num});
        
    }
    render() { 
        return ( 
            <li
                onClick = {this.click.bind(this)}
            >{this.state.txt}</li>
        )
    }
}
 
export default Child;