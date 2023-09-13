import styled from '@emotion/styled';
import { ReactComponent as DeleteIcon } from 'icons/delete.svg';

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 5px;
  color: var(--milk-white);
`;

export const DelIcon = styled(DeleteIcon)`
  transition: all 250px linear;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 270px;
  padding: 5px;
  border: 1px solid rgba(208, 208, 210, 0.08);
  border-radius: 5px;
  background-color: rgba(208, 208, 210, 0.08);
  transition: all 250ms linear;

  &:hover {
    box-shadow: 0px 1px 6px #20aee3, 0px 1px 1px rgba(46, 47, 66, 0.16),
      0px 2px 1px #20aee3;
    border: 1px solid #20aee3;
    cursor: pointer;
  }
`;
