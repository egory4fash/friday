import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunk from "redux-thunk";
import {Reducer} from "./reducer";





export type ReduxStateType = ReturnType<typeof reducersBatch>
export type StoreType = typeof store


export let reducersBatch = combineReducers({

    reducer:Reducer
})

export let store: Store<ReduxStateType> = createStore(reducersBatch,applyMiddleware(thunk))

//@ts-ignore
window.store = store



