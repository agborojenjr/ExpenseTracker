import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State 

const initialState = {
    transactions: [
      {id: 1, text:'Salary', amount:850},
      {id: 2, text:'Shopping', amount:-300},
      {id: 3, text:'Book', amount:-10},
      {id: 4, text:'Camera', amount:150},
      {id: 5, text:'Agbor', amount:250},
    ]
  }

//   Create Context
  
  export const GlobalContext = createContext(initialState);

// Create Provider

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
          dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
          });
    }
  
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
} 