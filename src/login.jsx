import { useState } from 'react';
import { useDispatch } from 'react-redux';
const Login = () => {
  const [uname, setUname] = useState('');
  const [pwd, setPwd] = useState('');
  const dispatch = useDispatch();
  const dologin = () => {
    dispatch({
      type: 'updateUserInfo',
      payload: { uname },
    });
  };
  return (
    <div>
      <h1>我是登录页面</h1>
      <input
        type="text"
        value={uname}
        onInput={(ev) => setUname(ev.target.value)}
        placeholder="用户名"
      />
      <button onClick={dologin}> 登录</button>
    </div>
  );
};

export default Login;
