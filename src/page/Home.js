import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Home extends Component {
  state = {
    list: [
      { path: '/home', text: '网站首页', id: 1 },
      { path: '/myblog', text: '个人博客', id: 2 },
      { path: '/sheji', text: '设计心得', id: 3 },
      { path: '/shijian', text: '时间轴', id: 4 },
      { path: '/blognav', text: '博客导航', id: 5 },
      { path: '/liuyan', text: '留言', id: 6 }
    ]
  }
  render () {
    return (
      <div id="App">
        <header>
          <div className="navbox">
            <div className="logo">
              <a href="javascript:">康惠军个人博客</a>
            </div>
            <ul className="list">
              {
                this.state.list.map(item => (
                  <li key={item.id}>
                    <Link to={{
                      pathname: item.path
                    }}>
                      {item.text}
                    </Link>
                  </li>
                ))
              }
            </ul>
            <div className="seatch">搜索</div>
          </div>
        </header>
      </div>
    )
  }
}

export default Home
