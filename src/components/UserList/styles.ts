import styled from 'styled-components';

export const Container = styled.div`
grid-area: UL;

padding: 23px 16px;

background-color: var(--quaternary);

overflow-y: scroll;

scrollbar-width: none;
  
::-webkit-scrollbar {
  width: none;
  
}
`;
