import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return (
            <div className="header-content">
                <div className="name">后台系统react</div>
                <div className="info">
                    <div className="info-item">
                        <p>VIP客服</p>
                        <p>帮助中心</p>
                        <p>消息中心</p>
                    </div>
                </div>
          </div>
        )
    }
}

export default Header