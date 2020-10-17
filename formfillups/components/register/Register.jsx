import React,{useState} from 'react'
import {
    View, 
    Text, 
    TextInput,
    TouchableOpacity,
    ScrollView
}  from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import {styles} from './style'
import { connect } from 'react-redux'
import { doRegister } from '../redux/actions/action';
import Spinner from '../reusable/Spinner'

function Register({navigation,doRegister}) {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [pass,setPass] = useState('')
    const [conpass,setConPass] = useState('')
    const [hidden,setHidden] = useState(true)
    const [hidden2,setHidden2] = useState(true)
    const [loading,setLoading] = useState(false)

    function validate(){
        console.log('validate called')
        if(name==='' || email==='' || phone==='' || pass==='' || conpass===''){
            return alert("All fields are required")
        }
        if(pass!==conpass){
            return alert("confirm password should match")
        }
        return doRegister({name,email,phone, pass,navigation,setLoading})
    }


    return (
        <View style={{flex:1}}>
        <Spinner data={loading} />
            <ScrollView 
        contentContainerStyle={{justifyContent:"flex-start"}} 
        style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.heading}>Register</Text>
                <View style={styles.input}>
                    <FontAwesome5 name="user-circle" size={24} 
                    style={{color:"black",marginRight:10}} />
                    <TextInput
                    style={{width:"80%"}}
                    value={name}
                    placeholder='Enter full name'
                    placeholderTextColor="grey"
                    onChange={(e)=>setName(e.nativeEvent.text)}/>
                </View>
                <View style={styles.input}>
                <FontAwesome5 name="envelope" size={24} 
                style={{color:"black",marginRight:10}} />
                    <TextInput
                    style={{width:"80%"}}
                    value={email}
                    placeholder='Enter Email'
                    placeholderTextColor="grey"
                    onChange={(e)=>setEmail(e.nativeEvent.text)}/>
                </View>
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
                <View style={styles.input}>
                <FontAwesome5 name="lock" size={20} 
                style={{color:"black",marginRight:10}} />
                    <TextInput
                    
                    secureTextEntry={hidden2}
                    style={{width:"80%"}}
                    value={conpass}
                    placeholder='Confirm password'
                    placeholderTextColor="grey"
                    onChange={(e)=>setConPass(e.nativeEvent.text)}/>
                    {
                        hidden2===true?
                        <FontAwesome5 name="eye-slash" size={20}  
                        style={{color:"black",marginLeft:"auto"}}
                        onPress={()=>setHidden2(!hidden2)} />:
                        <FontAwesome5 name="eye" size={20}  
                        style={{color:"black",marginLeft:"auto"}}
                        onPress={()=>setHidden2(!hidden2)} />
                    }
                    
                </View>
                <TouchableOpacity style={styles.button} onPress={validate}>
                    <Text style={{
                        textAlign:"center",fontWeight:"bold",color:"white"
                        }}>Register</Text>
                </TouchableOpacity>
                <Text style={{
                    textAlign:"center",
                    marginTop:20
                    }}
                    onPress={()=>navigation.navigate("Login")}>
                    Already have an account <Text style={{fontWeight:"bold"}}>Click here</Text>
                </Text>
            </View>
        </ScrollView>
        </View>
    )
}
const mapStateToProps = state =>{return {...state}}
const mapDispatchToProps = dispatch =>{
    // return bindActionCreators({doRegister:payload=>doRegister(payload)},dispatch)
    return {
        doRegister:payload=>dispatch(doRegister(payload))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Register)



