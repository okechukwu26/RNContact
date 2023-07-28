import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Input from '../input';
import Container from '..';
import styles from './style';
import CustomButton from '../CustomButton';
import {IMAGE_URL} from '../../../constants/general';
import CountryPicker from 'react-native-country-picker-modal';
import ImagePicker from '../ImagePicker';
const Index = ({
  onSubmit,
  onChange,
  errors,
  setForm,
  form,
  sheetRef,
  openSheet,
  closeSheet,
  onFileSelected,
}) => {
  return (
    <View style={styles.container}>
      <Container>
        <Image
          source={{uri: IMAGE_URL}}
          width={150}
          height={150}
          style={styles.image}
        />
        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseImage}> Choose image</Text>
        </TouchableOpacity>
        <Input
          label="firstName"
          placeHolder="Enter firstName"
          onChangeText={value => {
            onChange({name: 'firstName', value});
          }}
          error={errors.firstName}
        />
        <Input
          label="lastName"
          placeHolder="Enter lastName"
          onChangeText={value => {
            onChange({name: 'lastName', value});
          }}
          error={errors.lastName}
        />
        <Input
          label="phone"
          placeHolder="Enter phone number"
          type="tel"
          icon={
            <CountryPicker
              withFilter
              countryCode={form.countryCode || undefined}
              withCallingCodeButton={form.Code}
              withFlag
              withCountryNameButton={false}
              withCallingCode
              withEmoji
              onSelect={v => {
                const Code = v.callingCode[0];
                const countryCode = v.cca2;
                setForm({...form, Code, countryCode});
              }}
            />
          }
          iconPosition="left"
          error={errors.phone}
          onChangeText={value => {
            onChange({name: 'phone', value});
          }}
        />

        <CustomButton
          title="Submit"
          secondary
          onPress={() => {
            onSubmit();
          }}
        />
      </Container>

      <ImagePicker
        ref={sheetRef}
        onFileSelected={onFileSelected}
        closeSheet={closeSheet}
      />
    </View>
  );
};

export default Index;
