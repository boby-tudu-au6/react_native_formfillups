import React,{useEffect,useState} from 'react'
import {View,Text,ScrollView} from 'react-native'
import Axios from 'axios'
import { baseurl } from '../redux/actions/action'
import AsyncStorage from '@react-native-community/async-storage'
import ReloadBtn from '../reusable/ReloadBtn'
import Card from '../reusable/Card'
import Spinner from '../reusable/Spinner'

function Pending() {
    const [loading,setLoading] = useState(false)
    const [application,setApplications] = useState([])
    useEffect(()=>{
        getMyApplication()
    },[])

    async function getMyApplication(){
        try{
            setLoading(true)
            const token = await AsyncStorage.getItem("user")
            if(token!==null){
                const {data} = await Axios.post(`${baseurl}/getappliedjob`,{token})
                setApplications(data)
                setLoading(false)
            }
        }catch(err){
            setLoading(false)
            console.log(err.message)
        }
    }
    return (
        <View style={{flex:1}}>
            <Spinner data={loading} />
            <Text style={{
                textAlign:"center",fontSize:18,marginTop:12,
                marginBottom:12,fontWeight:"bold"
            }}>Your all Applications</Text>
            <ScrollView style={{flex:1}}>
            {
                application.map(item=>(
                    <Card key={item._id} 
                    color={item.status==='pending'?"red":"#4CAF50"} 
                    title={item.jobid.title} 
                    value={item.number}
                    value2={item.status}
                    />
                ))
            }
            </ScrollView>
            <ReloadBtn fun={getMyApplication}/>
        </View>
    )
}

export default Pending
