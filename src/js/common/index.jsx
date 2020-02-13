
import Img1 from '../../img/1111.jpg';
import Img2 from '../../img/2222.jpg';
import Img3 from '../../img/3333.jpg';
import Img4 from '../../img/6.jpg';
import Img5 from '../../img/7.jpg';
import Img6 from '../../img/8.jpg';
require('./../../css/index.css');
function Index1(){
            return (
                <div className="idenx-container">
                    <div className="index-wrap">
                       <div className="index-tile">
                           {/* <div className="sub"></div> */}
                            <img src={Img4} alt="背景"/>
                            <div className="index-text">
                                <h1>未来世界的幸存者</h1>
                                <h2 className="index-subtext">作者： 阮一峰</h2>
                                <p className="index-subtext"><a href="http://www.ruanyifeng.com/survivor/">2016年3月，谷歌公司的围棋程序 AlphaGo 战胜了世界冠军李世石。这让我猛然意识到，世界正处在一个前所未有的大变局：机器人、自动化、人工智能正在变得比人类更强大。在可预见的将来，技术最终将.....</a></p>
                            </div>
                       </div>
    
            
                       <div className="index-tile">
                            <img src={Img5} alt="背景"/>
                            <div className="index-text">
                                <h1>前方的路</h1>
                                <h2 className="index-subtext">作者： 阮一峰</h2>
                                <p className="index-subtext"><a href="http://www.ruanyifeng.com/road/">2003年，我有了自己的博客，用来存放读书笔记，一直写到现在。这里收录的是2014年以前的文章，其中的一部分曾经出版过，当时的书名是《如何变得有思想》。2014年以后的文章,收录在另一本文集未来世界....</a></p>
                            </div>
                       </div>
    
    
                       <div className="index-tile">
                            <img src={Img6} alt="背景"/>
                            <div className="index-text">
                                <h1>前端俱乐部</h1>
                                <h2 className="index-subtext">分享前端资讯</h2>
                                <p className="index-subtext"><a href="http://caibaojian.com/c/qianduan">点击了解比较知名的前端开发大神、前端开发微博和前端开发教程网站等，跟随大神的脚步，学习最新的前端开发知识，时刻让自己走在前面！欢迎留言推荐或者自荐。更多好站推荐......</a></p>
                            </div>
                       </div>
                    </div>
                    <hr/>
                    <br/>
                    <div className="index-wrap">
                       <div className="index-tile">
                            <img src={Img1} alt="背景"/>
                            <div className="index-text">
                                <h1>阮一峰</h1>
                                <h2 className="index-subtext">关注：前端</h2>
                                <p className="index-subtext"><a href="http://caibaojian.com/ruanyifeng">阮一峰，70年代生于上海。毕业于上海财经大学，经济学博士，同时也是程序员，个人博客访问量过千万.个人博客为阮一峰的网络日志，目前在阿里任职。点击了解更多....</a></p>
                            </div>
                       </div>
    
    
                       <div className="index-tile">
                            <img src={Img2} alt="背景"/>
                            <div className="index-text">
                                <h1>尤雨溪(尤小右)</h1>
                                <h2 className="index-subtext">关注：前端 Vue</h2>
                                <p className="index-subtext"><a href="http://caibaojian.com/evan-you">尤雨溪是Vue.js的作者，HTML5版Clear的打造人。他认为，未来App的趋势是轻量化和细化，能解决问题的应用就是好应用。而在移动互联网时代大的背景下，个人开发者的机遇在门槛低，点击了解更多.......</a></p>
                            </div>
                       </div>
    
    
                       <div className="index-tile">
                            <img src={Img3} alt="背景"/>
                            <div className="index-text">
                                <h1>前端：React</h1>
                                <h3 className="index-subtext">用于构建用户界面的JavaScript库</h3>
                                <p className="index-subtext"><a href="https://react.docschina.org/">React 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图，在数据改变时 React 也可以高效地更新渲染界面。创建好拥有各自状态的组件，再由组件构成更加复杂的界面。点击了解更多。。。。</a></p>
                            </div>
                       </div>
                    </div>
                    
                </div>
            )
        }
 export default Index1;