import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -1,
    right: 10,
  },

  logoContainer: {
    backgroundColor: '#fff',
    borderRadius: 35,
  },

  assistantLogo: {
    width: Platform.OS === 'android' ? 80 : 75,
    height: Platform.OS === 'android' ? 80 : 75,
    borderWidth: 1,
    borderRadius: 37,
    borderColor: '#002D62',
  },
});

export default styles;
