import React from 'react';
import classNames from 'classnames';

const Button = ({ children, className, outline, cart, onClick }) => {
  return (
    <button
      className={classNames(
        'button',
        className,
        { 'button--outline': outline },
        { 'button--cart': cart }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
