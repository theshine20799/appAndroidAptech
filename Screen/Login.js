import React,{Component, useEffect, useState} from 'react';
import { render } from 'react-dom';
import { View, Text , StyleSheet , Button, Image, TextInput, FlatList ,form,Input,TouchableOpacity,ImageBackground} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
var result;
var eTarget;

//fetch data API
function LoginPage({navigation}){
  
  const [txtID,setUsername]=React.useState("FirstCreateID"); 
  const [txtPass,setPass]=React.useState("FirstCreatePASS"); 
  
  const onChangeHandler_ID = event => {
    setUsername(event.nativeEvent.text); //currentTarget
  }
  const onChangeHandler_PASS = event => {
    setPass(event.nativeEvent.text);
  }
  async function Login(){
    const item={txtID,txtPass};
    var data = new FormData();
    data.append('txtID',txtID); //txtID
    data.append('txtPass',txtPass); //txtPass
    
    result= await fetch("http://"+IP+"/SystemAptech/DiemDanhSV/API_DiemDanh/API_Login.php",{
        method: 'POST',
        headers: {},
        body: data 
    });
    result= await result.json();
    window.tempResult=result;
    //alert(result.Check);
       
      if(result.Check == 1){
          //console.log(result.recordset[0].ID_ACOUNT);
          navigation.navigate('Home Page',{idAccount: result.recordset[0].id,username:result.recordset[0].username});
          //console.log(idAccount);
      } 
      else{
          //console.log(result);
          if(txtID == '' || txtPass == '')
              alert('Please, you can type Username and Password!');
          else
              alert('Your Email or Password incorrect! Please, try again!');
      } 
  }
  return (
    <View style={{flex: 1,justifyItems:'center',justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
      
        {/* <ImageBackground source={require("./picture/bgLogin.jpg")}style={{flex: 1,width:'100%',justifyItems:'center',justifyContent:'center',alignItems:'center'}}> */}
        <Image source={require("./picture/Aptech.png")} style={{width:'90%',height:90}}></Image> 
        <Text style={{fontWeight:'bold',fontSize:45,color:'black',padding:10,textDecorationLine: 'underline'}}>Login</Text>
        <Image source={require("./picture/logoUser3.png")} style={{width:'70%',height: 300,borderColor:'lime',borderWidth:0}}></Image> 
        
        
        <TextInput  placeholder="Type your Username ..."  onChange={(onChangeHandler_ID)} 
              style={{textAlign:'center',fontSize:26,height:60,width: '90%',borderWidth:5,borderColor:'black',borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,borderTopRightRadius:30,borderTopLeftRadius:30,color:'black',backgroundColor:'white'}}
        />
        
        <Text style={{fontSize:5}}></Text>
        
        
        <TextInput secureTextEntry={true} placeholder="Type your Password..." onChange={onChangeHandler_PASS} 
              style={{textAlign:'center',fontSize:26,height:60,width: '90%',borderWidth:5,borderColor:'black',borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,borderTopRightRadius:30,borderTopLeftRadius:30,color:'black',backgroundColor:'white'}}
        /> 
        
        <Text style={{padding:5}}></Text>
        
        <TouchableOpacity  onPress={Login}  style={{textAlign:'center',alignItems:'center',justifyContent:'center',fontSize:28,height:55,width: '45%',
              borderWidth:5,borderColor:'cyan',borderBottomLeftRadius: 30,borderBottomRightRadius: 30,borderTopRightRadius:30,borderTopLeftRadius:30,backgroundColor: 'cyan'}}> 
              <View>
                  <Text style={{fontWeight:'bold',fontSize:33}}>Login</Text>
              </View> 
        </TouchableOpacity> 
        <Text style={{padding:2}}></Text>
        <TouchableOpacity>
          <Text style={{color:'cyan',textDecorationLine: 'underline',margin:10,fontSize:17}}>Change Password</Text>
        </TouchableOpacity>
        
        {/* </ImageBackground> */}

      </View>
      
  );  
}

export default LoginPage;