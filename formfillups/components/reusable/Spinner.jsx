import React from 'react'
import {View,ActivityIndicator} from 'react-native'

function Spinner({data}) {
    return (
        <View style={{
            position:"absolute",
            top:0,left:0,
            flex:5,
            backgroundColor:"rgba(0,0,0,0.4)",
            width:data===true?"100%":"0%",
            height:"100%",
            zIndex:10,
            justifyContent:"center",
            overflow:"hidden"
            
        }}>
            <ActivityIndicator size="large" color="white" />
        </View>
    )
}

export default Spinner
