import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import HomeNavigator from './HomeNavigator';
import styles from './style';

import SideMenu from './Sidemenu';

const getDrawerContent = navigation => {
  return <SideMenu navigation={navigation} />;
};

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={({navigation}) => getDrawerContent(navigation)}
    >
      <Drawer.Screen name="Home" component={HomeNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
