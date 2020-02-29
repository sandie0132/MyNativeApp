import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Home from './home';
import Dashboard from './dashboard';
import Calender from './calender';
import PieChart from './pieChart';

const Drawer = createDrawerNavigator();

class DrawerHome extends Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Calender" component={Calender} />
        <Drawer.Screen name="Pie-Chart" component={PieChart} />

        {/* <Drawer.Screen name="signup" component={CreateNewAccount} /> */}
      </Drawer.Navigator>
    );
  }
}

export default DrawerHome;
