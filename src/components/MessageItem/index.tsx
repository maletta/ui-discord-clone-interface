import React from "react";

import {
  Avatar,
  Container,
  MessageData,
  MessageHeader,
  MessageContent,
} from "./styles";

interface Props {
  date: string;
  name: string;
  message: string;
}

const MessageItem: React.FC<Props> = ({ date, name, message }) => {
  return (
    <Container>
      <Avatar />
      <MessageData>
        <MessageHeader>
          <span>{name}</span>
          <span>{date}</span>
        </MessageHeader>
        <MessageContent>{message}</MessageContent>
      </MessageData>
    </Container>
  );
};

export default MessageItem;
