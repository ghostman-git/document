import React, { Component } from 'react'
// import { nanoid } from 'nanoid'
import './style.css'

import Entry from './Entry'
import List from './List'
import Summary from './Summary'

export default class ToDo extends Component {

    state = {
        todos: [
            {id: 1, name: '吃饭', done: true},
            {id: 2, name: '睡觉', done: false},
            {id: 3, name: '敲代码', done: true}
        ]
    }

    createTodo = (name) => {
        const {todos} = this.state

        const todo = {
            id: todos.length + 1,
            name,
            done: false
        }

        this.setState({
            todos: [todo, ...todos]
        })
    }

    updateTodo = (id, done) => {
        const {todos} = this.state

        // 更新后的todo集合
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                return {...todo, done}
            }
            return todo
        })
    
        this.setState({
            todos: newTodos
        })
    }

    removeTodo = id => {
        const {todos} = this.state

        const index = todos.findIndex(todo => todo.id === id)
        if (index === -1) {
            return alert('此数据已被删除！')
        }

        todos.splice(index, 1)

        // const newTodos = todos.filter(todo => todo.id !== id)

        this.setState({
            todos: todos
        })
    }

    toggleAllChecked = checked => {
        const {todos} = this.state

        const newTodos = todos.map(todo => {
            return {...todo, done: checked}
        })

        this.setState({
            todos: newTodos
        })
    }

    clearAllDone = () => {
        const {todos} = this.state

        const newTodos = todos.filter(todo => !todo.done)

        this.setState({
            todos: newTodos
        })

    }

    render() {
        const {todos} = this.state

        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Entry createTodo={this.createTodo} />
                    <List todos={todos} updateTodo={this.updateTodo} removeTodo={this.removeTodo} />
                    <Summary todos={todos} toggleAllChecked={this.toggleAllChecked} clearAllDone={this.clearAllDone} />
                </div>
            </div>
        )
    }
}
