import { DO_REGISTER, DO_LOGIN, DO_LOGOUT, GET_APPLIED } from "../actions/action"

const initState = {
    user:null,
    loggedIn:false,
    applied:null
}

function account(state=initState,action){
    const {type,payload} = action
    switch(type){
        case DO_LOGIN:return {...state,loggedIn:true,user:payload}
        case DO_LOGOUT:return {...state,user:null,loggedIn:false,applied:null}
        case GET_APPLIED:return {...state,applied:payload}
        default: return state
    }
}

export default account