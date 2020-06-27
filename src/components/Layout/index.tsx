import React from "react";
import { Grid } from "./styles";

import ChannelList from "../ChannelList";
import ServerList from "../ServerList";
import ServerName from "../ServerName";
import UserInfo from "../UserInfo";
import ChannelInfo from "../ChannelInfo";
import ChannelData from "../ChannelData";
import UserList from "../UserList";

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelList />
      <UserInfo nickname={"Malettinha"} id={2817} />
      <ChannelInfo name={"chat-livre"} description={"somos os piores juntos"} />
      <ChannelData />
      <UserList />
    </Grid>
  );
};

export default Layout;
