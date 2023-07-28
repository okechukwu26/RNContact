import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';
import {
  CONTACT_DETAILS,
  CONTACT_LIST,
  CREATE_CONTACT,
  REGISTER,
  SETTINGS,
} from '../constants/routeName';

import Contacts from '../screens/Contacts';
import ContactsDetail from '../screens/ContactDetail';
import CreateContacts from '../screens/CreateContacts';
import Settings from '../screens';
import Register from '../screens/Register';

const Contract = () => {
  return <Text>hi from here</Text>;
};

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Contacts" component={Contacts}></HomeStack.Screen>
      <HomeStack.Screen
        name={CONTACT_DETAILS}
        component={ContactsDetail}
      ></HomeStack.Screen>
      <HomeStack.Screen
        name={CREATE_CONTACT}
        component={CreateContacts}
      ></HomeStack.Screen>
      <HomeStack.Screen name={REGISTER} component={Register}></HomeStack.Screen>
      <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
