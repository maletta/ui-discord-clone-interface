import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UI;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  padding: 0px 10px;
  background-color: var(--tertiary);
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  
  border-radius: 50%;
  background-color: #def23f;

  position: relative;

  &::after{
    content: '';
    height: 9px;
    width: 9px;

    position: absolute;
    right: -2px;
    bottom: -2px;

    border-radius: 50%;
    border: 2px solid var(--quaternary);
    background-color: var(--notification);
  }
`;

export const UserBox = styled.div`
display: flex;
flex-direction: column;

width: 100px;

font-size: 13px;
line-height: 15px;

& span:first-child{
    color: var(--white);
    font-weight: bold;

  }

& span:last-child{
  color: var(--gray);
  font-weight: normal;
}

`;

export const Icons = styled.div`
display: flex;
justify-content: space-evenly;

cursor: pointer;

min-width: 60px;

`