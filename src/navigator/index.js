import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import {GlobalContext} from '../context/provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator} from 'react-native';
const AppNavContainer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoaded, setAuthLoaded] = useState(false);
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  const getUser = async () => {
    const user = await AsyncStorage.getItem('user');

    if (user) {
      setAuthLoaded(true);
      setIsAuthenticated(true);
    } else {
      setAuthLoaded(true);
      setIsAuthenticated(false);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      {authLoaded ? (
        <NavigationContainer>
          {isLoggedIn || isAuthenticated ? (
            <DrawerNavigator />
          ) : (
            <AuthNavigator />
          )}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default AppNavContainer;
