import "../../css/aboutme.css";
function Root() {
  return (
    <div className="about-container">
      <div className="about-detial">
        <h1>关于我</h1>
        <ul>
          <li>一个正在摸爬滚打的野生程序猿, 有着强烈的学习欲望</li>
          <li>普通高校</li>
          <li>
            因心底一直想学习编程相关的，就选择了计算机应用技术专业，从零开始学习计算机
          </li>
          <li>
            现在暂时是那种不懂数据结构、操作系统以及算法的野生程序猿，我会努力弥补这些不足
          </li>
          <li>喜欢看书和实践，喜欢旅游和运动</li>
        </ul>
      </div>
      <hr />
      <div className="about-detial">
        <h1>联系我</h1>
        <ul>
          {/* <li>个人主页：<a target="_blank" rel="noopener noreferrer" href="https://github.com/183008935">https://github.com/183008935</a></li> */}
          <li>
            Github：
            <a target="_blank" href="https://github.com/183008935">
              https://github.com/183008935
            </a>
          </li>
          <li>Email：183008935@qq.com</li>
          <li>微信：15175095975</li>
        </ul>
      </div>
      <hr />
      <div className="about-detial">
        <h1>友情链接</h1>
        <ul>
          <li>
            <a target="_blank" href="https://www.yuque.com/dashboard/docs">
              语雀 - https://www.yuque.com/dashboard/docs
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/183008935">
              gitHub - https://github.com/183008935
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="about-detial">
        <h1>我的简历</h1>
        <ul>
          <li>
            <a target="_blank" href="https://github.com/183008935">
              前端开发工程师
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Root;
