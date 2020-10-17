import React from 'react'
import {View,Text,StyleSheet, Button} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function Card({color,title,value,style,fun,value2}) {
    const s = StyleSheet.create({
        card:{
            width:'90%',
            marginLeft:"auto",
            marginRight:"auto",
            marginTop:5,
            marginBottom:5,
            padding:10,
            borderRadius:8,
            backgroundColor:color
          },
        text:{
            color:"white",
            fontSize:15
        }
    })
    return (
        <TouchableOpacity onPress={fun}>
            <View style={[s.card,{...style}]}>
                <Text style={[s.text]}>Job Title: {title}</Text>
            <Text style={[s.text]}>Application id : {value}</Text>
            <Text style={[s.text]}>Status : {value2}</Text>
        </View>
        </TouchableOpacity>
    )
}


export default Card
