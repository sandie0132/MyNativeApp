import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import AllReducers from '../src/reducers';
import rootSaga from '../src/saga'; 

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
 AllReducers,
 applyMiddleware(sagaMiddleware));
 sagaMiddleware.run(rootSaga);

 export default store;