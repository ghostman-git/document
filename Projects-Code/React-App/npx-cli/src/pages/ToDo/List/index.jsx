import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

import Item from '../Item'

export default class List extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
        removeTodo: PropTypes.func.isRequired
    }

    render() {
        const {todos, updateTodo, removeTodo} = this.props

        return (
            <ul className="todo-main">
                {
                    todos.map(todo => {
                        /* return <Item todo={todo} key={todo.id} /> */
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo} removeTodo={removeTodo} />
                    })
                }
            </ul>
        )
    }
}
