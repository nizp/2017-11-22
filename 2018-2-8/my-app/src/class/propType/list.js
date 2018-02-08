import React from 'react';
import PropTypes from 'prop-types';
/*
    prop-types
        检测父级传过来的数据是否为指定类型，只要不是指定类型就会报错。

        组件.propTypes = {
            父级的数据:PropTypes.string,
            父级的数据2:PropTypes.number
            ....
        }

        //一个数据有允许为多个类型。
        组件.propTypes = {
            父级的数据:PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ])
        }


*/
class Btn extends React.Component {
    constructor(props) {
        super(props);
    }
    click = () => {
        let {num,cNum} = this.props;
        cNum(++num);
    }
    render() { 
        let {num} = this.props;
        return (
           <button 
            onClick = {this.click}
            >{num}</button>
        )
    }
}

Btn.propTypes = {
    num:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
    // num:PropTypes.string
}
export default Btn;