import React,{Component, useEffect, useState} from 'react';
import { render } from 'react-dom';
import { View, Text , StyleSheet , Button, Image, TextInput, FlatList ,form,Input,TouchableOpacity} from 'react-native';

import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector'; 

//fetch data API
function OpenCameraPage({navigation,route}){
    //window.resultLesson=route.params.Container_Lesson;
        const [hasPermission, setHasPermission] = useState(null);
        const [type, setType] = useState(Camera.Constants.Type.back);
        const [changCamera,setChangeCamera]= useState(false);
        const faces=useState([])
        useEffect(() => {
            (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
            })();
        }, []);
    
        if (hasPermission === null) {
            return <View />;
        }
        if (hasPermission === false) {
            return <Text>No access to camera</Text>;
        }
    
        const faceDetector =  ({faces}) => {
            if(faces.length > 0){
            setChangeCamera(true);
            }else{
            setChangeCamera(false);
            }
        }
        const takePicture =async () => {
            if (this.camera) {
                const options = { quality: 0.5, base64: true, mirrorImage: true };
                let photo = await this.camera.takePictureAsync(options);
                console.log(photo.uri);
    
                try{
                    var formdata = new FormData()
                    formdata.append('image',{
                    uri: photo.uri,
                    name: 'picture.jpg', 
                    type: 'image/jpg' 
                    })
                    const config = {
                    method: 'POST',
                    body: formdata
                    };
    
                    const url = 'https://service-face.herokuapp.com/';
                    fetch(url,config)
                    .then((response) => response.text())
                    .then((responseEND)=>{
                        let name = responseEND.substring()
                        alert(name);
                        console.log(name);
                        
                    })
                    
                    }catch (error){
                    console.log('Failed to fetch products: ', error);
                }
    
            }
    
        };
        // onPictureSaved = photo => {
        //     console.log(photo);
        // } 
    return (
        <View style={styles.container}>
          <Camera style={styles.camera} type={type} ref={(ref)=>{this.camera= ref}} 
    
            onFacesDetected= {faceDetector}
            faceDetectorSettings={{
              mode: FaceDetector.Constants.Mode.fast
            }}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}>
                <Text style={styles.text}> Flip </Text>
                
              </TouchableOpacity>
             
            </View>
            { setChangeCamera && 
              // <TouchableOpacity style={styles.captureButton} onPress={this.takePicture} >
              //   <Text>Button</Text>
              // </TouchableOpacity>
              
                <Button  title='TAKE' onPress={takePicture}></Button>
             
              
            }
          </Camera>
        </View>
    
    );
}
    
const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      camera: {
        flex: 1,
      },
      buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
      },
      button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
      },
      text: {
        fontSize: 18,
        color: 'white',
      },
      captureButton:{
        flex: 0.1,
        justifyContent:'center',
        alignItems: 'center',
        textAlign:'center',
        width:'60%',
        height: 60
      }
});

export default OpenCameraPage;