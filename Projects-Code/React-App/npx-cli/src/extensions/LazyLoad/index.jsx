import React, { Component, lazy, Suspense } from 'react'
import { NavLink, Route } from 'react-router-dom'

// 同步方式
// import About from './About'
// import Home from './Home'

// 异步方式
const About = lazy(() => import(/* webpackchunkname: "about" */'./About'))
const Home = lazy(() => import(/* webpackchunkname: "home" */'./Home'))

export default class LazyLoad extends Component {
    render() {
        return (
            <div>
                <NavLink to="/about">About</NavLink>&nbsp;|&nbsp;
                <NavLink to="/home">Home</NavLink>
                <div>
                    <Suspense fallback={<h2>加载中...</h2>}>
                        <Route path="/about" component={About} />
                        <Route path="/home" component={Home} />
                    </Suspense>
                </div>
            </div>
        )
    }
}
