import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <Text style={styles.title}>My first app</Text>
        <Person details={{name: 'Ebere I', occupation: 'React Native dev'}} />
      </View>
      <View style={{flex: 2, backgroundColor: 'purple'}}>
        <Text style={styles.title}>My Other app</Text>
        <Person
          details={{name: 'Not Ebere I', occupation: 'React Native dev'}}
        />
      </View>
      <View style={{flex: 3, backgroundColor: 'green'}}>
        <Text style={styles.title}>My Other app</Text>
        <Person
          details={{name: 'Not Ebere I', occupation: 'React Native dev'}}
        />
      </View>
    </SafeAreaView>
  );
}

interface IPersonProps {
  details: {
    name: string;
    occupation: string;
  };
}

function Person(props: IPersonProps) {
  return (
    <View>
      <Text>
        {props.details.name} - {props.details.occupation}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 14,
    flex: 1,
    backgroundColor: 'red',
    // justifyContent: 'space-between',
  },
  title: {fontSize: 30, fontWeight: 'bold'},
});

export default App;
