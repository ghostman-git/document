import React, {Component} from 'react'
import hello from './style.module.css'

export default class Hello extends Component {
    render() {
        return (
            <h2 className={hello.title}>Hello, React</h2>
        )
    }
}