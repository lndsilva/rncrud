import React from "react";
import { View, FlatList, Alert } from "react-native";
import users from "../data/users";
import { ListItem, Avatar, ThemeProvider} from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';


export default props=>{

    function confirmUserDeletion(user){
        Alert.alert('Excluir usuário','Deseja excluir o usuário?',
        [{
            text: 'Sim',
            onPress(){
                console.log('delete' + user.id)
            }
        },
        {
            text: 'Não'
        }
    ]
        )
    }
    function getUserItem({item: user}){
        return (
            <ThemeProvider>
                <ListItem 
                    bottomDivider
                    onPress={()=>{
                        props.navigation.navigate('UserForm')
                    }}
                >                
                    <Avatar source={{uri: user.avatarURL}}/>
                    <ListItem.Content>
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Title>{user.email}</ListItem.Title>
                    </ListItem.Content>
                    
                    <ListItem.Chevron
                        name="edit"
                        color='orange'
                        size={25}
                        
                        onPress={
                            ()=> props.navigation.navigate('UserForm', user)
                        }/>
                    <ListItem.Chevron
                        name="delete"
                        color="red"
                        size={25}
                        
                        onPress={
                            ()=> confirmUserDeletion(user)
                        }/>
                    {/* <Icon name="edit" size={25} color="orange"/> */}
                </ListItem>
            </ThemeProvider>
        )
        
    }
    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}