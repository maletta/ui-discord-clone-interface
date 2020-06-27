import React from 'react';

import { Container } from './styles';

interface Props{
  name: string;
  quantity: number;
  children: React.ReactNode;
}

const UserListGroup: React.FC<Props> = (
  {
    name,
    quantity,
    children
  }
) => {
  return (
    <Container>
      <span>{name} - {quantity}</span>
      {children}
    </Container>
  );
}

export default UserListGroup;