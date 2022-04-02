import React, { useState,Component  } from "react";
import { View, Picker, StyleSheet, Button, SafeAreaView ,TouchableOpacity,Text,Image} from "react-native";
//import { TouchableOpacity } from "react-native-gesture-handler";

function ChangeStatus({navigation,route}){
    const [selectedValue, setSelectedValue] = React.useState("0");
    window.Nhom=route.params.NHOM_ID;
    window.getID_Account=route.params.ID_Account;
    window.getUsername=route.params.Username;
    window.LOP_ID=route.params.LopID;
    window.MH_TEN=route.params.MHTen;
    async function ChangeStatusFunction(valueSelected) {       
        var data = new FormData();
        data.append('txtNhom',Nhom); 
        data.append('txtTrangThai',valueSelected); 
        // alert(valueSelected);
        //alert(Nhom);
        //console.log(data);
        let result= await fetch("http://"+IP+"/SystemAptech/DiemDanhSV/API_DiemDanh/API_ThayDoiTrangThaiLop.php",{
            method: 'POST',
            headers: {},
            body: data 
        }); 
        result= await result.json();
        console.log(result);
        if(result.Check == 1){
            alert("Cập nhật trạng thái thành công!");
            navigation.navigate('Home Page',{idAccount: getID_Account,username:getUsername});
        }
        else{
            alert("Cập nhật trạng thái thất bại! Vui lòng kiểm tra lại!");
            navigation.navigate('Home Page',{idAccount: getID_Account,username:getUsername});
        }
    }
    
    return (
        
        <View style={{backgroundColor:'#fff',alignItems:'center',textAlign:'center',width:'100%',height:800}}> 
            <Image source={require("./picture/Aptech.png")} style={{width:'95%',height:90}}></Image> 
            <Text style={{fontSize:27, color:'dodgerblue',fontWeight:'bold',textAlign:'center'}}>THAY ĐỔI TRẠNG THÁI LỚP  </Text>
            
            <Text style={{fontSize:25,color:'green'}}>Lớp: <Text style={{fontSize:20,color:'orange'}}>{LOP_ID}</Text></Text>  
            <Text style={{fontSize:20,color:'orange',fontStyle:'italic'}}>{MH_TEN}</Text> 
            <Text></Text> 
            <View style={{ borderWidth: 2, borderColor: 'lime', borderRadius: 4 }}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 200,fontSize:30 }}
                    
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily:"Ebrima", fontSize:17 }}
                >
                    <Picker.Item label="Vừa tạo" value="0" />
                    <Picker.Item label="Đang học" value="1" />
                    <Picker.Item label="Kết thúc" value="2" />
                </Picker>
            </View>
            <Text></Text>
            <TouchableOpacity onPress={()=>ChangeStatusFunction(selectedValue)}>
                <Text style={{textAlign:'center',borderColor:'#ffc107',borderWidth:3,width:180,fontSize:25,
                            borderBottomLeftRadius: 30,borderBottomRightRadius: 30,borderTopRightRadius:30,borderTopLeftRadius:30,
                            fontWeight:'bold',backgroundColor:'#ffc107',paddingTop:3}}>XÁC NHẬN</Text>
            </TouchableOpacity>
            {/* <Button title="OK" onPress={()=>ChangeStatusFunction(selectedValue)}></Button> */}
        </View>
    );
}
export default ChangeStatus;