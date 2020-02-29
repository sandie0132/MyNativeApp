import React, {Component} from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {DrawerActions} from '@react-navigation/native';

import style from '../style';

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Left,
  Title,
  Button,
} from 'native-base';
export default class Home extends Component {
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
            <Title style={{color: '#2C3E50', fontWeight: 'bold'}}>Home</Title>
          </Body>
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                  Welcome to home tab
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
