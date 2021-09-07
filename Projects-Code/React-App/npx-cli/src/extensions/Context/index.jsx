import React, { Component } from 'react'

const Context = React.createContext()

export default class A extends Component {
    state = {
        name: '小明',
        age: 23
    }

    render() {
        const { name, age } = this.state
        return (
            <div style={{ border: '2px solid blue', margin: '20px' }}>
                <h2>A组件, name: {name}</h2>
                <Context.Provider value={{ name, age }}>
                    <B />
                </Context.Provider>
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div style={{ border: '2px solid green', margin: '20px' }}>
                <h2>B组件</h2>
                <C />
            </div>
        )
    }
}

class C extends Component {
    // 方式一：仅适用于类式组件
    static contextType = Context

    render() {
        const { name, age } = this.context

        return (
            <div style={{ border: '2px solid red', margin: '20px' }}>
                <h2>C组件, 从A接受到name: {name}, age: {age}</h2>
                <D />
            </div>
        )
    }
}

function D(props) {
    return (
        <div style={{ border: '2px solid orange', margin: '20px' }}>
            <h2>
                D组件, 从A接受到
                {/* 方式二：适用于类式、函数式 */}
                <Context.Consumer>
                    {
                        value => {
                            return `name: ${value.name}, age: ${value.age}`
                        }
                    }
                </Context.Consumer>
            </h2>
        </div>
    )
}