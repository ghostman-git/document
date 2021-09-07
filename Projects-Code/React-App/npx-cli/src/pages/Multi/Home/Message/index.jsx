import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Detail from './Detail'

export default class Message extends Component {
    state = {
        data: [
            {id: '1', title: 'message1'},
            {id: '2', title: 'message2'},
            {id: '3', title: 'message3'}
        ]
    }

    pushShow = (id, title) => {
        // params
        // this.props.history.push(`/home/message/detail/${id}/${title}`)

        // search
        // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
        
        // state
        this.props.history.push(`/home/message/detail`, {'id': id, 'title': title})
    }

    replaceShow = (id, title) => {
        // params
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // search
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)
        
        // state
        this.props.history.replace(`/home/message/detail`, {'id': id, 'title': title})
    }

    goBack = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }

    go = () => {
        // this.props.history.go(-1)
        this.props.history.go(2)
    }

    render() {
        const {data} = this.state

        return (
            <div>
                <ul>
                    {
                        data.map(({id, title}) => {
                            return (
                                <li key={id}>
                                    {/* params 传递参数 */}
                                    <Link to={`/home/message/detail/${id}/${title}`}>{title}</Link>&nbsp;&nbsp;
                                    <button onClick={() => this.pushShow(id, title)}>push-{title}</button>&nbsp;&nbsp;
                                    <button onClick={() => this.replaceShow(id, title)}>replace-{title}</button>&nbsp;&nbsp;

                                    {/* search 传递参数 */}
                                    {/* <Link to={`/home/message/detail?id=${id}&title=${title}`}>{title}</Link> */}

                                    {/* state 传递参数 */}
                                    {/* <Link replace to={{pathname: '/home/message/detail', state: {'id': id, 'title': title}}}>{title}</Link> */}
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <div>
                    {/* params路由注册 */}
                    {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

                    {/* search路由注册 */}
                    {/* <Route path="/home/message/detail" component={Detail} /> */}

                    {/* state路由注册 */}
                    <Route path="/home/message/detail" component={Detail} />
                </div>
                <div>
                    <button onClick={this.goBack}>&lt;--回退</button>&nbsp;
                    <button onClick={this.forward}>前进--&gt;</button>&nbsp;
                    <button onClick={this.go}>go</button>
                </div>
            </div>
        )
    }
}
