import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ITopBannerProps {
  title: string;
  contactCount?: number; // ? means the prop is optional
}

export function TopBanner(props: ITopBannerProps) {
  return (
    <View style={styles.topBanner}>
      <Text style={styles.topBannerTitleText}>
        {props.title}{' '}
        {!!props.contactCount && (
          <Text style={styles.topBannerTitleSubText}>
            {props.contactCount} contacts
          </Text>
        )}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topBanner: {
    backgroundColor: '#04947A',
    height: '25%',
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
