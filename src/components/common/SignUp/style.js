import {StyleSheet} from 'react-native';
import color from '../../../assets/theme/color';

export default StyleSheet.create({
  logoImage: {
    height: 150,
    width: 150,
    marginTop: 50,
    alignSelf: 'center',
  },
  title: {
    paddingTop: 20,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    alignSelf: 'center',
    paddingVertical: 14,
    fontSize: 15,
    fontWeight: 'bold',
  },
  createSection: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  textInfo: {
    paddingLeft: 17,
    fontWeight: 'bold',
  },
  linkBtn: {
    fontSize: 17,
    paddingLeft: 10,
    color: color.primary,
  },
});
