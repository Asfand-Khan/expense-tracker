import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions:[
          
        ]
}

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({children}) =>{
    const [state,dispatch]= useReducer(AppReducer,initialState);

    // create action

    const DeleteTransaction=(id)=>{
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        })
    }
    const AddTransaction=(transaction)=>{
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        })
    }

    return(
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            DeleteTransaction,
            AddTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}