import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // You need to install this package

const Header = () => {
  const handleDrawerPress = () => {
    // Add the logic to open the drawer here
    console.log('Drawer icon pressed');
  };

  const handleBellPress = () => {
    // Add the logic for the bell icon press here
    console.log('Bell icon pressed');
  };

  return (
    <View style={styles.container}>
      {/* Left side logo */}
      <View style={styles.leftContainer}>
      <Image source={require('../assets/logo.png')} style={styles.logoImage} />
        <Text style={styles.logo}></Text>
      </View>

      {/* Right side icons */}
      <View style={styles.rightContainer}>
        {/* Help center text */}
        <TouchableOpacity onPress={handleBellPress}>
          <Text style={styles.helpCenterText}>Help Center</Text>
        </TouchableOpacity>

        {/* Bell icon */}
        <TouchableOpacity onPress={handleBellPress}>
          <Icon name="notifications-outline" size={25} color="#000" />
        </TouchableOpacity>

        {/* Drawer icon */}
        <TouchableOpacity onPress={handleDrawerPress}>
          <Icon name="menu-outline" size={25} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: '#ffffff',
    },
    leftContainer: {
      flexDirection: 'row',
      alignItems: 'center', // To center the logo image and text vertically
    },
    rightContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    logoImage: {
      width: 40, // Set the width of the logo image to make it smaller
      height: 30, // Set the height of the logo image to make it smaller
      marginRight: 8, // Add some spacing between the logo image and text
    },
    logo: {
      fontSize: 16, // Reduce the font size of the logo text
      fontWeight: 'bold',
    },
    helpCenterText: {
      marginRight: 16,
      fontSize: 16,
    },
  });
  

export default Header;
