import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

import Message from './Message'
import News from './News'

export default class index extends Component {
    render() {
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <NavLink to="/home/news" className="list-group-item">News</NavLink>
                        </li>
                        <li>
                            <NavLink to="/home/message" className="list-group-item">Message</NavLink>
                        </li>
                    </ul>
                    <div>
                        <Switch>
                            <Route path="/home/news" component={News} />
                            <Route path="/home/message" component={Message} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
