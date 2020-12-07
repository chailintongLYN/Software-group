import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import guanzhureducer from './reducer/attentionReducer';
import thunk from 'redux-thunk'
const store=createStore(
    guanzhureducer,applyMiddleware(thunk)
);
export default store;