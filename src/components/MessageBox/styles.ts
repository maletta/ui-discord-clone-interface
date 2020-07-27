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


/* Scrollbar para firefox */
overflow-y: scroll;
scrollbar-width: thin;
scrollbar-color: var(--tertiary) var(--secondary); 
scroll-behavior: smooth;

/*primeira cor é a thumb, segunda cor é o track  */

/* Scrollbar para chrome */
::-webkit-scrollbar{
  width: 8px;
}

::-webkit-scrollbar-thumb{
  background-color: var(--tertiary);
  border-radius: 10px;
}

::-webkit-scrollbar-track{
  background-color: var(--secondary);
}


`;
