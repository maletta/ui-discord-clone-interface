import React from "react";

import { Avatar, Container, Icons, UserBox } from "./styles";

import Microphone from "../../assets/Mic.svg";
import Headset from "../../assets/Headset.svg";
import Settings from "../../assets/Settings-user-info.svg"; 

export interface Props{
  nickname : string;
  id: number;
}

const UserInfo: React.FC<Props> = (
  {
    nickname,
    id
  }
) => {
  return (
    <Container>
      <Avatar />
      <UserBox>
        <span>{nickname}</span>
        <span>#{id}</span>
      </UserBox>
      <Icons>
        <img src={Microphone} alt={"microfone"} />
        <img src={Headset} alt={"microfone"} />
        <img src={Settings} alt={"configurações"} />

      </Icons>
    </Container>
  );
};

export default UserInfo;
