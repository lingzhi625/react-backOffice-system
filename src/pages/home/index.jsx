import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Button } from 'antd'
import test from '../../service/api/test'
class Home extends Component {
    constructor(props) {
        super(props);
    }
    handleClick = () => {
        console.log('home-props', this.props)
        this.props.history.push('staff')
    };

    render() {
        return (
            <div>
               {/* 我是首页 */}
               我是主目录一
               <button onClick={this.handleClick}>点击跳转</button>
            </div>
        )
    }
}

export default withRouter(Home)