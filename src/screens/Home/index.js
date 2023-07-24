import {Text, View} from 'react-native';
import styles from './style';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appContainer}>
        <Text style={styles.textContent}>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
