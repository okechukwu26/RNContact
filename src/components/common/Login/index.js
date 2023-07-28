import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Container from '..';
import Input from '../input';
import CustomButton from '../CustomButton';
import Message from '../Message';
import styles from './style';
import {REGISTER} from '../../../constants/routeName';
import {useNavigation} from '@react-navigation/native';
import Icon from '../Icon';
const LoginComponent = ({
  error,
  justSignedUp,
  form,
  errors,
  onChange,
  onSubmit,
  loading,
}) => {
  const {navigate} = useNavigation();
  const [secure, isSecure] = useState(true);

  const changeSecure = () => {
    isSecure(prev => !prev);
  };
  return (
    <Container style={{backgroundColor: '#000'}}>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>please login here</Text>
        {justSignedUp && (
          <Message
            onDismiss={() => {}}
            message="Account created successfully"
            secondary
          />
        )}
        {error && <Message message={error} danger onDismiss={() => {}} />}

        <Input
          label="Email"
          iconPosition="left"
          placeholder="Enter email"
          value={form.email}
          onChangeText={value => {
            onChange({name: 'email', value});
          }}
          error={errors.email}
        />
        <Input
          label="Password"
          icon={
            <TouchableOpacity
              onPress={() => {
                changeSecure();
              }}
            >
              <Text>
                {secure ? (
                  <Icon type="fontAwesome5" name="eye" size={20} />
                ) : (
                  <Icon type="fontAwesome5" name="eye-slash" size={20} />
                )}
              </Text>
            </TouchableOpacity>
          }
          iconPosition="right"
          secureTextEntry={secure}
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
