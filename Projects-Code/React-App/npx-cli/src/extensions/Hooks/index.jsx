import React from 'react'
import ReactDom from 'react-dom';

export default function Hooks() {

    const myRef = React.useRef()

    const [result, setResult] = React.useState(0)

    // componentDidMount()
    // componentDidUpdate()
    // componentWillUnmount()
    React.useEffect(() => {
        const timer = setInterval(() => {
            setResult(result + 1)
        }, 800)

        // 卸载前触发
        return () => {
            window.clearInterval(timer)
        }
    }, [result]) // 监听哪些状态

    const handleClick = () => {
        // 方式一
        // setResult(result + 1)

        // 方式二
        setResult(result => result + 1)
    }

    const handleUnmound = () => {
        ReactDom.unmountComponentAtNode(document.getElementById('root'))
    }

    const handleShow = () => {
        console.log(myRef.current.value)
    }

    return (
        <div>
            <p>结果：{result}</p>
            <button onClick={handleClick}>+1</button>&nbsp;
            <button onClick={handleUnmound}>卸载组件</button>

            <div>
                <input ref={myRef} type="text" /><br />
                <button onClick={handleShow}>获取内容</button>
            </div>
        </div>
    )
}
