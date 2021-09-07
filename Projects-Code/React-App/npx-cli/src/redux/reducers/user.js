import { ADD_USER } from "../constant";

export default function reducer(preState = [], action) {
    const { type, data } = action

    switch (type) {
        case ADD_USER:
            
            return [...preState, data]
    
        default:
            return preState;
    }
}