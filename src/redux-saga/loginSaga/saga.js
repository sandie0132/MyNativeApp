import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import axios from 'axios';
import actions from "./actions";
import { Alert } from "react-native";


export function* registerNewUser() {
    yield takeEvery('REGISTER_NEW_USER', function*({ data }) {
      const response = yield call(handleRegisterUser, data)
      if (response.status == 201) {
        yield put({
          type: actions.NEW_USER_REGISTERED_SUCCESSFULLY,
          data: response.data
        })
      }else{
        yield put({
            type: actions.NEW_USER_REGISTER_ERROR,
            data: response.data.errors[0].messages[0]
          })
          Alert.alert(
            'Alert',
            `${response.data.errors[0].messages[0]}`,
            [
            //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
      }
    })
  }
export default function* rootSaga() {
    yield all([
      fork(registerNewUser),
    ])
  }

  const handleRegisterUser = async data => {
    try {
        console.log("inside saga")
      const response = await axios.post(
        'http://192.168.100.84:8080/v1/auth/login',data,
        {
          headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${data.token}`
          }
        }
      )
      return response
    } catch (error) {
      return error && error.response
    }
  }



