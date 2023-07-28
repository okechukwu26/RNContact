import {
  GET_CONTACT_FAIL,
  GET_CONTACT_LOADING,
  GET_CONTACT_SUCCESS,
} from '../../../constants/actionType';
import axiosInstance from '../../../helpers/axiosInterceptor';

export default () => dispatch => {
  dispatch({type: GET_CONTACT_LOADING});

  axiosInstance
    .get('/contact')
    .then(res => {
      dispatch({type: GET_CONTACT_SUCCESS, payload: res.data.data});
    })
    .catch(error => {
      dispatch({
        type: GET_CONTACT_FAIL,
        payload: error.response
          ? error.response.data.message
          : 'Something went wrong try again',
      });
    });
};
