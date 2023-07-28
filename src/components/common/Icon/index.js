import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const getIconFont = type => {
  switch (type) {
    case 'fontisto':
      return Fontisto;
    case 'AntDesign':
      return AntDesign;

    case 'material':
      return MaterialIcons;
    case 'fontAwesome5':
      return FontAwesome5;
    case 'fontAwesome':
      return FontAwesome;

    default:
      return FontAwesome;
  }
};

const Index = ({type, ...props}) => {
  const FontIcon = getIconFont(type);

  return <FontIcon {...props} />;
};

export default Index;
