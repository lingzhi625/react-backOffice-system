import React, { Component } from 'react';
import {Button} from 'antd'
import test from '../../../service/api/test'
class Department extends Component {
    constructor(props) {
        super(props);
    }
    handleClick = () => {
        console.log('home-props', this.props)
        return test.test({})
        // this.props.history.push('detail')
        // alert('点击按钮')
    };

    render() {
        return (
            <div>
               {/* 我是公司信息--部门 */}
               我是二--子目录2
               <button onClick={this.handleClick}>点击请求测试</button>
            </div>
        )
    }
}

export default Department