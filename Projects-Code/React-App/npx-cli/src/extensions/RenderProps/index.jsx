import React, { Component } from 'react';

export default class RenderProps extends Component {
    render() {
        return (
            <div style={{ border: '2px solid red', margin: '20px' }}>
                <h2>RenderProps组件</h2>
                <A render={(name) => <B name={name} />} />
            </div>
        )
    }
}

class A extends Component {
    state = {
        name: 'Tom'
    }

    render() {
        const { name } = this.state
        const { render } = this.props

        return (
            <div style={{ border: '2px solid blue', margin: '20px' }}>
                <h2>A组件, name: {name}</h2>
                {render(name)}
            </div>
        )
    }
}

class B extends Component {
    render() {
        const { name } = this.props

        return (
            <div style={{ border: '2px solid orange', margin: '20px' }}>
                <h2>B组件, 从A接收的name：{name}</h2>
            </div>
        )
    }
}
