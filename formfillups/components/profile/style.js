import {StyleSheet} from 'react-native'

export const s = StyleSheet.create({
    input:{
        padding:15,
        borderRadius:7,
        backgroundColor:"#E7E7E7",
        width:"90%",
        marginLeft:"auto",
        marginRight:"auto"
    },
    container:{
        flex:1,
        textAlign:"center"
    },
    form:{
        flex:1,
        paddingTop:20
    },
    profilePic:{
        width:200,
        height:200,
        borderRadius:100,
        marginLeft:"auto",
        marginRight:"auto"
    },
    spinner:{
        position:"absolute",
        top:0,left:0,
        flex:5,
        backgroundColor:"rgba(0,0,0,0.4)",
        width:"100%",
        height:"100%",
        zIndex:10,
        justifyContent:"center"
    }
})