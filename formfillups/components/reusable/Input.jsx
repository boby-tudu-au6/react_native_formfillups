import React from 'react'
import {View,TextInput, StyleSheet} from 'react-native'

function Input({style,value, fun, type}) {
    
    return (
        <View style={[s.inputBox,{...style}]}>
            <TextInput 
            keyboardType={type===undefined?'default':type}
            style={s.input}
            value={value}
            onChange={(e)=>fun(e.nativeEvent.text)}
            placeholder='enter something'/>
        </View>
    )
}
const s = StyleSheet.create({
    input:{
        width:"100%"
    },
    inputBox:{
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'lightgray',
        flexDirection:"row"
    }
})

export default Input
