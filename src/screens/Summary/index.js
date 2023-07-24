import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';
import styles from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../common/Header';
import Table from '../../common/Table';
import Assistant from '../../common/Assistant';
import {useNavigation} from '@react-navigation/native';
import Home from '../Home';

const Summary = () => {
  //Navigation to HOME
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        {/* HEADER VIEW */}
        <Header />

        {/* UNDERLINE ROW */}
        <Text style={styles.textUnderline} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <Pressable
            style={{margin: 10, justifyContent: 'center'}}
            onPress={() => navigation.navigate('Home')}>
            <AntDesign name="arrowleft" color="#808080" size={24} />
          </Pressable>
          <View>
            <Text style={{color: '#808080', marginVertical: 5}}>
              Policy number
            </Text>
            <Text style={styles.policyText}>206279952</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 7,
            padding: 20,
            backgroundColor: '#E5E4E2',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.detailPolicy}>Policy Details</Text>
          <Pressable
            style={styles.underlineContainer}
            onPress={() => alert('General Insurance Policy Brochures')}>
            <View style={styles.underline} />
            <Text style={styles.underlinedText}>Download Policy Pack</Text>
          </Pressable>
        </View>

        <View style={{margin: 15}}>
          <Text style={styles.planName}>Plan name</Text>
          <Text style={styles.planText}>
            Max Life Life Gain Premier 20 Yr 10 Pay
          </Text>
        </View>

        {/* POLICY VIEW IN TABLE STRUCTURE */}
        <Table />

        <View style={styles.outerloanContainer}>
          <View>
            <Text style={styles.outerLoan}>Maximum loan amount</Text>
            <Text style={styles.outerLoanText}>₹92,817.94</Text>
          </View>
          <Pressable
            style={styles.underlineContainer}
            onPress={() =>
              alert(
                "E-Loan Request Raised...You'll get an update soon. THANK YOU!",
              )
            }>
            <View style={[styles.underline, {bottom: 35}]} />
            <Text style={styles.underlinedText}>Buy E-Loan</Text>
          </Pressable>
        </View>

        {/* UNDERLINE ROW */}
        <Text style={styles.textUnderline} />

        <View style={styles.tableContainer}>
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellHeader}>Loan interest due till date</Text>
              <Text style={styles.cellContent}>₹0.00</Text>
            </View>
            <View style={styles.verticalLine} />
            <View style={styles.cell}>
              <Text style={styles.cellHeader}>Outstanding loan</Text>
              <Text style={styles.cellContent}>₹0.00</Text>
            </View>

            {/* ASSISTANT LOGO MAX_LIFE */}
            <Assistant />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Summary;
