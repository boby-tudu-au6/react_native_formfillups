import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Pending from '../pending/Pending'
import Header from './Header'

const Stack = createStackNavigator()

function PendingStack({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{
                headerTitle:(props)=><Header navigation={navigation} props={props} />
            }} name='Pending' component={Pending} />
        </Stack.Navigator>
    )
}

export default PendingStack
