import React, {Component} from 'react';
import { View, Text , StyleSheet, Button, ScrollView,FlatList,Image,TouchableOpacity, TextInput,SafeAreaView} from 'react-native';
//import DatePicker from 'react-native-datepicker';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
function ShowLessonList({navigation,route}){
  const [txtLessonName,setLessonName]=React.useState("FirstCreateNameLesson"); 
  const onChangeHandler_LessonName = event => {
    setLessonName(event.nativeEvent.text); //currentTarget.
  }
  const getDateToday=new Date();
  let dateToday=getDateToday.getDate()+"/"+parseInt(getDateToday.getMonth()+1)+"/"+getDateToday.getFullYear() ;
  //console.log(dateToday);
  async function TaoBuoiHoc(){
    const item={txtLessonName,dateToday};
    if(TT == 2){
      alert("Lớp học đã kết thúc! Không thể tạo thêm buổi học");
    }else{
      if(txtLessonName == 'FirstCreateNameLesson')
        alert("Vui lòng nhập tên buổi học!");
      var data = new FormData();
      data.append('txtNhom',NHOM); 
      data.append('txtType',txtLessonName); 
      data.append('txtDate',dateToday); 

      let result= await fetch("http://"+IP+"/SystemAptech/DiemDanhSV/API_DiemDanh/API_CreateLesson.php",{
          method: 'POST',
          headers: {},
          body: data 
      });
      result= await result.json();
      //console.log(result.recordset.Check);
      if(result.recordset.Check == 1){
        alert('Successfully: Tạo buổi học thành công!');
        navigation.navigate('Lesson List Page',{NHOM_ID: NHOM}) 
      }else{
        alert('Error: Tạo buổi học thất bại!');
        navigation.navigate('Lesson List Page',{NHOM_ID: NHOM}) 
      }
    }
  }
  class  DataTableAttend extends Component{
    //lay du lieu
    constructor(props){
      super(props);
      this.state={
        data:[],
      }
    }
    componentDidMount(){
      var dataInput = new FormData();
      window.NHOM=route.params.NHOM_ID;
      window.LOP=route.params.LOP_ID;
      window.TT=route.params.TRANG_THAI;
      dataInput.append('txtNhom',NHOM);
      fetch("http://"+IP+"/SystemAptech/DiemDanhSV/API_DiemDanh/API_ShowLesson.php",{
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
    
    //hien thi
    render() {
      const {data}= this.state;
      const {date}= this.state;
      console.log(data);
      return(
          <View style={{backgroundColor:'white',padding:2,alignItems:'center',textAlign:'center',width:'99%',height:500}}>
            {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
              {/* <ScrollView>  */}
                <FlatList  style={{ flex:1,paddingTop:10}}
                data={data}
                renderItem={({item}) =>(      
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
                    <View style={{alignItems:'center',borderColor:'aqua',borderWidth:0}}>
                      <Image source={require('./picture/logoLesson2.jpg')} style={{width:160,height:150}}></Image>
                    </View>                
                    <View style={{alignItems:'center',borderColor:'aqua',borderWidth:0}}>
                      {item.TRANG_THAI==0 ? 
                        <TouchableOpacity onPress={()=> navigation.navigate('Attends Page',{NHOM_ID: item.NHOM_ID,BUOI_ID: item.BH_ID,LOP_ID: LOP})} 
                          style={{alignItems:'center'}}>
                          <Text style={{fontSize:25,color:'dodgerblue',width:210,textAlign:'center',textDecorationLine: 'underline',}}>
                              {item.TYPE_LESSON} 
                          </Text>
                          <Text style={{fontSize:20,color:'black'}}>
                              {item.DATE}
                          </Text>
                          <Text style={{fontSize:20,color:'red'}}>
                              {item.TOTAL} / {item.SiSo} 
                          </Text>
                        </TouchableOpacity>
                      :
                        <TouchableOpacity onPress={()=> navigation.navigate('Edit Page',{NHOM_ID: item.NHOM_ID,BUOI_ID: item.BH_ID,LOP_ID: LOP})} 
                          style={{alignItems:'center'}}>
                          <Text style={{fontSize:25,color:'dodgerblue',width:210,textAlign:'center',textDecorationLine: 'underline',}}>
                              {item.TYPE_LESSON} 
                          </Text>
                          <Text style={{fontSize:20,color:'black'}}>
                              {item.DATE}
                          </Text>
                          <Text style={{fontSize:20,color:'red'}}>
                              {item.TOTAL} / {item.SiSo} 
                          </Text>
                        </TouchableOpacity>
                      }
                      <TouchableOpacity >
                        <Text style={{fontSize:20,color:'green'}}> 
                            {item.TRANG_THAI == 0 ? <FontAwesome name="exclamation-circle" size={40} color="orange" />: <Feather name="check-circle" size={35} color="lime" />}                 
                        </Text>
                      </TouchableOpacity>
                    </View>
                    {/* </ScrollView> */}
                  </View>
                  
                )}
                keyExtractor = {item => item.BH_ID} 
                />
              {/* </ScrollView>  */}
            {/* </ScrollView>  */}
          </View > 
         
      )
    }
  }
  return(
    <View style={{backgroundColor:'#fff',alignItems:'center',textAlign:'center'}}>
      <Image source={require("./picture/Aptech.png")} style={{width:'95%',height:90}}></Image> 
      <Text style={{fontSize:27, color:'dodgerblue',fontWeight:'bold',textAlign:'center'}}>TẠO BUỔI HỌC</Text>
      {/* <Text style={{fontSize:25}}>Buổi</Text> */}
      <TextInput  onChange={(onChangeHandler_LessonName)} placeholder="Tên buổi học"  
              style={{textAlign:'center',fontSize:26,height:60,width: 350,borderWidth:5,borderColor:'black',borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,borderTopRightRadius:30,borderTopLeftRadius:30,color:'black'}}
      />
      
      <Text></Text>
      <TouchableOpacity onPress={(TaoBuoiHoc)} >
        <Text style={{textAlign:'center',borderColor:'#00FA9A',borderWidth:3,width:180,fontSize:25,
                fontWeight:'bold',backgroundColor:'gray',borderBottomLeftRadius: 30,borderBottomRightRadius: 30,borderTopRightRadius:30,borderTopLeftRadius:30}}>
          Tạo
        </Text>
      </TouchableOpacity>
      <Text style={{paddingBottom:5}}></Text>

      {/* <Button title="Attendance" onPress={ ()=> navigation.navigate('Lesson',{id_Lop:ID_LOP}) } /> */}
      <DataTableAttend /> 
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
});

export default ShowLessonList;