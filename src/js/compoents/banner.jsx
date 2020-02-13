require('../../css/banner.css');
import Img1 from '../../img/2.png';

        function Banner(){
            return (
           <div className="banner">
           <div className="banner-me">
           <div className="banner-photo">
           <img src={Img1} alt="头像"/>
           </div>
           <div className="banner-desc">
                 <h1>钟声-田家豪</h1>
                 <p>一个努力努力很努力的年轻人</p>           
           </div> 
           </div>
           </div>
        )
        }
        
 export default  Banner;