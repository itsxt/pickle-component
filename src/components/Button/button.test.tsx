// 测试的重要性
// 高质量代码
// 更早的发现Bug 减少成本
// 让重构和升级变得更加容易可靠
// 让开发流程更敏捷
// UI - > service -> 单元测似

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps, ButtonSize, ButtonType } from './button';

const defaultProps = {
  // 追踪函数 mock function  捕获函数是否被调用
  onClick: jest.fn()
  // fireEvent 方法 触发不同的用户事件
}

const testProps:ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'class'
}

const disableProps:ButtonProps = {
  disable: true,
  onClick: jest.fn()
}

// 分类
describe('test Button components', () => {
  // 测试用例 it() || test()
  // 判断是否有button这个组件，判断是否有btn btn-default类名
  it('should render the correct default button', () =>{
    const wrapper = render( <Button {...defaultProps} >nice</Button> )
    const element = wrapper.getByText('nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  it('should render the correct components based on different props', () => {
    const wrapper = render( <Button {...testProps} >nice</Button> )
    const element = wrapper.getByText('nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg class')
  })

  it('should render a link when btnType equals link and href is provied', () =>{
    const wrapper = render(<Button btnType={ButtonType.Link} href="www.baidu.com">Link</Button>)
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })

  it('should render disable button when disable set to true', () => {
    const wrapper = render( <Button {...disableProps} >disable</Button> )
    const element = wrapper.getByText('disable') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disableProps.onClick).not.toHaveBeenCalled()
  })
})