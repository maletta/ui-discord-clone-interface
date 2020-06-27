import styled from 'styled-components';


export const Container = styled.div`
display: flex;
flex-direction: column;

  

& div:nth-child(1){
  display: flex;
  justify-content: space-between;

  padding: 0px 0px 0px 8px;
  margin: 5px 0px;

}

`;

export const Title = styled.div`
  color: var(--gray);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  cursor: pointer;
`;