import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {View, Text, StyleSheet, SectionList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {defaultStyles} from './assets/styles';
import AddButtonIcon from './assets/svg/add-button.svg';
import {AddContact} from './src/add-contact';
import {TopBanner} from './src/top-banner';
import {
  ContactListProvider,
  useContactListHook,
} from './src/use-contact-list-hook';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ContactListProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="ContactListScreen"
            component={ContactListScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="AddContactScreen"
            component={AddContact}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContactListProvider>
  );
}

function ContactListScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const contactHook = useContactListHook();
  // const [isShowingAddContact, setIsShowingAddContact] = useState(false);
  const contactCount = contactHook.contacts.reduce(
    (total, curVal) => total + curVal.data.length,
    0,
  );

  return (
    <View style={[defaultStyles.container, {marginBottom: insets.bottom}]}>
      <View style={styles.addButton}>
        <AddButtonIcon
          onPress={() => navigation.navigate('AddContactScreen')}
          fill={'#04947A'}
        />
      </View>
      <TopBanner title={'Contact List'} contactCount={contactCount} />
      <View
        style={[defaultStyles.paddingHorizontal10, defaultStyles.container]}>
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={contactHook.contacts}
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
