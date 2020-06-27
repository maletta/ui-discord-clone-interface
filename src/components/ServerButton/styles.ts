import styled from 'styled-components';

import { Props } from '.';

export const Button = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0; /* tirar para ver como o botão fica compresso */

  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-bottom: 8px;

  background-color: ${props => props.isHome ? `var(--rocketseat)` : `var(--primary)`};

  position: relative;

  cursor: pointer;

  > img {
    width: 24px;
    height: 24px;
  }

  &::before{
    width: 9px;
    height: 9px;

    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);
    
    background-color: var(--white);
    border-radius: 50%;
    content: '';
    display: ${props => props.hasNotifications ? 'inline' : 'none'}
  }

  &::after{
    width: 16px;
    height: 16px;

    position: absolute;
    right: -4px; /* -4px por causa da borda */
    bottom: -4px; /* -4px por causa da borda */
    
    background-color: var(--notification);
    border-radius: 50%;
    border: 4px solid var(--tertiary);
    content: '';
    display: ${props => props.hasNotifications ? `inline` : `none`};
  }

  transition: border-radius 0.2s, background-color 0.2;
&.active, &:hover{
  border-radius: 16px;
  background-color: ${props => props.isHome ? `var(--rocketseat)` : `var(--discord)`};
}
`;
