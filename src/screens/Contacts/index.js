import react, {useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import style from './style';
import Container from '../../components/common';
import {useNavigation} from '@react-navigation/native';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();

  useEffect(() => {
    setOptions({
      headerShown: false,
      headerLeft: () => {
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}
        >
          <Text style={{padding: 10, color: '#000'}}>Nav</Text>
        </TouchableOpacity>;
      },
    });
  }, []);
  return (
    <Container>
      <Text style={style.text}>hi from Contacts</Text>
    </Container>
  );
};

export default Contacts;
