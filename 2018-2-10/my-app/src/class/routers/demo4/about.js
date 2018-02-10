import React from 'react';
import {
    Link
  } from 'react-router-dom';
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    logout = () => {
        let {url:{history}} = this.props;
        this.props.logout(history);
    }

    render() { 
        let {match} = this.props.url;
        let cName = match?'active':'';
        return (
            <div id="box">
                 <h2>
                    欢迎你来到私有文件!
                </h2>   
                <button>
                    <Link to="/">
                        返回首页
                    </Link>
                </button>
                <button
                    onClick={this.logout}
                >
                    退出登录
                </button>
                <div className={cName}></div>
            </div>
        )
    }
}
 
export default About;