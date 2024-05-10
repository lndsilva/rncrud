import React, {createContext, useReducer} from "react";
import users from "../data/users";

const initialState = { users }
const UsersContext = createContext({})

export const UsersProvider = props =>{

    function reducer(state, action){

    }
    
    const [state, dispatch] = useReducer(reducer,initialState)

    return (
        <UsersContext.Provider value={{
                state: {
                    users
                }
            }}>
                {props.children}

        </UsersContext.Provider>        
    )
}
export default UsersContext