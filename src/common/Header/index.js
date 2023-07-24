import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import React from 'react';

const Header = () => {
  //MAXLIFE IMG
  const MAXLIFELOGO =
    'https://i.pinimg.com/originals/a9/58/c7/a958c79fd4b39865097be6cbf8a302ca.png';

  const HelpCentre = () => {
    alert('Help Centre called');
  };

  const Notification = () => {
    alert('Welcome to the MAXLIFE Notification');
  };

  const MenuBar = () => {
    alert('Menu Bar Called');
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <Image
          source={{
            uri: MAXLIFELOGO,
          }}
          style={styles.imageStyle}
        />
      </View>

      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 10,
        }}>
        <Pressable style={{marginHorizontal: 5}} onPress={HelpCentre}>
          <Text style={styles.helpText}>Help Centre</Text>
        </Pressable>
        <Pressable style={{marginHorizontal: 7}} onPress={Notification}>
          <MaterialIcons name="notifications-none" color="#111" size={18} />
        </Pressable>
        <Pressable style={{marginHorizontal: 5}} onPress={MenuBar}>
          <FontAwesome name="bars" color="#111" size={18} />
        </Pressable>
      </Pressable>
    </View>
  );
};

export default Header;
