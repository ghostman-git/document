import { ADD_PERSON } from "../constant"

export default function reducer(preState = [], action) {
    const {type, data} = action

    switch (type) {
        case ADD_PERSON:
            return [...preState, data]
        default:
            return preState
    }
}