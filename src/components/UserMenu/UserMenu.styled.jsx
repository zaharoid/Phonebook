import styled from '@emotion/styled';
import { ReactComponent as ExitIcn } from 'icons/Exit.svg';
import IconButton from 'components/IconButton';

export const UserContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const UserName = styled.div`
  display: flex;
  gap: 15px;
`;

export const Button = styled(IconButton)`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ExitIcon = styled(ExitIcn)`
  padding-top: 4px;
  width: 25px;
  height: 25px;
  fill: #111;
  transition: all 250ms linear;
  &:hover {
    fill: var(--milk-white);
  }
`;

export const User = styled.p`
  display: flex;
  margin-top: 5px;

  align-items: center;
`;
