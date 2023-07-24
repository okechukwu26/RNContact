import axiosInstance from '../../../helpers/axiosInterceptor';
import {
  REGISTER_LOADING,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  CLEAR_AUTH_STATE,
} from '../../../constants/actionType';

export const clearAuthState = () => dispatch => {
  dispatch({type: CLEAR_AUTH_STATE});
};

export const SignUp = ({
  email,
  password,
  firstName,
  lastName,
  userName,
}) => async dispatch => {
  try {
    dispatch({type: REGISTER_LOADING});
    const data = await axiosInstance.post('/contactAuth/signup', {
      email,
      password,
      firstName,
      lastName,
      userName,
    });
    dispatch({type: REGISTER_SUCCESS, payload: data.data});
  } catch (error) {
    console.log(error, error.response);
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response
        ? error.response.data.message
        : 'Something went wrong try again',
    });
  }
};
