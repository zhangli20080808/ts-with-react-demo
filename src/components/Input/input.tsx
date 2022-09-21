import React, { forwardRef } from 'react';
import classNames from 'classnames';
import Icon from '../Icon/icon';
import { InputProps } from './type';

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { disabled, size, icon, prepend, append, style, ...restProps } = props;
  const cNames = classNames('viking-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend,
  });
  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return '';
    }
    return value;
  };
  if ('value' in props) {
    delete restProps.defaultValue;
    restProps.value = fixControlledValue(props.value);
  }
  return (
    <div className={cNames} style={style}>
      {prepend && <div className='viking-input-group-prepend'>{prepend}</div>}
      {icon && (
        <div className='icon-wrapper'>
          <Icon icon={icon} title={`title-${icon}`} />
        </div>
      )}
      <input
        ref={ref}
        className='viking-input-inner'
        disabled={disabled}
        {...restProps}
      />
      {append && <div className='viking-input-group-append'>{append}</div>}
    </div>
  );
});

export default Input;
