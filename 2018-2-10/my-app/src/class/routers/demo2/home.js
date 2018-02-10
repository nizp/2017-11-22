import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num:0
        }
    }
    render() { 
        let {location:{state:{num}}} = this.props.url;
        console.log(this.props.url)
        return (
            <div>
               我是首页{num}
            </div>   
        )
    }
}
 
export default Home;