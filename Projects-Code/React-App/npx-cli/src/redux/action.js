import { INCREMENT, DECREMENT } from './constant'

// 同步action，返回一般对象
export const incrementAction = data => ({ type: INCREMENT, data })
export const decrementAction = data => ({ type: DECREMENT, data })

// 异步action，返回函数
export const incrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(incrementAction(data))
        }, time);
    }
}