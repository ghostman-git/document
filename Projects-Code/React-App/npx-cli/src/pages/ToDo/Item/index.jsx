import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class Item extends Component {

    static propTypes = {
        updateTodo: PropTypes.func.isRequired,
        removeTodo: PropTypes.func.isRequired
    }

    handleChange = (id) => {
        return (event) => {
            const {updateTodo} = this.props
            const {target: {checked: done}} = event

            updateTodo(id, done)
        }
    }

    handleRemove = (id) => {
        if (window.confirm('确定删除任务？')) {
            const {removeTodo} = this.props

            removeTodo(id)
        }
    }

    render() {
        const {id, name, done} = this.props

        return (
            <li>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleChange(id)} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display: 'none'}} onClick={() => this.handleRemove(id)}>删除</button>
            </li>
        )
    }
}
