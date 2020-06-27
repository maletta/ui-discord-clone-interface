import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CD-INPUT;


  padding: 5px 10px;
  /* height: 45px; */
  height: calc(100%);
  width: calc(100%);

  color: var(--gray);
  font-size: 20px;

  & input{
    flex-grow: 1;
    height: 100%;

    padding: 10px 20px;

    font-size: 15px;
    color: var(--gray);
    background-color: transparent;
  }

  
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  
  border-radius: 10px;
  background-color: var(--quinary);
  padding: 0px 10px 0px 10px;
`;
