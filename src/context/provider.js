import react, {createContext, useReducer} from 'react';
import auth from './reducers/auth';
import authInitialState from './initialState/authInitialState';
import contacts from './reducers/contacts';
import contactInitialState from './initialState/contactInitialState';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactsState, contactDispatch] = useReducer(
    contacts,
    contactInitialState,
  );
  return (
    <GlobalContext.Provider
      value={{
        authState,
        contactDispatch,
        contactsState,
        authDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
