require('../../css/header.css');
import {Link} from 'react-router-dom';
import Img1 from '../../img/11.jpg';
class Header extends React.Component{
    constructor(){
        super();
      }
      shouldComponentUpdate(){
        return false;
      }
    render(){
        return(  
            <div className="header">
            <div className="header-title"><img src={Img1} alt=""/> <a href="javascript:;">钟声的个人主页</a></div>  
            <div className="header-nav">
            <div className="header-nav-item"><Link to="/">主页</Link></div>
            <div className="header-nav-item"><Link to="/home">网络日志</Link></div>
            <div className="header-nav-item"><Link to="/user">学无止境</Link></div>
            <div className="header-nav-item"><Link to="/root">关于钟声</Link></div> 
            </div>
            </div>   
        )
    }
  }
  export default Header;