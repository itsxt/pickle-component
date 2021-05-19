/*
 * @Author: itsxt 
 * @Date: 2021-05-19 17:21:44 
 * @Last Modified by: itsxt
 * @Last Modified time: 2021-05-19 17:50:49
 */
// TODO: subMenu组件编写

import React, { FunctionComponentElement, useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import { MenuItemProps } from './menuItem';

export interface ISubmenuProps {
  index       ?: number;
  title       : string;
  claseName ?: string;
}

const SubMenu: React.FC<ISubmenuProps> = (props) => {
  const { index, children, title, claseName } = props
  const context = useContext(MenuContext)
  
  const classes = classNames('menu-item submenu-item', claseName, {
    'is-active': context.index === index
  })

  const renderChildren = () => {
    const childComponents = React.Children.map(children, (child, index) => {
      
      const childElement = child as FunctionComponentElement<MenuItemProps>
      
      if(childElement.type.displayName === 'MenuItem') {
        return childElement
      } else {
        console.error('Warning: SubMenu has a child which is not a MenuIten components')
      }
    })

    return (
      <ul className="pickle-subMenu">
        {childComponents}
      </ul>
    )
  }

  return (
    <li key={index} className={classes}>
      <div className="sunmenu-title">{ title }</div>
      { renderChildren() }
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu;
