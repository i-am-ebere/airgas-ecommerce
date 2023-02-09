import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function App() {
  return (
    <View>
      <View style={styles.topBanner}>
        <Text style={styles.topBannerTitleText}>
          Contact List{' '}
          <Text style={styles.topBannerTitleSubText}>20 contacts</Text>
        </Text>
      </View>
      <View>
        <Text>A</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBanner: {
    backgroundColor: '#04947A',
    height: '45%',
    justifyContent: 'flex-end',
    paddingLeft: 20,
    paddingBottom: 10,
    borderBottomLeftRadius: 20,
  },
  topBannerTitleText: {
    color: '#FFFFFF',
    fontSize: 30,
  },
  topBannerTitleSubText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
});

export default App;
