import React from "react";

import { Container } from "./styles";
import UserListGroup from "../UserListGroup";
import UserListGroupItem from "../UserListGroupItem";

const UserList: React.FC = () => {
  return (
    <Container>
      <UserListGroup name={"Disponível"} quantity={1}>
        <UserListGroupItem name={"Guilherme Rodz"} />
      </UserListGroup>
      <UserListGroup name={"Offline"} quantity={20}>
        <UserListGroupItem name={"Maletta"} isColored={true}/>
        <UserListGroupItem name={"Fulano"} />
        <UserListGroupItem name={"Fulano"} />
        <UserListGroupItem name={"Fulano"} />
        <UserListGroupItem name={"Kawaii Bot"} isBot={true}/>
        <UserListGroupItem name={"Fulano"} />
        <UserListGroupItem name={"Fulano"} />
        <UserListGroupItem name={"Fulano"} />
        <UserListGroupItem name={"Fulano"} />
        <UserListGroupItem name={"Fulano"} />
        <UserListGroupItem name={"Fulano"}  isColored={true} isBot={true}/>
        <UserListGroupItem name={"Fulano"} />
        <UserListGroupItem name={"Fulano"} />
        <UserListGroupItem name={"Fulano"} />
        <UserListGroupItem name={"Fulano"} />
        <UserListGroupItem name={"Fulano"} />
        <UserListGroupItem name={"Fulano"}  isColored={true}/>
        <UserListGroupItem name={"Fulano"} />
        <UserListGroupItem name={"Fulano"} />
        <UserListGroupItem name={"Fulano"} />
      </UserListGroup>
    </Container>
  );
};

export default UserList;
