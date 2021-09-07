import React, { Component } from 'react'
import axios from 'axios'
import PusbSub from 'pubsub-js'

export default class Query extends Component {

    handleSearch = () => {
        const {keyWord: {value}} = this

        // 加载状态
        PusbSub.publish('searchResult', {
            status: '1'
        })

        axios.get(`https://api.github.com/search/users?q=${value}`).then(res => {
            // items => avatar_url login html_url
            // 请求完成
            PusbSub.publish('searchResult', {
                status: '2',
                users: res.data.items
            })
        }, err => {
            // 请求出错
            PusbSub.publish('searchResult', {
                status: '-1',
                users: [],
                error: err.message
            })
        })
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input 
                        ref={c => this.keyWord = c} 
                        type="text" 
                        onKeyDown={event => event.keyCode === 13 && this.handleSearch()}
                        placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.handleSearch}>Search</button>
                </div>
            </section>
        )
    }
}
