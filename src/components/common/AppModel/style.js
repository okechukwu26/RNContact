import {StyleSheet} from 'react-native';
import color from '../../../assets/theme/color';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: color.white,
    minHeight: 300,
    marginHorizontal: 20,
    borderRadius: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  body: {
    minHeight: 300,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 21,
  },
  seperator: {
    height: 0.5,
    backgroundColor: color.grey,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 7,
  },
  dot: {
    backgroundColor: color.grey,
    height: 5,
    borderRadius: 100,
    width: 5,
  },
  footerTitle: {
    color: '#000',
  },
});
