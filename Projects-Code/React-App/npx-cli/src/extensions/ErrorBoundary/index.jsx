import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

    state = {
        hasError: ''
    }

    static getDerivedStateFromError(error) {
        console.error('@@', error)
        return { 
            hasError: true 
        }
    }

    componentDidCatch(error, info) {
        console.error('渲染组件出错！', error, info)
    }

    render() {
        const { hasError } = this.state

        return (
            <div>
                {hasError ? <h1 style={{ color: 'red' }}>当前网络不稳定，请稍后重试！</h1> : <Child />}
            </div>
        )
    }
}

class Child extends Component {
    state = {
        /* users: [
            { id: '1', name: 'react' },
            { id: '2', name: 'vue' }
        ] */
        users: ''
    }

    render() {
        const { users } = this.state

        return (
            <div>
                {
                    users.map(({ id, name }) => {
                        return <h4 key={id}>id: {id} --- name: {name}</h4>
                    })
                }
            </div>
        )
    }
}