import React, { Component } from 'react';
import { connect } from "react-redux";
import store from "../../store";
import history from '../../store/history';
// import {browserHistory } from 'react-router';
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import { Menu, Icon } from 'antd';

import './common.less'

const { SubMenu } = Menu;

class SideBar extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }
    selected = (obj) => {
        console.log('当前选中项', history)
        history.push(obj.key)
    }

    render() {
        return (
        <div className="sideBar">
            <div className="logo">
                <img src={require('../../assets/img/laba.jpg')} alt=""/>
                {/* <img src={require('../../assets/img/logo.png')} alt=""/> */}
            </div>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['2']}
                mode="inline"
                theme="dark"
                subMenuOpenDelay={'1'}
                inlineCollapsed={this.state.collapsed}
                onSelect={this.selected}
            >
                <Menu.Item key="/home">
                    <Icon type="pie-chart" />
                    <span>主目录一</span>
                </Menu.Item>
                <SubMenu
                    key="2"
                    title={
                    <span>
                        <Icon type="mail" />
                        <span>主目录二</span>
                    </span>
                    }
                >
                    <Menu.Item key="/test1">子目录1</Menu.Item>
                    <Menu.Item key="/test2">子目录2</Menu.Item>
                    <Menu.Item key="/test3">子目录3</Menu.Item>
                    <Menu.Item key="/test4">子目录4</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="3"
                    title={
                    <span>
                        <Icon type="mail" />
                        <span>主目录三</span>
                    </span>
                    }
                >
                    <Menu.Item key="3-1">子目录1</Menu.Item>
                    <Menu.Item key="3-2">子目录2</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('side-state', state)
    return {
      url: state.url,
      loading: state.loading
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
    //    handleClick: (obj, history) => dispatch({ type:  })
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideBar);
// export default SideBar