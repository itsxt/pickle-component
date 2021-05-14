import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';
import Alert, { AlertType } from './components/Alert/alert';
import './App.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button className="custom"> hello </Button>
        <Button disable> hello </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> hello </Button>
        <Button btnType={ButtonType.Danger}  size={ButtonSize.Small}> hello </Button>
        <Button btnType={ButtonType.Danger}> hello </Button>
        <Button btnType={ ButtonType.Link } href="http://www.baidu.com">Baidu link</Button>


        <div className="alert-box">
          <Alert message="1234"></Alert>
          <Alert message="1234" description="啊哈哈哈哈哈哈"></Alert>
          <Alert message="1234" description="啊哈哈哈哈哈哈" type={ AlertType.Danger} closable={false}></Alert>
          <Alert message="1234" description="啊哈哈哈哈哈哈" type={ AlertType.Success}></Alert>
          <Alert message="1234" description="啊哈哈哈哈哈哈" type={ AlertType.Warning}></Alert>
          <Alert message="1233" description="哈哈哈" type={AlertType.Success} closable></Alert>
        </div>
      </header>
    </div>
  );
}

export default App;
