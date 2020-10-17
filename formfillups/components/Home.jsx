import React,{useEffect} from 'react'
import {
    View,Text,
    StyleSheet,
    Image,ScrollView,TouchableOpacity
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { checkLogin, getProfile } from './redux/actions/action';

function Home({navigation,checkLogin,getProfile,profile,account}){
  useEffect(()=>{
    if(account.loggedIn===false){checkLogin()}
  },[])
    return (
      <View style={styles.container}>
        <ScrollView style={{backgroundColor:"white"}}>
        <View style={{textAlign:"center",justifyContent:"center",height:200}}>
        <Image
        style={{width:'100%',height:200,marginBottom:10,position:"absolute"}}
        source={{uri:'https://cdn.guidingtech.com/media/assets/WordPress-Import/2015/05/_1200x630_crop_center-center_82_none/filling-a-form.jpg?mtime=1507902607'}}/>
        <Text style={{
          textAlign:"center",fontSize:30,fontWeight:"bold"
          }}>we introduce new way of filling form</Text>
          <TouchableOpacity style={{backgroundColor:"white",marginLeft:"auto",marginRight:"auto",borderRadius:7,padding:7}}>
            <Text>Explore jobs</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{width:"100%",padding:10,textAlign:"center",justifyContent:"center"}}>
          <Text style={{fontSize:30,textAlign:"center",marginTop:20,marginBottom:30}}>
            How it works
          </Text>

          <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center"}}>Register</Text>
          <Image source={require("../assets/img/register.jpg")}
          style={{width:100,height:100,marginLeft:"auto",
          marginRight:"auto"}}/>
          <Text style={{textAlign:"center",width:"60%",marginLeft:"auto",marginRight:'auto',marginBottom:20}}>
            Register yourself with us to enjoy our service
          </Text>
          <TouchableOpacity style={{
            marginLeft:"auto",marginRight:"auto",borderRadius:7,padding:12,backgroundColor:"rgb(235, 235, 235)",marginBottom:30,elevation:5
            }}>
            <Text onPress={()=>navigation.navigate("Register")}>Register</Text>
          </TouchableOpacity>

          <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center"}}>Apply</Text>
          <Image source={require("../assets/img/check.jpg")}
          style={{width:100,height:100,marginLeft:"auto",
          marginRight:"auto"}}/>
          <Text style={{textAlign:"center",width:"60%",marginLeft:"auto",marginRight:'auto',marginBottom:20}}>
            Register yourself with us to enjoy our service
          </Text>
          <TouchableOpacity style={{
            marginLeft:"auto",marginRight:"auto",borderRadius:7,padding:12,backgroundColor:"rgb(235, 235, 235)",marginBottom:30,elevation:5
            }}>
            <Text onPress={()=>navigation.navigate("Jobs")}>Go To Jobs</Text>
          </TouchableOpacity>

          <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center"}}>One day processing time</Text>
          <Image source={require("../assets/img/day.png")}
          style={{width:100,height:100,marginLeft:"auto",
          marginRight:"auto"}}/>
          <Text style={{textAlign:"center",width:"60%",marginLeft:"auto",marginRight:'auto',marginBottom:20}}>
          Get recieving assured after one day
          </Text>
          <TouchableOpacity style={{
            marginLeft:"auto",marginRight:"auto",borderRadius:7,padding:12,backgroundColor:"rgb(235, 235, 235)",elevation:5
            }}>
            <Text onPress={()=>navigation.navigate("Jobs")}>Go To Jobs</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
        <FontAwesome name="facebook-f" style={[styles.icon,{color:"#4267B2"}]} />
        <FontAwesome name="instagram" style={[styles.icon,{color:"#C13584"}]} />
        <FontAwesome name="twitter" style={[styles.icon,{color:"#1DA1F2"}]} />
        <FontAwesome name="linkedin" style={[styles.icon,{color:"#4267B2"}]} />
        </View>
        </ScrollView>
      </View>
    )
  }



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      textAlign:'center'
    },
    header:{
      display:"flex",
      color:"#fff"
    },
    footer:{
      justifyContent:"center",
      alignItems:"center",
      alignContent:"center",
      width:"100%",
      padding:20,
      flexDirection:"row"
    },
    icon:{
      borderRadius:100,
      backgroundColor:"white",
      width:50,
      height:50,
      justifyContent:"center",
      textAlign:"center",
      padding:15,
      fontSize:20,
      elevation:10,
      margin:10
    }
  });

const mapState = state =>{return {...state}}
const mapDispatch = dispatch =>{
  return {
    checkLogin:()=>dispatch(checkLogin()),
    getProfile:()=>dispatch(getProfile())
  }
}
export default connect(mapState,mapDispatch)(Home)
