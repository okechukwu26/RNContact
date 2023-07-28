import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGOUT_USER} from '../../../constants/actionType';

export const LogoutUser = () => dispatch => {
  try {
    AsyncStorage.removeItem('user');
    AsyncStorage.removeItem('token');

    dispatch({type: LOGOUT_USER});
  } catch (error) {}
};
