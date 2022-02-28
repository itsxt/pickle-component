import React from 'react';
import Icon from './components/Icon/Icon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button, { ButtonSize, ButtonType } from './components/Button/button';
import Alert, { AlertType } from './components/Alert/alert';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Tabs from './components/Tabs/tabs';
import TabItem from './components/Tabs/tabItem';
import './App.css'

library.add(fas)
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Icon theme="danger" icon="coffee"/>
      <Icon theme="primary" icon="arrow-alt-circle-down"/>
      {/* <FontAwesomeIcon icon={faCoffee} spin/> */}
        <Button className="custom"> hello </Button>
        <Button disable> hello </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> hello </Button>
        <Button btnType={ButtonType.Danger}  size={ButtonSize.Small}> hello </Button>
        <Button btnType={ButtonType.Danger}> hello </Button>
        <Button btnType={ ButtonType.Link } href="http://www.baidu.com">Baidu link</Button>


        <div className="alert-box">
          <Alert message="1234" />
          <Alert message="1234" description="啊哈哈哈哈哈哈"/>
          <Alert message="1234" description="啊哈哈哈哈哈哈" type={ AlertType.Danger} closable={false} />
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

          <Menu defaultIndex='0' mode="vertical" onSelect={ (index)=> {alert(index)} } defaultOpenSubMenus={['3']}>
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
