import {combineReducers} from 'redux'
import { authReducer } from './auth-reducer'
import { userReducer } from './user-reducer'
import { postReducer } from './post-reducer'



export const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    post: postReducer,
})