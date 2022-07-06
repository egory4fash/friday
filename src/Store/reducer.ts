
//import {Dispatch} from "redux";





type InitialStateType = number[]

let initialState = [1,2,3]

export const Reducer = (state:InitialStateType = initialState, action: any): any => {
    switch (action.type) {


        default:
            return state
    }
}

