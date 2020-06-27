import React from 'react';

import { Container } from './styles';
import MessageItem from '../MessageItem';


const MessageBox: React.FC = () => {
  return (
    <Container>
      
      {
        Array.from(Array(15).keys()).map( (m,i)=> <MessageItem 
         key={i} name={"Maletta"} date={"26/06/2020"} message={"mensagem aleatória"} />)
      }
    
    </Container>
  );
}

export default MessageBox;