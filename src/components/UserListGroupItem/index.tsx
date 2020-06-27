import React from "react";

import { Avatar, Container, Tag } from "./styles";

export interface Props {
  isColored ?: boolean;
  isBot ?: boolean;
  name: string;
}

const UserListGroupItem: React.FC<Props> = ({ isColored, isBot, name }) => {
  return (
    <Container>
      <Avatar isColored={isColored}/>
      <span>{name}</span>
      {isBot ? <Tag>bot</Tag> : '' }
    </Container>
  );
};

export default UserListGroupItem;
