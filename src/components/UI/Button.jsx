import React from 'react';
import classNames from 'classnames';

const Button = ({
  children,
  className,
  outline,
  cart,
  onClick,
  add,
  back,
  pay,
  black,
  circle,
}) => {
  return (
    <button
      className={classNames('button', className, {
        'button--outline': outline,
        'button--black': black,
        'button--circle': circle,
        'button--add': add,
        'button--cart': cart,
        'go-back-btn': back,
        'pay-btn': pay,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
