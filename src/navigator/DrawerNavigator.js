import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useContext} from 'react';
import HomeNavigator from './HomeNavigator';
import styles from './style';

import SideMenu from './Sidemenu';
import {GlobalContext} from '../context/provider';

const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu navigation={navigation} dispatch={authDispatch} />;
};

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const {authDispatch} = useContext(GlobalContext);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={({navigation}) =>
        getDrawerContent(navigation, authDispatch)
      }
    >
      <Drawer.Screen name="Home" component={HomeNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
