import React, {useState} from 'react';
import {View, Text, StyleSheet, SectionList} from 'react-native';
import AddButtonIcon from './assets/svg/add-button.svg';
import {AddContact} from './src/add-contact';
import {TopBanner} from './src/top-banner';
const DATA = [
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
];
function App() {
  const [isShowingAddContact, setIsShowingAddContact] = useState(false);
  const contactCount = DATA.reduce(
    (total, curVal) => total + curVal.data.length,
    0,
  );

  if (isShowingAddContact) {
    return <AddContact shouldDisplayAddContact={setIsShowingAddContact} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.addButton}>
        <AddButtonIcon
          onPress={() => setIsShowingAddContact(true)}
          fill={'#04947A'}
        />
      </View>
      <TopBanner title={'Contact List'} contactCount={contactCount} />
      <View style={styles.paddingHorizontal10}>
        <SectionList
          sections={DATA}
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
  container: {
    flex: 1,
  },
  addButton: {
    zIndex: 50,
    position: 'absolute',
    right: 10,
    bottom: 40,
  },
  paddingHorizontal10: {
    paddingHorizontal: 10,
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
