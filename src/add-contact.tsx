import React from 'react';
import {View, Text} from 'react-native';
import {TopBanner} from './top-banner';

export function AddContact() {
  return (
    <View style={{flex: 1}}>
      <TopBanner />
      <View>
        <Text>Add Contact</Text>
      </View>
    </View>
  );
}
