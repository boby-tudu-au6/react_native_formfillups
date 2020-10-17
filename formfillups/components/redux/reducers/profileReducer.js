const { GET_PROFILE } = require("../actions/action")

const initState ={
    profile:null
}

function profileReducer(state=initState,action){
    const {type,payload} = action
    switch(type){
        case GET_PROFILE:return {...state,profile:payload}
        default: return {...state}
    }
}

export default profileReducer