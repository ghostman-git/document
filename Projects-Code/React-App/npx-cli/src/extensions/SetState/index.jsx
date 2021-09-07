import React, { Component } from 'react'

export default class SetState extends Component {

    state = {
        result: 0
    }

    handleClick = () => {
        // 方式一：对象式
        /* const { result } = this.state
        this.setState({
            result: result + 1
        }, () => {
            console.log('对象式setState回调...')
        }) */

        // 方式二：函数式
        this.setState((state, props) => {
            console.log(state, props)
            return {
                result: state.result + 1
            }
        }, () => {
            console.log('函数式setState回调...')
        })
    }

    render() {
        console.log('render...')

        const { result } = this.state

        return (
            <div>
                <p>结果：{result}</p>
                <button onClick={this.handleClick}>+1</button>
            </div>
        )
    }
}
