import React, { PureComponent } from 'react'

export default class Parent extends PureComponent {

    state = {
        name: 'Component'
    }

    handleClick = () => {
        // this.setState({})
        this.setState({name: 'PureComponent'})
    }

    render() {
        console.log('parent-render...')
        const { name } = this.state
        return (
            <div>
                <p>{name}</p>
                <button onClick={this.handleClick}>更改</button>
                <Child name={name} />
            </div>
        )
    }
}

class Child extends PureComponent {
    render() {
        console.log('child-render...')
        return (
            <div>
                <p>Child组件</p>
            </div>
        )
    }
}
