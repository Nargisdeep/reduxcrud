import {createStore,combineReducers} from  'redux'
import userReducer from './reducers/reducer'


const rootReducer =combineReducers({
    userData:userReducer

})
export const store =createStore(rootReducer)