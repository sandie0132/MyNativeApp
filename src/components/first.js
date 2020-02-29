import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import loginActions from '../redux-saga/loginSaga/actions'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
const axios = require('axios');
class RegisterUser  extends Component {
  state = {
    email : "",
    password : ""
  }

  handleStateChange = ( value, text)=>{
  if(value === "userName"){
    this.setState({
      email : text
    })
  }else if(value === "password"){
    this.setState({
      password : text
    })
  }
  }
  handleLogIn = async ()=>{
    console.log("hanlde----->", this.props)
    let data = {
      email : this.state.email,
      password : this.state.password
    }
   await this.props.registerNewUser(data)
    // const options = {
    //   method: 'POST',
    //   headers: { 'content-type': 'application/json' },
    //   data: this.state,
    //   url : 'http://localhost:8080/v1/auth/register',
    // };
   
    // axios.post('http://192.168.100.84:8080/v1/auth/register',data ).then((res)=>{
    //   console.log("response", res.status)
    // }, (err)=>{
    //   console.log("error", err)
    // })
    // console.log("hanlde----->")
    console.log("peopas=========>", this.props.userRegistered)
    if(this.props.userRegistered){
    alert("user has been registered now you can login")
    }

  }
  render() {
    // console.log("state----->", this.state)
    return (
        <View style={{flex : 1}}>
            <View style={{flex : 1,  backgroundColor: 'powderblue'}} >
            <Image style={{flex : 1 ,marginLeft : 90, width : 200}} source={require('../../socialmedia.png')}/>
            </View>
            <View style={{flex : 2,  backgroundColor: 'steelblue'}}>
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText = {(text)=> this.handleStateChange("userName", text)}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText = {(text)=> this.handleStateChange("password",text)}/>
            </Item>
          </Form>
          <View style={style.signInButton1}>
          <TouchableOpacity block info style={style.signInButton} onPress={ e => this.handleLogIn()}> 
            <Text style={style.signInText}>Sign In</Text>
          </TouchableOpacity>
          </View>
          <View style={style.signUp}>
          <Text style={style.signUpText1}>Do not have an account yet? </Text>
          <Text onPress={e => console.log("hi")} style={style.signUpText2}>SignUp</Text>
          </View>
        </Content>
      </Container>
      </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  signInButton1:{
flex : 1,
alignItems : "center",
marginVertical : 30
  },
  signInButton : {
    flex:1,
    justifyContent :"center",
    borderRadius : 20,
    margin : 20,
    alignItems : "center",
    marginVertical : 20,
    backgroundColor : "#3478DB",
    height : 40,
    width : 300

  },
  signInText : {
    fontFamily : "Roboto",
    fontSize : 18,
    color : "#ECEDF0"
  },
  signUp : {
    flex:1,
    flexDirection : 'row',
    alignItems: "center",
    justifyContent  :"center",
    // backgroundColor : "#6082EA",
  },
  signUpText2 : {
    color : "#3478DB"
  }
})

export default connect(
  state => ({
    userRegistered : state.LoginReducer.get('userRegistered')
  }),
  {
    registerNewUser : loginActions.registerNewUser
  }
)(RegisterUser);


