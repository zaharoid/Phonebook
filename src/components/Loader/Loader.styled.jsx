import styled from '@emotion/styled';
import { Oval } from 'react-loader-spinner';

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  z-index: 1;
`;
export const Loader = styled(Oval)`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
