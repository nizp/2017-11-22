import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
class Home2 extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
       console.log(this.props.url);
        return (
            <div>
               {
                   123
               }
            </div>   
        )
    }
}
 
export default Home2;