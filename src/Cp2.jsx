import { Component } from 'react';
import Myctx from './myctx';
import { connect } from 'react-redux';

class Cp2 extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);
  }

  fn1 = () => {
    // 我们可以通过 dispatch来分发一个actions
    // dispatch实际上就是让 store里面的reducer执行
    // 传入的参数 就是 actions
    this.props.dispatch({
      a: 1,
      type: 'abc',
    });
  };
  render() {
    return (
      <div>
        我是cp2组件
        <div> context: {JSON.stringify(this.context)} </div>
        <div> redux store ： {JSON.stringify(this.props)} </div>
        <button onClick={() => this.context.setC(this.context.c + 1)}>
          我是cp2里面的按钮
        </button>
        <button onClick={this.fn1}> 我是cp2里面测试 redux的按钮</button>
      </div>
    );
  }
}

// 把生成的Context 赋值给 Cp2的静态属性 contextType 就可以让
// 类组件的内部 通过this.context 来得到全局供应的数据
Cp2.contextType = Myctx;

const mapStateToProps = (state) => {
  // 这里会得到state就是 全局store提供的数据
  // 返回的值就会挂在props上面
  return state;
};
// 通过connect 我们可以吧store里面返回的状态全部挂在到组件的 props属性上面
export default connect(mapStateToProps)(Cp2);
