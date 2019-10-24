import React, {Component} from 'react';
import {Row, Col} from 'antd'
import getRouter from './router/index';
import Header from './pages/common/header'
import SideBar from './pages/common/sideBar'
// import store from "./store";
// import {
//   CHANGE_ROUTER
// } from "./store/actionTypes";
import "antd/dist/antd.css"
import './App.less';
function Content() {
  return (
    getRouter()
  )
}
class App extends Component {
  
  // handleClick = (val) => {
  //   console.log('接受子组件的值', val)
  //   store.dispatch({type: CHANGE_ROUTER, url: val.key})
  // }
  render() {
    return (
      <div className="app">
        {/* <HashRouter history={browserHistory }> */}
        <Row>
          <Col span={4} className="colSideBar">
            <SideBar/>
          </Col>
          <Col span={20}>
            <Row className="colHeader">
              <Col span={22}>
                <Header />
              </Col>
            </Row>
            <Row className="colContent">
              <Col span={23}>
                <Content />
              </Col>
            </Row>
          </Col>
        </Row>
        {/* </HashRouter> */}
      </div>
    )
  }
  
}

export default App;
