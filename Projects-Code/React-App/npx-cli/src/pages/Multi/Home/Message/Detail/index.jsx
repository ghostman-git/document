/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import qs from 'querystring'

const data = [
    {id: '1', content: 'Hello, React'},
    {id: '2', content: 'Hello, Vue'},
    {id: '3', content: 'Hello, JS'}
]

export default class Detail extends Component {
    render() {
        /* 接收params参数 */
        /* const {id, title} = this.props.match.params */

        /* 接收search参数 */
        /* const {id, title} = qs.parse(this.props.location.search.slice(1)) */

        /* 接收state参数 */
        const {id, title} = this.props.location.state || {}

        return (
            <ul>
                <li>ID: {id}</li>
                <li>Title: {title}</li>
                <li>Content: {data.find(item => item.id === id)?.content}</li>
            </ul>
        )
    }
}
