import React from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import {TouchableOpacity,Text,View,StyleSheet} from 'react-native'

function DatePicker({value,showValue,setValue,label,setShow}) {
    return (
        <TouchableOpacity style={{marginBottom:12}} 
        onPress={()=>setShow(true)}>
            <Text style={{
                marginLeft:'6%',
                fontWeight:"bold",
                marginBottom:5
                }}>{label}
            </Text>
            <View style={[s.input]}>
                <Text>{((value).toDateString()).toString()}</Text>
            </View>
            <View style={[s.input,{padding:0}]}>
            {showValue && (
                <DateTimePicker
                testID="dateTimePicker"
                value={value}
                mode='date'
                is24Hour={true}
                display="default"
                onChange={(event, selectedDate) => {
                    const currentDate = selectedDate || value;
                    setShow(false);
                    setValue(currentDate);
                    }}
                />
            )}
            </View>
        </TouchableOpacity>
    )
}
const s = StyleSheet.create({
    input:{
        padding:15,
        borderRadius:7,
        backgroundColor:"#E7E7E7",
        width:"95%",
        marginLeft:"auto",
        marginRight:"auto"
    }
})

export default DatePicker
