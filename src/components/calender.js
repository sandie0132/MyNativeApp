import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {DrawerActions} from '@react-navigation/native';
import style from '../style';

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
export default class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const {selectedStartDate} = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
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
        <View style={styles.container}>
          <Text style={styles.selectDate}>SELECT DATE:{startDate}</Text>
          <CalendarPicker
            onDateChange={this.onDateChange}
            selectedDayColor="#2196F3"
            previousTitleStyle={{color: '#2196f3'}}
            nextTitleStyle={{color: '#2196f3'}}
            allowRangeSelection="true"
          />
          <View></View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 10,
  },
  selectDate: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
