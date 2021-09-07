import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUserAction } from '../../../redux/actions/user'

class User extends Component {

    handleAddUser = () => {
        // 人员
        const { users, addUser } = this.props
        const { value: personId } = this.personRef
        const { value: loginName } = this.loginNameRef

        addUser({
            id: users.length + 1,
            personId,
            loginName
        })
    }

    render() {
        // 人员 => 下拉
        const { users, persons, personCount = persons.length, userCount = users.length } = this.props

        return (
            <div style={{border: '1px solid red', margin: '20px'}}>
                <h2>用户组件 人员数量：{personCount}, 用户数量：{userCount}</h2>
                选择人员：
                <select ref={c => this.personRef = c}>
                    {
                        persons.map(({id, name, age}) => {
                            return (
                                <option key={id} value={id}>{name} - {age}</option>
                            )
                        })
                    }
                </select><br />
                登录名：<input ref={c => this.loginNameRef = c} type="text" /><br />
                <button onClick={this.handleAddUser}>添加用户</button><br />
                <ul>
                    {
                        users.map(({id, personId, loginName}) => {
                            return (
                                <li key={id}>id: {id}, personId: {personId}, loginName: {loginName}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        users: state.users,
        persons: state.persons
    }),
    {
        addUser: addUserAction
    }
)(User)