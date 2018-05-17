import * as React from 'react';

import DefaultStyledButton from './styles/defaultStyledButton';

const Button = ({ type = 'button', children, onClick }: any) => {
  <DefaultStyledButton type={type} className="button" onClick={onClick}>
    {children}
  </DefaultStyledButton>
};

export default Button;
