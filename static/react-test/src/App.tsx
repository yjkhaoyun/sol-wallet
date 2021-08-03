import logo from './logo.svg';
import './App.css';
import Clint from './components/Clint';

//定义一个App组件
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Clint/>
      <button>测试按钮</button>
      测试内容
    </div>
  );
}
export default App;//定义好组件后要暴露出去
