import React from 'react';
import { fireEvent, render, RenderResult, cleanup } from '@testing-library/react'; //cleanup 清除
import Menu, { MenuProps } from './menu';
import MenuItem from './menuItem';
import SubMenu from './subMenu';

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test'
}

const testVerProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
}

const NiceMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disable>disable</MenuItem>
      <MenuItem>xy</MenuItem>
      <SubMenu index='0' title="xyz">
        <MenuItem>dropdown 1</MenuItem>
        <MenuItem>dropdown 2</MenuItem>
        <MenuItem>dropdown 3</MenuItem>
        <MenuItem>dropdown 4</MenuItem>
      </SubMenu>
    </Menu>
  )
}

// TODO: 在测试用例中添加style

// before 在case开始之前执行
let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disableElement: HTMLElement;

describe('test menu and menuItem components', () =>{
  beforeEach(() => {
    wrapper = render(NiceMenu(testProps))
    menuElement = wrapper.getByTestId('test-menu')
    // wrapper.container.getElementsByClassName  也可这么拿 container 为htmlelement 节点
    activeElement = wrapper.getByText('active')
    disableElement = wrapper.getByText('disable')
  })

  it('should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('pickle-menu test')
    expect(menuElement.getElementsByTagName('li').length).toEqual(8)
    expect(activeElement).toHaveClass('menu-item is-active')
    expect(disableElement).toHaveClass('menu-item is-disable')
  })

  it('click items should change active and call the right callback', () => {
    const thirdItem = wrapper.getByText('xy')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith('2')
    fireEvent.click(disableElement)
    expect(disableElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1')
  })

  it('should render vertical mode when mode is set to vertical', () =>{
    cleanup();
    const wrapper = render(NiceMenu(testVerProps))
    const menuElement = wrapper.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  })
})