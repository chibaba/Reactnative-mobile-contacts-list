import { create } from 'eslint/lib/rules/*';
import React, {createContext, useReducer} from 'react';
import authInitialState from '../initialState/authInitialState';
import contactsInittialState from '../initialState/contactsInittialState';
import auth from './auth';
import contacts from './contacts';

const GlobalContext = createContext({})


const GlobalProviders= ({children}) => {

  const [authState, authDispatch] = useReducer(auth,  authInitialState );
  const [contactsState, contactsDispatch] = useReducer(contacts, contactsInittialState );


  return <GlobalContext.Provider value={{authState, contactsState, contactsDispatch, authDispatch}}>

    {children}
  </GlobalContext.Provider>

}

export default GlobalProviders;