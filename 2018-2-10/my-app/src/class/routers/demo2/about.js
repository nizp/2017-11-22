import React from 'react';
import {
    Link
  } from 'react-router-dom';
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        let {location:{state:{num}},match} = this.props.url;
        let cName = match?'active':'';
        return (
            <div id="box">
                <button>
                    <Link to="/">
                        返回首页
                    </Link>
                </button>
                <div className={cName}></div>
            </div>
        )
    }
}
 
export default About;