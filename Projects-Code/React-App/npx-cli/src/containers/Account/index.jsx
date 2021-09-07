import React, { Component } from 'react'

import Person from './Person'
import User from './User'


export default class Account extends Component {
    render() {
        return (
            <div>
                <Person />
                <User />
            </div>
        )
    }
}
