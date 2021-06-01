/*
 * @Author: itsxt 
 * @Date: 2021-05-19 17:21:44 
 * @Last Modified by: itsxt
 * @Last Modified time: 2021-06-01 17:35:42
 */
// TODO: subMenu组件编写

import React, { FunctionComponentElement, useContext, useState } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import { MenuItemProps } from './menuItem';
import { CSSTransition } from 'react-transition-group';
import Icon from '../Icon/Icon';

export interface ISubmenuProps {
  index       ?: string;
  title       : string;
  claseName ?: string;
}

const SubMenu: React.FC<ISubmenuProps> = (props) => {
  const context = useContext(MenuContext)
  const { index, children, title, claseName } = props
  const openSubmenu = context.defalutOpenSubMenus as  Array<string>;
  const isOpen = (index && context.mode === 'vertical') ? openSubmenu.includes(index) : false;
  const [menuOpen, setMenuOpen] = useState(isOpen)
  
  const classes = classNames('menu-item submenu-item', claseName, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical'
  })

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  }

  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    timer = setTimeout(()=> {
      setMenuOpen(toggle)
    }, 300)
  }

  const clickEvent = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}

  const hoverEvent = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) },
  } : {}

  const submenuClass = classNames('pickle-submenu', {
    'menu-opened': menuOpen === true
  })

  const renderChildren = () => {
    const childComponents = React.Children.map(children, (child, i) => {
      
      const childElement = child as FunctionComponentElement<MenuItemProps>
      
      if(childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, { index: `${index}-${i}` })
      } else {
        console.error('Warning: SubMenu has a child which is not a MenuIten components')
      }
    })
    
    return (
      <>
      <CSSTransition 
        in={menuOpen} 
        timeout={300} 
        classNames="zoom-in-top"
        appear 
        unmountOnExit={true}
      >
        <ul className={submenuClass}>
          {childComponents}
        </ul>
      </CSSTransition>
      </>
    )
  }

  return (
    <li key={index} className={classes} {...hoverEvent}>
      <div className="submenu-title" {...clickEvent}>
        { title }
        <Icon  icon="angle-down" className="arrow-icon"/>
      </div>
      { renderChildren() }
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu;
