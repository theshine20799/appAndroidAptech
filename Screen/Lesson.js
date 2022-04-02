import React,{Component, useEffect, useState} from 'react';
import { render } from 'react-dom';
import { View, Text , StyleSheet , Button, Image, TextInput, FlatList ,form,Input,TouchableOpacity, ScrollView} from 'react-native';

function LessonPage({navigation}){
    const OpenCamera = (DataLesson) => {
        navigation.navigate('Camera Page',{Container_Lesson:DataLesson})
        //alert(DataLesson);
    }
    class DataLesson extends Component{
        render(){
            return(
                <View>
                    <ScrollView>
                    <View style={{alignItems:'center'}}>
                       
                        <TouchableOpacity style={styles.Button_Lesson} onPress={ ()=>OpenCamera('T1')}> 
                            <Text>Lesson T1</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button_Lesson} onPress={ ()=>OpenCamera('T2')}> 
                            <Text>Lesson T2</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button_Lesson} onPress={ ()=>OpenCamera('L1')}> 
                            <Text>Lesson L1</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button_Lesson} onPress={ ()=>OpenCamera('T3')}>  
                            <Text>Lesson T3</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button_Lesson} onPress={ ()=>OpenCamera('L2')}> 
                            <Text>Lesson L2</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button_Lesson} onPress={ ()=>OpenCamera('T4')}>  
                            <Text>Lesson T4</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button_Lesson} onPress={ ()=>OpenCamera('L3')}> 
                            <Text>Lesson L3</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button_Lesson} onPress={ ()=>OpenCamera('T5')}>  
                            <Text>Lesson T5</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button_Lesson} onPress={ ()=>OpenCamera('L4')}> 
                            <Text>Lesson L4</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button_Lesson} onPress={ ()=>OpenCamera('T6')}> 
                            <Text>Lesson T6</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button_Lesson} onPress={ ()=>OpenCamera('L5')}> 
                            <Text>Lesson L5</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button_Lesson} onPress={ ()=>OpenCamera('T7')}>  
                            <Text>Lesson T7</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button_Lesson} onPress={ ()=>OpenCamera('L6')}> 
                            <Text>Lesson L6</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button_Lesson} onPress={ ()=>OpenCamera('T8')}>  
                            <Text>Lesson T8</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button_Lesson} onPress={ ()=>OpenCamera('L7')}> 
                            <Text>Lesson L7</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button_Lesson} onPress={ ()=>OpenCamera('T9')}> 
                            <Text>Lesson T9</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button_Lesson} onPress={ ()=>OpenCamera('L8')}>  
                            <Text>Lesson L8</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button_Lesson} onPress={ ()=>OpenCamera('T10')}> 
                            <Text>Lesson T10</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button_Lesson} onPress={ ()=>OpenCamera('L9')}> 
                            <Text>Lesson L9</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button_Lesson} onPress={ ()=>OpenCamera('T11')}> 
                            <Text>Lesson T11</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button_Lesson} onPress={ ()=>OpenCamera('L10')}>  
                            <Text>Lesson L10</Text> 
                        </TouchableOpacity>
                        <Text style={{paddingTop:25}}></Text>
                        <Text style={{paddingTop:25}}></Text>
                    </View>
                </ScrollView>
                </View>
            );
        }
    }
    return(
        
            <DataLesson />
        
    );
}
// const LessonPage= ({navigation, route}) =>{
    
//     window.idLop=route.params.id_Lop;
//     return(
//         <View style={{textAlign:'center',alignItems:'center'}}>
//             <Text style={{textAlign:'center',fontSize:27,fontWeight:'bold'}}>Lesson Of {idLop}</Text>
//             <DataLesson />
//         </View>
//     );
// }
const styles = StyleSheet.create({
    Button_Lesson: {
      flex:1,
      backgroundColor: "aqua",
      alignItems: "center",
      justifyContent: "center",
      width: 150,
      height:40,
      margin:4,
      borderColor:'black',
      borderWidth:3,
      paddingBottom:1,
      textAlign:'center',
      fontWeight:'bold'
    }
})
export default LessonPage;