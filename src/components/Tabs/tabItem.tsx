/*
 * @Author: itsxt 
 * @Date: 2021-05-20 14:27:36 
 * @Last Modified by: itsxt
 * @Last Modified time: 2021-05-20 16:46:50
 */
import React from 'react';

export interface TabItemProps {
  keys   : string;
  tab   ?: React.ReactNode;
}

const TabItem: React.FC<TabItemProps> = (props) => {
  const { children } = props
  return (
    <>{children}</>
  )
}
TabItem.displayName = 'TabItem';

export default TabItem;