import React from 'react'
import Register from '../register/Register'
import {createStackNavigator} from '@react-navigation/stack'
import Header from './Header'

const Stack = createStackNavigator()

function AccountStack({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Register' 
            component={Register} 
            options={{
                headerTitle:props=><Header navigation={navigation} props={props} />
            }}
            />
        </Stack.Navigator>
    )
}

export default AccountStack
