import React, {Component} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import style from '../style';
import {connect} from 'react-redux';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from 'native-base';
import loginActions from '../redux-saga/loginSaga/actions';

class signupDashboard extends Component {
  state = {
    loginPressed: false,
    signupPressed: false,
  };
  handleLogin = key => {
    if (key === 'signup') {
      this.setState({
        signupPressed: !this.state.signupPressed,
        loginPressed: false,
      });
      this.props.navigation.navigate('signup');
    } else {
      this.setState({
        signupPressed: false,
        loginPressed: !this.state.loginPressed,
      });
      this.props.navigation.navigate('login');
    }

    console.log('button preseed', key);
  };
  render() {
    return (
      <View style={style.topView}>
        <View style={style.signInButton1}>
          <Text style={style.welcomeText}>Welcome to your dashboard.</Text>
          <TouchableOpacity
            block
            info
            style={
              this.state.loginPressed
                ? style.signInButtonPressed
                : style.signInButton
            }
            onPress={e => this.handleLogin('login')}>
            <Text
              style={
                this.state.loginPressed
                  ? style.signInTextPressed
                  : style.signInText
              }>
              Log In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            block
            info
            style={
              this.state.signupPressed
                ? style.signInButtonPressed
                : style.signInButton
            }
            onPress={e => this.handleLogin('signup')}>
            <Text
              style={
                this.state.signupPressed
                  ? style.signInTextPressed
                  : style.signInText
              }>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default signupDashboard;
