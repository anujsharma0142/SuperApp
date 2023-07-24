import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, {useState} from 'react';
import {Platform, ScrollView} from 'react-native';
import styles from './style';

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const Checkbox = ({isChecked}) => (
    <View>
      {isChecked ? (
        <AntDesign
          style={styles.marginRight}
          name="checksquare"
          size={20}
          color="#318CE7"
        />
      ) : (
        <AntDesign
          style={[styles.marginRight, {borderWidth: 0.2}]}
          name="checksquare"
          size={17}
          color="#fff"
        />
      )}
    </View>
  );

  return (
    <ScrollView style={styles.appContainer}>
      <View
        style={
          Platform.OS === 'ios' ? {marginLeft: 20, marginTop: 40} : {margin: 20}
        }>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Max_Life_Insurance_logo.svg/1200px-Max_Life_Insurance_logo.svg.png',
          }}
          style={styles.imageStyle}
        />
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Log in</Text>

        <View style={{marginTop: 30}}>
          <TextInput
            placeholder="Mobile number"
            style={[styles.textInput, {marginBottom: 30}]}
          />
          <TextInput placeholder="Date of birth" style={styles.textInput} />
        </View>

        <View style={styles.outerCheckbox}>
          <Pressable onPress={handleCheckboxChange}>
            <View>
              <Checkbox isChecked={isChecked} />
            </View>
          </Pressable>

          <View style={styles.buttonInnerText}>
            <Text>Get policy updates on</Text>
            <Image
              source={{
                uri: 'https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-phone-icon-png-image_6315989.png',
              }}
              style={styles.whatsAppIcon}
            />
            <Text> whatsapp</Text>
          </View>
        </View>

        <View style={{marginTop: 5}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Button pressed!')}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 13,
          }}>
          <View style={styles.container}>
            <View style={styles.border} />
            <Text style={styles.text}>or</Text>
            <View style={styles.border} />
          </View>
        </View>
      </View>

      <View style={{margin: 10, justifyContent: 'center'}}>
        <View style={{marginTop: 5}}>
          <TouchableOpacity
            style={styles.buttonOutFill}
            onPress={() => console.log('Button pressed!')}>
            <Text
              style={[styles.buttonText, {color: 'gray', fontWeight: '500'}]}>
              Log In With Policy Number
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 5}}>
          <TouchableOpacity
            style={styles.outFillButton}
            onPress={() => console.log('Button pressed!')}>
            <Text style={styles.outFillBtn}>Log In With Email</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 14, flexDirection: 'row'}}>
          <Text style={{fontSize: 15, fontWeight: '500', color: 'gray'}}>
            Trouble signing in?
          </Text>
          <Pressable onPress={() => console.log('click here')}>
            <Text style={styles.clickBtn}>Click Here</Text>
          </Pressable>
        </View>

        <Text style={styles.textUnderline} />

        <View
          style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 13, fontWeight: '500', color: 'gray'}}>
            Have you recently bought a policy?
          </Text>

          <TouchableOpacity
            style={{borderWidth: 1, borderRadius: 40, marginLeft: 5}}>
            <Text style={styles.trackBtn}>Track Application</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.textUnderline} />

        <View style={{marginTop: 30}}>
          <Text style={styles.quickLink}>QUICK LINKS</Text>
          <Text style={styles.visitBtn}>Visit Help Center</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
