import {StyleSheet} from 'react-native';
import color from '../../../assets/theme/color';

export default StyleSheet.create({
  listItem: {
    paddingVertical: 100,
    paddingHorizontal: 65,
  },
  logoImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  text: {
    color: color.white,
    fontSize: 21,
    backgroundColor: color.secondary,
    borderRadius: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  renderContainer: {
    flexDirection: 'row',
    paddingVertical: 7,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 17,
  },
  phone: {
    opacity: 0.6,
    paddingVertical: 5,
  },
  seperator: {
    height: 0.5,
    backgroundColor: color.grey,
  },
  floatingButton: {
    backgroundColor: 'red',
    height: 50,
    width: 50,
    position: 'absolute',
    top: 20,
    right: 10,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: color.white,
  },
});
