import React, {useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import {useContactListHook} from './use-contact-list-hook';

export function AddContact() {
  const navigation = useNavigation();
  const contactHook = useContactListHook();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [hasError, setHasError] = useState(false);

  function onSubmit() {
    setHasError(false);
    if (
      checkEmptyStrings(firstName) ||
      checkEmptyStrings(lastName) ||
      checkEmptyStrings(email) ||
      checkEmptyStrings(phone)
    ) {
      setHasError(true);
      return;
    }
    const data = {
      title: firstName.charAt(0),
      fullName: `${firstName} ${lastName}`,
    };

    contactHook.setContacts(data);
    navigation.goBack();
  }

  function checkEmptyStrings(value: string): boolean {
    return value.trim().length === 0;
  }

  return (
    <View style={[defaultStyles.container]}>
      <View style={styles.closeButton}>
        <CloseButtonIcon
          onPress={() => navigation.navigate('ContactListScreen')}
          fill={'#04947A'}
        />
      </View>
      <TopBanner title={'Add Contact'} />
      <View style={defaultStyles.paddingHorizontal10}>
        {hasError && <Text>One or more data is not valid</Text>}
        <TextInput
          value={firstName}
          onChangeText={text => setFirstName(text)}
          style={styles.textInput}
          placeholder={'First name'}
        />
        <TextInput
          value={lastName}
          onChangeText={text => setLastName(text)}
          style={styles.textInput}
          placeholder={'Last name'}
        />
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.textInput}
          placeholder={'Email'}
        />
        <TextInput
          value={phone}
          onChangeText={text => setPhone(text)}
          style={styles.textInput}
          placeholder={'Phone'}
        />

        <View>
          {/* <Button title="Add Contact" onPress={() => {}} />
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: 'red'}}>Add Contact</Text>
          </TouchableOpacity>
          <TouchableWithoutFeedback onPress={() => {}}>
            <Text style={{color: 'red'}}>Add Contact</Text>
          </TouchableWithoutFeedback> */}
          <Pressable
            onPress={onSubmit}
            style={({pressed}) => [
              styles.addButton,
              //   {backgroundColor: pressed ? 'green' : 'blue'},
            ]}>
            <Text style={styles.buttonText}>Add Contact</Text>
          </Pressable>
          <Pressable
            onPress={() => {}}
            style={({pressed}) => [
              styles.cancelButton,
              {backgroundColor: pressed ? '#DEDEDE' : 'gray'},
            ]}>
            <Text style={styles.buttonText}>Cancel</Text>
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
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 15,
  },
  addButton: {
    marginVertical: 15,
    backgroundColor: '#04947A',
    borderRadius: 10,
    padding: 15,
  },
  cancelButton: {
    backgroundColor: 'gray',
    borderRadius: 10,
    padding: 15,
  },
});
