// npm i redux react-redux --save
import { createStore } from 'redux';

const initState = {
  a: 1,
  b: 2,
  userInfo: {},
};

// 在redux当中 createStore传入一个函数 这个的函数我们会称之为 reducer
// 每一次 reducer 执行 返回的值就是最新的全局store
const store = createStore((state = initState, actions) => {
  if (actions.type === 'updateUserInfo') {
    state = { ...state, userInfo: actions.payload };
  }
  return state;
});
export default store;
