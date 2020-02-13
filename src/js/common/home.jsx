import React, { Component } from 'react';
import '../../css/home/home.css';
import Img9 from '../../img/6666.png';
export default class Home extends Component {
    constructor(){
        super();
      }
      shouldComponentUpdate(){
        return false;
      }
    render() {
        return (
           <div className="home-container">
             <img src={Img9} />
           </div>
        )
    }
}
