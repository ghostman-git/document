import React, { Component } from 'react'
import './style.css'

export default class Entry extends Component {

    handleCreate = (event) => {
        const {createTodo} = this.props
        const {key, keyCode, target, target: {value = null}} = event

        if (key === 'Enter' || keyCode === 13) {
            if (!value) {
                return
            }

            // 创建todo，触发回调
            createTodo(value)

            // 清空值
            target.value = ''
        }
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleCreate} />
            </div>
        )
    }
}
