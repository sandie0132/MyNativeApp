import React, {Component} from 'react';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {DrawerActions} from '@react-navigation/native';

import {Dimensions} from 'react-native';
import style from '../style';

import {View, StyleSheet, TouchableHighlight} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  Text,
  Left,
  Body,
  Title,
  Button,
  Icon,
} from 'native-base';
const screenWidth = Math.round(Dimensions.get('window').width);

export default class Dashboard extends Component {
  ColorOne = [
    {
      borderColor: '#E74C3C',
      backgroundColor: '#F9EBEA',
      iconName: 'home',
      cardName: 'Home',
    },
    {
      borderColor: '#9B59B6',
      backgroundColor: '#F4ECF7',
      iconName: 'bar-chart',
      cardName: 'Analytics',
    },
    {
      borderColor: '#3498DB',
      backgroundColor: '#EBF5FB',
      iconName: 'tasks',
      cardName: 'Order',
    },
    {
      borderColor: '#16A085',
      backgroundColor: '#D1F2EB',
      iconName: 'tasks',
      cardName: 'Tasks',
    },
    {
      borderColor: '#F1C40F',
      backgroundColor: '#FCF3CF',
      iconName: 'bell',
      cardName: 'Sales',
    },
    {
      borderColor: '#7F8C8D',
      backgroundColor: '#D6DBDF',
      iconName: 'product-hunt',
      cardName: 'Product',
    },
  ];

  flexOneBackgroundColor = ['#F9EBEA', '#F4ECF7', '#EBF5FB'];
  render() {
    return (
      <Container>
        <Header
          style={{
            height: 70,
            backgroundColor: '#3498DB ',
          }}>
          <Left>
            <Button
              onPress={() =>
                this.props.navigation.dispatch(DrawerActions.openDrawer())
              }
              transparent>
              <EntypoIcon
                name="menu"
                size={30}
                color="#2196F3"
                style={{marginTop: 20}}
              />
            </Button>
          </Left>
          <Body style={style.headerLeftStyle}>
            <Title style={{color: '#2C3E50', fontWeight: 'bold'}}>
              Dashboard
            </Title>
          </Body>
        </Header>
        <Content>
          <View style={style.dashboardDiv}>
            {this.ColorOne.map(color => {
              return (
                <Card style={style.dashboardCards}>
                  <TouchableHighlight
                    style={{
                      borderRadius: Math.round(80) / 2,
                      width: 80,
                      height: 80,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 3,
                      borderColor: color.borderColor,
                      backgroundColor: color.backgroundColor,
                    }}
                    underlayColor="#ccc"
                    onPress={() => alert('Yaay!')}>
                    <Text>
                      <FontIcon
                        name={color.iconName}
                        size={30}
                        color={color.borderColor}
                      />
                    </Text>
                  </TouchableHighlight>
                  <Text
                    style={{
                      marginVertical: 10,
                      fontFamily: 'Roboto',
                      fontWeight: 'bold',
                      color: '#2C3E50',
                    }}>
                    {' '}
                    {color.cardName}
                  </Text>
                </Card>
              );
            })}
          </View>
        </Content>
      </Container>
    );
  }
}
