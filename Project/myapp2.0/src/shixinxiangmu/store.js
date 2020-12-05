import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import guanzhureducer from './reducer/attentionReducer';
const stroe=createStore(
    guanzhureducer
);
export default stroe;