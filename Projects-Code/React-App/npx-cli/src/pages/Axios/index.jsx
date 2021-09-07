import React, { Component } from 'react'
import axios from 'axios'

export default class Axios extends Component {

    getStudent = () => {
        axios.get('http://localhost:3000/api1/students').then(value => {
            console.log('students-value: ', value)
        }, reason => {
            console.log('students-reason: ', reason)
        })
    }

    getCar = () => {
        axios.get('http://localhost:3000/api2/cars').then(value => {
            console.log('cars-value: ', value)
        }, reason => {
            console.log('cars-reason: ', reason)
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.getStudent}>获取学生</button><br />
                <button onClick={this.getCar}>获取汽车</button>
            </div>
        )
    }
}
