import styled from 'styled-components';
import Add from "./../../assets/Logo.svg";

export const Container = styled.div`
  grid-area: CL;
  background-color: var(--quaternary);

  padding: 20.5px 8px;
`;

export const ChannelTittle = styled.div`
 text-transform: uppercase;
 font-weight: 500;
 font-size: 12px;
 line-height: 14px;
 color: var(--gray);

 &::after{
   content: '';

   background: transparent url(${Add});
 }
`;

export const ChannelItem = styled.div`
  
  color: var(--gray);

`;


export const ChannelGroup = styled.div`
 
  margin-bottom: 8px;
`;

export const ChannelGroupItem = styled.div`
 
  margin-bottom: 8px;
`;

