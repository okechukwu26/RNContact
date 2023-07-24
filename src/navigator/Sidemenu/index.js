import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Container from '../../components/common';
import styles from './styles';
import color from '../../assets/theme/color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGIN, SETTINGS} from '../../constants/routeName';

const Index = ({navigation}) => {
  const MenuItem = [
    {
      icon: <Text style={styles.itemText}>T</Text>,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Text style={styles.itemText}>T</Text>,
      name: 'Logout',
      onPress: () => {
        
      },
    },
  ];
  const sqr = () => {
    let total = 0;
    const num = [3, 4];
    for (let i = 0; i < num.length; i++) {
      total += num[i] * num[i];
    }
    console.log(total);
  };
  const logOut = async () => {
    console.log('hello');
    await AsyncStorage.removeItem('user');
    navigation.navigate(LOGIN);
  };

  return (
    <SafeAreaView>
      <Container style={{backgroundColor: color.white}}>
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
                onPress={() => onPress()}
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
