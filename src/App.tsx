import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';
import Alert, { AlertType } from './components/Alert/alert';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';

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

        <div>
          <Menu defaultIndex={0} onSelect={ (index)=> {alert(index)} }>
            <MenuItem>1</MenuItem>
            <MenuItem disable>2</MenuItem>
            <MenuItem>3</MenuItem>
          </Menu>

          <Menu defaultIndex={0} mode="vertical" onSelect={ (index)=> {alert(index)} }>
            <MenuItem>1</MenuItem>
            <MenuItem disable>2</MenuItem>
            <MenuItem>3</MenuItem>
            <SubMenu index={4} title="1234">
              <MenuItem>dropdown 1</MenuItem>
              <MenuItem>dropdown 2</MenuItem>
              <MenuItem>dropdown 3</MenuItem>
            </SubMenu>
          </Menu>
          
        </div>
      </header>
    </div>
  );
}

export default App;
