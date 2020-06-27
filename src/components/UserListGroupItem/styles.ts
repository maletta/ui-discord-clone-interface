import styled from 'styled-components';

interface Props {
  isColored ?: boolean;
}

export const Avatar = styled.div<Props>`
  width: 32px;
  height: 32px;

  border-radius: 50%;
  background-color: ${props => props.isColored ? `#def23f` : `var(--secondary)`};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: var(--gray);

  & > * {
    margin-right: 10px;
  }

  margin: 6px 0px;

`;

export const Tag = styled.div`
  padding: 2px 2px;
  border-radius: 10%;

  background-color: #45f;
  color: var(--white);
  font-size: 9px;
`;
