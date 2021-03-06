import React, { Component } from "react";
import Img4 from "../../img/6.jpg";
import Img6 from "../../img/8.jpg";
import Ietm from "../common/user/content";
import Footer from "../common/user/footer";

require("../../css/user/todo.css");
export default class User extends Component {
  constructor() {
    super();
    this.state = {
      todosData: [],
      inputval: "" //设置控制
      // view:'all'   //显示视图
    };
    this.keyDownPost = this.keyDownPost.bind(this);
    this.onDestroy = this.onDestroy.bind(this);
    this.onClearCompleted = this.onClearCompleted.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.onToggle = this.onToggle.bind(this);
    // this.changeView=this.changeView.bind(this);
    this.itemEditDone = this.itemEditDone.bind(this);
  }
  //修改totosData的方法，设置一个方法;给Item的属性
  itemEditDone(todo, value) {
    let { todosData } = this.state;

    if (todo.value.trim().length === 0) {
      todosData = todosData.filter(elt => {
        return elt.id !== todo.id;
      });
    }

    todosData = todosData.map(elt => {
      //遍历这个数组
      if (todo.id === elt.id) {
        //如果数组的id相同 说明就是编辑的这个todo
        elt.value = value; //todosDate的值就是编辑的值
      }
      return elt; //返回值；
    });
    this.setState({ todosData });
  }

  // changeView(view){
  //   this.setState({view})
  // }
  toggleAll(ev) {
    //是input 改变事件 全选勾
    let { checked } = ev.target; //勾选和未勾选的状态

    let { todosData } = this.state; // 状态;

    todosData = todosData.map(elt => {
      elt.hasCompleted = checked; //全选后checked会变成true 反之false
      return elt;
    });

    this.setState({ todosData }); //更新状态；
  }

  onToggle(todo) {
    //改变的是哪一个todo  识别

    let { todosData } = this.state;

    todosData = todosData.map(elt => {
      //elt 代表每一个todo

      if (elt.id === todo.id) {
        //如果id相等 说明操作的就是这个todo

        elt.hasCompleted = !elt.hasCompleted; //勾选上就是反向的状态
      }
      return elt;
    });
    this.setState({ todosData });
  }
  inputChange(ev) {
    //改变事件,让value受控制
    this.setState({
      inputval: ev.target.value //让input受到控制
    });
  }
  keyDownPost(ev) {
    if (ev.keyCode !== 13) {
      return;
    } //不是回车就退出去是回车就进行

    let { inputval } = this.state; //前后面的空格切掉

    let value = inputval.trim();

    if (value === "") {
      return;
    } //如果值是空的就不让添加

    let todo = {}; //声明一个数据 (添加的动作)，是一个对象。

    todo.id = new Date().getTime(); //给一个ID说明其身份

    todo.value = value; // 他的内容

    todo.hasCompleted = false; //他的初始状态是未完成的。

    let { todosData } = this.state; //把他的状态拿出来

    todosData.push(todo); //新添加的对象todo添加到数组里

    this.setState({
      todosData,
      inputval: ""
    }); // 更新状态

    ev.target.value = ""; //回车后清空
  }
  onDestroy(todo) {
    //删除的是那一个参数 设置一个todo

    let { todosData } = this.state; //先把所有的todo拿出来

    todosData = todosData.filter(elt => {
      //过滤这个todo

      return elt.id !== todo.id; // id不相匹配删除掉
    });
    this.setState({ todosData }); //更新状态
  }
  onClearCompleted() {
    // 删除
    let { todosData } = this.state; // 拿出所有的todo
    todosData = todosData.filter(elt => {
      //过滤
      return !elt.hasCompleted; //true 的时候删除 ，false的时候保留下来  所以取反
    });
    this.setState({ todosData }); //更新状态
  }

  render() {
    let {
      keyDownPost,
      onDestroy,
      toggleAll,
      onToggle,
      itemEditDone,
      onClearCompleted,
      changeView,
      inputChange
    } = this;

    let { todosData, inputval, view } = this.state;

    let {
      location: { pathname }
    } = this.props;

    let items = null,
      footer = null,
      itemsBox = null;

    let leftCount = todosData.length; //数组的长度;

    items = todosData.filter(elt => {
      if (elt.hasCompleted) leftCount--;
      switch (pathname) {
        case "/user/active":
          return !elt.hasCompleted;
        case "/user/completed":
          return elt.hasCompleted;
        default:
          return true;
      }
    });

    items = items.map((elt, i) => {
      //改变这个数组

      return (
        <Ietm
          {
            //接收一些props
            ...{
              onDestroy, //每个todo都有小xx
              todo: elt, // 内容
              onToggle, //事件绑定
              itemEditDone
            }
          }
          key={i}
        />
      );
    });

    if (todosData.length) {
      //如果数组的长度
      itemsBox = (
        <section className="main">
          <input
            type="checkbox"
            className="toggle-all"
            checked={leftCount === 0}
            onChange={toggleAll}
          />
          <ul className="todo-list">{items}</ul>
        </section>
      );
      footer = (
        <Footer
          {...{
            leftCount,
            showClearBtton: leftCount < todosData.length,
            onClearCompleted,
            //  changeView,
            //  view
            pathname
          }}
          //footer 组件的 this.props
        />
      );
    }
    return (
      <div className="user-container">
        <div className="user-wrap">
          <div className="user-tile">
            {/* <div className="sub"></div> */}
            <img src={Img4} alt="背景" />
            <div className="user-text">
              <h2>请编辑您的待办事项！！</h2>
              <p className="user-subtext">
                ToDoList 帮你把要做的事情列出来，一项一项，类似思维导图。
                最明显的好处是强迫自己整理出任务的每个部分，理顺后按部就班的完成，提高效率。当然了习惯是需要慢慢养成了，
              </p>
            </div>
          </div>

          <div className="todoapp">
            <header className="header1">
              <h1>待办事项</h1>
              <input
                type="text"
                className="new-todo"
                placeholder="吃饭 睡觉 打豆豆 "
                value={inputval} //受控制
                onChange={inputChange}
                onKeyDown={keyDownPost}
              />
            </header>
            {itemsBox}
            {footer}
          </div>

          <div className="user-tile">
            <img src={Img6} alt="背景" />
            <div className="user-text">
              <h2>请编辑您的待办事项！！</h2>
              <p className="user-subtext">
                ToDoList 帮你把要做的事情列出来，一项一项，类似思维导图。
                最明显的好处是强迫自己整理出任务的每个部分，理顺后按部就班的完成，提高效率。当然了习惯是需要慢慢养成了，
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
