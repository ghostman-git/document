import React, { Component } from 'react'
import PusbSub from 'pubsub-js'

export default class Query extends Component {

    handleSearch = async () => {
        const {keyWord: {value}} = this

        // 加载状态
        PusbSub.publish('searchResult', {
            status: '1'
        })

        /* fetch(
            `https://api.github.com/search/users1?q=${value}`
        )
        .then(
            res => {
                console.log('1-res ', res)
                return res.json()
            },
            err => {
                console.log('1-err ', err)
                return new Promise(() => {})
            }
        )
        .then(
            res => {
                console.log('2-res ', res)
            },
            err => {
                console.log('2-err ', err)
            }
        ) */
        
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${value}`)
            const res = await response.json()
             // 请求完成
             PusbSub.publish('searchResult', {
                status: '2',
                users: res.items
            })
        } catch (error) {
            // 请求出错
            PusbSub.publish('searchResult', {
                status: '-1',
                users: [],
                error: error.message
            })
        }
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
