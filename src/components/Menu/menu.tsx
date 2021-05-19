/*
 * @Author: itsxt 
 * @Date: 2021-05-19 15:11:28 
 * @Last Modified by: itsxt
 * @Last Modified time: 2021-05-19 17:52:34
 */

// menu组件
import React, { useState, createContext } from 'react';
import { MenuItemProps } from './menuItem';
import classNames from 'classnames';

type menuMode = 'horizontal' | 'vertical'
type SelectCallBack = (selectdIndex: number) => void;

export interface MenuProps {
  defaultIndex  ?: number;
  className     ?: string;
  mode          ?: menuMode;
  style         ?: React.CSSProperties;
  onSelect      ?: SelectCallBack;
}

interface IMenuContext {
  index     : number;
  onSelect  ?: SelectCallBack
}

export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classNames('pickle-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })

  const handleClick = (index: number) => {
    setActive(index)
    if(onSelect) {
      onSelect(index)
    }
  }

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick
  }

  // cloneElement

  const renderChildren = () =>{
    return React.Children.map(children, (child, index) => {

      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } =childElement.type
      
      if(displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, { index })
      } else {
        console.error('Warning: Menu has a child which is not a MenuItem components')
      }
    })
  }

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        { renderChildren() }
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu