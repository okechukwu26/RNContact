import {StyleSheet} from 'react-native';
import color from '../../assets/theme/color';

export default StyleSheet.create({
  logoImage: {
    height: 150,
    width: 150,
    marginTop: 50,
    alignSelf: 'center',
  },
  item: {
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 17,
    color: '#000',
    paddingLeft: 20,
  },
});
