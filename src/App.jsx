import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';

import UserList from "./views/UserList";
import UserForm from "./views/UserForm";
import { UsersProvider } from './context/UsersContext';


const Stack = createNativeStackNavigator()

export default props =>{
    return (
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="UserList" 
                screenOptions={
                    {
                        headerStyle: {
                            backgroundColor: '#f4511e'
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        }
                    }
                }>
                    <Stack.Screen 
                        name="UserList" 
                        component={UserList}
                        options={({navigation})=>{
                            return   {
                                title: "Lista de usuários",
                                headerRight:()=>(
                                    <Button
                                            onPress={()=>navigation.navigate("UserForm")} 
                                        type='clear'
                                        icon={<Icon name="add" size={25} color="white"/>}
                                    />
                                )
                            }
                        }
                        }
                    />
                    <Stack.Screen 
                        name="UserForm"
                        component={UserForm}
                        
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    )
}

