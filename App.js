import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
import 'react-native-gesture-handler';
import First from './src/components/first';
import CreateNewAccount from './src/components/createNewAccount';
import SignIn from './src/components/signIn';
import signupDashboard from './src/components/signupDashboard';
import DrawerHome from './src/components/drawer';
import Timeline from './src/components/timeline';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="choose" component={signupDashboard} />
            <Stack.Screen name="signup" component={CreateNewAccount} />
            <Stack.Screen name="login" component={SignIn} />
            <Stack.Screen name="Drawer" component={DrawerHome} />

            {/* <Stack.Screen name="Timeline" component={Timeline} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
