import React, { Component } from 'react'
import {Route,HashRouter as Router} from 'react-router-dom';
import Home from '../common/home';
import User from '../common/uesr';
import Root from '../common/root';
export default class Renders extends Component {
    constructor(){
        super();
      }
      shouldComponentUpdate(){
        return false;
      }
    render() {
        return (
            <Router>
                <div className="renders">
                <Route path="/home" component={Home}/>
                <Route path="/user" component={User}/>
                <Route path="/root" component={Root}/>
                </div>
             </Router>
        )
    }
}
