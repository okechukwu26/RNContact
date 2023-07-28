import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import color from '../../../assets/theme/color';

const RenderItem = ({item}) => {
  const {image, firstName, lastName, phone} = item;
  return (
    <View style={styles.renderContainer}>
      {image ? (
        <Image source={{uri: image}} style={styles.logoImage} />
      ) : (
        <View
          style={{
            backgroundColor: color.grey,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 45,
            width: 45,
            borderRadius: 100,
          }}
        >
          <Text style={[styles.name, {color: color.white, fontSize: 21}]}>
            {firstName[0]}
          </Text>
          <Text style={[styles.name, {color: color.white, fontSize: 21}]}>
            {lastName[0]}
          </Text>
        </View>
      )}
      <View style={{paddingLeft: 20}}>
        <View style={styles.item}>
          <Text style={styles.name}>{firstName} </Text>
          <Text style={styles.name}> {lastName}</Text>
        </View>
        <Text style={styles.phone}>{phone}</Text>
      </View>
    </View>
  );
};

export default RenderItem;
