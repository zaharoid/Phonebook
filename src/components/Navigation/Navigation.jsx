import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { Nav, NavList } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectors } from 'redux/selectors';

export const Link = styled(NavLink)`
  display: block;

  padding: 6px 18px;

  background-color: #bfbfbf;
  text-decoration: none;
  line-height: normal;
  border-radius: 8px;
  height: 25px;
  color: #111;
  transition: all 250ms linear;

  &:hover {
    background-color: #ebeaea;
  }

  &.active {
    background-color: #123da1;
    color: #fffdd0;
    height: 25px;
    &:hover {
      background-color: #1149cc;
    }
  }
`;

const Navigation = () => {
  const isLoggedIn = useSelector(selectors.selectIsLoggedIn);
  return (
    <Nav>
      <NavList>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>{isLoggedIn && <Link to={'/contacts'}>Contacts</Link>}</li>
      </NavList>
    </Nav>
  );
};

export default Navigation;
