import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import guanzhureducer from './reducer/attentionReducer';
import shoucangreducer from './reducer/shoucangReducer';
import myselfreducer from './reducer/myslfeReducer'
import homereducer from './reducer/homereducer'
import followersreducer from './reducer/followersreducer'
import fansreducer from'./reducer/fansreducer'
import commendreducer from './reducer/commendreducer'
import searchreducer from './reducer/searchreducer'
import goodthingsrecommendreducer from './reducer/goodthsrecommendreducer'
import thunk from 'redux-thunk'
const rootReducer=combineReducers({
    shoucangreducer,guanzhureducer,myselfreducer,homereducer,followersreducer,
    fansreducer,commendreducer,searchreducer,goodthingsrecommendreducer
})
const store=createStore(
    rootReducer,applyMiddleware(thunk)
);
// const store=createStore(
//     guanzhureducer,applyMiddleware(thunk)
// );
export default store;