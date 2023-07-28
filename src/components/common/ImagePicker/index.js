import {TouchableOpacity, Text, View, LogBox} from 'react-native';
import React from 'react';
import styles from './style';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from '../Icon';
import color from '../../../assets/theme/color';
import ImagePicker from 'react-native-image-crop-picker';

LogBox.ignoreLogs([
  'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
]);
const ImagePickers = React.forwardRef(({onFileSelected}, ref) => {
  const Options = [
    {
      icon: (
        <Icon type="fontAwesome" name="camera" size={21} color={color.grey} />
      ),
      name: 'Take a picture',
      onPress: () => {
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
        }).then(image => {
          console.log(image);
        });
      },
    },
    {
      icon: (
        <Icon type="AntDesign" name="picture" size={21} color={color.grey} />
      ),
      name: 'Choose from Gallery',
      onPress: () => {
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(image => {
            onFileSelected(image);
          })
          .catch(err => console.log(err));
      },
    },
  ];

  return (
    <RBSheet
      ref={ref}
      height={300}
      duration={250}
      Animated={{
        useNativeDriver: true,
      }}
      customStyles={{
        container: {
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <View style={styles.container}>
        {Options.map(({name, icon, onPress}) => {
          return (
            <TouchableOpacity
              key={name}
              style={styles.pickerContainer}
              onPress={onPress}
            >
              {icon}
              <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </RBSheet>
  );
});

export default ImagePickers;
