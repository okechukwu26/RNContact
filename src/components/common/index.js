import React from 'react';
import {ScrollView, View} from 'react-native';

const Container = ({children, style}) => {
  return (
    <ScrollView style={style}>
      <View style={{padding: 20}}>{children}</View>
    </ScrollView>
  );
};

export default Container;
