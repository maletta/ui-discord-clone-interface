import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SL;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--tertiary);
  padding: 11px 0px;

  max-height: calc(100vh); /* tamanho máx 100% tamanho da tela */
  overflow-y: scroll; /* permite scroll caso tamanho passe de 100vh */

  scrollbar-width: none; /* não exibir scrollbar firefox */

  ::-webkit-scrollbar{
    display:none; /*nao exibir scrollbar chrome*/
  }

  
`;

export const Separator = styled.div`
width: 32px;
border-bottom: 2px solid var(--quaternary);

margin-bottom: 8px;
`;


