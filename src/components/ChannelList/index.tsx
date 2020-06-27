import React from "react";

import { Container, ChannelTittle, ChannelItem } from "./styles";
import ChannelGroup from "../ChannelGroup";
import ChannelGroupItem from "../ChannelGroupItem";


const ChannelList: React.FC = () => {
  return (
    <Container>
      <ChannelGroup title={"Canais de texto"}>
      <ChannelGroupItem title={"chat-livre"} selected={true} />
      <ChannelGroupItem title={"trabalho"} />
      <ChannelGroupItem title={"lolzinho"} />
      <ChannelGroupItem title={"valorant"} />
      <ChannelGroupItem title={"csgo"} />
      </ChannelGroup>
    </Container>
  );
};

export default ChannelList;
