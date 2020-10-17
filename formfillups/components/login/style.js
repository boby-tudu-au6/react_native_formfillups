import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,
        justifyContent:"flex-start",
        textAlign:"center"
    },
    form:{
        width:"90%",
        marginLeft:"auto",
        marginRight:"auto",
        justifyContent:"center",
        paddingTop:"20%"
    },
    input:{
        width:'100%',
        marginBottom:12,
        fontSize:15,
        borderRadius:100,
        backgroundColor:"rgb(235, 235, 235)",
        paddingLeft:10,
        paddingRight:10,
        flexDirection:"row",
        paddingTop:10,
        paddingBottom:10
    },
    button:{
        textAlign:"center",
        padding:14,
        backgroundColor:"rgb(254, 114, 53)",
        width:'100%',
        marginLeft:"auto",
        marginRight:"auto",
        borderRadius:100,
        shadowColor: 'lightgray',
        shadowOffset: { width: 10, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5
    },
    heading:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:20,
        marginBottom:30
    }
})