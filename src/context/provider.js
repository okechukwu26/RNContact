import react, {createContext, useReducer} from 'react';
import auth from './reducers/auth';
import authInitialState from './initialState/authInitialState';
import contacts from './reducers/contacts';
import contactState from './initialState/contactState';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactsState, contactDispatch] = useReducer(contacts, contactState);
  return (
    <GlobalContext.Provider
      value={{
        authState,
        contactDispatch,
        contactState,
        authDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
