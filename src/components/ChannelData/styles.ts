import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CD;
  display: grid;
  grid-template-areas: 
  "CD-CHAT"
  "CD-INPUT";
  grid-template-columns: auto;
  grid-template-rows: calc(100vh - 46px - 24px - 46px) calc( 46px  ) ;

  /* spacing for scrollbar */
  padding-top: 4px;
  padding-right: 4px;


  /* 
  ( 100vh altura da tela 
  - 46px altura ServerName 
  - 24px espaçamento bottom MessageInput 
  - 46px altura MessageInput
  ) altura do CD-CHAT

  ( 
      46px altura do MessageInput
   
  ) altura CD-INPUT
  */

  /*
  display: flex;
  flex-direction: column;
  */



  background-color: var(--primary);
`;

