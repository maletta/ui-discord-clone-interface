import React from "react";

import { Container, Separador } from "./styles";

interface Props {
  name: string;
  description: string;
}

const ChannelInfo: React.FC<Props> = ({ name, description }) => {
  return (
    <Container>
      <span>#</span>
      <span>{name}</span>
      <span>
        <Separador />
      </span>
      <span>{description}</span>
    </Container>
  );
};

export default ChannelInfo;
