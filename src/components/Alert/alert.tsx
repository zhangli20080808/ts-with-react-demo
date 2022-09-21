import React, { FC, useState } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import Transition from '../Transition';
import { AlertProps } from './type';
/**
 * 用于页面中展示重要的提示信息。 点击右侧的叉提示自动消失
 * ### 引用方法
 *
 * ~~~js
 * import { Alert } from 'vikingship'
 * ~~~
 */
const Alert: FC<AlertProps> = (props) => {
  const [hide, setHide] = useState(false);
  const { title, description, type, onClose, closable } = props;
  const classes = classNames('viking-alert', {
    [`viking-alert-${type}`]: type,
  });
  const titleClass = classNames('viking-alert-title', {
    'bold-title': description,
  });
  const handleClose = (e: React.MouseEvent) => {
    if (onClose) {
      onClose();
    }
    setHide(true);
  };
  return (
    <Transition in={!hide} timeout={300} animation='zoom-in-top'>
      <div className={classes}>
        <span className={titleClass}>{title}</span>
        {description && <p className='viking-alert-desc'>{description}</p>}
        {closable && (
          <span className='viking-alert-close' onClick={handleClose}>
            <Icon icon='times' />
          </span>
        )}
      </div>
    </Transition>
  );
};

Alert.defaultProps = {
  type: 'default',
  closable: true,
};
export default Alert;
