import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default ({route,navigation})=>{
    
    const [user, setUser] = useState(route.param ? route.param : {})

    return (
        <View style={style.form}>
            <Text>Nome</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Infome o nome"
                value={user.name}/>        
       
            <Text>E-mail</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Infome o e-mail"
                value={user.email}/>
            
            <Text>URL Avatar</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarURL => setUser({...user, avatarURL})}
                placeholder="Infome a URL do avatar "
                value={user.avatarURL}/>
            <Button 
                title="Salvar"
                onPress={()=>{
                    navigation.goBack()
                }}                
            />
        </View>
    )
}

const style = StyleSheet.create(
    {
        form: {
            padding: 12,
        },
        input:{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 15,
        }
    }
)