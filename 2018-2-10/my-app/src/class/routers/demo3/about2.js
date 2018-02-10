import React from 'react';
import {
    Link
  } from 'react-router-dom';
class About2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        let {match} = this.props.url;
        let cName = '';
        return (
            <div id="box">
                <button>
                    <Link to="/">
                        about2的返回首页
                    </Link>
                </button>
                <div className={cName}></div>
            </div>
        )
    }
}
 
export default About2;