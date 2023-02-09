import React, {useState} from 'react';
import {View, Text, StyleSheet, SectionList} from 'react-native';
import {defaultStyles} from './assets/styles';
import AddButtonIcon from './assets/svg/add-button.svg';
import {AddContact} from './src/add-contact';
import {TopBanner} from './src/top-banner';

function App() {
  const [contactList, setContactList] = useState([
    {
      title: 'A',
      data: ['Alyssa Lukens'],
    },
    {
      title: 'D',
      data: ['David Fasciano', 'Diana Margulis'],
    },
    {
      title: 'H',
      data: ['Harry ZdZairski'],
    },
    {
      title: 'J',
      data: ['John Gilman'],
    },
  ]);
  const [isShowingAddContact, setIsShowingAddContact] = useState(false);
  const contactCount = contactList.reduce(
    (total, curVal) => total + curVal.data.length,
    0,
  );

  if (isShowingAddContact) {
    return (
      <AddContact
        createContact={setContactList}
        shouldDisplayAddContact={setIsShowingAddContact}
      />
    );
  }

  return (
    <View style={defaultStyles.container}>
      <View style={styles.addButton}>
        <AddButtonIcon
          onPress={() => setIsShowingAddContact(true)}
          fill={'#04947A'}
        />
      </View>
      <TopBanner title={'Contact List'} contactCount={contactCount} />
      <View style={defaultStyles.paddingHorizontal10}>
        <SectionList
          sections={contactList}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    zIndex: 50,
    position: 'absolute',
    right: 10,
    bottom: 40,
  },
  item: {
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default App;
