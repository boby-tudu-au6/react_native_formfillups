import React from 'react'
import { 
    createDrawerNavigator,DrawerItemList,
    DrawerContentScrollView,DrawerItem
  } from '@react-navigation/drawer'
import HomeStack from './HomeStack'
import JobStack from './JobStack';
import AccountStack from './RegisterStack'
import LoginStack from './LoginStack';
import ProfileStack from './ProfileStack'
import PendingStack from './PendingStack'
import { NavigationContainer } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet,View } from 'react-native';
import { doLogout } from '../redux/actions/action';

const Drawer = createDrawerNavigator()

function CustomDrawer(props){
  return (
        <DrawerContentScrollView {...props}>
          <View style={styles.header}>
          <FontAwesome5 name="smile-wink" style={{
            fontSize:100,
            color:"white",
            marginLeft:"auto",
            marginRight:"auto"
          }} />
          </View>
        <DrawerItemList {...props} />
        {props.account.loggedIn===true?<DrawerItem
          label="Logout"
          onPress={() => props.doLogout({navigation:props.navigation})}
          icon={()=><AntDesign name="poweroff" size={24} color="white" />}
          activeTintColor="white"
          inactiveTintColor="white"
        />:null}
      </DrawerContentScrollView>
    );
  }

function Navigation(props) {
    return (
        <NavigationContainer>
      <Drawer.Navigator 
      drawerContentOptions={{
        activeTintColor: 'white',
        itemStyle: { marginVertical: 10 },
        activeBackgroundColor:"black",
        inactiveTintColor:"white"
      }}
      drawerContent={drawerProps=><CustomDrawer {...drawerProps} {...props}/>}
      drawerStyle={{backgroundColor:"rgb(254, 114, 53)"}}>
        <Drawer.Screen name="Home" component={HomeStack}
        options={{drawerIcon:()=><AntDesign name="home" size={24} color="white" />}}
        />
        <Drawer.Screen name="Jobs" component={JobStack}
        options={{drawerIcon:()=><FontAwesome name="suitcase" size={24} color="white" />}}/>
        {
        props.account.loggedIn===false?
        <><Drawer.Screen name="Register" component={AccountStack}
        options={{drawerIcon:()=><AntDesign name="adduser" size={24} color="white" />}}/>
        <Drawer.Screen name="Login" component={LoginStack}
        options={{drawerIcon:()=><AntDesign name="user" size={24} color="white" />}}/></>:
        <><Drawer.Screen name="Profile" component={ProfileStack}
        options={{drawerIcon:()=><AntDesign name="user" size={24} color="white" />}}/>
        <Drawer.Screen name="Pending" component={PendingStack}
        options={{drawerIcon:()=><AntDesign name="form" size={24} color="white" />}}/></>
        }
      </Drawer.Navigator>
    </NavigationContainer>
    )
}

const mapDispathToProps = dispatch =>{
  return {
    doLogout:payload=>dispatch(doLogout(payload))
  }
}
export default connect(state=>{return {...state}},mapDispathToProps)(Navigation)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
      backgroundColor:"rgb(254, 114, 53)",
      padding:20
    }
  });