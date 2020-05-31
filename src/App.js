import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="App">
      <header>
        <div className="navbox">
          <div className="logo">
            <a href="">康惠军个人博客</a>
          </div>
          <ul className="list">
            <li>网站首页</li>
            <li>个人博客</li>
            <li>网站制作</li>
            <li>设计心得</li>
            <li>时间轴</li>
            <li>博客导航</li>
            <li>留言</li>
          </ul>
          <div className="seatch">搜索</div>
        </div>
      </header>
      <article>
        <div className="whitebg">
          <div className="whitebg-list">
            <ul>
              <li>个人博客</li>
              <li>CSS3|HTML5</li>
              <li>网站建设</li>
              <li>推荐工具</li>
              <li>设计心得</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}

export default App;
