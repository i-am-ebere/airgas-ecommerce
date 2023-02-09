import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TopBanner} from './top-banner';
import CloseButtonIcon from '../assets/svg/close-button.svg';

interface IAddContactProps {
  shouldDisplayAddContact: (value: boolean) => void;
}

export function AddContact(props: IAddContactProps) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.closeButton}>
        <CloseButtonIcon
          onPress={() => props.shouldDisplayAddContact(false)}
          fill={'#04947A'}
        />
      </View>
      <TopBanner title={'Add Contact'} />
      <View>
        <Text>Add Contact</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    zIndex: 50,
    position: 'absolute',
    right: 40,
    bottom: 50,
  },
});
