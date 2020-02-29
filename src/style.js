import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  roundBox: {
    marginVertical: 12,
    width: 280,
    borderWidth: 5,
  },
  mainDiv: {
    // flex: 1,
    // backgroundColor: 'grey',
  },
  div1: {
    marginBottom: 20,

    height: 80,
    backgroundColor: 'white',
  },
  insideText1: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginHorizontal: 20,
    fontSize: 30,
    color: '#3C67EA',
    marginVertical: 20,
    width: 350,
  },
  div2: {
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  div3: {
    alignItems: 'center',
  },
  insideText2: {
    marginHorizontal: 10,
  },

  topView: {
    flex: 1,

    backgroundColor: 'white',
  },
  signInButton1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 130,
  },
  welcomeText: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#3C67EA',
    marginVertical: 30,
    width: 250,
  },
  signInButton: {
    justifyContent: 'center',
    borderRadius: 20,
    margin: 20,
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: 'white',
    borderColor: '#6082EA',
    borderWidth: 1.5,
    height: 40,
    width: 250,
  },
  signInButtonPressed: {
    justifyContent: 'center',
    borderRadius: 20,
    margin: 20,
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: '#2C59DF',
    borderColor: '#6082EA',
    borderWidth: 1.5,
    height: 40,
    width: 250,
  },
  signInText: {
    color: '#6082EA',
  },
  signInTextPressed: {
    color: 'white',
  },
  dashboardDiv: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  dashboardCards: {
    width: 120,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLeftStyle: {
    marginTop: 20,
    marginLeft: 50,
    // color: 'black',
  },
});
