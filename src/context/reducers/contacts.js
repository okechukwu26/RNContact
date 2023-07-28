import {
  GET_CONTACT_FAIL,
  GET_CONTACT_LOADING,
  GET_CONTACT_SUCCESS,
} from '../../constants/actionType';

const contacts = (state, {type, payload}) => {
  switch (type) {
    case GET_CONTACT_LOADING:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: true,
        },
      };
    case GET_CONTACT_SUCCESS:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: false,
          data: payload,
          error: null,
        },
      };
    case GET_CONTACT_FAIL:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};

export default contacts;
