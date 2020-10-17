import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../Home'
import Header from './Header'
import Register from '../register/Register'
import Jobs from '../jobs/Jobs'
import Login from '../login/Login'

// stack navigator example
const Stack = createStackNavigator()
function HomeStack({navigation}) {
    return (
        <Stack.Navigator>
          <Stack.Screen 
          name='Home' 
          options={{
            headerTitle:(props)=><Header navigation={navigation} props={props} />
          }}
          component={Home}/>
          <Stack.Screen name='Register' component={Register}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Jobs' component={Jobs}/>
        </Stack.Navigator>
    );
  }

export default HomeStack
