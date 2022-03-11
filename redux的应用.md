## 安装 redux react-redux

```
npm  i  react-redux redux  --save
```

## 创建一个 store

- 新建一个 store.js 文件

```
// npm i redux react-redux --save
import { createStore } from 'redux';

// 在redux当中 createStore传入一个函数 这个的函数我们会称之为 reducer
// reducer 返回的值就是最新的全局store
const store = createStore((state, action) => {
  return {
    a: 1,
    b: 2,
    c: 3,
    h: 9999,
  };
});

export default store;

```

## 在根组件 App.js 的最外层用一个 Provider 包裹

```
import { Provider  }  from 'react-redux'
import store from './store'


<Provider  store={store}>
   原来的代码
</Provider>

```

## 使用 store

### 在类组件当中 Cp2

### 在函数组件当中 Cp1
