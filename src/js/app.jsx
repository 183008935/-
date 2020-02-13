import Banner from './compoents/banner';
import Header from './compoents/header';
import Footer from './compoents/footer';
// import {Route,BrowserRouter as Router} from 'react-router-dom';
import {Route,HashRouter as Router} from 'react-router-dom';
import Home from '../js/common/home';
import User from '../js/common/user';
import Root from './common/aboutme';
import Index1 from './common/index';
import Favicon from 'react-favicon';

class App extends React.Component {
  constructor(){
    super();
  
  }
  shouldComponentUpdate(){
    return false;
  }
    render() {
      return (
        <Router >
        <div> 
         <Favicon url='../favicon.ico'/>
          <Header />
            <div>  
                <Route exact path='/' component={Banner}/>
                <Route exact path='/' component={Index1}/>
                <Route path="/home" component={Home}/>
                <Route path="/user" component={User}/>
                <Route path="/root" component={Root}/>    
            </div>
          <Footer />
        </div>
        </Router>
      )
    }
  }
  export default App;