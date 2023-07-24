import {StyleSheet} from 'react-native';
import color from '../../../assets/theme/color';

export default StyleSheet.create({
  input: {
    flex: 1,
    width: '100%',
  },
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 5,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  inputContainer: {
    paddingVertical: 12,
  },
  error: {
    color: color.danger,
    fontSize: 12,
    paddingTop: 4,
  },
});
