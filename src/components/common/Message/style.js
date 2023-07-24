import {StyleSheet} from 'react-native';
import color from '../../../assets/theme/color';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height: 42,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginVertical: 4,
  },
  loaderSection: {
    flexDirection: 'row',
  },
  text: {
    color: '#fff',
    fontSize: 13,
  },
});
