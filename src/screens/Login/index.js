import react, {useContext, useEffect, useState} from 'react';
import LoginComponent from '../../components/common/Login';
import {GlobalContext} from '../../context/provider';
import {Signin} from '../../context/actions/auth/signin';

const Login = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const {
    authState: {error, loading, data},
    authDispatch,
  } = useContext(GlobalContext);

  const onChange = ({name, value}) => {
    setForm(prev => {
      return {...prev, [name]: value};
    });
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

  const onSubmit = () => {
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'please add email'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'please add password'};
      });
    }
    if (
      Object.values(form).length === 2 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      Signin(form)(authDispatch);
    }
  };

  return (
    <LoginComponent
      error={error}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
      loading={loading}
      form={form}
    />
  );
};

export default Login;
