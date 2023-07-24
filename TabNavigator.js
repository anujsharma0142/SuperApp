import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Summary from './src/screens/Summary';
import Transaction from './src/screens/Transactions';
import Personal from './src/screens/Personal';
import BonusRefund from './src/screens/Bonus_Refund';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from './src/screens/Home';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        name="Summary"
        component={Summary}
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            if (route.name === 'Summary') {
              return <Feather name="file-text" size={size} color={color} />;
            } else if (route.name === 'Transactions') {
              return <AntDesign name="switcher" size={size} color={color} />;
            } else if (route.name === 'Personal') {
              return <Feather name="user" size={size} color={color} />;
            } else if (route.name === 'Bonus/Refund') {
              return <AntDesign name="gift" size={size} color={color} />;
            }
            // You can handle other tabs here if needed.
            return null; // Return null if you don't want to display an icon for other tabs.
          },
        })}
        tabBarOptions={{
          activeTintColor: '#318CE7', // Customize the active tab icon color
          inactiveTintColor: 'gray', // Customize the inactive tab icon color
          tabBarActiveBackgroundColor: '#F0F0F0', // Customize the background color of the active tab
        }}>
        <Tab.Screen
          name="Summary"
          component={Summary}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Transactions"
          component={Transaction}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Personal"
          component={Personal}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Bonus/Refund"
          component={BonusRefund}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
