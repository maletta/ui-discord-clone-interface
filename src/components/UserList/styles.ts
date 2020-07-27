import styled from 'styled-components';

export const Container = styled.div`
grid-area: UL;

padding: 23px 16px;
max-height: calc(100vh - 46px); /* altura máxima da tela - CI - Channel Info */

background-color: var(--quaternary);

/* Scrollbar para firefox */
overflow-y: scroll;
scrollbar-width: thin;
scrollbar-color: var(--tertiary) var(--secondary); 
/*primeira cor é a thumb, segunda cor é o track  */

/* Scrollbar para chrome */
::-webkit-scrollbar{
  width: 4px
}

::-webkit-scrollbar-thumb{
  background-color: var(--tertiary);
  border-radius: 4px;
}

::-webkit-scrollbar-track{
  background-color: var(--secondary);
}

`;
