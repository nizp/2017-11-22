import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
class Home extends React.Component {
    constructor(props) {
        super(props);
       
    }
    render() { 
        return (
            <div>
               我是首页
            </div>   
        )
    }
}
 
export default Home;