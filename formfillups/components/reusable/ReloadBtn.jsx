import React from 'react'
import {TouchableOpacity,StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Button from './Button'

function ReloadBtn({fun}) {
    return (
        <Button 
            text={<AntDesign name="reload1" size={24} color="white" />}
            style={s.button} fun={fun} />
    )
}
const s = StyleSheet.create({
    button:{
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        backgroundColor:"#FF5722"
     }
})
export default ReloadBtn
