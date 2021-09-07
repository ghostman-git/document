import React, { Component } from 'react'

import Query from './Query'
import List from './List'

export default class Search extends Component {

    state = {
        users: [],
        status: '0',
        error: ''
    }

    receiveUsers = (options) => {
        this.setState(options)
    }

    render() {
        return (
            <div className="container">
                <Query receiveUsers={this.receiveUsers} />
                <List {...this.state}/>
            </div>
        )
    }
}
