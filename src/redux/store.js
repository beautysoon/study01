import {createStore,applyMiddleware} from 'redux';
// import {finalReducer } from './reducer';
import thunk from 'redux-thunk';
import teaLogin from "./reducer";

//生成store对象
// const store = createStore(finalReducer,applyMiddleware(thunk));//内部会第一次调用reducer函数，得到初始state
const store = createStore(teaLogin,applyMiddleware(thunk));
// const store = createStore(teaLogin);
export default store;