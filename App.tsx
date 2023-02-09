import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>My first app</Text>
        <Person details={{name: 'Ebere I', occupation: 'React Native dev'}} />
      </View>
      <View>
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
  },
  title: {fontSize: 30, fontWeight: 'bold'},
});

export default App;
