import React,{useEffect,useState} from 'react'
import {View,Text,StyleSheet,FlatList } from 'react-native'
import JobCard from './JobCard'
import Axios from 'axios'
import { baseurl, getAppliedJob } from '../redux/actions/action'
import {connect} from 'react-redux'
import filter from '../reusable/filter'
import ReloadBtn from '../reusable/ReloadBtn'
import Spinner from '../reusable/Spinner'
import AsyncStorage from '@react-native-community/async-storage'

function Jobs({account,navigation}) {
    const [jobs,setJobs] = useState([])
    const [loading,setLoading] = useState(false)
    const [applied,setApplied]  = useState([])

    useEffect(()=>{
        getAllJob()
        return ()=>{
            console.log("component unmount")
            setApplied([])
        }
    },[])

    const getApplied = async () => {
        try{
            console.log('getApplied called')
            const token = await AsyncStorage.getItem("user")
            if(token!==null){
                const {data} = await Axios.post(`${baseurl}/getappliedjob`,{token})
            setApplied(data)
            }
        }catch(err){
            alert(err.message)
        }
    }
    async function getAllJob(){
        try{
            setLoading(true)
            await getApplied()
            const {data} = await Axios.get(`${baseurl}/getalljob`)
            if(applied.length!==0){
                console.log(applied.length)
                const jobs = filter(applied,data.jobs,'jobid','_id')
                setLoading(false)
                return setJobs(jobs);
            }
            setLoading(false)
            return setJobs(data.jobs)
        }catch(err){
            setLoading(false)
            alert('getAll error - '+err.message)
        }
    }

    async function applyJob(jobid){
        try{
            setLoading(true)
            const token = account.user;
            if(token!==null){
                const data = await Axios.post(`${baseurl}/applyjob`,{
                    token,jobid
                })
                if(data.status===200){
                    setLoading(false)
                   alert('applied successfully')
                }else{
                    setLoading(false)
                    alert("something went wrong")
                }
            }else{
                setLoading(false)
                navigation.navigate("Login")
            }
        }catch(err){
            setLoading(false)
            alert('getalljob'+''+err.message)
        }
    }

    return (
        <View style={s.container}>
            <Spinner data={loading} />
            <Text style={s.heading}>Available Jobs for you</Text>
            {
                jobs.length===0?
                <Text style={s.nothing}>Nothing here</Text>:
                <View style={{
                    flex:1,
                    padding:12
                }}>
                    <FlatList
                    style={{paddingBottom:20}}
                    data={jobs}
                    renderItem={(item)=>
                    <JobCard item={item} 
                    token={account.user}
                    applyJob={applyJob} />}
                    keyExtractor={item => (Math.random()).toString()}
                    /> 
                </View>
            
            }
            <ReloadBtn fun={getAllJob}/>
        </View>
    )
        }
const s = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        justifyContent:"flex-start",
    },
    heading:{
        fontSize:30,
        margin:10,
        textAlign:"center"
    },
    nothing:{
        textAlign:"center",
        fontSize:30,
        fontWeight:"bold",
        marginTop:20,
        color:"gray"
    }
})
const mapDispatch = dispatch =>{
    return {
        getAppliedJob:()=>dispatch(getAppliedJob())
    }
}
export default connect(state=>{return {...state}},mapDispatch)(Jobs)
