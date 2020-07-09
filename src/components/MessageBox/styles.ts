import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CD-CHAT;

  display: flex;
  flex-direction: column;

  padding: 0px 10px 10px 10px;


  & > div {
    margin-bottom: 10px;
  }

  & > div:first-child{
    margin-top: 10px;
  }


  overflow-y: scroll;
  
  scrollbar-width: thin;
  scrollbar-color: var(--tertiary) var(--secondary);
  scroll-behavior: smooth;
  

  -moz-border-radius:5px;
  -webkit-border-radius:5px;


  & ::-webkit-scrollbar {
    width: 15px;
    height: 15px;
}

  & ::-webkit-scrollbar-track-piece  {
    background-color: #C2D2E4;
}

  & ::-webkit-scrollbar-thumb:vertical {
    height: 30px;
    background-color: #0A4C95;
}


`;
