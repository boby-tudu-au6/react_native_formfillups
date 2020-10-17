import React,{useState} from 'react'
import {View,Text,TextInput,TouchableOpacity} from 'react-native'
import {styles} from './style'
import {connect} from 'react-redux'
import { FontAwesome5 } from '@expo/vector-icons';
import { doLogin } from '../redux/actions/action';
import Spinner from '../reusable/Spinner'

function Login({navigation,doLogin}) {
    const [phone,setPhone] = useState('')
    const [pass,setPass] = useState('')
    const [hidden,setHidden] = useState(true)
    const [loading,setLoading] = useState(false)

    function validate(){
        if(phone==='' || pass===''){
            return alert("All fields are required")
        }
        return doLogin({phone,pass,navigation,setLoading})
    }
  

    return (
        <View behavior='position' style={styles.container}>
            <Spinner data={loading} />
            <View style={styles.form}>
                <Text style={styles.heading}>Login</Text>
                
                <View style={styles.input}>
                <FontAwesome5 name="phone" size={20} 
                style={{color:"black",marginRight:10}} />
                    <TextInput
                    keyboardType="phone-pad"
                    style={{width:"80%"}}
                    value={phone}
                    placeholder='Enter phone'
                    placeholderTextColor="grey"
                    onChange={(e)=>setPhone(e.nativeEvent.text)}/>
                </View>
                <View style={styles.input}>
                <FontAwesome5 name="lock" size={20} 
                style={{color:"black",marginRight:10}} />
                    <TextInput
                    secureTextEntry={hidden}
                    style={{width:"80%"}}
                    value={pass}
                    placeholder='Enter password'
                    placeholderTextColor="grey"
                    onChange={(e)=>setPass(e.nativeEvent.text)}/>
                    {
                        hidden===true?
                        <FontAwesome5 name="eye-slash" size={20}  
                        style={{color:"black",marginLeft:"auto"}}
                        onPress={()=>setHidden(!hidden)} />:
                        <FontAwesome5 name="eye" size={20}  
                        style={{color:"black",marginLeft:"auto"}}
                        onPress={()=>setHidden(!hidden)} />
                    }
                    
                </View>
                
                <TouchableOpacity style={styles.button} onPress={validate}>
                    <Text style={{
                        textAlign:"center",fontWeight:"bold",color:"white"
                        }}>Login</Text>
                </TouchableOpacity>
                <Text style={{
                    textAlign:"center",
                    marginTop:20
                    }}
                    onPress={()=>navigation.navigate("Register")}>
                    Don't have an account <Text style={{fontWeight:"bold"}}>Click here</Text>
                </Text>
            </View>
        </View>
    )
}
const mapStateToProps = state =>{return {...state}}
const mapDispatchToProps = dispatch =>{
    return {
        doLogin:payload=>dispatch(doLogin(payload))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)
