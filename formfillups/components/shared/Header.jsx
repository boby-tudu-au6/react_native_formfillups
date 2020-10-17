import React from 'react'
import {View,Text} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import {
  useFonts,
  Nunito_400Regular,
  Lato_400Regular,
  Inter_900Black,
} from '@expo-google-fonts/dev';


function Header({navigation,props}){
  useFonts({
    
  Nunito_400Regular,
  Lato_400Regular,
  Inter_900Black,
  });
    return (
      <View style={{flexDirection:"row"}}>
      <Text style={{fontFamily:'Roboto_400Regular'}}>
        {props.children!=='Home'?props.children:'Formfillups'}
      </Text>
      <MaterialIcons 
      onPress={()=>navigation.toggleDrawer()}
      style={{marginLeft:'auto'}}
      name="menu" size={24} color="black" />
      </View>
    )
  }

export default Header
