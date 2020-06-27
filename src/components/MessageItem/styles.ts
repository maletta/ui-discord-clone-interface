import styled from "styled-components";

export const Avatar = styled.div`
  height: 40px;
  width: 40px;

  border-radius: 50%;
  background-color: var(--quaternary);

`;

export const MessageData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MessageHeader = styled.div`
  display: flex;
  align-items: flex-end;

  & > span {
    color: var(--white);
    font-weight: bold;

    margin-right: 10px;
  }

  & span:nth-child(2){
    color: var(--gray);
    font-size: 10px;
    line-height: 15px;

  }
`;

export const MessageContent = styled.div`
  color: var(--white);

`;

export const Container = styled.div`
  display: flex;

  & > div {
    margin-right: 15px;  
  }

`;
