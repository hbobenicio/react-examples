import {createStore} from 'redux'
import counterReducer from './reducers/counter.reducer'

export default createStore(counterReducer)
