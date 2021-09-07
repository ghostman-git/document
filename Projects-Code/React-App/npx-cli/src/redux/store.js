// import reducer from './reducer'
import personReducer from './reducers/person'
import userReducer from './reducers/user'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'

// export default createStore(reducer, applyMiddleware(thunk))

// combineReducers合并多个reducer
export default createStore(
    combineReducers({
        persons: personReducer,
        users: userReducer
    }), 
    composeWithDevTools(applyMiddleware(thunk))
)