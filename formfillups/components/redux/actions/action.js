import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
export const DO_REGISTER = 'DO_REGISTER'
export const DO_LOGIN = 'DO_LOGIN'
export const DO_LOGOUT = 'DO_LOGOUT'
export const GET_PROFILE = 'GET_PROFILE'
export const GET_APPLIED = 'GET_APPLIED'
export const baseurl = 'http://000.000.00.00:0000'
let Navigation = null

export const doLogin = ({phone,pass,navigation,setLoading}) => async dispatch =>{
    try{
        setLoading(true)
        const {data} = await Axios.post(`${baseurl}/login`,{phone,pass})
        if(data.token!==undefined){
            await AsyncStorage.setItem("user",data.token)
            navigation.navigate("Home")
            if(Navigation===null){Navigation=navigation}
            setLoading(false)
            return dispatch({
                type:DO_LOGIN,
                payload:data.token
            })
        }
    }catch(err){
        setLoading(false)
        alert(`doLogin ${err.message}`)
    }
}

export const doRegister = ({phone,name,pass,email,navigation,setLoading}) => async dispatch =>{
    try{
        setLoading(true)
        await Axios.post(`${baseurl}/register`,{phone,name,pass,email})
        setLoading(false)
        if(Navigation===null){Navigation=navigation}
        navigation.navigate("Login")
    }catch(err){
        setLoading(false)
        alert(`doRegister ${err.message}`)
    }
}

export const checkLogin = () => async dispatch =>{
    // console.log('checklogin called')
    try{
        const user = await AsyncStorage.getItem("user")
        if(user!==null){
            const {data} = await Axios.post(`${baseurl}/check`,{
                token:user
            })
            return dispatch({
                type:DO_LOGIN,
                payload:user
            })
        }
    }catch(err){
        return dispatch({type:DO_LOGOUT})
    }
}

export const doLogout = ({navigation})=>async dispatch=>{
    try{
        await AsyncStorage.removeItem("user")
        navigation.navigate("Home")
        return dispatch({type:DO_LOGOUT})
    }catch(err){
        alert(`doLogout ${err.message}`)
    }
}

export const getProfile = () => async dispatch => {
    console.log("get profile called");
    try{
        const token = await AsyncStorage.getItem("user")
        const {data} = await Axios.post(`${baseurl}/getprofile`,{token})
        return dispatch({
            type:GET_PROFILE,
            payload:data
        })
    }catch(err){
        alert(`getProfile ${err.message}`)
    }
}

export const getAppliedJob = () => async dispatch =>{
    try{
        const token = await AsyncStorage.getItem("user")
        const {data} = await Axios.post(`${baseurl}/getappliedjob`,{token})
        return dispatch({
            type:GET_APPLIED,
            payload:data
        })
    }catch(err){
        alert(err.message)
    }
}
