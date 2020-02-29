import { combineReducers } from 'redux';
import LoginReducer from "./redux-saga/loginSaga/reducer";


const AllReducers = combineReducers({

    LoginReducer
});

export default AllReducers;  