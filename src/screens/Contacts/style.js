import {StyleSheet} from 'react-native';
import color from '../../assets/theme/color';

export default StyleSheet.create({
  text: {
    color: '#000',
  },
  floatingButton: {
    position: 'absolute',
    top: '0px',
    backgroundColor: color.primary, // Replace with the desired background color
    padding: 10,
    borderRadius: 100,
    zIndex: 1,
  },
});
