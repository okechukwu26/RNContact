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
}) => dispatch => async onSuccess => {
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
    onSuccess(data.data);
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response
        ? error.response.data.message
        : 'Something went wrong try again',
    });
  }
};
