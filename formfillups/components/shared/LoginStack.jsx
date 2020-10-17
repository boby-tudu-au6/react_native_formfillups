import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Login from '../login/Login'
import Header from './Header'

const Stack = createStackNavigator()

function LoginStack({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' 
            component={Login}
            options={{
                headerTitle:(props)=><Header navigation={navigation} props={props} />
            }} />
        </Stack.Navigator>
    )
}

export default LoginStack
