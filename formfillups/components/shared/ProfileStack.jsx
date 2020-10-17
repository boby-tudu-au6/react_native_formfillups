import React from 'react'
import {createStackNavigator} from  '@react-navigation/stack'
import Profile from '../profile/Profile'
import Header from './Header'

const Stack = createStackNavigator()
function ProfileStack({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Profile' component={Profile} 
            options={{
                headerTitle:(props)=><Header navigation={navigation} props={props}/>
            }} />
        </Stack.Navigator>
    )
}

export default ProfileStack
