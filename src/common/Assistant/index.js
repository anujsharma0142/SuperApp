import {Image, View, StyleSheet, Pressable} from 'react-native';
import styles from './style';
import React from 'react';

const Assistant = () => {
  const MaxLifeAssistant =
    'https://bot.maxlifeinsurance.com/static/media/mili.79833e10.jpg';

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.logoContainer}
        onPress={() =>
          alert(
            "WELCOME TO THE MAXLIFE ASSISTANT TEAM! I HOPE YOU'RE DOING GOOD. PLEASE ASK ME IF YOU NEED ANY HELP.",
          )
        }>
        <Image source={{uri: MaxLifeAssistant}} style={styles.assistantLogo} />
      </Pressable>
    </View>
  );
};

export default Assistant;
