import styled from '@emotion/styled';

export const Title2 = styled.h2`
  font-size: x-large;
  text-align: center;
  color: var(--milk-white);
  margin-bottom: 40px;
`;

export const ContactsContainer = styled.div`
  margin-top: 50px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const TotalCount = styled.p`
  text-align: center;
  margin-bottom: 10px;
  color: var(--milk-white);
`;

export const Button = styled.button`
  margin-left: auto;
  width: 75px;
  height: 25px;
  border: solid 2px #45cd24;
  border-radius: 10px;
  cursor: pointer;
`;

export const ListContainer = styled.div`
  width: 100%;

  @media only screen and (min-width: 768px) {
    max-width: 980px;
    margin: 35px auto;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: solid 1px var(--milk-white);
`;
