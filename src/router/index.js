//引入react jsx写法的必须
import React from 'react';
//引入需要用到的页面组件
import Home from '../page/Home';
import MyBlog from '../page/MyBlog';
//引入一些模块
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";

function router(){
  return (
    <Router>
      <Route path="/home" component={Home} />
      <Route path="/myblog" component={MyBlog} />
    {/*  重定向  */}
      <Route path="/" render={
        () => (
          <Redirect to="/home" />)}>
      </Route>
    </Router>);
}

export default router;
