import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

import { enableScreens } from 'react-native-screens';
enableScreens();
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import "./global.js";

import Home from './Screen/Home';
import LoginPage from './Screen/Login';
import TableAttend from './Screen/TableAttend';
import LessonPage from './Screen/Lesson';
import OpenCameraPage from './Screen/OpenCamera';
import ShowLessonList from './Screen/ShowLesson';
import EditAttendsFunction from './Screen/EditAttend';
import ChangeStatus from './Screen/EditStatusLesson';
const Stack=createNativeStackNavigator();



//import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem,} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }
// component main
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen 
          name="Login Page" component={LoginPage}  
        />
        <Stack.Screen 
          name="Home Page" component={Home}  
          options={{headerLeft: () => null}}
        />
        <Stack.Screen 
          name="Attends Page" component={TableAttend} 
        />
        {/* <Stack.Screen 
          name="Lesson Page" component={LessonPage}  
        />        */}
        {/* <Stack.Screen 
          name="Camera Page" component={OpenCameraPage} 
        /> */}
        <Stack.Screen 
          name="Lesson List Page" component={ShowLessonList} 
        />
        <Stack.Screen 
          name="Edit Page" component={EditAttendsFunction} 
        />
        <Stack.Screen 
          name="Status Page" component={ChangeStatus} 
        />
      </Stack.Navigator> 

    </NavigationContainer>

    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Login Page" drawerContentOptions={{
    //       activeTintColor: '#e91e63',
    //       itemStyle: { marginVertical: 5 },
    //     }}>
        
    //     <Drawer.Screen name="Login Page" component={LoginPage} />
    //     <Drawer.Screen name="Home Page" component={Home} />
    //     <Drawer.Screen name="Attends Page" component={TableAttend} />
    //     <Drawer.Screen name="Lesson List Page" component={ShowLessonList} />
    //     <Drawer.Screen name="Edit Page" component={EditAttendsFunction} />
        
    //   </Drawer.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
