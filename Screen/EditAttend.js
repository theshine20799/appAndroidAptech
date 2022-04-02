import React, {Component} from 'react';
import { View, Text , StyleSheet, Button, ScrollView,FlatList,Image,TouchableOpacity,CheckBox, TextInput} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

function EditAttendsFunction({navigation,route}){
  class  ClassComponentEditAttend extends Component{
    //lay du lieu
    constructor(props){
      super(props);
      this.state={
        data:[],
      }
    }
    componentDidMount(){
      var dataInput = new FormData();
      window.getNhom=route.params.NHOM_ID;
      window.getBuoi=route.params.BUOI_ID;
      
      dataInput.append('txtBUOI',getBuoi);
      fetch("http://"+IP+"/SystemAptech/DiemDanhSV/API_DiemDanh/API_ShowResultAttend.php",{
        method: 'POST',
        headers: { 
          //'Content-Type': 'application/json'
        },
        body: dataInput
      })
      .then((response) => response.json())
      .then((json) => {this.setState({data:json.recordset})})
      .catch((error)=> console.log(error));
    }

    onchecked(id){
      const data=this.state.data;
      const index=data.findIndex(x=>x.SV_MSSV===id);
      data[index].checked=!data[index].checked;
      this.setState(data)
    }
    getValueChecked(){
      var keys=this.state.data.map((t)=>t.SV_MSSV);
      var getKQDD=this.state.data.map((t)=>t.KET_QUA);
      var checks=this.state.data.map((t)=>t.checked);
      let Selected= []
      let KetQuaDD= []
      for(let i=0;i<checks.length;i++){
        if(checks[i]== true){
          Selected.push(keys[i])
          KetQuaDD.push(getKQDD[i])
        }
      } 
      //alert(Selected)
    
      for(let j=0;j<Selected.length;j++){
        var dataInputSV = new FormData();
        dataInputSV.append('txtMSSV',Selected[j]);
        dataInputSV.append('txtBUOI',getBuoi);
        dataInputSV.append('txtKET_QUA',KetQuaDD[j]);

        fetch("http://"+IP+"/SystemAptech/DiemDanhSV/API_DiemDanh/API_XuLyThayDoiDiemDanh.php",{
            method: 'POST',
            headers: { 
              //'Content-Type': 'application/json'
            },
            body: dataInputSV
        })
        .then((response) => response.json())
      }
      alert("Cập nhật thành công!");
      navigation.navigate('Lesson List Page',{NHOM_ID: getNhom}) 
    }
    //hien thi
    render() {
      const {data}= this.state;
      //console.log(data);
      return(
          <View style={{backgroundColor:'white',width:'99%',padding:5}}>
            {/* <ScrollView horizontal={true}> 
            <ScrollView> */}
              <View style={{flexDirection:'row',borderColor:'black',borderWidth:2}}>
                    <Text style={{width:80,borderColor:'black',borderWidth:1,textAlign:'center',fontSize:18,backgroundColor:'grey',color:'#00FA9A',fontWeight:'bold'}}>MSSV</Text>
                    <Text style={{width:200,borderColor:'black',borderWidth:1,textAlign:'center',fontSize:18,backgroundColor:'grey',color:'#00FA9A',fontWeight:'bold'}}>HỌ TÊN</Text> 
                    <Text style={{width:50,borderColor:'#black',borderWidth:1,textAlign:'center',fontSize:18,backgroundColor:'grey',color:'#00FA9A',fontWeight:'bold'}}>KQ</Text>
                    <Text style={{width:50,borderColor:'black',borderWidth:1,textAlign:'center',fontSize:18,backgroundColor:'grey',color:'#00FA9A',fontWeight:'bold'}}>EDIT</Text> 
              </View>
              <FlatList  style={{height:520}}
                data={data}
                renderItem={({item,index}) =>(    
                     
                  <View style={{flexDirection:'row',borderColor:'black',borderWidth:2}}>                   
                    <Text style={{width:80,borderColor:'black',borderWidth:1,textAlign:'center',fontSize:18}}>
                        {item.SV_MSSV}</Text> 
                    <Text style={{width:200,borderColor:'black',borderWidth:1,fontSize:18,textAlign:'left'}}>
                        <Text>  </Text>{item.SV_TEN} 
                    </Text> 
                    <Text style={{width:50,borderColor:'black',borderWidth:1,fontSize:18,alignItems:'center',textAlign:'center'}}>
                        {item.KET_QUA == 0 ? <AntDesign name="closecircleo" size={32} color="red" />: <Feather name="check-circle" size={32} color="green" />}
                    </Text> 
                    <View style={{width:50,borderColor:'black',borderWidth:1,fontSize:18,alignItems:'center'}}>
                        <CheckBox onPress={()=>{this.onchecked(item.SV_MSSV)}} key={item.SV_MSSV} style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                            value={item.checked}
                            onValueChange={()=>{this.onchecked(item.SV_MSSV)}}                     
                        />
                    </View>
                  </View>
                )}    
                keyExtractor = {item => item. SV_MSSV}                
              />
              <View style={{paddingTop:7,alignItems:'center',paddingBottom: 260,paddingTop:25}}>
                <TouchableOpacity onPress={ ()=> {this.getValueChecked() }}>
                    <Text style={{textAlign:'center',borderColor:'#ffc107',borderWidth:3,width:180,fontSize:25,
                            borderBottomLeftRadius: 30,borderBottomRightRadius: 30,borderTopRightRadius:30,borderTopLeftRadius:30,
                            fontWeight:'bold',backgroundColor:'#ffc107',paddingTop:3}}>
                      CHỈNH SỬA
                    </Text>
                </TouchableOpacity>
              </View>
            {/* </ScrollView> 
            </ScrollView>  */}
            
          </View>
      )
    }
  }
  return(
    <View style={{backgroundColor:'#fff',alignItems:'center',textAlign:'center'}}>
        <Image source={require("./picture/Aptech.png")} style={{width:'95%',height:90}}></Image> 
        <Text style={{fontSize:27, color:'dodgerblue',fontWeight:'bold',textAlign:'center'}}>KẾT QUẢ ĐIỂM DANH  </Text>
        <ClassComponentEditAttend/> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Title_MSSV_Table:{
    flex:1,
    width:60,
    borderColor:'#00FA9A',
    borderWidth:2,
    textAlign:'center',
    fontWeight:'bold',
    color:'#00FA9A',
    backgroundColor:'black',
    fontSize:18
  },
  Title_TEN_Table:{
    flex:1,
    width:380,
    borderColor:'#00FA9A',
    borderWidth:2,
    textAlign:'center',
    fontWeight:'bold',
    color:'#00FA9A',
    backgroundColor:'black',
    fontSize:18
  },
  Title_Check:{
    flex:1,
    width:40,
    borderColor:'#00FA9A',
    borderWidth:2,
    textAlign:'center',
    fontWeight:'bold',
    color:'#00FA9A',
    backgroundColor:'black',
    fontSize:18
  },
  Colum_Table:{
    flex:1,
    width:40,
    borderColor:'black',
    borderWidth:1,
    textAlign:'center',
    height:35
  },
  Value_SVMSSV:{
    flex:1,
    //width:150,
    fontWeight:'bold',
    color:'#00FA9A',
    fontSize:18,
    borderColor:'black',
    borderWidth:2,
    textAlign:'center',
    backgroundColor:'gray'
  },
  Value_SVTEN:{
    flex:8,
    width:160,
    fontSize:18,
    borderColor:'black',
    borderWidth:2
  },
  checkbox:{
    alignSelf: "center",
    width:40,
    borderColor:'#00FA9A',
    borderWidth:2
  }
});

export default EditAttendsFunction;