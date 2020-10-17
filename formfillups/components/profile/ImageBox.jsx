import React,{useState} from 'react'
import {View,Modal,Text,Image,TouchableOpacity} from 'react-native'
import Button from '../reusable/Button'
import {s} from './style'
import { FontAwesome } from '@expo/vector-icons';
import ImageViewer from 'react-native-image-zoom-viewer';

function ImageBox({images,title,change}) {
    
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{marginBottom:12}}>
            <Text style={{marginLeft:'6%',fontWeight:"bold",marginBottom:5}}>{title}</Text>
            <View style={[s.input,{padding:10,flexDirection:"row"}]}>
                <Image source={images} style={{height:40,width:40}}/>
                <Button text={'Preview'}
                fun={()=>setModalVisible(true)}
                textStyle={{color:"white"}} 
                style={{
                    backgroundColor:"blue",
                    alignItems:"center",
                    width:"30%",
                    borderRadius:6,
                    }} />
                
                <Button text={'Change'}
                    fun={change}
                    textStyle={{color:"white"}} 
                    style={{
                        backgroundColor:"red",
                        width:"30%",
                        borderRadius:6,
                        alignItems:"center"
                        }} />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={{width:'100%',backgroundColor:'black',flex:1}}>
                        <TouchableOpacity onPress={()=>setModalVisible(false)} style={{width:"100%",alignItems:"flex-end",paddingRight:20,paddingTop:20,position:"absolute",zIndex:100}}>
                        <FontAwesome name="close" size={24} color="white" />
                        </TouchableOpacity>
                        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                            <ImageViewer imageUrls={[{url:images.uri}]} style={{width:'100%'}}/>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default ImageBox
