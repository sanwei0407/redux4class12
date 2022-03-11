import { useState } from 'react';

import Myctx from './myctx';
import Cp1 from './Cp1';
import Login from './login';
import store from './store'; // 引入创建好的全局store
import { Provider } from 'react-redux';

function App() {
  const [c, setC] = useState(6);
  return (
    <Provider store={store}>
      <Myctx.Provider value={{ k: 1, f: 5, c, setC }}>
        <div className="App">
          我是app组件 <Cp1 />
          <hr />
          <Login />
        </div>
      </Myctx.Provider>
    </Provider>
  );
}
export default App;
