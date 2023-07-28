import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import Container from '../../components/common';
import styles from './styles';
import color from '../../assets/theme/color';
import Icon from '../../components/common/Icon';
import {SETTINGS} from '../../constants/routeName';
import {LogoutUser} from '../../context/actions/auth/logout';

const Index = ({navigation, dispatch}) => {
  const handleLogOut = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout!', 'Are you sure you want to logout', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Ok',
        onPress: () => {
          LogoutUser()(dispatch);
        },
      },
    ]);
  };
  const MenuItem = [
    {
      icon: (
        <Icon type="fontisto" color="#000" name="player-settings" size={17} />
      ),
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Icon type="material" color="#000" name="logout" size={17} />,
      name: 'Logout',
      onPress: ({navigation}) => {
        handleLogOut(navigation);
      },
    },
  ];

  return (
    <SafeAreaView>
      <Container style={{backgroundColor: color.white, height: '100vh'}}>
        <View>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logoImage}
          />
        </View>
        <View style={{alignItem: 'center', paddingHorizontal: 20}}>
          {MenuItem.map(({name, icon, onPress}) => {
            return (
              <TouchableOpacity
                key={name}
                style={styles.item}
                onPress={() => onPress(navigation)}
              >
                {icon}
                <Text style={styles.itemText}>{name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default Index;
