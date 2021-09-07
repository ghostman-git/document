import React, { Component } from 'react'

import { Button } from 'antd'
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons'

export default class Andt extends Component {
    render() {
        return (
            <div>
                <Button type="primary">Button</Button><br/>

                <StarOutlined />
                <StarFilled />
                <StarTwoTone twoToneColor="#eb2f96" />
            </div>
        )
    }
}
