import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import {TopBanner} from './top-banner';
import CloseButtonIcon from '../assets/svg/close-button.svg';
import {defaultStyles} from '../assets/styles';

interface IAddContactProps {
  shouldDisplayAddContact: (value: boolean) => void;
}

export function AddContact(props: IAddContactProps) {
  return (
    <View style={[defaultStyles.container]}>
      <View style={styles.closeButton}>
        <CloseButtonIcon
          onPress={() => props.shouldDisplayAddContact(false)}
          fill={'#04947A'}
        />
      </View>
      <TopBanner title={'Add Contact'} />
      <View style={defaultStyles.paddingHorizontal10}>
        <TextInput style={styles.textInput} placeholder={'First name'} />
        <TextInput style={styles.textInput} placeholder={'Last name'} />
        <TextInput style={styles.textInput} placeholder={'Email'} />
        <TextInput style={styles.textInput} placeholder={'Phone'} />

        <View>
          <Button title="Add Contact" onPress={() => {}} />
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: 'red'}}>Add Contact</Text>
          </TouchableOpacity>
          <TouchableWithoutFeedback onPress={() => {}}>
            <Text style={{color: 'red'}}>Add Contact</Text>
          </TouchableWithoutFeedback>
          <Pressable
            onPress={() => {}}
            style={({pressed}) => [
              {backgroundColor: pressed ? 'green' : 'blue'},
            ]}>
            <Text style={{color: 'red'}}>Add Contact</Text>
          </Pressable>
        </View>
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
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 15,
  },
});
