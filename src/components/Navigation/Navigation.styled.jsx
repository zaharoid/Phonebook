import styled from '@emotion/styled';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
  @media only screen and (min-width: 768px) {
    gap: 40px;
    margin-left: 30px;
    flex-direction: row;
  }
  @media only screen and (min-width: 1200px) {
    gap: 70px;
    margin-left: 100px;
  }
`;
