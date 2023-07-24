import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import Container from '..';
import Input from '../input';
import CustomButton from '../CustomButton';
import styles from './style';
import {LOGIN} from '../../../constants/routeName';
import {useNavigation} from '@react-navigation/native';
import color from '../../../assets/theme/color';
import Message from '../Message';
const RegisterComponent = ({errors, error, loading, onSubmit, onChange}) => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>
        {error && <Message retryFn={() => {}} message={error} retry danger />}
        <Input
          onChangeText={value => {
            onChange({name: 'userName', value});
          }}
          label="userName"
          error={errors.userName}
        />
        <Input
          onChangeText={value => {
            onChange({name: 'firstName', value});
          }}
          label="firstName"
          error={errors.firstName}
        />
        <Input
          onChangeText={value => {
            onChange({name: 'lastName', value});
          }}
          label="lastName"
          error={errors.lastName}
        />
        <Input
          onChangeText={value => {
            onChange({name: 'email', value});
          }}
          label="email"
          error={errors.email}
        />
        <Input
          onChangeText={value => {
            onChange({name: 'password', value});
          }}
          label="password"
          error={errors.password}
          icon={<Text>Show</Text>}
          iconPosition="right"
        />

        <CustomButton
          title="Submit"
          secondary
          onPress={onSubmit}
          loading={loading}
          disabled={loading}
        />
        <View style={styles.createSection}>
          <Text style={styles.textInfo}>Already have an account</Text>
          <TouchableOpacity onPress={() => navigate(LOGIN)}>
            <Text style={styles.linkBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
