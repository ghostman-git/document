import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPersonAction } from '../../../redux/actions/person'

class Person extends Component {

    handleAddPerson = () => {
        const { persons, addPerson } = this.props
        const { value: name } = this.nameRef
        const { value: age } = this.ageRef

        addPerson({ id: persons.length + 1, name, age })
    }

    render() {
        const { users: {length: userCount}, persons, personCount = persons.length } = this.props

        return (
            <div style={{border: '1px solid red', margin: '20px'}}>
                <h2>人员组件 人员数量：{personCount}, 用户数量：{userCount}</h2>
                name: <input ref={c => this.nameRef = c} type="text" /><br />
                age:  <input ref={c => this.ageRef = c} type="text" /><br />
                <button onClick={this.handleAddPerson}>添加人员</button>
                <ul>
                    {
                        persons.map(({id, name, age}) => {
                            return (
                                <li key={id}>id: {id}, name: {name}, age: {age}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}


export default connect(
    (state) => ({ 
        persons: state.persons,
        users: state.users
    }),
    {
        addPerson: addPersonAction
    }
)(Person)