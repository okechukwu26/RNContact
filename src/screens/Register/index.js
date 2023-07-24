import react, {useState, useContext, useEffect, useCallback} from 'react';
import env from '../../config/env';
import {SignUp, clearAuthState} from '../../context/actions/auth/register';
import RegisterComponent from '../../components/common/SignUp';
import axiosInstance from '../../helpers/axiosInterceptor';
import {GlobalContext} from '../../context/provider';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeName';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: {loading, data, error},
  } = useContext(GlobalContext);

  const {navigate} = useNavigation();

  useEffect(() => {
    if (data) {
      navigate(LOGIN);
    }
  }, [data]);
  useFocusEffect(
    useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {
              ...prev,
              password: 'password length must be more than 6 characters',
            };
          });
        } else {
          setErrors(prev => {
            return {...prev, password: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };
  const onSubmit = async () => {
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'please add a userName'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'please add a lastName'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'please add a firstName'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'please add a email'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'please add a password'};
      });
    }
    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      SignUp(form)(authDispatch);
    }
  };
  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default Register;
