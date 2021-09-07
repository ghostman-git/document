import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class PageHeader extends Component {
    goBack = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }

    go = () => {
        // this.props.history.go(-1)
        this.props.history.go(2)
    }

    render() {
        return (
            <div>
                <button onClick={this.goBack}>回退</button>&nbsp;
                <button onClick={this.forward}>前进</button>&nbsp;
                <button onClick={this.go}>go</button>
            </div>
        )
    }
}

// withRouter让一般组件具备路由组件的API
export default withRouter(PageHeader)
