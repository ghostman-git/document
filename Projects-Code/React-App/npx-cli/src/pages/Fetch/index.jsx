import React, { Component } from 'react'

import Query from './Query'
import List from './List'

export default class Search extends Component {
    render() {
        return (
            <div className="container">
                <Query />
                <List />
            </div>
        )
    }
}
