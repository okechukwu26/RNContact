import React, {Fragment, useContext, useEffect} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';

import AppModal from '../AppModel';
import getContact from '../../../context/actions/contact/getContact';
import color from '../../../assets/theme/color';
import ListEmptyComponent from './ListEmptyComponent';
import RenderItem from './RenderItem';
import Icon from '../Icon';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {CREATE_CONTACT} from '../../../constants/routeName';

const ContactComponent = ({
  modalVisible,
  data,
  loading,
  dispatch,
  setModalVisible,
}) => {
  const {navigate} = useNavigation();
  useEffect(() => {
    getContact()(dispatch);
  }, []);

  console.log(data);

  return (
    <>
      <View>
        <AppModal
          modalBody={
            <View>
              <Text style={{color: '#000'}}>hello from modal body</Text>
            </View>
          }
          title="my profile"
          modalFooter={<View></View>}
          modalVisible={modalVisible}
          setModalVisble={setModalVisible}
        />
        {loading && (
          <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
            <ActivityIndicator size={'large'} color={color.secondary} />
          </View>
        )}
        {data.length > 0
          ? data.map(item => {
              return (
                <TouchableOpacity key={item._id}>
                  <View style={styles.itemContainer}>
                    <RenderItem item={item} />
                    <Icon
                      type="fontAwesome5"
                      name="greater-than"
                      size={17}
                      color={color.grey}
                    />
                  </View>
                  <View style={styles.seperator} />
                </TouchableOpacity>
              );
            })
          : !loading && <ListEmptyComponent />}
        <View style={{height: 150}} />
      </View>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => {
          navigate(CREATE_CONTACT);
        }}
      >
        <Icon type="fontAwesome5" name="plus" size={21} style={styles.icon} />
      </TouchableOpacity>
    </>
  );
};

export default ContactComponent;
