import React, { Component } from 'react'
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom'
import './style.css'

import About from './About'
import Home from './Home'
import Demo from './Demo'
import MyNavLink from './MyNavLink'

export default class Router extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 路由链接 */}
                            <Link className="list-group-item" to="/about">Link-About</Link>
                            <Link className="list-group-item" to="/home">Link-Home</Link><br/>

                            {/* NavLink */}
                            <NavLink activeClassName="active" className="list-group-item" to="/about">NavLink-About</NavLink>
                            <NavLink activeClassName="active" className="list-group-item" to="/home">NavLink-Home</NavLink><br/>

                            {/* 自定义NavLink */}
                            <MyNavLink to="/about" children="MyNavLink-About" />
                            <MyNavLink to="/home" children="MyNavLink-Home" /><br/>

                            {/* 模糊路由与严格路由 */}
                            <NavLink className="list-group-item" to="/about/a/b">exact-About</NavLink>
                            <NavLink className="list-group-item" to="/home/a/b">exact-Home</NavLink><br/>

                            {/* 重定向 */}
                            <NavLink className="list-group-item" to="/home111">Home111</NavLink><br/>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                {/* Switch 匹配到不再继续往下匹配 */}
                                <Switch>
                                    <Route path="/about" component={About} />
                                    <Route exact path="/home" component={Home} />
                                    <Route exact path="/home" component={Demo} />
                                    {/* 匹配不道路径时，重定向某个路径 */}
                                    <Redirect to="/home" />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
