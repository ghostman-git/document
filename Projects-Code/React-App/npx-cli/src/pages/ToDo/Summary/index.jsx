import React, { Component } from 'react'

import './style.css'

export default class Summary extends Component {

    handleToggleAllChecked = (event) => {
        const {checked} = event.target
        const {toggleAllChecked} = this.props
        toggleAllChecked(checked)
    }

    handleClearAllDone = () => {
        const {clearAllDone} = this.props
        clearAllDone()
    }

    render() {
        const {todos, totalNum = todos.length} = this.props

        // 已完成数量
        const doneNum = todos.reduce((pre, {done}) => pre + (done ? 1 : 0), 0)

        return (
            <div className="todo-footer">
                <label>
                    <input 
                        type="checkbox" 
                        checked={doneNum === totalNum && totalNum !== 0} 
                        onChange={this.handleToggleAllChecked} 
                        />全选/取消
                </label>
                <span>
                    <span>已完成{doneNum}</span> / 全部{totalNum}
                </span>
                <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
            </div>
        )
    }
}
