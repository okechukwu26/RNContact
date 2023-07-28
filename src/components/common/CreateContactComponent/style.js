import {StyleSheet} from 'react-native';
import color from '../../../assets/theme/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.grey,
  },
  image: {
    borderRadius: 100,
    alignSelf: 'center',
  },
  chooseImage: {
    alignSelf: 'center',
    color: color.info,
  },
});
