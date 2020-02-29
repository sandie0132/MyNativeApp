import React, {Component} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import style from '../style';
import {
  Container,
  Content,
  Header,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Left,
  Body,
  Right,
  Title,
  Subtitle,
  Icon,
} from 'native-base';

class SignIn extends Component {
  state = {
    signupPressed: false,
  };
  handleLogin = key => {
    if (key === 'signup') {
      this.setState({
        signupPressed: !this.state.signupPressed,
      });
      this.props.navigation.navigate('Drawer');
    }
  };
  render() {
    return (
      <Container>
        <Header transparent>
          <Left>
            <Button
              onPress={() => this.props.navigation.navigate('choose')}
              transparent>
              <Icon style={{color: 'blue'}} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{color: 'blue'}}>Back</Title>
          </Body>
          <Right />
        </Header>
        <Content style={style.mainDiv}>
          <View>
            <View style={style.div1}>
              <Text style={style.insideText1}>Sign In</Text>
            </View>
            <View style={style.div2}>
              <Item style={style.roundBox} rounded>
                <Input
                  style={style.insideText2}
                  placeholderTextColor="#A0A2A9"
                  placeholder="E-Mail or Phone Number"
                />
              </Item>
              <Item style={style.roundBox} rounded>
                <Input
                  style={style.insideText2}
                  placeholderTextColor="#A0A2A9"
                  placeholder="Password"
                />
              </Item>
            </View>
            <View style={style.div3}>
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
                  SignIn
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
// const style = StyleSheet.create({
//   roundBox: {
//     marginVertical: 12,
//     width: 280,
//     borderWidth: 5,
//   },
//   mainDiv: {
//     // flex: 1,
//     // backgroundColor: 'grey',
//   },
//   div1: {
//     marginBottom: 20,

//     height: 80,
//     backgroundColor: 'white',
//   },
//   insideText1: {
//     fontFamily: 'Roboto',
//     fontWeight: 'bold',
//     marginHorizontal: 20,
//     fontSize: 30,
//     color: '#3C67EA',
//     marginVertical: 20,
//     width: 350,
//   },
//   div2: {
//     alignItems: 'center',
//     // backgroundColor: 'blue',
//   },
//   div3: {
//     alignItems: 'center',
//   },
//   insideText2: {
//     marginHorizontal: 10,
//   },
//   signInButton: {
//     justifyContent: 'center',
//     borderRadius: 20,
//     margin: 20,
//     alignItems: 'center',
//     marginVertical: 20,
//     backgroundColor: 'white',
//     borderColor: '#6082EA',
//     borderWidth: 1.5,
//     height: 40,
//     width: 280,
//   },
//   signInButtonPressed: {
//     justifyContent: 'center',
//     borderRadius: 20,
//     margin: 20,
//     alignItems: 'center',
//     marginVertical: 20,
//     backgroundColor: '#2C59DF',
//     borderColor: '#6082EA',
//     borderWidth: 1.5,
//     height: 40,
//     width: 280,
//   },
//   signInText: {
//     color: '#6082EA',
//   },
//   signInTextPressed: {
//     color: 'white',
//   },
// });

export default SignIn;
