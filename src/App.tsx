import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';
import Alert, { AlertType } from './components/Alert/alert';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Tabs from './components/Tabs/tabs';
import TabItem from './components/Tabs/tabItem';

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
        </div>

        <div>
          <Menu defaultIndex='0' onSelect={ (index)=> {alert(index)} }>
            <MenuItem>1</MenuItem>
            <MenuItem disable>2</MenuItem>
            <MenuItem>3</MenuItem>
            <SubMenu title="1234">
              <MenuItem>dropdown 1</MenuItem>
              <MenuItem>dropdown 2</MenuItem>
              <MenuItem>dropdown 3</MenuItem>
            </SubMenu>
          </Menu>

          <Menu defaultIndex='0' mode="vertical" onSelect={ (index)=> {alert(index)} } defalutOpenSubMenus={['3']}>
            <MenuItem>1</MenuItem>
            <MenuItem disable>2</MenuItem>
            <MenuItem>3</MenuItem>
            <SubMenu title="1234">
              <MenuItem>dropdown 1</MenuItem>
              <MenuItem>dropdown 2</MenuItem>
              <MenuItem>dropdown 3</MenuItem>
            </SubMenu>
          </Menu>

          <Tabs defaultActiveKey="1" type="card">
            <TabItem tab={ <span>1234</span> } keys="1">page 1</TabItem>
            <TabItem tab="1234" keys="2">page 2</TabItem>
            <TabItem tab="1234" keys="3">page 3</TabItem>
            <TabItem tab="1234" keys="4">page 4</TabItem>
          </Tabs>
          
        </div>
      </header>
    </div>
  );
}

export default App;
