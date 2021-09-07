import React, { Component } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import './style.css'

import About from './About'
import Home from './Home'
import PageHeader from './PageHeader'

export default class Multi extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                        <PageHeader />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <NavLink to="/about" className="list-group-item">About</NavLink>
                            <NavLink to="/home" className="list-group-item">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path="/about" component={About} />
                                    <Route path="/home" component={Home} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
