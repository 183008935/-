import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import PT from 'prop-types';
let propTypes={
    leftCount:PT.number,
    showClearBtton:PT.bool,
    onClearCompleted:PT.func,
    // changeView:PT.func,
    // view:PT.oneOf(['all','active','completed'])
}
export default function Footer(props) {
   
        let {leftCount,showClearBtton,onClearCompleted,
            // view,changeView
            pathname
        }=props;

        let clearBtn=null;

        if(showClearBtton){
            clearBtn=(
                <button className="clear-completed" onClick={onClearCompleted}> 
                     删除记录
                  </button>
            )
        }
        return (
            <footer className="footer1">
                  <span className="todo-count">
                     <strong>{leftCount}</strong> <span>条记录</span>
                  </span>
                  <ul className="filters">
                       <li >
                        <Link to="/user" className={pathname==='/user'? 'selected':''}>
                        全部
                        </Link>
                           {/* <a 
                           href="javascript:;"
                           className={view==='all'? 'selected':''}
                           onClick={ev=>changeView('all')}
                           >全部</a> */}
                       </li>
                       <li >
                       <Link to="/user/active" className={pathname==='/user/active'? 'selected':''}>
                        未完成
                        </Link>
                           {/* <a 
                           href="javascript:;"
                           className={view==='active'? 'selected':''}
                           onClick={ev=> changeView('active')}
                           >未完成</a> */}
                       </li>
                       <li >
                       <Link to="/user/completed" className={pathname==='/user/completed'? 'selected':''}>
                        已完成
                        </Link>
                           {/* <a 
                           href="javascript:;"
                           className={view==='completed'? 'selected':''}
                           onClick={ev=> changeView('completed')}
                           >已完成</a> */}
                       </li>
                  </ul> 
                  {clearBtn}            
            </footer>
        )
    }

Footer.propTypes=propTypes;
