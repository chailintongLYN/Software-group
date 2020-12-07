import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import guanzhureducer from './reducer/attentionReducer';
import shoucangreducer from './reducer/shoucangReducer';
import myselfreducer from './reducer/myslfeReducer'
import thunk from 'redux-thunk'
const rootReducer=combineReducers({
    shoucangreducer,guanzhureducer,myselfreducer
})
const store=createStore(
    rootReducer,applyMiddleware(thunk)
);
// const store=createStore(
//     guanzhureducer,applyMiddleware(thunk)
// );
export default store;