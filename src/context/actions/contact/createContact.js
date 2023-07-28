import {
  CREATE_CONTACT_FAIL,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
} from '../../../constants/actionType';
import axiosInstance from '../../../helpers/axiosInterceptor';

export default data => dispatch => {
  dispatch({type: CREATE_CONTACT_LOADING});

  const request = {
    firstName: data.firstName,
    lastName: data.lastName,
    phone: data.phone,
  };

  axiosInstance
    .post('/contact/create')
    .then(res => {
      dispatch({type: CREATE_CONTACT_SUCCESS, payload: res.data.data});
    })
    .catch(error => {
      dispatch({
        type: CREATE_CONTACT_FAIL,
        payload: error.response
          ? error.response.data.message
          : 'Something went wrong try again',
      });
    });
};
