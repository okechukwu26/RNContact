import React from 'react';
import {Text, Modal, TouchableOpacity, ScrollView, View} from 'react-native';
import styles from './style';
import Icon from '../Icon';
const AppModal = ({
  modalVisible,
  title,
  modalBody,
  modalFooter,
  setModalVisble,
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => setModalVisble(false)}
      >
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <Icon type="fontAwesome" color="#000" name="close" size={17} />
              <Text style={styles.title}>{title || 'RNContact'}</Text>
              <View />
            </View>
            <View style={styles.seperator} />
            <View style={styles.body}>{modalBody}</View>
            <View>
              {modalFooter}

              {!modalFooter && (
                <View>
                  <View style={styles.seperator} />
                  <View style={styles.footer}>
                    <Text style={styles.footerTitle}>Privacy policy</Text>
                    <View style={styles.dot} />
                    <Text style={styles.footerTitle}>Terms of service</Text>
                  </View>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AppModal;
