import react, {useContext, useRef, useState} from 'react';
import {Text} from 'react-native';
import CreateContactComponent from '../../components/common/CreateContactComponent';
import {GlobalContext} from '../../context/provider';
import createContact from '../../context/actions/contact/createContact';

const CreateContacts = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {contactDispatch} = useContext(GlobalContext);
  const sheetRef = useRef(null);
  const onChange = ({name, value}) => {
    setForm(prev => {
      return {...prev, [name]: value};
    });
    if (value !== '') {
      if (name === 'phone') {
        if (value.length !== 11) {
          setErrors(prev => {
            return {...prev, phone: 'phone number must be 11 characters'};
          });
        } else {
          setErrors(prev => {
            return {...prev, phone: null};
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

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };

  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  const onFileSelected = images => {
    closeSheet();
    console.log(images);
  };

  const onSubmit = () => {
    if (!form.phone) {
      setErrors(prev => {
        return {...prev, phone: 'add phone Number'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'add firstName'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'add phone Number'};
      });
    }
    createContact(form)(contactDispatch);
  };
  return (
    <CreateContactComponent
      onSubmit={onSubmit}
      form={form}
      errors={errors}
      onChange={onChange}
      setForm={setForm}
      sheetRef={sheetRef}
      closeSheet={closeSheet}
      openSheet={openSheet}
      onFileSelected={onFileSelected}
    />
  );
};

export default CreateContacts;
