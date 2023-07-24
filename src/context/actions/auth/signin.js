import AsyncStorage from '@react-native-async-storage/async-storage';

const {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} = require('../../../constants/actionType');
const {default: axiosInstance} = require('../../../helpers/axiosInterceptor');

export const Signin = ({password, email}) => async dispatch => {
  try {
    dispatch({type: LOGIN_LOADING});
    const login = await axiosInstance.post('/contactAuth/signin', {
      email,
      password,
      userName: 'hello',
    });
    const data = login.data.data;
    console.log(data.email, data.token);
    AsyncStorage.setItem('token', data.token);
    AsyncStorage.setItem('user', JSON.stringify(data.email));
    dispatch({type: LOGIN_SUCCESS, payload: login.data.data});
    // dispatch({type: LOGIN_SUCCESS});
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response
        ? error.response.data.message
        : 'Something went wrong',
    });
  }
};
