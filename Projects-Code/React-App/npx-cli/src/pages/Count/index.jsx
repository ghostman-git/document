import React, { Component } from 'react'
import store from '../../redux/store'
import { incrementAction, decrementAction, incrementAsyncAction } from '../../redux/action'

export default class Count extends Component {

    /* state = {
        result: 0
    } */

    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }

    increment = () => {
        // const {result} = this.state
        const {value} = this.selectRef
        /* this.setState({
            result: result + value * 1
        }) */

        /* // 简单版
        store.dispatch({
            type: 'increment',
            data: value * 1
        }) */

        store.dispatch(incrementAction(value * 1))
    }

    decrement = () => {
        // const {result} = this.state
        const {value} = this.selectRef
        /* this.setState({
            result: result - value * 1
        }) */
        /* store.dispatch({
            type: 'decrement',
            data: value * 1
        }) */

        store.dispatch(decrementAction(value * 1))
    }

    incrementIfOdd = () => {
        // const {result} = this.state
        const result = store.getState()
        const {value} = this.selectRef
        if (result % 2 !== 0) {
            /* this.setState({
                result: result + value * 1
            }) */
            /* store.dispatch({
                type: 'increment',
                data: value * 1
            }) */
            store.dispatch(incrementAction(value * 1))
        }
    }

    incrementAsync = () => {
        // const {result} = this.state
        const {value} = this.selectRef
        // setTimeout(() => {
        //     /* this.setState({
        //         result: result + value * 1
        //     }) */
        //     /* store.dispatch({
        //         type: 'increment',
        //         data: value * 1
        //     }) */
        //     store.dispatch(incrementAction(value * 1))
        // }, 500);

        // 异步
        store.dispatch(incrementAsyncAction(value * 1, 500))
    }

    render() {
        // const {result} = this.state

        return (
            <div>
                <h2>结果：{store.getState()}</h2>&nbsp;
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
