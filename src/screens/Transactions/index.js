import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Transaction = () => {
  return (
    <View style={styles.container}>
      <Text>Transaction</Text>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
