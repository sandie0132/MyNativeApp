import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Pie from 'react-native-pie';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {DrawerActions} from '@react-navigation/native';

import style from '../style';
import {
  Container,
  Header,
  Content,
  Card,
  Left,
  Body,
  Title,
  Button,
  Icon,
} from 'native-base';
export default class PieChart extends React.Component {
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
          <View style={styles.container}>
            <View
              style={{
                paddingVertical: 15,
                flexDirection: 'row',
                width: 350,
                justifyContent: 'space-between',
              }}>
              <Pie
                radius={80}
                sections={[
                  {
                    percentage: 0,
                    color: '#2835DB',
                  },
                  {
                    percentage: 34,
                    color: '#2835DB',
                  },
                  {
                    percentage: 29,
                    color: '#175CE7',
                  },
                  {
                    percentage: 19,
                    color: '#85C1E9',
                  },
                ]}
                backgroundColor="#ddd"
                strokeCap={'butt'}
              />
              <Pie
                radius={80}
                innerRadius={50}
                sections={[
                  {
                    percentage: 10,
                    color: '#C70039',
                  },
                  {
                    percentage: 20,
                    color: '#44CD40',
                  },
                  {
                    percentage: 30,
                    color: '#404FCD',
                  },
                  {
                    percentage: 40,
                    color: '#EBD22F',
                  },
                ]}
                strokeCap={'butt'}
              />
            </View>
            <View
              style={{
                paddingVertical: 15,
                flexDirection: 'row',
                width: 350,
                justifyContent: 'space-between',
              }}>
              <Pie
                radius={80}
                innerRadius={60}
                sections={[
                  {
                    percentage: 10,
                    color: '#C70039',
                  },
                  {
                    percentage: 20,
                    color: '#44CD40',
                  },
                  {
                    percentage: 30,
                    color: '#404FCD',
                  },
                  {
                    percentage: 40,
                    color: '#EBD22F',
                  },
                ]}
                dividerSize={4}
                strokeCap={'round'}
              />
              <Pie
                radius={80}
                innerRadius={60}
                sections={[
                  {
                    percentage: 10,
                    color: '#C70039',
                  },
                  {
                    percentage: 20,
                    color: '#44CD40',
                  },
                  {
                    percentage: 30,
                    color: '#404FCD',
                  },
                  {
                    percentage: 40,
                    color: '#EBD22F',
                  },
                ]}
                dividerSize={6}
                strokeCap={'butt'}
              />
            </View>
            <View
              style={{
                paddingVertical: 15,
                width: 350,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Pie
                radius={80}
                sections={[
                  {
                    percentage: 10,
                    color: '#C70039',
                  },
                  {
                    percentage: 20,
                    color: '#44CD40',
                  },
                  {
                    percentage: 30,
                    color: '#404FCD',
                  },
                  {
                    percentage: 40,
                    color: '#EBD22F',
                  },
                ]}
                dividerSize={6}
                strokeCap={'butt'}
              />
              <View style={{width: 175, alignItems: 'center'}}>
                <Pie
                  radius={80}
                  innerRadius={75}
                  sections={[
                    {
                      percentage: 60,
                      color: '#f00',
                    },
                  ]}
                  backgroundColor="#ddd"
                />
                <View style={styles.gauge}>
                  <Text style={styles.gaugeText}>60%</Text>
                </View>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
});
