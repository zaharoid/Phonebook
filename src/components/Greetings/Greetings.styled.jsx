import styled from '@emotion/styled';

export const GreetingsContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: xx-large;
  max-width: 768px;

  @media only screen and (min-width: 768px) {
    max-width: 100%;
    margin-top: 150px;
    padding: 0;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const GreetingsTitle = styled.h1`
  display: block;
  margin-bottom: 40px;
  color: #84c7df;
  font-family: 'Titillium Web';
`;

export const GreetingsText = styled.p`
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--milk-white);
`;

export const GreetingsEnd = styled.p`
  font-weight: 600;
  color: var(--milk-white);
  padding-bottom: 120px;
  border-bottom: 0.5px solid #838282;
`;
