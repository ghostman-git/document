import React, { Component } from 'react'
import './style.css'
export default class List extends Component {
    render() {
        const {users, status, error} = this.props

        return (
            <div className="row">
                {
                    status === '0' ? <h2>欢迎使用Github搜索</h2> :
                    status === '1' ? <h2>Loading....</h2> :
                    status === '-1' ? <h2 style={{color: 'red'}}>{error}</h2> :
                    users.map(user => {
                        return (
                            <div className="card" key={user.id}>
                                <a href={user.html_url} target="_blank" rel="noreferrer">
                                    <img src={user.avatar_url} alt="avatar" style={{width: '100px'}} />
                                </a>
                                <p className="card-text">{user.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
