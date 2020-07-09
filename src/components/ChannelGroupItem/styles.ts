import styled from 'styled-components';

interface Props {
 selected ?: boolean; 
}

export const Container = styled.div<Props>`
 display: flex;
 align-items: center;
 justify-content: space-between;
 justify-items: center;
 vertical-align: center; 

 height: 32px;
 padding: 0px 4px 0px 0px;

 background-color: ${props => props.selected ? `var(--quinary)` : `transparent`};
 color: ${props => props.selected ? `var(--white)` : ` var(--senary)`};

 transition: background-color 0.2s;
 
&:hover{
  background-color: var(--quinary);
  cursor: pointer;
  div {
    color: var(--white);
    opacity: 0.7;
  }
} 

& div:last-child{
  display: ${props => props.selected ? `flex` : `none`};
}

&:hover div:last-child{
  display: flex;
}

`;

export const Title = styled.div`
  & span:last-child{
    padding-left: 4px;
  }
`;

export const Icons = styled.div`
  img{
    cursor: pointer;
    &:first-child{
      padding: 0px 4px;
    }
  }
`;