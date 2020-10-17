import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Jobs from '../jobs/Jobs'
import Header from './Header'


const Stack = createStackNavigator()

function JobStack({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Jobs' component={Jobs} options={{
            headerTitle:(props)=><Header navigation={navigation} props={props} />
          }}/>
        </Stack.Navigator>
    )
}

export default JobStack
