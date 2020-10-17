import React from 'react'
import {TouchableOpacity,Text,StyleSheet} from 'react-native'

function Button({text,style,textStyle,fun}) {
    return (
        <TouchableOpacity 
        style={[s.btn,{...style}]}
        onPress={fun}
        >
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    )
}
const s = StyleSheet.create({
    btn:{
        padding:10,
        borderRadius:100,
        marginLeft:"auto",
        marginRight:"auto"
    }
})

export default Button
