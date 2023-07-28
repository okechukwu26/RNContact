import {State} from 'react-native-gesture-handler';
import {
  CLEAR_AUTH_STATE,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../constants/actionType';

const auth = (state, {type, payload}) => {
  switch (type) {
    case REGISTER_LOADING:
      return {
        ...State,
        loading: true,
      };
    case LOGIN_LOADING:
      return {
        ...State,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null,
        isLoggedIn: true,
      };
    case CLEAR_AUTH_STATE:
      return {
        ...state,
        loading: false,
        error: null,
        data: null,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
        data: null,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
        data: null,
      };
    case LOGOUT_USER:
      return {
        ...state,
        data: null,
        loading: false,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default auth;
