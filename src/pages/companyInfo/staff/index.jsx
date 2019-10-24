import React, { Component } from 'react';
import { withRouter } from 'react-router'
class Staff extends Component {
    constructor(props) {
        super(props);
    }
    handleClick = () => {
        console.log('home-props', this.props)
        this.props.history.push('detail')
        // alert('点击按钮')
    };

    render() {
        return (
            <div>
               {/* 我是公司信息--员工 */}
               我是二--子目录1
               <button onClick={this.handleClick}>点击跳转</button>
            </div>
        )
    }
}

export default withRouter(Staff)