import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SN;

  display: flex;
  align-items: center;
  align-content: space-between;

  position: relative;
  padding: 0px 8px;

  color: var(--white);
  font-size: 8px;
  font-weight: bold;

  background-color: var(--quaternary);

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
  z-index: 999;

  &::after{
      content: '';

      position: absolute;
      right: 14px;

      width: 8px;
      height: 8px;

      border-top: 2px solid var(--white);
      border-right: 2px solid var(--white);
      
      transform: rotateZ(135deg);

      cursor: pointer;
    }
`;
