import React,{useState,useEffect} from 'react'
import {View,Text,Image,ScrollView,Picker
} from 'react-native'
import Button from '../reusable/Button'
import Input from '../reusable/Input'
import {s} from './style'
import * as ImagePicker from 'expo-image-picker'
import { connect } from 'react-redux'
import { baseurl, doLogout } from '../redux/actions/action'
import ImageBox from './ImageBox'
import Axios from 'axios'
import DatePicker from '../reusable/DatePicker'
import AsyncStorage from '@react-native-community/async-storage'
import * as FileSystem from 'expo-file-system';
import Spinner from '../reusable/Spinner'

let link = 'https://image.isu.pub/171228131114-2b81fad80024256c6a7265cb3ed30223/jpg/page_1.jpg'
let plink = 'https://www.w3schools.com/bootstrap4/img_avatar3.png'
let alink = 'https://aadhaarcardinfo.com/wp-content/uploads/2017/11/sample-images-aadhar-card-e1510748542474.jpg'


function Profile({navigation,doLogout}) {
    


    const [profile,setProfile] = useState([])
    const [uri,setUri] = useState({uri:plink})
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [father,setFather] = useState("")
    const [mother,setMother] = useState("");
    const [phone,setPhone] = useState('')
    const [relegion,setRelegion] = useState('Hindu')
    const [otherReg,setOtherReg] = useState('')
    const [showOtherReg,setShowOtherReg] = useState(false)
    const [gender,setGender] = useState('Male')
    const [cast, setCast] = useState("ST");
    const [other,setOther] = useState('')
    const [otherShow,showOther] = useState(false)
    const [date, setDate] = useState(new Date())
    const [showDate, setShowDate] = useState(false);
    const [iden1, setIden1] = useState("")
    const [iden2, setIden2] = useState('')
    const [addP, setAddP] = useState('')
    const [addC, setAddC] = useState('')
    const [loading,setloading] = useState(false)
    const [joinedAt, setJoined] = useState(null)
    const [adhaarF, setAdhaarF] = useState({uri:alink})
    const [adhaarB, setAdhaarB] = useState({uri:alink})
    const [doc10, setDoc10] = useState({uri:link})
    const [doc12, setDoc12] = useState({uri:link})
    const [docGrad, setDocGrad] = useState({uri:link})
    
    useEffect(()=>{
        getProfile()
    },[])

    const getProfile = async () =>  {
        try{
            setloading(true)
            const token = await AsyncStorage.getItem("user")
            let data = await Axios.post(`${baseurl}/getprofile`,{token})
            if(data.status===400){
                return console.log(data.data)
            }
            setProfile(data.data._doc)
            let dnow=data.data._doc
            setName(dnow.name)
            setPhone(dnow.phone)
            setEmail(dnow.email)
            setJoined(dnow.joinedAt)
            dnow.nameFather!==''?setFather(dnow.nameFather):null
            dnow.nameMother!==''?setMother(dnow.nameMother):null
            dnow.gender!==''?    setGender(dnow.gender):null
            dnow.cast!==''?     setCast(dnow.cast):null
            dnow.dob!==''?     setDate(new Date(dnow.dob)):null
            dnow.relegion!==''?  setRelegion(dnow.relegion):null
            dnow.iden1!==''?     setIden1(dnow.iden1):null
            dnow.iden2!==''?     nullsetIden2(dnow.iden2):null
            dnow.addressC!==''?  setAddC(dnow.addressC):null
            dnow.addressP!==''?  setAddP(dnow.addressP):null
            dnow.profilePic!==''?setUri({uri:dnow.profilePic}):null
            dnow.adhaarF!==''?   setAdhaarF({uri:dnow.adhaarF}):null
            dnow.adhaarB!==''?   setAdhaarB({uri:dnow.adhaarB}):null
            dnow.doc10!==''?     setDoc10({uri:dnow.doc10}):null
            dnow.doc12!==''?     setDoc12({uri:dnow.doc12}):null
            dnow.docGrad!==''?   setDocGrad({uri:dnow.docGrad}):null
            setloading(false)
        }catch(err){
            setloading(false)
            alert(`getProfile ${err.message}`)
            doLogout({navigation})
        }
    }
    const chekcSize = async (uri) =>{
        try{
            let fileInfo = await FileSystem.getInfoAsync(uri);
            if(fileInfo.size < 200000)return true
            return false
        }catch(err){
            console.log(err.message)
        }
    }
    const newfile = async (item,name)=> {
        if(item.uri.slice(0,5)!=='https'){

            let fileInfo = await chekcSize(item.uri)
            if(fileInfo===true){
                return {
                    uri:item.uri,
                    type:`image/${uri.uri.split('.')[1]}`,
                    name:`${name}.jpg`
                }
            }else{
                alert("image size should be less than 200kb")
            }
        }
        
    }
    async function uploadImg(){
        try{
            const formdata = new FormData()
            doc10.uri!==link?formdata.append('img',await newfile(doc10,'doc10')):null
            doc12.uri!==link?formdata.append('img',await newfile(doc12,'doc12')):null
            uri.uri!==plink?formdata.append("img",await newfile(uri,'profilePic')):null
            adhaarF.uri!==alink?formdata.append('img',await newfile(adhaarF,'adhaarF')):null
            adhaarB.uri!==alink?formdata.append('img',await newfile(adhaarB,'adhaarB')):null
            docGrad.uri!==link?formdata.append('img',await newfile(docGrad,'docGrad')):null
            formdata.append('name',name)
            formdata.append('email',email)
            formdata.append("gender",gender)
            formdata.append("phone",phone)
            formdata.append('nameFather',father)
            formdata.append('nameMother',mother)
            formdata.append('cast',cast==="Other"?other:cast)
            formdata.append("relegion",relegion==='Other'?otherReg:relegion)
            formdata.append('iden1',iden1)
            formdata.append('iden2',iden2)
            formdata.append('addressC',addC)
            formdata.append('addressP',addP)
            formdata.append('dob',date.toString())
            formdata.append("_id",profile._id)
            setloading(true)
            await Axios.post(`${baseurl}/uploadimg`,formdata)
            setloading(false)
        }catch(err){
            setloading(false)
            alert(err.message)
            doLogout({navigation})
        }
    }

    async function openImagePickerAsync (args) {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!")
        return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync()
        if(pickerResult.cancelled===false)return args(pickerResult)
  }

    return (
        <View style={{flex:1,width:'100%'}}>
            <Spinner data={loading} />
        {
            profile!==null?
            (
                <ScrollView style={s.container}>
                <View style={s.form}>
                    <Text style={{marginBottom:20,fontSize:20,fontWeight:'bold',textAlign:"center"}}>Manage your profile</Text>
    
                    <Image source={{uri:uri.uri}} style={s.profilePic} />
    
                    <Button text={'Change'}
                    fun={()=>openImagePickerAsync(setUri)}
                    textStyle={{color:"white",textAlign:"center"}} 
                    style={{marginTop:20,backgroundColor:"#F50057"}} />
                    <Text style={{
                        textAlign:"center",
                        marginTop:10,
                        fontSize:20,
                        fontWeight:"bold"
                    }}>Joined at</Text>
                    <Text style={{textAlign:"center"}}>
                        {
                        joinedAt!==null?(new Date(joinedAt)).toDateString():null
                        }
                    </Text>
                    <View style={{flex:1,flexDirection:"column",paddingBottom:20}}>
                    
                        
                        <View style={{marginBottom:12}}>
                            <Text style={{marginLeft:'6%',fontWeight:"bold",marginBottom:5}}>Name</Text>
                            <Input style={s.input} value={name} fun={(e)=>setName(e)}/>
                        </View>
    
                        
                        <View style={{marginBottom:12}}>
                            <Text style={{marginLeft:'6%',fontWeight:"bold",marginBottom:5}}>Father's name</Text>
                            <Input style={s.input} value={father} fun={(e)=>setFather(e)}/>
                        </View>
    
                        
                        <View style={{marginBottom:12}}>
                            <Text style={{marginLeft:'6%',fontWeight:"bold",marginBottom:5}}>Mother's name</Text>
                            <Input style={s.input} value={mother} fun={(e)=>setMother(e)}/>
                        </View>
    
                        
                        <View style={{marginBottom:12}}>
                            <Text style={{marginLeft:'6%',fontWeight:"bold",marginBottom:5}}>Phone</Text>
                            <Input style={s.input} value={phone.toString()} fun={(e)=>setPhone(e)} keyType={'numeric'}/>
                        </View>
                        
                        
                        <View style={{marginBottom:12}}>
                            <Text style={{marginLeft:'6%',fontWeight:"bold",marginBottom:5}}>Email</Text>
                            <Input style={s.input} value={email} fun={(e)=>setEmail(e)} keyType={'email-address'}/>
                        </View>
    
                        
                        <View style={{marginBottom:12}}>
                            <Text style={{marginLeft:'6%',fontWeight:"bold",marginBottom:5}}>Gender</Text>
                            <View style={[s.input,{padding:0}]}>
    
                            <Picker
                                selectedValue={gender}
                                onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                            >
                                <Picker.Item label="Male" value="Male" />
                                <Picker.Item label="Female" value="Female" />
                            </Picker>
                            </View>
                        </View>
    
                        
                        <View style={{marginBottom:12}}>
                            <Text style={{marginLeft:'6%',fontWeight:"bold",marginBottom:5}}>Cast</Text>
                            <View style={[s.input,{padding:0}]}>
    
                            <Picker
                                selectedValue={cast}
                                onValueChange={e=>{
                                    if(e==="Other") {
                                        setCast(e)
                                        return showOther(true)
                                    }
                                    showOther(false)
                                    return setCast(e)
                                }} 
                            >
                                <Picker.Item label="ST" value="ST" />
                                <Picker.Item label="OBC" value="OBC" />
                                <Picker.Item label="Genral" value="Genral" />
                                <Picker.Item label="Other" value="Other" />
                            </Picker>
                            {
                                otherShow===true?
                                <Input style={s.input} value={other} fun={(e)=>setOther(e)}/>
                                :null
                            }
                            </View>
                        </View>
                        
                         <DatePicker
                        value={date}
                        setShow={setShowDate}
                        showValue={showDate}
                        label="DOB"
                        setValue={setDate}
                        /> 
    
                        
                        <View style={{marginBottom:12}}>
                            <Text style={{marginLeft:'6%',fontWeight:"bold",marginBottom:5}}>Relegion</Text>
                            <View style={[s.input,{padding:0}]}>
    
                            <Picker
                                selectedValue={relegion}
                                onValueChange={e =>{
                                    if(e==="Other"){
                                        setShowOtherReg(true)
                                        return setRelegion(e)
                                    }
                                    setShowOtherReg(false)
                                    setRelegion(e)
                                }}
                            >
                                <Picker.Item label="Hindu" value="Hindu" />
                                <Picker.Item label="Muslim" value="Muslim" />
                                <Picker.Item label="Christian" value="Christian" />
                                <Picker.Item label="Sikh" value="Sikh" />
                                <Picker.Item label="Other" value="Other" />
                            </Picker>
                            {
                                showOtherReg===true?
                                <Input style={s.input} value={otherReg} fun={(e)=>setOtherReg(e)}/>
                                :null
                            }
                            </View>
                        </View>
    
                        
                        <View style={{marginBottom:12}}>
                            <Text style={{marginLeft:'6%',fontWeight:"bold",marginBottom:5}}>Identification 1</Text>
                            <Input style={s.input} value={iden1} fun={(e)=>setIden1(e)}/>
                        </View>
    
                        
                        <View style={{marginBottom:12}}>
                            <Text style={{marginLeft:'6%',fontWeight:"bold",marginBottom:5}}>Identification 2</Text>
                            <Input style={s.input} value={iden2} fun={(e)=>setIden2(e)}/>
                        </View>
    
                        
                        <View style={{marginBottom:12}}>
                            <Text style={{marginLeft:'6%',fontWeight:"bold",marginBottom:5}}>Permanent Address</Text>
                            <Input style={s.input} value={addP} fun={(e)=>setAddP(e)}/>
                        </View>
    
                        
                        <View style={{marginBottom:12}}>
                            <Text style={{marginLeft:'6%',fontWeight:"bold",marginBottom:5}}>Corressponding address</Text>
                            <Input style={s.input} value={addC} fun={(e)=>setAddC(e)}/>
                        </View>
    
                         
                        
                        <ImageBox title='Adhaar front side' 
                        images={adhaarF} 
                        change={()=>openImagePickerAsync(setAdhaarF)} />
    
                         <ImageBox title='Adhaar back side' 
                        images={adhaarB} 
                        change={()=>openImagePickerAsync(setAdhaarB)} />
    
                        <ImageBox title='10th Marksheet' 
                        images={doc10} 
                        change={()=>openImagePickerAsync(setDoc10)} />
    
                        <ImageBox title='12th Marksheet' 
                        images={doc12} 
                        change={()=>openImagePickerAsync(setDoc12)} />
    
                        <ImageBox title='Graduation Marksheet' 
                        images={docGrad} 
                        change={()=>openImagePickerAsync(setDocGrad)} />
    
                        <Button text={'SAVE'}
                        fun={uploadImg}
                        textStyle={{color:"white",textAlign:"center"}} 
                        style={{marginTop:20,backgroundColor:"#F50057",
                        borderRadius:7,paddingLeft:20,paddingRight:20}} />
                    </View>
                </View>
            </ScrollView>):
            null
        }
        </View>
    )
}

const mapDispatch = dispatch =>{
    return {doLogout:payload=>dispatch(doLogout(payload))}
}
export default connect(state =>{return {...state}},mapDispatch)(Profile)
