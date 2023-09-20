import styled from '@emotion/styled';
import { ReactComponent as CloseIcn } from '../../icons/close.svg';
import IconButton from 'components/IconButton';

export const CloseIcon = styled(CloseIcn)`
  width: 15px;
  height: 15px;
  transition: all 250ms linear;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #294187;
  width: 100%;
  height: 100%;
`;
export const Window = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
  height: 350px;
  background-color: #dcdbdb;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  padding: 30px;
  border-radius: 15px;
  animation-name: grow-box;
  animation-duration: 250ms;
  animation-timing-function: linear;

  @keyframes grow-box {
    0% {
      opacity: 0.2;
      transform: scale(0.1), translate(-50%, -50%);
    }
    50% {
      opacity: 0.6;
      transform: scale(0.9), translate(-50%, -50%);
    }

    100% {
      opacity: 1;
      transform: scale(1.5), translate(-50%, -50%);
    }
  }
`;

export const ModalTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
`;

export const CloseModalBtn = styled(IconButton)`
  position: absolute;
  display: flex;
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
  top: 24px;
  right: 24px;
  border-radius: 50%;
  border: none;
  background-color: #dcdbdb;
  transition: all 250ms linear;
  cursor: pointer;
  padding: 0;

  &:hover {
    border-color: transparent;
    background-color: #20aee3;
  }
`;
