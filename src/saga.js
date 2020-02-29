import { all } from 'redux-saga/effects'
import LoginSaga from './redux-saga/loginSaga/saga'









export default function* rootSaga(getState) {
    yield all([LoginSaga()])
  }