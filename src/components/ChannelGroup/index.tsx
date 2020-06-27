import React from "react";

import { Container, Title } from "./styles";
import plus from "../../assets/plus.svg";

export interface Props {
  title: string;
  children: React.ReactNode;
}

const ChannelGroup: React.FC<Props> = ({ title, children }) => {
  return (
    <Container>
      <Title>
        <span>{title}</span>
        <img src={plus} alt={"add channel"} />
      </Title>
      {children}
    </Container>
  );
};

export default ChannelGroup;
