/*
 * @Author: itsxt 
 * @Date: 2021-05-14 15:36:04 
 * @Last Modified by: itsxt
 * @Last Modified time: 2021-05-14 16:30:01
 */
import React from 'react';
import classNames from 'classnames';

export enum ButtonSize { 
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Defalut = 'default',
  Danger  = 'danger',
  Link    = 'link'
}

interface BaseButtonProps {
  className ?: string;
  disable   ?: boolean;
  size      ?: ButtonSize;
  btnType   ?: ButtonType;
  href      ?: string;
  children  ?: React.ReactNode;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
  const { 
    btnType,
    disable,
    size,
    href,
    className,
    children,
    ...restProps
   } = props

  //  btn, btn-lg, btn-sm, btn-primary
  const classes = classNames('btn', className, { 
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disable': (btnType === ButtonType.Link) && disable
  })

  if(btnType === ButtonType.Link  && href) {
    return (
      <a 
        href={href} 
        className={classes}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {

    return (
      <button 
        className={classes}
        disabled={disable}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disable: false,
  btnType: ButtonType.Defalut
}

export default Button;