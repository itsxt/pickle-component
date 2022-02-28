/*
 * @Author: itsxt 
 * @Date: 2021-05-20 13:56:49 
 * @Last Modified by: itsxt
 * @Last Modified time: 2021-05-20 17:12:45
 */
import React, { createContext, useState } from 'react';
import className from 'classnames';
import { TabItemProps } from './tabItem';

export type TabsType = 'line' | 'card';

export interface TabsProps {
  type              ?: TabsType;
  classNames        ?: string;
  activeKey         ?: string;
  defaultActiveKey  ?: string;
}

export interface ITabsContext {
  type        ?: TabsType;
  activeKey   ?: string;
}

export const TabsContext = createContext<ITabsContext>({ activeKey: '1' })

const Tabs: React.FC<TabsProps> = (props) => {
  const { classNames, type, defaultActiveKey, children, activeKey } = props
  const [openKeys, setKeys] = useState(defaultActiveKey)
  const classes = className('pickle-tabs', classNames, {
    'pickle-tabs-card': type === 'card'
  })

  const passContext: ITabsContext = {
    activeKey : activeKey ? activeKey : '1'
  }

  const renderTabsTitle = () => {
    return React.Children.map(children, (child, index) => {
      const element = child as React.FunctionComponentElement<TabItemProps>
      const { displayName } =  element.type
      const classes = className('tabs-tab-btn', {
        'tabs-tab-active': element.props.keys === openKeys
      })
      const handleClick = (keys: string) => {
        setKeys(keys)
      }

      if( displayName === 'TabItem') {
        // return React.cloneElement(element, { key: (index + 1).toString() })
        return (
          <div className={classes} onClick={()=> handleClick(element.props.keys) }>
            {element.props.tab}
          </div>
        )
      } else {
        console.error('Warning: Tabs has a child which is not a TabItem components')
      }
    })
  }

  const renderTabsContent = () => {
    return React.Children.map(children, (child, index) => {
      const element = child as React.FunctionComponentElement<TabItemProps>
      const { displayName } = element.type
      const style = {
        "display": element.props.keys !== openKeys ? "none" : ''
      }
      
      if(displayName === 'TabItem') {
        return (
          <div className="tabs-tabpane" style={style}>
            { element }
          </div>
        )
      } else {
        console.error('Warning: Tabs has a child which is not a TabItem components')
      }
    })
  }

  return (
    <div className={classes} >
      <TabsContext.Provider value={ passContext }>
        <div className="tabs-tab-nav">{ renderTabsTitle() }</div>
        <div className="tabs-content">{ renderTabsContent() }</div>
      </TabsContext.Provider>
    </div>
  )
}

Tabs.defaultProps = {
  type: 'line',
  defaultActiveKey: '1'
}

export default Tabs;