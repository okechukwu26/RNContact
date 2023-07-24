import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '..';
import Input from '../input';
import CustomButton from '../CustomButton';
import Message from '../Message';
import styles from './style';
import {REGISTER} from '../../../constants/routeName';
import {useNavigation} from '@react-navigation/native';
const LoginComponent = ({error, errors, onChange, onSubmit, loading}) => {
  const {navigate} = useNavigation();
  console.log(error);
  return (
    <Container>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>please login here</Text>
        {error && <Message message={error} danger onDismiss={() => {}} />}
        {/* <Message
          message="invalid credential"
          secondary
          retry
          retryFn={() => {}}
          onDismiss={() => {}}
        />
        <Message
          message="invalid credential"
          primary
          retry
          retryFn={() => {}}
          onDismiss={() => {}}
        />
        <Message
          message="invalid credential"
          danger
          retry
          retryFn={() => {}}
          onDismiss={() => {}}
        />
        <Message
          message="invalid credential"
          grey
          retry
          retryFn={() => {}}
          onDismiss={() => {}}
        /> */}

        <Input
          label="Email"
          iconPosition="left"
          placeholder="Enter email"
          onChangeText={value => {
            onChange({name: 'email', value});
          }}
          error={errors.email}
        />
        <Input
          label="Password"
          icon={<Text>HIDE</Text>}
          iconPosition="right"
          onChangeText={value => {
            onChange({name: 'password', value});
          }}
          error={errors.password}
        />

        <CustomButton
          title="Submit"
          secondary
          onPress={onSubmit}
          loading={loading}
          disabled={loading}
        />
        <View style={styles.createSection}>
          <Text style={styles.textInfo}>Need a new Account?</Text>
          <TouchableOpacity onPress={() => navigate(REGISTER)}>
            <Text style={styles.linkBtn}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
