import React, { Component } from 'react'

export default class Count extends Component {

    increment = () => {
        const { value } = this.selectRef
        const { increment } = this.props
        increment(value * 1)
    }

    decrement = () => {
        const { value } = this.selectRef
        const { decrement } = this.props
        decrement(value * 1)

    }

    incrementIfOdd = () => {
        const { value } = this.selectRef
        const { count, increment } = this.props
        if (count % 2 !== 0) {
            increment(value * 1)
        }
    }

    incrementAsync = () => {
        const { value } = this.selectRef
        const { incrementAsync } = this.props
        // 异步
        incrementAsync(value * 1, 500)
    }

    render() {
        const { count } = this.props

        return (
            <div>
                <h2>结果：{count}</h2>&nbsp;
                <select ref={c => this.selectRef = c}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>&nbsp;
                <button onClick={this.increment}>相加</button>&nbsp;
                <button onClick={this.decrement}>相减</button>&nbsp;
                <button onClick={this.incrementIfOdd}>奇数相加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步相加</button>&nbsp;
            </div>
        )
    }
}
