import React from "react";

import { Container, InputContainer } from "./styles";

const MessageInput: React.FC = () => {
  return (
    <Container>
      <InputContainer>
        <span>@</span>
        <input type={"text"} placeholder={"conversar em chat-livre"} />
      </InputContainer>
    </Container>
  );
};

export default MessageInput;
