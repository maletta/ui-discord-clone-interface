import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CI;
  display: flex;
  align-items: center;
  
  padding: 0px 0px 0px 17px;
  color: var(--gray);

  background-color: var(--primary);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);

  z-index: 999;

  & span {
    padding-right: 8px;
  }

  & span:first-child{
    font-size: 28px;
  }

  & span:nth-child(2){
    color: var(--white);
    font-weight: bold;
  }
 
`;

export const Separador = styled.div`

border: 1px solid var(--quinary);
height: 24px;

`;
