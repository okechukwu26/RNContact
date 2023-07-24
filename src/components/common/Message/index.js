import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import color from '../../../assets/theme/color';

const Index = ({
  message,
  secondary,
  primary,
  danger,
  grey,
  retry,
  retryFn,
  onDismiss,
}) => {
  const [dismissed, setDismissed] = useState(false);
  const getBackcolor = () => {
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
    <>
      {dismissed ? null : (
        <TouchableOpacity
          style={[styles.wrapper, {backgroundColor: getBackcolor()}]}
        >
          <View style={[styles.loaderSection]}>
            <Text style={styles.text}>{message}</Text>
          </View>
          {retry && typeof onDismiss !== 'function' && (
            <Text style={styles.text}>retry</Text>
          )}
          {typeof onDismiss === 'function' && (
            <TouchableOpacity
              onPress={() => {
                setDismissed(true);
              }}
            >
              <Text style={[styles.text, {fontSize: 17}]}>X</Text>
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      )}
    </>
  );
};

export default Index;
