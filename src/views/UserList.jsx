import React, { useContext } from "react";
import { View, FlatList, Alert } from "react-native";
import users from "../data/users";
import { ListItem, Avatar, ThemeProvider, Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';
import { color } from "@rneui/base";
import UsersContext from "../context/UsersContext";


export default props=>{

    const { state } = useContext(UsersContext)

    function confirmUserDeletion(user){
        Alert.alert('Excluir usuário','Deseja excluir o usuário?',
        [{
            text: 'Sim',
            onPress(){
                console.log('Usuário deletado: ' + user.id)
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

    function getAction(user){
        return (
            <>
                <Button 
                    onPress={()=> props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color='orange'/>}
                />
                <Button 
                    onPress={()=> props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color='red'/>}
                />
            </>
        )
    }
    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}