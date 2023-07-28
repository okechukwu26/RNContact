import react, {useContext, useEffect, useState} from 'react';
import Icon from '../../components/common/Icon';
import Container from '../../components/common';
import styles from './style';
import ContactComponent from '../../components/common/ContactComponent';

import {GlobalContext} from '../../context/provider';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import color from '../../assets/theme/color';

const Contacts = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    contactsState: {
      getContacts: {data, loading},
    },
    contactDispatch,
  } = useContext(GlobalContext);
  return (
    <Container style={{backgroundColor: '#000'}}>
      <ContactComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        data={data}
        loading={loading}
        dispatch={contactDispatch}
      />
    </Container>
  );
};

export default Contacts;
