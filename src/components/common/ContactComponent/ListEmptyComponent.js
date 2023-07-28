import React from 'react';
import {Text, View} from 'react-native';
import Message from '../Message';
import styles from './style';
export default function ListEmptyComponent() {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>No contact to show</Text>
    </View>
  );
}
