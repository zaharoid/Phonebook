import styled from '@emotion/styled';

export const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  overflow: hidden;
`;

export const Scroller = styled.div`
  display: flex;
  gap: 5px;
  animation: RightToLeft 20s infinite linear;
`;

export const Scroll = styled.div`
  white-space: nowrap;
  padding-bottom: 4px;
`;

export const Info = styled.div`
  margin-bottom: 0;
  line-height: 10px;
  color: #d3ced2;

  @keyframes RightToLeft {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;
