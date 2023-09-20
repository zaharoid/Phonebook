import styled from '@emotion/styled';
import IconButton from './IconButton';
import { ReactComponent as Add } from 'icons/Add.svg';

export const AddIcon = styled(Add)`
  width: 32px;
  height: 32px;
`;

export const AddButton = styled(IconButton)`
  display: flex;
  position: absolute;
  top: 100px;
  right: 30px;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;

  border: solid 1px #6fe149;
  background-color: #99f674;
  border-radius: 50%;
  cursor: pointer;
  padding: 1px;

  transition: all 250ms linear;
  &:hover {
    background: #6fe149;
    box-shadow: 0 15px 20px rgba(120, 231, 186, 0.4);
    color: white;
    transform: translateY(-2px);
    cursor: pointer;
  }
  &:focus {
    background-color: #6fe149;
  }

  @media only screen and (min-width: 768px) {
    position: absolute;
    top: auto;
    bottom: 50px;
    right: 50px;
    width: 57px;
    height: 57px;
    padding: 6px;
  }
`;

export const DeleteButton = styled(IconButton)`
  display: flex;
  align-items: center;
  width: 35px;
  height: 35px;

  border-radius: 50%;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 250ms linear;

  &:hover > :only-child {
    fill: #fe1414;
    transition: all 250ms linear;
  }
  &:hover {
    border: 1px solid #fe1414;
  }
  &:disabled {
    background-color: #959494;
    border: 1px solid transparent;
  }
`;

export const EditButton = styled(IconButton)`
  display: flex;
  align-items: center;
  width: 35px;
  height: 35px;

  border-radius: 50%;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 250ms linear;

  &:hover > :only-child {
    fill: #20aee3;
    transition: all 250ms linear;
  }
  &:hover {
    border: 1px solid #20aee3;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
