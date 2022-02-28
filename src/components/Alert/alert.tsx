/*
 * @Author: itsxt
 * @Date: 2021-05-14 16:30:19
 * @Last Modified by: itsxt
 * @Last Modified time: 2021-05-19 12:09:10
 */
import React, { useState } from 'react'
import classNames from 'classnames'

export enum AlertType {
	Success = 'success',
	Default = 'default',
	Danger = 'danger',
	Warning = 'warning'
}

export interface AlertProps {
	type?: string;
	message: string;
	className?: string;
	closable?: boolean;
	description?: string;
}

const Alert: React.FC<AlertProps> = (props) => {
	const [show, setShow] = useState(true)

	const {
		type,
		message,
		className,
		closable,
		description,
	} = props

	const classes = classNames('alert', className, {
		[`alert-${type}`]: type,
		'alert-with-description': description,
	})

	return (
		<>
			{
				show &&
				<div
					className={classes}
				>
					<div className="alert-content">
						<div className="alert-message">{message}</div>
						<div className="alert-description">{description}</div>
					</div>
					{
						closable &&
						<button className="alert-close-icon">
							<span className="icon-close" onClick={() => {
								setShow(false)
							}}>关闭</span>
						</button>
					}

				</div>
			}
		</>
	)
}

Alert.defaultProps = {
	type: AlertType.Default,
	closable: true,
}

export default Alert
