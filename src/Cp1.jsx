import Cp2 from './Cp2';
import Myctx from './myctx';
// 引入 useContext 方便通过传入一个 Context对象来获取全局供应的数据
import { useContext } from 'react';

import { useSelector } from 'react-redux';
const Cp1 = () => {
  // 得到 Provider供应的数据
  const ctx = useContext(Myctx);
  console.log('ctx', ctx);

  const store = useSelector((state) => {
    return state;
  });
  return (
    <div>
      <h1>我是cp1</h1>
      <div> context in the cp1 {JSON.stringify(ctx)} </div>
      <div> redux stroe in the cp1 {JSON.stringify(store)} </div>

      <hr />
      <Cp2 />
    </div>
  );
};

export default Cp1;
