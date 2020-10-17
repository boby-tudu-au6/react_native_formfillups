import React from 'react'
import {StyleSheet,View,Text,Image,TouchableOpacity} from 'react-native'
 
function JobCard({item,applyJob}) {

    return (
        <View style={s.card}>
            <Image source={{uri:item.item.imgUrl}} style={s.image}/>
            <View style={s.details}>
                <Text style={s.title}>{item.item.title}</Text>
                <Text>
                    <Text style={s.title}>Eligibility:</Text>
                        { item.item.elig }
                    </Text>
                <Text>
                    <Text style={s.title}>Fee structure:</Text>
                        { item.item.fee}
                    </Text>
                <Text>
                    <Text style={s.title}>Last date:</Text>
                        {new Date(item.item.dateL).toDateString()}
                    </Text>
                <Text>
                    <Text style={s.title}>Exam date:</Text>
                        {new Date(item.item.dateE).toDateString()}
                    </Text>
                <Text>
                    <Text style={s.title}>Admit card available:</Text> {new Date(item.item.dateA).toDateString()}</Text>
                    <TouchableOpacity 
                    style={s.applyBtn} 
                    onPress={()=>applyJob(item.item._id)}>
                    <Text style={{textAlign:"center",color:"white"}}>Apply</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const s = StyleSheet.create({
    card:{
        width:"100%",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:10,
        paddingBottom:28,
        textAlign:"left",
        borderRadius:7,
        backgroundColor:"white",
        elevation:2  
    },
    image:{
        width:'100%',
        borderRadius:9,
        aspectRatio: 16/9,
    },
    details:{
        padding:10,
        textAlign:"left",
    },
    title:{
        fontSize:15,
        fontWeight:"bold"

    },
    applyBtn:{
        backgroundColor:"rgb(254, 114, 53)",
        padding:9,
        marginTop:10,
        borderRadius:100
    }
})
export default JobCard
