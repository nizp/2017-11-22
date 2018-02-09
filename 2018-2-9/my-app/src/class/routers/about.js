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
        console.log(this.props);
        let {location:{state:{num}}} = this.props;
        return (
            <div>
                <button>
                    <Link to="/">
                        返回首页{num}
                    </Link>
                </button>
                <div style={{width:'100px',height:'100px',background:'red'}}></div>
            </div>
        )
    }
}
 
export default About;