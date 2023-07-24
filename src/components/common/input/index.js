import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './style';
import color from '../../../assets/theme/color';

const Input = ({
  onChangeText,
  name,
  error,
  iconPosition,
  style,
  value,
  label,
  icon,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };
  const getBorderColor = () => {
    if (error) {
      return color.danger;
    }
    if (focused) {
      return color.grey;
    } else {
      return color.secondary;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {flexDirection: getFlexDirection(), borderColor: getBorderColor()},
        ]}
      >
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.input]}
          onChangeText={text => onChangeText(text)}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
