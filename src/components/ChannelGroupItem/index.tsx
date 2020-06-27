import React from "react";

import { Container, Title, Icons } from "./styles";
import AddToChannel from "../../assets/Add-to-chanell.svg";
import ChannelSettings from "../../assets/Settings-channel-list.svg";

export interface Props {
  title: string;
  selected ?: boolean;
}

const ChannelGroupItem: React.FC<Props> = ({ title, selected }) => {
  return (
    <Container selected={selected}>
      <Title>
        <span>#</span> 
        <span>{title}</span>
      </Title>
      <Icons>
          <img src={AddToChannel} alt={"add to channel"} />
          <img src={ChannelSettings} alt={"channel settings"} />
      </Icons>
    </Container>
  );
};

export default ChannelGroupItem;
