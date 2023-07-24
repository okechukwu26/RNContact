import React from 'react';
import {TouchableOpacity, Text, View, ActivityIndicator} from 'react-native';
import styles from './style';
import color from '../../../assets/theme/color';
const Input = ({
  title,
  primary,
  secondary,
  danger,
  grey,
  loading,
  disabled,
  onPress,
  ...props
}) => {
  const getBackcolor = () => {
    if (disabled) {
      return color.grey;
    }
    if (secondary) {
      return color.secondary;
    }
    if (primary) {
      return color.primary;
    }
    if (danger) {
      return color.danger;
    }
    if (grey) {
      return color.grey;
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      style={[styles.wrapper, {backgroundColor: getBackcolor()}]}
    >
      <View style={[styles.loaderSection]}>
        {loading && <ActivityIndicator />}

        {title && (
          <Text
            style={{
              color: disabled ? '#000' : '#fff',
              paddingLeft: loading ? 5 : 0,
            }}
          >
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Input;
